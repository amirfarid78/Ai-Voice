
'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { getFirebase } from '@/firebase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from '@/lib/types';
import { UserFormDialog } from '@/components/users/user-form-dialog';
import { format } from 'date-fns';

type UserWithId = User & { id: string; };

export default function UsersPage() {
  const [users, setUsers] = useState<UserWithId[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<UserWithId | null>(null);
  const { firestore } = getFirebase();

  useEffect(() => {
    const usersCol = collection(firestore, 'users');
    const unsubscribe = onSnapshot(usersCol, (snapshot) => {
      const usersData = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as UserWithId)
      );
      setUsers(usersData);
    });

    return () => unsubscribe();
  }, [firestore]);

  const handleAddUser = async (data: Omit<User, 'id' | 'joinedDate' | 'avatar'>) => {
    const usersCol = collection(firestore, 'users');
    await addDoc(usersCol, {
      ...data,
      uid: `mock-uid-${Date.now()}`,
      avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
      joinedDate: format(new Date(), 'yyyy-MM-dd'),
    });
    setIsFormOpen(false);
  };

  const handleUpdateUser = async (data: Omit<User, 'id' | 'joinedDate' | 'avatar'>) => {
    if (!editingUser) return;
    const userDoc = doc(firestore, 'users', editingUser.id);
    await setDoc(userDoc, data, { merge: true });
    setEditingUser(null);
    setIsFormOpen(false);
  };

  const deleteUser = async (userId: string) => {
    const userDoc = doc(firestore, 'users', userId);
    await deleteDoc(userDoc);
  };

  const openAddUserForm = () => {
    setEditingUser(null);
    setIsFormOpen(true);
  };

  const openEditUserForm = (user: UserWithId) => {
    setEditingUser(user);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (data: any) => {
    if (editingUser) {
      handleUpdateUser(data);
    } else {
      handleAddUser(data);
    }
  };


  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Users
        </h1>
        <Button onClick={openAddUserForm}>Add User</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            Manage your team members and their roles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Joined Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinedDate}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEditUserForm(user)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
       <UserFormDialog
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingUser(null);
        }}
        onSubmit={handleFormSubmit}
        user={editingUser}
      />
    </div>
  );
}

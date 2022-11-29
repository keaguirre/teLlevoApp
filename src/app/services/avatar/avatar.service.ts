import { Injectable } from '@angular/core';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { Auth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})



export class AvatarService {

  constructor(private firestore: Firestore, private storage:Storage, private auth:Auth) { }

  getUserProfile(){
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `foto_usuarios/${user?.uid}`);
    return docData(userDocRef);
  }

  async uploadAvatar(cameraFile: Photo){
    const user = this.auth.currentUser;
    const path = `foto_usuarios/${user?.uid}/profile.png`;
    const storageRef = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String || '' ,'base64');

      const imageUrl = await getDownloadURL(storageRef);
      const userDocRef = doc(this.firestore, `foto_usuarios/${user?.uid}`);
      await setDoc(userDocRef,{
        imageUrl,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

}
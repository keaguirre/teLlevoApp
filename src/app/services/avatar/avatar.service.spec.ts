import { TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { Auth } from '@angular/fire/auth';
import { AvatarService } from './avatar.service';

describe('AvatarService', () => {
  let service: AvatarService;

  beforeEach(() => {
    const firestoreStub = () => ({});
    const storageStub = () => ({});
    const authStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        AvatarService,
        { provide: Firestore, useFactory: firestoreStub },
        { provide: Storage, useFactory: storageStub },
        { provide: Auth, useFactory: authStub }
      ]
    });
    service = TestBed.inject(AvatarService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});

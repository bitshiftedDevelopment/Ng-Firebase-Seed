import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from '@app/core/auth.service';

import { Post } from './post';
//TODO Interface could be replaced by importing seperate file to keep this clean
// interface Post {
//   title: string;
//   content: string;
// }

// This is a good way to add an id to an imported interface
interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'post-browser',
  templateUrl: './post-browser.component.html',
  styleUrls: ['./post-browser.component.scss']
})
export class PostBrowserComponent implements OnInit {
  postDoc: AngularFirestoreDocument<Post>; // Currently viewed document
  post: Observable<Post>; // Viewed document as the given interface ("Post")
  postsCol: AngularFirestoreCollection<Post>; // collection of documents returned from firestore
  posts: any; // Actual array of documents contained within the collection
  title: string; // Should be replaced by some manner of input
  content: string; // Should be replaced by some manner of input
  constructor(private afs: AngularFirestore, public auth: AuthService) { }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts'); // Fill the collection with the named value
    // The below line can be used to filter documents in the collection by the passed value ("coursetro")
    //this.postsCol = this.afs.collection('posts', ref => ref.where('title', '==', 'coursetro'));
    /* Can also use the following in place of where:
     * orderBy
     * limit
     * startAt
     * startAfter
     * endAt
     * endBefore
     */
    this.posts = this.postsCol.snapshotChanges() // Fill in the posts array with live firestore contents
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  // Adds a document to the collection using the passed in object
  addPost() { //TODO rework this to accept a prebuilt object instead
    this.afs.collection('posts').add({ 'title': this.title, 'content': this.content });
  }

  // Adds a document with the given uid to the collection using the passed in object
  //TODO rework this to accept a prebuilt object instead
  // addPost() {
  //   this.afs.collection('posts').doc('my-custom-id').set({ 'title': this.title, 'content': this.content });
  // }


  // Returns a document from a collection by uid
  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
  }

  // Removes a document from the given collection by uid
  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }
}

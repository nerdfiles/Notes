# React and Angular

## Most used methods on a React Component

    class Component extends React.Component {

      constructor(props) {
        super(props)
        this.state = {
          '$meta': {
            shouldComponentUpdate: false
          },
          user: {},
          comments: [],
          exampleModel: {}
        }
      }

      // @NOTE componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
      componentDidUpdate() {}
      shouldComponentUpdate() {
        return this.state.$meta.shouldComponentUpdate
      }

      componentDidCatch() {}
      componentDidMount() {
        fetch("/my-comments.json")
          .then(res => res.json())
          .then(comments => this.setState({ comments }))
      }
      componentWillUnmount() {}

      render() {
        return (
          <div class="component">
            <ul>
              {this.state.comments.map(({ body, author }) =>
                <li>{body}-{author}</li>
              )}
            </ul>
          </div>
        )
      }

    }

## What Are The @NgModule Metadata Properties?

    bootstrap
    declarations
    entryComponents
    exports
    id
    imports
    providers
    schemas

## What are the module types?

    Widget Module (subcomponents)
    Shared Module (app?)
    Service Module
    Routing Module
    Features Module

## What Are Components In Angular 6?

An Angular 6 Components are the most basic data building section of a design 
UI in Angular web applications as well as This components controls HTML 
display views (HTML/CSS). angular Components also communicate both side other 
components views and use the services to bring best more functionality to your 
web applications quickly.

### Smart (Stateful) vs Dumb (Presentational)

#### Distinctions

    Stateful vs Stateless
    Class vs Function
    Pure vs Impure

#### Smart

Usually involves a Class and inherits/defines state:

    class Widget extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          pictures: []
        };
      }
    }

In Angular a smart component might be concerned with URL changes.

    Are concerned with how things work.
    May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
    Provide the data and behavior to presentational or other container components.
    Call Flux actions and provide these as callbacks to the presentational components.
    Are often stateful, as they tend to serve as data sources.
    Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
    Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

#### Dumb

Usually pure Functions:

    const Widget = (props) => {
      return (
        <div>
          {props}
        </div>
      )
    }

Or, a dumb component used inside a smart component:

    // @see https://gist.github.com/chantastic/fc9e3853464dffdb1e3c
    // CommentList.js
    import React from "react";

    const Commentlist = comments => (
      <ul>
        {comments.map(({ body, author }) =>
          <li>{body}-{author}</li>
        )}
      </ul>
    )

    // CommentListContainer.js
    import React from "react";
    import CommentList from "./CommentList";

    class CommentListContainer extends React.Component {
      constructor() {
        super();
        this.state = { comments: [] }
      }
      
      componentDidMount() {
        fetch("/my-comments.json")
          .then(res => res.json())
          .then(comments => this.setState({ comments }))
      }

      // JSX version
      render() {
        return <CommentList comments={this.state.comments} />;
      }

      // Non-JSX version
      render() {
        return React.createElement(CommentList, { comments: this.state.comments });
      }
    }

In Angular a dumb component simply presents data without expecting state 
changes.

    Are concerned with how things look.
    May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
    Often allow containment via this.props.children.
    Have no dependencies on the rest of the app, such as Flux actions or stores.
    Don’t specify how the data is loaded or mutated.
    Receive data and callbacks exclusively via props.
    Rarely have their own state (when they do, it’s UI state rather than data).
    Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
    Examples: Page, Sidebar, Story, UserInfo, List.

## Class Binding

    ./_subcomponents/sidebar.component.ts

    import { Component, OnInit } from '@angular/core';
    import { Router, NavigationEnd } from '@angular/router';

    @Component({
      selector: 'app-sidebar',
      templateUrl: './sidebar.component.html',
      styleUrls: ['./sidebar.component.scss']
    })
    export class SidebarComponent implements OnInit {
      currentUrl: string;
      // default Angular 6 Open File
      constructor(private router: Router) {
        router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
      }
      ngOnInit() {}
    }

    ./_subcomponents/sidebar.component.html

    <nav>
      <ul>
        <li>
          <a routerLink="" [class.current]="currentUrl == '/'">
            <i class="material-icons">supervised_student_circle</i>
          </a>
        </li>
        <li>
          <a routerLink="teachers" [class.current]="currentUrl == '/teachers'">
            <i class="material-icons">Angular 6 Class Binding</i>
          </a>
        </li>
      </ul>
    </nav>

## Service

    //Import Angular 6 service
    import { Injectable } from '@angular/core';
    @Injectable({
      providedIn: 'root'
    })
    //export service
    export class DataService {
      constructor() { }
    }

## Module

    //import angular 6 some TypeScript files
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    //import angular 6 some TypeScript files
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    //angular 6 NgModule
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule   //Angular 6 Module routing File
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

## Routes

    /* Angular 6 Routing Example */
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { ClientComponent } from './users/users.component';
    import { StudentComponent } from './student/student.component';
    import { SubjectComponent } from './subjects/subjects.component';
    //change angular 6
    const routes: Routes = [
      {
        path: '',
        component: ClientComponent
      },
      {
        path: 'student/:id',
        component: StudentComponent
      },
      {
        path: 'subjects',
        component: SubjectComponent
      },
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }

## Animations

    import { trigger,CSSstyle,Timetransition,animate,somekeyframes,generatedquery,stagger } from '@angular/animations';

    @Component({
      selector: 'app-clients',
      templateUrl: './clients.component.html',
      styleUrls: ['./clients.component.scss'],
      //angular 6 Add this:
      animations: [
        trigger('packageEmployes', [
          transition('* <=> *', [
            query(
              ':enter',
              [
                style({ opacity: 0, transform: 'translateY(-15px)' }),
                stagger(
                  '60ms',
                  animate(
                    '560ms ease-out',
                    style({ opacity: 1, transform: 'translateY(0px)' })
                  )
                )
              ],
              { optional: true }
            ),
            query(':leave', animate('60ms', style({ opacity: 0 })), {
              optional: true
            })
          ])
        ])
      ]
    })

    <ul [@packageEmployes]="clients$">

## HttpClient

```typescript
./_services/data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get('http://pakainfo.com/students')
  }
}
```

```typescript
./app.module.ts

import { HttpClientModule } from '@angular/common/http';  // <-students Put here
@NgModule({
  declarations: [
    // here source code students Removed for brevity
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // <-students Put here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

### Restangular

    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { RestangularModule, Restangular } from 'ngx-restangular';

    // Function for setting the default restangular configuration
    export function RestangularConfigFactory (RestangularProvider) {
      RestangularProvider.setBaseUrl('http://api.restngx.local/v1');
      RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
    }

    // AppModule is the main entry point into Angular2 bootstraping process
    @NgModule({
      bootstrap: [ AppComponent ],
      declarations: [
        AppComponent,
      ],
      imports: [
        // Importing RestangularModule and making default configs for restanglar
        RestangularModule.forRoot(RestangularConfigFactory),
      ]
    })
    export class AppModule {
    }

    // later in code ...

    @Component({
      ...
    })
    export class OtherComponent {
      constructor(private restangular: Restangular) {
      }

      ngOnInit() {
        // GET http://api.test.local/v1/users/2/accounts
        this.restangular.one('users', 2).all('accounts').getList();
      }
    }

### Difference between Observables and Promises

See https://stackoverflow.com/questions/37364973/what-is-the-difference-between-promises-and-observables

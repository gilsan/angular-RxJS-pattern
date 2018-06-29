
 export const COURSES =  [
      {
          'id': 1,
          'description': 'What is an Observable ? Introduction to Streams and RxJs Observables',
          'duration': '5:41',
          'url': 'angular2-what-is-an-observable',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'videoUrl': 'https://www.youtube.com/embed/Sol2uLolmUM',
          'longDescription': 'In this lesson we are going to present a couple of baseline concepts that are essential for being able to build service layers in Angular: we will introduce the notions of stream and Observable. We are going to understand that these are two  different concepts: an Observable is not a stream. During the lesson we will write our first Observable and we will learn one of the main properties of Observables: that they are inherently inert, and that we need to subscribe to them in order for them to work. We are also going to introduce our first RxJs operator: the do operator which should only be used for debugging purposes as it introduces side effects.'
      },
       {
        'id': 2,
          'description': 'Observables Error Handling and Completion - How do Observables handle Errors?',
          'duration': '5:28',
          'url': 'angular2-observables-error-handling-and-completion-network-calls-as-observables',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'videoUrl': 'https://www.youtube.com/embed/ot_FrQbmEmU',
          'longDescription': 'In this lesson we are going to present two other foundation concepts of Observables: error handling and completion. We are going to initially call our backend server using the browser Fetch API, which is promises based. We will then learn how to create an Observable from a promise, and see how and why an observable is a good way to model a network call. We will learn about some advantages of Observables vs Promises.'
      },
       {
        'id': 3,
          'description': 'How does Angular HTTP use Observables ? The HTTP Response object',
          'duration': '4:32',
          'url': 'how-does-angular2-use-observables-http-response-object',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'longDescription': 'In this lesson we are going to learn the relation between the Angular HTTP module and Observables, and how its essential to understand Observables in order to do even the most common backend-communication tasks using the HTTP module. We are going to learn how Angular HTTP models network responses using Observables, and how completion is handled. '
      },
       {
        'id': 4,
          'description': 'How to use Observables and HTTP to build a Service Layer',
          'duration': '4:32',
          'url': 'angular2-how-to-use-observables-and-http-to-build-a-servicelayer',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'videoUrl': '',
          'longDescription': 'In this lesson we are going to learn how to use Angular HTTP to build the service layer of our application. We are going to learn how to build strongly typed services and we are going to learn how the service layer can be designed around the notion of Observables.'
      },
      {
        'id': 5,
          'description': 'Introduction to Functional Reactive Programming - Using the Async Pipe - Pitfalls to Avoid',
          'duration': '4:36',
          'url': 'angular2-how-to-use-the-async-pipe-to-pass-observables-into-a-template',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'In this lesson we are going to do an introduction to Functional Reactive Programming, and we are going to see how an application can be built around the notion of Observables. We are going to see how programs can be build with very little state variables, and how data can be passed on from Observables directly to templates by using the Async Pipe. We are going to learn also why in some cases its not a good idea to call the service layer directly from a template expression - this is a pitfall to avoid.'
      },
       {
        'id': 6,
          'description': 'The RxJs Map Operator - How to create an Observable from another Observable',
          'duration': '3:04',
          'url': 'angular2-observable-map-operator-how-to-create-an-observable-from-another',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'In this lesson we are going to learn one of the key concepts about Observables: we can easily derive new Observables from existing Observables using the many RxJs operators available to us. In this lesson we are going to create an Observable from another Observable by using the RxJs map operator.'
      },
       {
        'id': 7,
          'description': 'Observable Composition - combine multiple Observables Using combineLatest',
          'duration': '5:59',
          'url': 'angular2-observable-composition-combine-latests',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'In this lesson we are going to learn that Observables can be combined with other Observables. In this case we are going to create an Observable of mouse moves that only emits if the mouse is bellow a certain region of the page. We are also going to create an Observable of mouse clicks, that emits if the user clicks anywhere on the page - both of these Observables will be created using fromEvent. We will then combine these two Observables to create third Observable using the RxJs combineLatests operator. '
      },
       {
        'id': 8,
          'description': 'Avoid the Biggest Pitfall of Angular HTTP - Learn the RxJs Cache Operator',
          'duration': '5:10',
          'url': 'angular2-how-to--aAvoid-duplicate-http-requests-rxjs-cache-operator',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'In this lesson we are going to use the HTTP module to implement a modification operation: we are going to add a lesson to a lessons list via an HTTP POST call, and then reload the data from the server.  While implementing this simple use case, we are going to come across something that might be surprising at first: its really simple to do duplicate network calls accidentally while using Angular HTTP. We are going to learn the reason why that is the case, and learn how we can avoid that using the RxJs Cache Operator.'
      },
      {
        'id': 9,
          'description': 'How to do multiple HTTP requests using the RxJs Concat Operator',
          'duration': '4:19',
          'url': 'angular2-how-to-do-multiple-http-requests-using-the-rxjs-concat-operator',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'In this lesson we are going to learn how we make multiple sequential requests to the server by using the RxJs Concat operator. This is another example of how from the point of view of the Angular HTTP module network requests are really just Observables that can be easily combined using the many RxJs operators available. We are going to implement the following concrete example: do a delete on the server, then a second delete and finally reload the new list from the server and display it on the screen.'
      },
     {
      'id': 10,
          'description': 'How to do two HTTP Requests in Parallel using the RxJs combineLatest Operator',
          'duration': '3:58',
          'url': 'angular2-how-to-do-two-http-requests-in-parallel-using-the-rxjs-combinelatest-operator',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'In this lesson we are going to learn how to do two HTTP requests in parallel, wait for each to return and produce a result that contains the combination of the two HTTP calls. For that we are going to use an operator that we presented before, the combineLatest Operator which will in this time be used in a completely different context. This is a good example of the power of the approach that the Angular HTTP module gives us, by modeling network calls as Observables; any RxJs operator can potentially by used to process network calls.'
      },
      {
        'id': 11,
          'description': 'How to setup an HTTP request sequence using the RxJs switchMap Operator',
          'duration': '4:33',
          'url': 'angular2-how-to-setup-an-http-request-sequence-using-the-rxjs-switchmap-operator',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'In this lesson we are going to learn how we can build a chain of HTTP requests, but now we will be able to take the result of one request and then use it to build the next request. For this we are going to introduce a new RxJs Operator for combining Observables, the switchMap Operator. This lesson will give us a first contact with the more general Switch strategy of combining Observables.'
      },
      {
        'id': 12,
          'description': 'Retry HTTP requests in Error using the retry and retryWhen RxJs Operators',
          'duration': '3:42',
          'url': 'angular2-retry-http-requests-in-error-using-the-retry-and-retrywhen-rxjs-operators',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'In this lesson we are going to learn how RxJs and Observables make it very simple to deal with certain uses cases that before might be challenging. For example, we are going to learn how to retry a network call in case of error. This is very useful in situations when the backend occasionally returns errors that are of an intermittent nature. In those scenarios a good strategy is to try to send the network call again a second time, usually after a certain delay has elapsed. In this lesson we are going to learn how we can use the RxJs Operators retry and retryWhen to implement service layers that are resilient to temporary errors.'
      },
       {
        'id': 13,
          'description': 'How to Cancel an HTTP Request using an RxJs Subscription',
          'duration': '2:56',
          'url': 'angular2-how-to-cancel-an-http-request-using-an-rxjs-subscription',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'In this lesson we are going to learn how to implement a use case using RxJs and Observables that was very hard to do previously: the cancellation of an ongoing HTTP request. We are going to learn about the RxJs subscription object and how to use it to implement cancellation.'
      },
       {
        'id': 14,
          'description': 'Exercise - Improve a Search Service and Build a Typeahead',
          'duration': '3:15',
          'url': 'angular2-exercise-improve-a-search-service-and-build-a-typeahead',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'This lesson is the setup for the exercise of the Services and HTTP series. We are going to implement a Typeahead that continuously retrieves from the backend new search results depending on what the use is typing. We are going to show how to use the Angular HTTP API to pass a GET parameter request to the backend.'
      },
      {
        'id': 15,
          'description': 'Exercise Solution - Learn How to build a Typeahead that cancels obsolete search requests',
          'duration': '5:07',
          'url': 'angular2-exercise-solution-learn-how-to-build-a-typeahead-that-cancels-obsolete-search-requests',
          'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners.jpg',
          'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
          'pro': true,
          'longDescription': 'This is the solution for the HTTP and Services exercise, where we will build a Typeahead. For that we are going to use a couple of RxJs Operators that we have previously presented in this course. We are going to see how results from a previous search can be implicitly canceled.'
      }
    ];

  export const LESSONS = [

     {
      'id': 1,
      'description': 'Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step',
      'duration': '4:17',
      'completed': false

  },
   {
      'id': 2,
      'description': 'Building Your First  Component - Component Composition',
      'duration': '2:07',
      'completed': false

  },
    {
      'id': 3,
      'description': 'Component @Input - How To Pass Input Data To an  Component',
      'duration': '2:33',
      'completed': false

  },
   {
      'id': 4,
      'description': ' Component Events - Using @Output to create custom events',
      'duration': '4:44',
      'completed': false,

  },
   {
      'id': 5,
      'description': ' Component Templates - Inline Vs External',
      'duration': '2:55',
      'completed': false
  },
    {
      'id': 6,
      'description': 'Styling  Components - Learn About Component Style Isolation',
      'duration': '3:27',
      'completed': false,

  },
    {
      'id': 7,
      'description': ' Component Interaction - Extended Components Example',
      'duration': '9:22',
      'completed': false

  },
   {
      'id': 8,
      'description': ' Components Tutorial For Beginners - Components Exercise !',
      'duration': '1:26',
      'completed':  false

  },
  {
      'id': 9,
      'description': ' Components Tutorial For Beginners - Components Exercise Solution Inside',
      'duration': '2:08',
      'completed': false

  },
    {
      'id': 10,
      'description': ' Directives - Inputs, Output Event Emitters and How To Export Template References',
      'duration': '4:01',
      'completed': false

  },

   {
      'id': 11,
      'description': 'Course Helicopter View',
      'duration': '08:19',
      'completed': false

  },

    {
      'id': 12,
      'description': 'Installing Git, Node, NPM and Choosing an IDE',
      'duration': '04:17',
      'completed': false

  },

   {
      'id': 13,
      'description': 'Installing The Lessons Code - Learn Why Its Essential To Use NPM 5',
      'duration': '06:05',
      'completed': false

  },

   {
      'id': 14,
      'description': 'How To Run Node In TypeScript With Hot Reloading',
      'duration': '03:57',
      'completed': false

  },

    {
      'id': 15,
      'description': 'Guided Tour Of The Sample Application',
      'duration': '06:00',
      'completed': false,

  },
    {
      'id': 16,
      'description': 'Client Side Authentication Service - API Design',
      'duration': '04:53',
      'completed': false,

  },
   {
      'id': 17,
      'description': 'Client Authentication Service - Design and Implementation',
      'duration': '09:14',
      'completed': false

  },
    {
      id: 18,
      'description': 'The New Angular HTTP Client - Doing a POST Call To The Server',
      'duration': '06:08',
      'completed': false

  },
    {
      'id': 19,
      'description': 'User Sign Up Server-Side Implementation in Express',
      'duration': '08:50',
      'completed': false

  },
   {
      id: 20,
      'description': 'Introduction To Cryptographic Hashes - A Running Demo',
      'duration': '05:46',
      'completed': false

  },
   {
      'id': 21,
      'description': 'Some Interesting Properties Of Hashing Functions - Validating Passwords',
      'duration': '06:31',
      'completed': false

    }
  ];


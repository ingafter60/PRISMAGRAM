# PRISMAGRAM
Instagram Clone with Express + Prisma + React + React Native

0 Introduction

0.0 What are we building (1-53)
0.1 Requirements (1-21)

## 1 Set Up

### 1.0 Setting up the project (6-04)

        modified:   README.md
        new file:   nodemon.json
        new file:   package-lock.json
        new file:   package.json
        new file:   src/server.js














### 1.1 Creating GraphQL Server (6-05)
### 1.2 Setting Up the Server like the Pros (11-17)

2 Setting Up Prisma

2.0 Introduction to Prisma (6-44)
2.1 Datamodel with Prisma (11-06)
2.2 Testing Prisma OMG (12-53)
2.3 Integrating Prisma in our Server (5-48)
2.4 Resolvers with Prisma (7-54)

3 GraphQL API

3.0 Planning the API (4-59)
3.1 Create Account Resolver (7-32)
3.2 requestSecret Resolver (13-48)
3.3 sendMail Function with Nodemailer (12-32)
3.4 Passport JWT part One (11-58)
3.5 Passport JWT part Two (9-58)
3.6 Passport JWT part Three (16-09)
3.7 toggleLike Resolver part One (8-25)
3.8 toggleLike and addComment Resolver (7-52)
3.9 searchUser and searchImage resolver (8-26)
3.10 follow unfollow Resolver (7-34)
3.11 editUser seeUser Resolver (8-10)
3.12 me Resolver + Prisma's Limitations (11-39)
3.13 See Full Posts (9-17)
3.14 Computed Fields in Prisma (7-56)
3.15 itsMe and amIFollowing Fileds part One (10-24)
3.16 itsMe and amIFollowing Fileds part Two (8-49)
3.17 isLiked Computed File (4-51)
3.18 upload Resolver (12-26)
3.19 seeFullPost Refactoring (15-45)
3.20 editPost deletePost Resolver (11-14)
3.21 deletePost Resolver part Two (11-46)
3.22 seeFeed Resolver (10-33)
3.23 sendMessage part One (15-07)
3.24 sendMessage part Two (13-05)
3.25 seeRoom Resolver (11-00)
3.26 Introduction to Subscriptions (4-47)
3.27 newMessage Subscription part One (11-27)
3.28 newMessage Subscription part Two (13-21)
3.29 Conclusions (7-54)
3.30 Kill The Fragments ?? (5-54)

4 Frontend Setup

4.0 CRA Cleanup and Installation (5-45)
4.1 GlobalStyles and Theme (12-06)
4.2 React Router (9-15)
4.3 Apollo Client (12-06)
4.4 First Hooks Query (8-02)

5 Frontend- Authorization Routes

5.0 Auth Route UI part One (6-50)
5.1 Footer and Auth UI part Two (5-00)
5.2 Footer and Auth UI part Three (5-00)
5.3 Auth Form with Hooks (10-36)
5.4 requestSecret Mutation and Refactor (12-03)
5.5 Toastify and createAccount Mutation (14-17)
5.6 createAccount Mutation part Two (13-03)
5.7 createAccount Mutation part Three (8-30)
5.8 confirmSecret + Log In Mutation (16-03)

6 Frontend- Header Component

6.0 Header UI (10-00)
6.1 Header Logic part One (13-44)
6.2 Header Logic part Two (7-22)

7 Frontend- Feed

7.0 Getting the Feed and Loader Component (11-43)
7.1 Post Component part One (16-53)
7.2 Post Component part Two (16-07)
7.3 Post Component part Three (17-00)
7.4 toggleLike on Post Component (14-15)
7.5 createComment on Post Component part One (15-49)
7.6 createComment on Post Component part Two (13-59)

8 Frontend- Search

8.0 Search Screen Queries (15-11)
8.1 Search Screen UI Part One (7-00)
8.2 Search Screen UI Part Two (11-06)
8.3 Follow Button (13-47)
8.4 SquarePost Component (15-02)

9 Frontend- Profile

9.0 Profile Screen part One (14-52)
9.1 Profile Screen part Two (12-55)
9.2 Log Out and Conclusions (5-26)

10 App- Setup

10.0 Creating the Project (8-03)
10.1 Preloading Assets (10-30)
10.2 Preloading Cache (9-23)
10.3 Recap (4-37)
10.4 isLoggedIn part One (10-22)
10.5 isLoggedIn part Two (7-36)
10.6 AuthContext part One (10-56)
10.7 AuthContext part Two (8-00)

11 App- Navigation

11.0 Introduction To Navigation (10-51)
11.1 AuthNavigation (13-06)
11.2 Tabs Navigation (9-17)
11.3 Photo Navigation (12-31)
11.4 Messages Navigation part One (10-18)
11.5 Message Navigation part Two (6-16)
11.6 Navigation Conclusions (2-23)

12 App- Auth

12.0 AuthHome (12-18)
12.1 Auth Components part One (12-20)
12.2 Auth Components part Two (8-11)
12.3 Login part One (10-46)
12.4 Login part Two (10-20)
12.5 Login part Three (4-00)
12.6 Confirm (12-42)
12.7 Singup (14-26)
12.8 Facebook Login part One (11-33)
12.9 Facebook Login part Two (9-28)
12.10 Google Login (11-24)

13 App- TabNavigation

13.0 TabIcons part One (12-50)
13.1 TabIcons part Two (10-04)
13.2 TabBar, Styles, Loader (7-33)

14 App- Home Screen

14.0 Apollo Context (7-51)
14.1 ScrollView and RefreshControl (6-36)

15 App- Post Component

15.0 Post Component Header (11-32)
15.1 Post Component Swiper (10-12)
15.2 Finishing Post Component (7-46)
15.3 Toggle Like (8-33)

16 App- Search Screen

16.0 Search as HeaderTitle part One (10-23)
16.1 Search as HeaderTitle part Two (8-21)
16.2 Search Query (9-50)
16.3 Search Photo (11-42)
16.4 Photo Detail (10-00)

17 App- Profile Screen

17.0 Profile Screen (11-13)
17.1 User Detail Screen (5-57)
17.2 UserProfile Component Styles (14-51)
17.3 UserProfile Photo Rendering (5-31)

18 App- Upload

18.0 Tab Styles (6-58)
18.1 Select Photo part One (10-54)
18.2 Select Photo part Two (5-46)
18.3 Take Photo part One (10-35)
18.4 Take Photo part Two (7-04)
18.5 Saving Photo (11-46)
18.6 Navigating to Upload Photo (7-22)
18.7 Preparing for Upload (10-20)
18.8 Uploading to Backend (10-14)
18.9 Uploading to S3 (8-09)
18.10 Uploading Mutation (12-39)
18.11 Showing off! (4-19)
18.12 Messages and Notifications (1-42)

19 Deployment

19.0 Deploying Frontend to Netlify (10-11)
19.1 Building the Server (5-56)
19.2 Copying Files (9-29)
19.3 Deploying to Heroku (11-59)
19.4 Recap (3-49)
19.5 Deploying to Heroku part Two (12-42)
19.6 Deploying Prisma Server (9-13)
19.7 Deploying Prisma Server part Two + Netlify Fix (12-57)

20 Epilogue

20.0 Conclusions (1-49)

21 Bonus- Subscriptions and Notifications

21.0 What are we building (2-39)
21.1 Apollo Client Subscription Setup (10-08)
21.2 React Suspense is Awesome! (11-09)
21.3 Sending Messages and KeyboardAvoidingView (8-04)
21.4 New Message Subscription (7-55)
21.5 Push Notifications! (15-01)
21.6 Conclussions (4-14)
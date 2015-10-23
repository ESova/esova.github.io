# Specification for Esova Application
**Misc:**
* If `esova wireframes` are different from this specification, the specification takes precedence.
* If User not signedin/signup yet, show all pages as realistic to a signedin user as possible, but replace notifications with dummy notification that advertise the ESova App and only the signup field in the skilltree is available

<a id="namespace"></a>
# Namespace (Sitemap)
* `skilltree/` and `/`
* `username/`
* `users/`
* `users/finishedLessonX`
* `username/follows/`
* `username/followedBy/`
* `lessonX/` (only available to users who have it unlocked)
* `lessonX/users`

# Github Integration
* see https://github.com/michael/github and others on [npm](https://www.npmjs.com/search?q=github)
* this guy has some nice github libraries: https://github.com/rvagg?tab=repositories

**Esova Organization & Repositories:**
* `lesson1` *(contain SEMVER versioned lesson contents)*
* `lesson2`
* `lesson3`
* ...
* `username1`
* `username1-lesson1`
* `username1-lesson2`
* `username1-lesson3`
* ...
* `username2`
* `username2-lesson1`
* `username2-lesson2`
* `username2-lesson3`
  * created with one or many esova signed commits
  * commit messages are checked to know user status on esova program
  * Example Content: `index.html, index.css, index.js, README.md`
* ...

# "STATIC PAGE ELEMENTS"
Below follows a list of page elements that will be present on every subpage of the esova web app. You can find all these elements on the wireframes too.

## Logo (=Home Button)
**.onTouch:**
* *goto* `skilltree/`

## Minimap
**.onTouch:**
* *goto* `lessonX` (where X is user's current lesson)

##  Search Bar
* Displays Title of current Page (e.g. Lesson)
* Can be used to *jump* from any page to any other page available to user

**input.onTouch:**
* *select* `"target/"` from [`Namespace`](#namespace) via dropdown autocomplete search

**button.onTouch:**
* *goto* `"target/"` or *refresh* page if same page

## Stats Display
Shows summary statistics related to current page  
*(THINK: browser address bar - bookmark star)*  
e.g. for `lessonX/`
* Number of people successfully finished
* Number of people currently working on currently online (green dot symbol)
* Average Time spent by people on this lesson
* Your time already spent (running timer while window is focused)

## Notifications Dropdown
Shows number of activities since the last time you checked them  
By default, every `user` follows every other `user` and `repository`  
and needs to unfollow if some notifications are not wanted

**community.onTouch:**
* *show* `news dropdown` to show activity of esova community
  * (see [github feed](github.com/) filtered for esova related stuff  - check esova signed commit messages)
  > **Example Item:**
    * `Marko` created repoistory **Lesson 5** (`Demo` / `Source`)
      * `Demo` => Opens Github Page
      * `Source` => Opens Github Repository
    * `Marko` wrote in **Lesson 5** Chat a new Message
* **news-item.onTouch:** (only available if associated with an esova page)
  * *goto* that page (e.g. user profile with new portfolio entry)
* **news-item-remove.onTouch:**
  * *remove* item from list

**myactivity.onTouch:**
* *show* `activity dropdown` to show activity my activity
  * (see [github user feed](https://github.com/MatijaDjumic?tab=activity) filtered for esova related stuff - check esova signed commit messages)
  > **Example Item:**
    * Same as `Community News` but just one's own activities
      * (e.g. starred repo, pushed commit, etc...)
* **activity-item.onTouch:** (only available if associated with an esova page)
  * *goto* that page (e.g. my profile with new portfolio entry)
* **activity-remove.onTouch:**
  * *remove* item from list

**messages.onTouch:**
* *show* `messages` received via gitter
  * (see [gitter sidebar](https://gitter.im/) filtered for esova related chats that have new messages waiting)
* **message.onTouch:** (only available if associated with an esova page)
  * *open* gitter chatroom in new window/tab
* **message-remove.onTouch:**
  * *remove* item from list

## Profile Dropdown
**ANONYMOUS STATE:**  
Shows anonymous avatar and `Signup / Signin`

**signup.onTouch:**
* *show* `signup dropdown form`
  * Fill out: `username`, `password`, `email` and `signup code`
  * Ask for existing `github account`
  * **submit.onTouch:**
    * *given* `no signup code` => counts as an application for esova code
    > delays account creation process until confirmed by an admin by sending an email with code and signup link

    * *given* `signup code` => creates account
    > **Create Account**:
      1. Automatically create `gitter`, `github` account with esova account
      2. Create Esova User Profile Page Repository with esova signed commit message
      3. Add `signup accomplished` badge with link to user's page repository
      4. Autofollow all users and repositories in Esova program for new user
      5. Autofollow new users with all other existing esova users
      6. Autojoin new user into Esova's main gitter Channel
      7. goto `skilltree/`

**signin.onTouch:**
* `signin with github`

**SIGNEDIN STATE:**  
Shows Users username and avatar

**profile.onTouch:**
* *show* `profile dropdown`
  * **profilepage.onTouch:**
    * *goto* `username/` page
  * **signout.onTouch:**
    * sign out

## ESova Owl
Function of Wizard/Assistant  
(THINK: Microsoft Office Clipper Mascot)

**chatwithus.onTouch:**
  * *open* `esova gitter chat in new window/tab`

**questionmark.onTouch:**
  * *start* `alt text/tooltip wizard` to explain current page
    * e.g. see http://usablica.github.io/intro.js/

There can be one or multiple hints in every lesson depending on video progress  
**.on('lesson page AND lesson hints available'):**  
  * *show* `lightbulb` over esova owl's head
  * **lightbulb.onTouch:**
    * *show* `lesson hint overlay popup` in `instruction section`
    * `instruction section`, when visible, shrinks video to half the size and occupies right half of video space until closed via `x` in upper right corner

**.on('submit solution'):**
  * *show* `message overlay popup` with one of the following contents:
    1. `sucess message` (e.g."wow, you made it, great!")
    2. `exception message` (e.g. oh, wrong, try again or help yourself with my hints)
    3. if three times wrong + hint touched: `error message`
      * (e.g. Hey, try to get help in the chat (link to this lesson's gitter chat to open in new window/tab))


# "PAGES"
Below follows a list of pages. You can find all these on the wireframes too.

## `PAGE` skilltree
* Lesson Zero:
  * After Signup, the signup badge is earned and stats include all users.
  * **.onTouch:** goto `users/`
* Lesson One: see `Welcome` under ([`PAGE` lesson](#lesson))
* is `HOME PAGE`
* has `skilltree` with `skillfields` and a `skilldescription overlay popup`
* each `skillfield` has a corresponding repository that contains all related content
* **skillfield:**
  * has `badge symbol`
  * has `stats field` (#CurrentLearners | #LessonFinishers | avg.FinishingTime)
  * is in one of three states:
    1. `not unlocked`: black and white
      * one or more **required** "parent" lessons are not solved
    2. `unlocked but not finished`: black&white with colored border
      * all **required** "parent" lessons are solved, but the skill itself not
    3. `unlocked and finished`: full color
      * all **required** "parent" lessons and the skill itself are solved
  * **.onTouch:**
    * *show* `skilldescription overlay popup` for *touched* `skillfield`
* **skilltree:**
  * inspiration: see http://www.dungeonsanddevelopers.com/
  * the information about `skillfields` comes from `ESova/lessonX/` repositories
    * e.g. maybe json files with a convention to reference required lessons
  * the information about `skillfield` states comes from `ESova/userX-lessonX` repositories
* **skilldescription overlay popup:**
  - has Title
  - has Stats (#CurrentLearners | #LessonFinishers | avg.FinishTime)
  - DescriptionBox
  - ACTION BOX
    * **start.onTouch:**
      * `if unlocked:` *goto* `lessonX/`
      * `if locked:` esova tells you to first do required lessons
    * **finishers.onTouch:**
      * *goto* `users/finishedLessonX` to see  who successfully finished the lesson already
    * **chat.onTouch:**
      * *open* `lessons gitter chat` by opening it in a new window/tab

## `PAGE` profile *(user & others)*
* available under `username/`
* View differs for `SignedIn User` and `Other User` in:
  * `Other User` - **Minimap with Avatar**
    * **message.onTouch:** (touch button switches label)
      * `goto` `gitter chat with user` by opening it in a new window/tab
    * **(un)follow.onTouch:**
      * (un)receive update messages related to user in `notifications`
  * `Current User` - **Minimap with Avatar**
    * **conversations.onTouch:**
      * `goto` `gitter chat` by opening it in a new window/tab
    * **edit/save.onTouch:** (touch button switches label)
      * `turn` `avatar picture` and `infobox` into form to update and save
* has **Infobox**
  * has **Fields**
    * Avatar / Picture
    * First name
    * Last Name
    * Location
    * bio / about me text
    * name of school / organization
    * custom links (titles+urls)
      * default link is to github, but user can add more
      * offeres to link twitter account => shows last 3 tweets if user connects
  * has **Stats**
    * number of followers
      * **followedBy.onTouch:** *goto* `username/followedBy/`
    * number followed
      * **follows.onTouch:** *goto* `username/follows/`
    * number of earned badges
  * has **Activity Wall**
    * total time invested
    * Last X activities (see activity wall in top menu)
* has **Portfolio**
  * each `Card` represents one finished lesson (repository)
  * **Card:**
    * badge picture symbol
    * link to demo gh-page
      * **demo.onTouch:** *open* gh-page in new window/tab
    * link to source code
      * **source.onTouch:** *open* github repository source in new window/tab

## `PAGE` users
Shows a List of users with different four available filters:
* `users/`
* `users/finishedLessonX`
* `username/follows/`
* `username/followedBy/`
* has many `Users`
* **User:**
  * has `avatar picture`
  * **user.onTouch:** *goto* `username/`
  * **message.onTouch:** *open* `user gitter chat` in new window/tab
  * **(un)follow.onTouch:** *(un)subscribe* to `user update notifications`
  * has **stats**
    * `#follows`
    * `#followedBy`
    * `#badgesEarned`

<a id="lesson"></a>
## `PAGE` Lesson
* `Welcome Lesson`
  * Is the first lesson
  * `Esova Owl` welcome's User and asks him to introduce herself/himself in the main chat copy/pasting a customized snippet of markdown
  * **validation:** check if user sent message to chat

---
# !!! EVERYTHING BELOW: Work in Progress !!!

---
* ...
1. creates a user-name-lessonX repository if not present yet
2. Checks last esova signed commit messages to know user progress in lesson
3. in-between-commits commit messages can be used to resume a lesson
4. Commits one or multiple times during the lesson
5. Last commit solves the lesson and assigns badge + unlock skill
* Video
  * In-Video-Quiz : to build cheatsheet and keep attention of user
    * Video pauses: questions appear in Instruction Box
      * -> correct questions after submit -> video continues
        * commits to "cheatsheet.md" the question+ right answer
      * -> wrong question -> esova owl error Message
  * ESova owl has different hints
* Video cannot continue until the right answer(s) is chosen
* Instructions (Challenge) Area -> after video finishes, video shrinks on half, other half shows Instructions
* Tool(s) Area => to solve challenges e.g. editor, console, submit button, ...
  * For Main Challenge: [JSBIN](jsbin.com) (HTML, CSS, JS, JSON, REGEX, SVG)
  * For Quiz: Custom Form (e.g. inputfield, slider, checkboxes, ... whatever is needed)
  * Github Integration:
    * Submit Button: After Challenge finishes, user presses submit button
      => Create ESoVa user lesson repository and commits content of JSBIN to that repository **user-lessonX** (Source + Page)
      => With PREDEFINED COMMIT MESSAGE (signed commit message by esova app?)

**editor:**
  * see: http://lucusp.github.io/CodePanion/ (maybe codepen)
  * see: https://jsbin.com/help/running-a-local-copy-of-jsbin
    * `jsin` can be self hosted or embeded

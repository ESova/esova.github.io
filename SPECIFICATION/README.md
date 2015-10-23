# Specification for Esova Application
**Misc:**
* If `esova wireframes` are different from this specification, the specification takes precedence.
* If User not signedin/signup yet, show all pages as realistic to a signedin user as possible, but replace notifications with dummy notification that advertise the ESova App and only the signup field in the skilltree is available

<a id="namespace"></a>
## Namespace (Sitemap) Schema
* `skilltree/`
* `username/`
* `users/`
* `users/finishedLessonX`
* `username/follows/`
* `username/followedBy/`
* `lessonX/` (only available to users who have it unlocked)
* `lessonX/users`

## Github Integration
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
* *open* `news dropdown` to show activity of esova community
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
* *open* `activity dropdown` to show activity my activity
  * (see [github user feed](https://github.com/MatijaDjumic?tab=activity) filtered for esova related stuff - check esova signed commit messages)
  > **Example Item:**
    * Same as `Community News` but just one's own activities
      * (e.g. starred repo, pushed commit, etc...)
* **activity-item.onTouch:** (only available if associated with an esova page)
  * *goto* that page (e.g. my profile with new portfolio entry)
* **activity-remove.onTouch:**
  * *remove* item from list

**messages.onTouch:**
* *open* `messages` received via gitter
  * (see [gitter sidebar](https://gitter.im/) filtered for esova related chats that have new messages waiting)
* **message.onTouch:** (only available if associated with an esova page)
  * *goto* gitter chatroom in new tab
* **message-remove.onTouch:**
  * *remove* item from list

## Profile Dropdown
**ANONYMOUS STATE:**  
Shows anonymous avatar and `Signup / Signin`

**signup.onTouch:**
* *open* `signup dropdown form`
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
* *open* `profile dropdown`
  * **profilepage.onTouch:**
    * *goto* `username/` page
  * **signout.onTouch:**
    * sign out



## ESova Owl
Function of Wizard/Assistant  
(THINK: Microsoft Office Clipper Mascot)

**chatwithus.onTouch:**
  * *open* `esova gitter chat in new tab`

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


---

# !!! Everything below is in progress !!!

---

## `PAGE` skilltree
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
    * *opens* `skilldescription overlay popup` for *touched* `skillfield`
* **skilltree:**
  * inspiration: see http://www.dungeonsanddevelopers.com/
  * the information about `skillfields` comes from `lessonX` esova repositories
  * the information about `skillfield` states comes from `userX-lessonX` repositories

  * `users/`
  * `users/finishedLessonX`

* **skilldescription overlay popup:**
  - has Title
  - has Stats (#CurrentLearners | #LessonFinishers | avg.FinishTime)
  - DescriptionBox
  - ACTION BOX
    * **start.onTouch:**
      * `if unlocked:` *goto* `lessonX/`
      * `if locked:` esova tells you to first do required lessons
    * **finishers.onTouch:**
      * goto ``
    * Show User List: who successfully finished the lesson already
    * Go 2 Lesson's Gitter Chat in new window/tab

## `PAGE` Lesson
0. `Esova Owl` welcome's User and asks him to introduce herself/himself in the main chat

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


## `PAGE` profile *(user & others)*
MY vs. OTHERS
* Minimap with Avatar
  * has Send Message Button
  * has Follow/Unfollow Button

Avatar area: send message vs. follow/unfollow

* Minimap with Avatar
  * has Chat Button => Opens Gitter Chat in new window/tab
  * Edit/Save Button => Edit InfoBox

  * Infobox
    * Fields:
      * Avatar / Picture
      * First name
      * Last Name
      * Location
      * bio / about me text
      * name of school / organization
      * my links (titles+urls)
        * default link is github, but user can add more
        * offeres twitter account => shows last 3 tweets if user connects
  * Stats
    * number of followers => touch to come to follower page
    * number followed
    * number of badges
  * Activity Wall
    * total time invested
    * Last X activities (see activity wall in top menu)
  * Portfolio
    * each card represents one finished lesson (repository)
    * Card:
      * badge picture symbol
      * link to demo gh-page
      * link to source code

## `PAGE` users
blablabla

<h1 align="center">
  🔥 Simplefolio Ember 🔥
</h1>

<h2 align="center">
  A clean, beautiful and responsive portfolio template for Developers!
</h2>

Feel free to use it as-is or customize it as much as you want. I was 
motivated to create this project after I saw the original 
[Simplefolio](https://github.com/cobidev/simplefolio) by 
[Jacobo Martinez](https://github.com/cobidev). He wanted to contribute 
something useful for the dev community and I support his efforts 100%. 
Simplefolio Ember is just a recreation of that same portofolio template 
in Ember.js.

---

## Getting Started

See the instructions down below at [Installation](#installation) 
and [Running / Development](#running-/-development) to get a copy of the 
project up and running on your local machine for development and 
testing purposes.

---

## Template Instructions:

### Step 1

Go to `/app/index.html` and fill in your site information:  

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Put here your site title -->
    <title>[Your name here] | Developer</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Add some coding keywords below, Ex: (javascript, yourusername, etc) -->
    <meta name="keywords" content="[username], [name], skill" />

    <!-- Improve your SEO by adding a small descrption of you -->
    <meta name="description" content="[Your name here] | Developer" />

    ...

  </head>
  <body>

    ...

  </body>
</html>
```

Go to `/app/templates/application.hbs` and fill in your personal and professional information, there are 5 sections:

**Header Section** - Edit the `h1` with ID `#opening-text` and `p` with ID `#opening-paragraph`.

```hbs
<div id="welcome-section">
  <div class="container">
    {{!-- Opening Text --}}
    {{#scroll-reveal
      tagName="h1"
      elementId="opening-text"
      ...
    }}
      Hi, my name is <span class="text-color-main">[YOUR NAME HERE]</span>
      <span class="block">I'm the Unknown Developer.</span>
    {{/scroll-reveal}}
    {{!-- /END Opening Text --}}

    {{!-- Opening Call To Action --}}
    {{#scroll-reveal
      tagName="p"
      elementId="opening-paragraph"
      ...
    }}
      {{jump-scroll
        class="cta-btn cta-btn--hero"
        href="#about"
        text="[CALL TO ACTION]"
      }}
    {{/scroll-reveal}}
    {{!-- /END Call To Action --}}
  </div>
</div>
```

**About Section**

- Edit the `img` src with your profile picture url, your profile picture must live in the `assets/` folder.
- Edit `p` with class `.mb-8.text-left` with information about you.
- Lastly and not mandatory, put your resume link in the `a` button that lives inside `about-wrapper__info`.

```hbs
<div class="row about-wrapper">
  <div class="col-md-6 col-sm-12">
    {{#scroll-reveal
      class="about-wrapper__image"
      ...
    }}
      {{!-- Profile image: change path: assets/images/yourpic.jpg --}}
      <img
        class="img-fluid rounded shadow-lg"
        height="auto"
        width="300px"
        src="assets/images/profile.png"
        alt="Profile Image"
      >
      {{!-- /END Profile image --}}
    {{/scroll-reveal}}
  </div>
  <div class="col-md-6 col-sm-12">
    {{#scroll-reveal
      class="about-wrapper__info"
      ...
    }}
      {{!-- 
        Profile about-text: I recommend to have no more than 4 blocks 
        of text
      --}}
      <p class="mb-8 text-left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Excepturi neque, ipsa animi maiores repellendus distinctio
        aperiam earum.
      </p>
      <p class="mb-8 text-left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Excepturi neque, ipsa animi maiores repellendus distinctio
        aperiam earum.
      </p>
      <p class="mb-8 text-left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Excepturi neque, ipsa animi maiores repellendus distinctio
        aperiam earum.
      
        {{!-- 
          Resume Link: Put your external link for resume.
          If you want you can comment this link
        --}}
        <a rel="noopener" target="_blank" class="mt-8 cta-btn cta-btn--resume" href="#!">
          View Resume
        </a>
        {{!-- /END Resume link --}}
      </p>
      {{!-- /END Profile about text  --}}
    {{/scroll-reveal}}
  </div>
</div>
```

**Projects Section**

- Projects are organized in `row` and they live inside `.project-wrapper`.
- The left-side `col` contains 4 blocks to fill information such as (`project-title, project-information, project-url, project-repo-url`). Fill in each piece of information!
- The right-side `col` contains the `img` of the project, set the `href` of your project on the `project-url` `a` tag that holds the `img` and define the `src` path of your project image. The project `img` must live inside the `assets/` folder.

```hbs
{{!-- Each .row is a project block --}}

<div class="row">
  <div class="col-lg-4 col-sm-12">
    {{#scroll-reveal
      class="project-wrapper__text"
      ...
    }}
      {{!-- 1) project title --}}
      <h3 class="project-wrapper__text-title">Project Title</h3>
      {{!-- 2) project info --}}
      <div>
        <p class="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Excepturi neque, ipsa animi maiores repellendus distinctio
          aperiam earum dolor voluptatum consequatur blanditiis
          inventore debitis fuga numquam voluptate ex architecto
          itaque molestiae.
        </p>
      </div>
      {{!-- 3) project url  --}}
      <a rel="noopener" target="_blank" class="cta-btn cta-btn--hero" href="#!">
        See Live
      </a>
      {{!-- 4) project repository url --}}
      <a rel="noopener" target="_blank" class="cta-btn text-color-main" href="#!">
        Source Code
      </a>
    {{/scroll-reveal}}
  </div>

  {{!-- RIGHT-SIDE --}}
  <div class="col-lg-8 col-sm-12">
    {{#scroll-reveal
      class="project-wrapper__image"
      ...
    }}
      {{!-- 1) project url --}}
      <a href="#!" rel="noopener" target="_blank">
        {{#tilt-element
          class="thumbnail rounded"
          ...
        }}
          {{!-- 2) project image path  --}}
          <img class="img-fluid" src="assets/images/banner.png" alt="project banner">
        {{/tilt-element}}
      </a>
    {{/scroll-reveal}}
  </div>
</div>
{{!-- /END Project block --}}
```

**Contact Section** - Simply change the `p` with class `.contact-wrapper__text` and include some call-to-action message. Lastly change your email `address` on the `href` property.

```hbs
{{#scroll-reveal
  class="contact-wrapper"
  ...
}}
  {{!-- 1) Contact Call To Action: change if necessary --}}
  <p class="mb-4 contact-wrapper__text">
    [Put here your call to action]
  </p>
  {{!-- 2) Contact mail link: change to your work email & change text if necessary --}}
  <a
    rel="noopener"
    target="_blank"
    class="cta-btn cta-btn--resume"
    href="mailto:example@email.com"
  >
    Button
  </a>
{{/scroll-reveal}}
```

**Footer Section**

- Put your social media link on each `a` links.
- If you have more social-media accounts, check out the [Font Awesome Addon Docs](https://github.com/FortAwesome/ember-fontawesome) to add more social icons.
- You can delete or add as many `a` links your want.

```hbs
{{!-- Social Links --}}
<div class="social-links">
  <a href="#!" rel="noopener" target="_blank" aria-label="Follow me on Twitter">
    {{fa-icon "twitter" class="fa-inverse pointer-events-none" prefix="fab" aria-label="twitter"}}
  </a>
  <a href="#!" rel="noopener" target="_blank" aria-label="Follow me on Codepen">
    {{fa-icon "codepen" class="fa-inverse pointer-events-none" prefix="fab"}}
  </a>
  <a href="#!" rel="noopener" target="_blank" aria-label="Follow me on LinkedIn">
    {{fa-icon "linkedin" class="fa-inverse pointer-events-none" prefix="fab"}}
  </a>
  <a href="#!" rel="noopener" target="_blank" aria-label="Follow me on GitHub">
    {{fa-icon "github" class="fa-inverse pointer-events-none" prefix="fab"}}
  </a>
</div>
{{!-- /END Social Links --}}
```

### Step 2

Change the color theme of the website ( choose 2 colors to create a gradient ):

Go to `app/styles/abstracts/_variables.scss` and only change the values on this classes `$primary-color` and `$secondary-color` to your prefered HEX color

```scss
// Defaut values
$primary-color: #02aab0;
$secondary-color: #00cdac;
```

---

## Technologies used

- [Ember.js](https://emberjs.com/) - JavaScript Framework
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-end component library
- [Tailwind](https://tailwindcss.com/) - Utility-First CSS Framework
- [Sass](https://sass-lang.com/documentation) - CSS extension language
- [ScrollReveal](https://www.npmjs.com/package/scrollreveal) - JavaScript library
- [VanillaTilt](https://www.npmjs.com/package/vanilla-tilt) - JavaScript library
- [Jump.js](https://www.npmjs.com/package/jump.js) - JavaScript library

## Authors

- **Michael Serna** - [https://github.com/sernadesigns](https://github.com/sernadesigns)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

I was motivated to create this project after seeing the Simplefolio that [Jacobo Martinez](https://github.com/cobimr) created and shared with the [ZTM Community](https://github.com/zero-to-mastery) and [Andrei](https://github.com/aneagoie)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/sernadesigns/simplefolio-ember.git` this repository
* `cd simplefolio-ember`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test` to run all tests in CI mode in headless Chrome
* `npm run test-server` or `ember test --server` to run all tests in the Chrome browser
* `npm run test-acceptance` to run only acceptance tests
* `npm run test-integration` to run only integration tests
* `npm run test-unit` to run only unit tests

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

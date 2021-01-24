<script>
  import { dark } from "./store"; // dark mode

  import AppearanceToggler from "./AppearanceToggler.svelte";

  export let title;

  const colors = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink"
  ];
  const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  let color = randomColor();
  let shade = randomShade();

  function clickMe() {
    color = randomColor();
    shade = randomShade();
  }

  function randomColor() {
    return colors[randomRange(0, colors.length - 1)];
  }

  function randomShade() {
    return shades[randomRange(0, shades.length - 1)];
  }

  function randomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<!-- Note: "class:dark" is equivalent (and short for) "class:dark={dark}" or "class:dark={dark === true}" -->
<main
  class="bg-gradient-to-br"
  class:dark
  class:from-blue-700={$dark}
  class:to-purple-800={$dark}
  class:from-yellow-200={!$dark}
  class:to-pink-300={!$dark}>
  <div class="flex flex-col items-center justify-center min-h-screen space-y-8">
    <div class:text-pink-100={$dark} class:text-pink-900={!$dark}>
      <h1 class="hello leading-tight">{title}</h1>
      Visit the
      <a
        href="https://svelte.dev/tutorial"
        class="border-b-4 border-dashed border-opacity-30
        hover:border-opacity-100"
        class:border-pink-100={$dark}
        class:border-pink-900={!$dark}>
        Svelte tutorial
      </a>
      to learn how to build Svelte apps.
    </div>
    <div class="flex items-center">
      <AppearanceToggler />
    </div>
    <div
      class="border-4 border-dashed max-w-sm p-4 rounded-lg space-y-2 {`border-${color}-${shade}`}">
      <p class:text-pink-100={$dark} class:text-pink-900={!$dark}>
        This next button demonstrates the use of
        <span class="highlight">@apply</span>
        . See
        <span class="highlight">global.css</span>
        for examples.
      </p>
      <button type="button" class="custom-btn" on:click={() => clickMe()}>
        Click Me
      </button>
    </div>

    <!-- Tailwind typography plugin -->
    <article
      class="p-8 text-left"
      class:bg-white={!$dark}
      class:text-black={!$dark}
      class:bg-black={$dark}
      class:text-white={$dark}>
      <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
        <p class="lead">
          Until now, trying to style an article, document, or blog post with
          Tailwind has been a tedious task that required a keen eye for
          typography and a lot of complex custom CSS.
        </p>
        <p>
          By default, Tailwind removes all of the default browser styling from
          paragraphs, headings, lists and more. This ends up being really useful
          for building application UIs because you spend less time undoing
          user-agent styles, but when you
          <em>really are</em>
          just trying to style some content that came from a rich-text editor in
          a CMS or a markdown file, it can be surprising and unintuitive.
        </p>
        <p>
          We get lots of complaints about it actually, with people regularly
          asking us things like:
        </p>
        <blockquote>
          <p>
            Why is Tailwind removing the default styles on my
            <code>h1</code>
            elements? How do I disable this? What do you mean I lose all the
            other base styles too?
          </p>
        </blockquote>
        <p>
          We hear you, but we're not convinced that simply disabling our base
          styles is what you really want. You don't want to have to remove
          annoying margins every time you use a
          <code>p</code>
          element in a piece of your dashboard UI. And I doubt you really want
          your blog posts to use the user-agent styles either — you want them to
          look
          <em>awesome</em>
          , not awful.
        </p>
        <p>
          The
          <code>@tailwindcss/typography</code>
          plugin is our attempt to give you what you
          <em>actually</em>
          want, without any of the downsides of doing something stupid like
          disabling our base styles.
        </p>
        <p>
          It adds a new
          <code>prose</code>
          class that you can slap on any block of vanilla HTML content and turn
          it into a beautiful, well-formatted document:
        </p>
        <pre>
          <code class="language-html text-left">
            &lt;article class="prose"&gt; &lt;h1&gt;Garlic bread with cheese:
            What the science tells us&lt;/h1&gt; &lt;p&gt; For years parents
            have espoused the health benefits of eating garlic bread with cheese
            to their children, with the food earning such an iconic status in
            our culture that kids will often dress up as warm, cheesy loaf for
            Halloween. &lt;/p&gt; &lt;p&gt; But a recent study shows that the
            celebrated appetizer may be linked to a series of rabies cases
            springing up around the country. &lt;/p&gt; &lt;!-- ... --&gt;
            &lt;/article&gt;
          </code>
        </pre>
        <p>Hopefully that looks good enough to you.</p>
        <h3>What about nested lists?</h3>
        <p>
          Nested lists basically always look bad which is why editors like
          Medium don't even let you do it, but I guess since some of you
          goofballs are going to do it we have to carry the burden of at least
          making it work.
        </p>
        <ol>
          <li>
            <strong>Nested lists are rarely a good idea.</strong>
            <ul>
              <li>
                You might feel like you are being really "organized" or
                something but you are just creating a gross shape on the screen
                that is hard to read.
              </li>
              <li>
                Nested navigation in UIs is a bad idea too, keep things as flat
                as possible.
              </li>
              <li>
                Nesting tons of folders in your source code is also not helpful.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Since we need to have more items, here's another one.
            </strong>
            <ul>
              <li>
                I'm not sure if we'll bother styling more than two levels deep.
              </li>
              <li>
                Two is already too much, three is guaranteed to be a bad idea.
              </li>
              <li>If you nest four levels deep you belong in prison.</li>
            </ul>
          </li>
          <li>
            <strong>
              Two items isn't really a list, three is good though.
            </strong>
            <ul>
              <li>
                Again please don't nest lists if you want people to actually
                read your content.
              </li>
              <li>Nobody wants to look at this.</li>
              <li>I'm upset that we even have to bother styling this.</li>
            </ul>
          </li>
        </ol>
        <p>
          The most annoying thing about lists in Markdown is that
          <code>&lt;li&gt;</code>
          elements aren't given a child
          <code>&lt;p&gt;</code>
          tag unless there are multiple paragraphs in the list item. That means
          I have to worry about styling that annoying situation too.
        </p>
        <ul>
          <li>
            <p>
              <strong>For example, here's another nested list.</strong>
            </p>
            <p>But this time with a second paragraph.</p>
            <ul>
              <li>
                These list items won't have
                <code>&lt;p&gt;</code>
                tags
              </li>
              <li>Because they are only one line each</li>
            </ul>
          </li>
          <li>
            <p>
              <strong>
                But in this second top-level list item, they will.
              </strong>
            </p>
            <p>
              This is especially annoying because of the spacing on this
              paragraph.
            </p>
            <ul>
              <li>
                <p>
                  As you can see here, because I've added a second line, this
                  list item now has a
                  <code>&lt;p&gt;</code>
                  tag.
                </p>
                <p>This is the second line I'm talking about by the way.</p>
              </li>
              <li>
                <p>
                  Finally here's another list item so it's more like a list.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              A closing list item, but with no nested list, because why not?
            </p>
          </li>
        </ul>
        <p>And finally a sentence to close off this section.</p>
        <h2>There are other elements we need to style</h2>
        <p>
          I almost forgot to mention links, like
          <a href="https://tailwindcss.com">
            this link to the Tailwind CSS website
          </a>
          . We almost made them blue but that's so yesterday, so we went with
          dark gray, feels edgier.
        </p>
        <p>We even included table styles, check it out:</p>
        <table>
          <thead>
            <tr>
              <th>Wrestler</th>
              <th>Origin</th>
              <th>Finisher</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bret "The Hitman" Hart</td>
              <td>Calgary, AB</td>
              <td>Sharpshooter</td>
            </tr>
            <tr>
              <td>Stone Cold Steve Austin</td>
              <td>Austin, TX</td>
              <td>Stone Cold Stunner</td>
            </tr>
            <tr>
              <td>Randy Savage</td>
              <td>Sarasota, FL</td>
              <td>Elbow Drop</td>
            </tr>
            <tr>
              <td>Vader</td>
              <td>Boulder, CO</td>
              <td>Vader Bomb</td>
            </tr>
            <tr>
              <td>Razor Ramon</td>
              <td>Chuluota, FL</td>
              <td>Razor's Edge</td>
            </tr>
          </tbody>
        </table>
        <p>
          We also need to make sure inline code looks good, like if I wanted to
          talk about
          <code>&lt;span&gt;</code>
          elements or tell you the good news about
          <code>@tailwindcss/typography</code>
          .
        </p>
        <h3>
          Sometimes I even use
          <code>code</code>
          in headings
        </h3>
        <p>
          Even though it's probably a bad idea, and historically I've had a hard
          time making it look good. This
          <em>"wrap the code blocks in backticks"</em>
          trick works pretty well though really.
        </p>
        <p>
          Another thing I've done in the past is put a
          <code>code</code>
          tag inside of a link, like if I wanted to tell you about the
          <a href="https://github.com/tailwindcss/docs">
            <code>tailwindcss/docs</code>
          </a>
          repository. I don't love that there is an underline below the
          backticks but it is absolutely not worth the madness it would require
          to avoid it.
        </p>
        <h4>
          We haven't used an
          <code>h4</code>
          yet
        </h4>
        <p>
          But now we have. Please don't use
          <code>h5</code>
          or
          <code>h6</code>
          in your content, Medium only supports two heading levels for a reason,
          you animals. I honestly considered using a
          <code>before</code>
          pseudo-element to scream at you if you use an
          <code>h5</code>
          or
          <code>h6</code>
          .
        </p>
        <p>
          We don't style them at all out of the box because
          <code>h4</code>
          elements are already so small that they are the same size as the body
          copy. What are we supposed to do with an
          <code>h5</code>
          , make it
          <em>smaller</em>
          than the body copy? No thanks.
        </p>
        <h3>We still need to think about stacked headings though.</h3>
        <h4>
          Let's make sure we don't screw that up with
          <code>h4</code>
          elements, either.
        </h4>
        <p>
          Phew, with any luck we have styled the headings above this text and
          they look pretty good.
        </p>
        <p>
          Let's add a closing paragraph here so things end with a decently sized
          block of text. I can't explain why I want things to end that way but I
          have to assume it's because I think things will look weird or
          unbalanced if there is a heading too close to the end of the document.
        </p>
        <p>
          What I've written here is probably long enough, but adding this final
          sentence can't hurt.
        </p>
      </div>
    </article>
  </div>
</main>

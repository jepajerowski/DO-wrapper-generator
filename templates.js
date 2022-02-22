const templateList = [
  {
    name: "Pull quote",
    fields: [
      { name: "Text", type: "textarea" },
      { name: "Speaker" },
      { name: "Affiliation" },
    ],
    html: `
<div class="text-black-gray text-decoration-none">
  <div class="quotation bg-transparent">
    <img src="/specs/products/aaas/releasedAssets/images/quotation-mark.svg" alt="quotation mark" class="quotation__img"/>
    <div class="quotation__text">{{{Text}}}</div>
    <ul class="quotation__source list-inline">
      <li class="list-inline-item text-bold">
        <strong class="font-weight-bold">{{{Speaker}}}</strong>
      </li>
      <li class="list-inline-item">{{{Affiliation}}}</li>
    </ul>
  </div>
</div>
    `
  },
  {
    name: "Grey boxed text",
    fields: [
      { name: "Text", type: "textarea" },
    ],
    html: `
<div class="mb-4">
  <div class="bg-very-light-gray p-3">
    <span class="text-sm letter-spacing-default">{{{Text}}}</span>
  </div>
</div>
    `
  },
  {
    name: "Sans serif text",
    fields: [
      {
        name: "Text",
        type: "textarea",
        note: "Enclose bold text in a <strong> </strong> tag."
      },
    ],
    html: `
<div class="mb-4">
    <span class="text-sm letter-spacing-default">{{{Text}}}</span>
</div>
    `
  },
  {
    name: "Inline list of links",
    fields: [],
    child: {
      fields: [
        { name: "Target" },
        { name: "Link text" }
      ],
      html: `
  <a href="{{{Target}}}" class="text-decoration-none text-primary my-2 pr-2 mr-2 border-light-gray text-xxs text-uppercase font-weight-bold border-right">
    {{{Link text}}}
  </a>
      `
    },
    html: `
<div class="d-flex flex-wrap">
{{{Child}}}
</div>
    `
  },
  {
    name: "Single Stat",
    fields: [
      {
        name: "Position",
        type: "options",
        options: [
          ["Column width", ""],
          ["Half column, left", " half float-left"],
          ["Half column, right", " half float-right"],
        ],
        default: ""
      },
      { name: "Statistic" },
      { name: "Content text", type: "textarea" },
    ],
    html: `
<div class="news-article__stat{{{Position}}}">
  <h3 class="text-primary mb-0">{{{Statistic}}}</h3>
  <p class="font-weight-bold">
{{{Content text}}}
  </p>
</div>
    `
  },
  {
    name: "Multiple Stats (full column)",
    fields: [],
    child: {
      fields: [
        { name: "Statistic" },
        { name: "Content text", type: "textarea" }
      ],
      html: `
  <div class="news-article__stat">
    <h3 class="text-primary mb-0">{{{Statistic}}}</h3>
    <p class="font-weight-bold">
{{{Content text}}}
    </p>
  </div>
      `
    },
    html: `
<div class="multiple-stats">
{{{Child}}}
</div>
    `
  },
  {
    name: "Multiple Stats (half column)",
    fields: [
        {
        name: "Position",
        type: "options",
        options: [
          ["Half column, left", " half float-left"],
          ["Half column, right", " half float-right"],
        ],
        default: " half float-left"
      },
      ],
    child: {
      fields: [
        { name: "Statistic" },
        { name: "Content text", type: "textarea" }
      ],
      htmlFirst: `
  <div class="news-article__stat mt-0 text-left">
    <h3 class="text-primary mb-0">{{{Statistic}}}</h3>
    <p class="font-weight-bold">
{{{Content text}}}
    </p>
  </div>
      `,
      html: `
  <div class="news-article__stat mb-1_5x text-left">
    <h3 class="text-primary mb-0">{{{Statistic}}}</h3>
    <p class="font-weight-bold">
{{{Content text}}}
    </p>
  </div>
      `
    },
    html: `
<div class="multiple-stats{{{Position}}}">
{{{Child}}}
</div>
    `
  },
  {
    name: "Multiple Stats (half column, boxed)",
    fields: [
    {
        name: "Position",
        type: "options",
        options: [
          ["Half column, left", " half float-left"],
          ["Half column, right", " half float-right"],
        ],
        default: " half float-left"
      },
      { name: "Box Title" },
    ],
    child: {
      fields: [
        { name: "Statistic" },
        { name: "Content text", type: "textarea" }
      ],
      htmlFirst: `
  <div class="news-article__stat mt-0 text-left">
    <h3 class="text-primary mb-0">{{{Statistic}}}</h3>
    <p class="font-weight-bold">
{{{Content text}}}
    </p>
  </div>
      `,
      html: `
  <div class="news-article__stat mb-1_5x text-left">
    <h3 class="text-primary mb-0">{{{Statistic}}}</h3>
    <p class="font-weight-bold">
{{{Content text}}}
    </p>
  </div>
      `
    },
    html: `
<div class="multiple-stats{{{Position}}} bg-very-light-gray px-1x pt-1_5x mb-2 mb-sm-1_5x">
  <h2 class="h4 title--decorated mb-1x"><span class="text-uppercase mr-2">{{{Box Title}}}</span></h2>
{{{Child}}}
</div>
    `
  },
    {
    name: "NIB item",
    fields: [
      { name: "Overline Text" },
      { name: "Title" },
      { name: "Content text", type: "textarea" }
    ],
    html: `
<div class="mb-2x">
  <span class="font-weight-bold text-primary text-xxs text-uppercase">{{{Overline Text}}}</span>
  <h2 class="mb-1x"><span class="mr-2">{{{Title}}}</span></h2>
  <p>
{{{Content text}}}
  </p>
</div>
    `
  },
  {
    name: "NIB item with image",
    fields: [
      { name: "Overline Text" },
      { name: "Title" },
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" },
      { name: "Content text", type: "textarea" },
    ],
    html: `
<div class="mb-2x">
  <span class="font-weight-bold text-primary text-xxs text-uppercase">{{{Overline Text}}}</span>
  <h2 class="mb-1x"><span class="mr-2">{{{Title}}}</span></h2>
  <figure class="news-article__figure border-light-gray {{{Position}}}">
  <div class="news-article__figure__image__wrapper">
    <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}}<span class="text-xxs ml-1 text-uppercase">{{{Credit Text}}}</span></span>
  </figcaption>
</figure>
  <p>
{{{Content text}}}
  </p>
</div>
    `
  },
  {
    name: "Tracker (In Other News box)",
    fields: [
      { name: "Box Title", default: "In other news" }
    ],
    child: {
      fields: [
        { name: "Title" },
        { name: "Content text", type: "textarea" }
      ],
      html: `
  <p><strong class="mr-1 text-uppercase">{{{Title}}}</strong>{{{Content text}}}</p>
      `
    },
    html: `
<div class="news-article__tracker bg-very-light-gray px-1x py-1_5x mb-2x">
  <h2 class="h4 title--decorated mb-1x"><span class="text-uppercase mr-2">{{{Box Title}}}</span></h2>
{{{Child}}}
</div>
    `
  },
  {
    name: "Sidebar (Related Story box)",
    fields: [
      { name: "Box Title", default: "Related story" },
      { name: "Title" },
      { name: "Author Name" },
      { name: "Author Page URL" },
      {
        name: "Text",
        type: "textarea",
        note: "Enclose each paragraph of the text in a <P> </P> tag."
      }
    ],
    html: `
<div class="news-article__tracker bg-very-light-gray news-article__tracker--related-story px-1x pt-2 pb-1_5x pb-md-2x mb-2x border-left border-thick border-black-gray">
  <span class="font-weight-bold text-primary text-xxs text-uppercase">{{{Box Title}}}</span>
  <h2 class="my-0"><span class="mr-2">{{{Title}}}</span></h2>
  <span class="text-gray text-xxs text-uppercase">By <a href="{{{Author Page URL}}}" class="news-article__hero__bottom-meta-link" title="{{{Author Name}}}">{{{Author Name}}}</a></span>
  <div class="mt-2">
{{{Text}}}
  </div>
</div>
    `
  },
  {
    name: "In Focus (figure)",
    fields: [
      { name: "Title", default: "In Focus" },
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Figure Credit" }
    ],
    html: `
<div class="news-article__tracker bg-very-light-gray px-1x py-1_5x mb-2x">
  <h2 class="h4 title--decorated mb-1x"><span class="text-uppercase mr-2">{{{Title}}}</span></h2>
  <figure class="news-article__tracker news-article__figure plain my-0">
    <div class="news-article__figure__image__wrapper"><img class="news-article__figure__image mb-2" src="{{{Image URL}}}" alt="{{{Alt Text}}}" /></div>
    <figcaption class="news-article__figure__caption text-sm letter-spacing-default">{{{Figure Caption}}}<span class="text-xxs text-uppercase ml-1">{{{Figure Credit}}}</span></figcaption>
  </figure>
</div>
    `
  },
  {
    name: "Section lead-in style (for News Features)",
    fields: [
      { name: "Lead-In Text" },
      { name: "Rest of Paragraph", type: "textarea" }
    ],
    html: `
<p><span class="section-break-style">{{{Lead-In Text}}}</span>&nbsp;{{{Rest of Paragraph}}}</p>
    `
  },
  {
    name: "Intro Paragraph (for Technology Features)",
    fields: [
      { name: "Paragraph", type: "textarea" }
    ],
    html: `
<div class="intro">{{{Paragraph}}}</div>
    `
  },
  {
    name: "Q&A Style",
    fields: [
      { name: "Question" },
      { name: "Answer", type: "textarea" }
    ],
    html: `
<h3>Q: {{{Question}}}</h3>
<p><strong class="sans-serif font-weight-bold">A:</strong>&nbsp;{{{Answer}}}</p>
    `
  },
  {
    name: "Reader response",
    fields: [
      {
        name: "Response",
        type: "textarea",
        note: "Enclose each paragraph of the text in a <p> </p> tag."
      },
    ],
    child: {
      fields: [
        { name: "Author Name" },
        { name: "Affiliation" }
      ],
      html: `
<div class="responseAuthor"><span class="name">{{{Author Name}}},</span> <span class="affiliation">{{{Affiliation}}}</span></div>
      `
    },
    html: `
{{{Response}}}
{{{Child}}}
    `
  },
  {
    name: "Nested response to reader response",
    fields: [
      {
        name: "Nested Response",
        type: "textarea",
        note: "Enclose each paragraph of the text in a <p> </p> tag."
      },
    ],
    child: {
      fields: [
        { name: "Author Name" }
      ],
      html: `
<div class="responseAuthor"><span class="name">{{{Author Name}}}</span></div>
      `
    },
    html: `
    <div class="nested">
      <div class="font-italic">
        {{{Nested Response}}}
      </div>
      {{{Child}}}
    </div>
    `
  },
  {
    name: "Corresponding article",
    fields: [
      { name: "Box Title", default: "Corresponding article" },
      { name: "Article URL" },
      { name: "Title" },
      { name: "Journal URL" },
      { name: "Journal Title" },
      { name: "Volume and Number" },
      { name: "Date and Time" },
      { name: "Pages" }
    ],
    child: {
      fields: [
        { name: "Author" }
      ],
      html: `<li class="list-inline-item"><span class="hlFld-ContribAuthor">{{{Author}}}</span></li>`,
      singleLine: true
    },
    html: `
<div class="mb-4 mt-1">
  <article class="news-article__correspond card bg-very-light-gray border-left border-thick border-dark p-3 border-top-0 border-right-0 border-bottom-0">
    <span class="text-xxs text-primary font-weight-bold text-uppercase mb-1">{{{Box Title}}}</span><undefined class="news-article__correspond-title text-md font-weight-bold letter-spacing-default mb-2"><a href="{{{Article URL}}}" title="{{{Title}}}" class="text-reset animation-underline">{{{Title}}}</a></undefined>
    <div class="card-meta d-inline-block align-middle text-uppercase text-gray">
      <div data-visible-items="2" data-truncate-less="less" data-truncate-more="authors" class="card-contribs card-meta__item authors d-inline text-gray mr-2 authors-truncate comma-separated"><span>By</span><ul class="list-inline" title="list of authors">{{{Child}}}<span class="list-inline-item authors-toggle"><button class="btn btn-xs btn-outline-secondary btn-authors-truncate ml-1">fewer</button></span>
        </ul>
      </div>
      <span class="card-meta__item bullet-left"><a href="{{{Journal URL}}}" class="text-gray">{{{Journal Title}}}</a></span><span class="card-meta__item bullet-left">{{{Volume and Number}}}</span><span class="card-meta__item bullet-left"><time>{{{Date and Time}}}</time><span>&nbsp;: {{{Pages}}}</span></span>
    </div>
  </article>
</div>
    `
  },
  {
    name: "Figure: Graphic",
    fields: [
      {
        name: "Position",
        type: "options",
        options: [
          ["Column width", ""],
          ["Half column, left", "half float-left"],
          ["Half column, right", "half float-right"],
          ["1/3 column, left", "third float-left"],
          ["1/3 column, right", "third float-right"],
        ],
        default: ""
      },
      { name: "Graphic hed" },
      { name: "Graphic explainer", type: "textarea" },
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Credit Text" }
    ],
    html: `
<figure class="news-article__figure border-light-gray {{{Position}}}">
  <figcaption class="news-article__figure__upper-caption">
    <h3 class="text-lg letter-spacing-default">{{{Graphic hed}}}</h3>
    <p>{{{Graphic explainer}}}</p>
  </figcaption>
  <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image">
  <figcaption class="news-article__figure__caption mt-2">
    <span class="text-xxs text-gray text-uppercase">{{{Credit Text}}}</span>
  </figcaption>
</figure>
    `
  },
  {
    name: "Figure: Image",
    fields: [
      {
        name: "Position",
        type: "options",
        options: [
          ["Column width", ""],
          ["Half column, left", "half float-left"],
          ["Half column, right", "half float-right"],
          ["1/3 column, left", "third float-left"],
          ["1/3 column, right", "third float-right"]
        ],
        default: ""
      },
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" }
    ],
    html: `
<figure class="news-article__figure border-light-gray {{{Position}}}">
  <div class="news-article__figure__image__wrapper">
    <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}}<span class="text-xxs ml-1 text-uppercase">{{{Credit Text}}}</span></span>
  </figcaption>
</figure>
    `
  },
  {
    name: "Figure: Image without caption (headshot)",
    fields: [
      {
        name: "Position",
        type: "options",
        options: [
          ["Column width", ""],
          ["Half column, left", "half float-left"],
          ["Half column, right", "half float-right"],
          ["1/3 column, left", "third float-left"],
          ["1/3 column, right", "third float-right"]
        ],
        default: "third float-left"
      },
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Credit Text" }
    ],
    html: `
<figure class="news-article__figure border-light-gray {{{Position}}} plain">
  <div class="news-article__figure__image__wrapper">
    <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-xxs text-gray letter-spacing-default text-uppercase">{{{Credit Text}}}</span>
  </figcaption>
</figure>
    `
  },
  {
    name: "News Feature Image (wider than column)",
    fields: [
      {
        name: "Width",
        type: "options",
        options: [
          ["Wider than column", "news-article__figure--container-width"],
          ["Full-width", "news-article__figure--page-width"],
        ],
        default: "news-article__figure--container-width"
      },
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" }
    ],
    html: `
<div class="{{{Width}}}">
  <figure class="news-article__figure border-light-gray plain border-bottom pb-3">
    <div class="news-article__figure__image__wrapper">
      <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image mb-2">
    </div>
    <figcaption class="news-article__figure__caption">
      <span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}} <span class="text-xxs ml-1 text-uppercase">{{{Credit Text}}}</span></span>
    </figcaption>
  </figure>
</div>
    `
  },
  {
    name: "News Feature Graphic (wider than column)",
    fields: [
    {
        name: "Width",
        type: "options",
        options: [
          ["Wider than column", "news-article__figure--container-width"],
          ["Full-width", "news-article__figure--page-width"],
        ],
        default: "news-article__figure--container-width"
      },
      { name: "Graphic hed" },
      { name: "Graphic explainer", type: "textarea" },
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Credit Text" }
    ],
    html: `
<div class="{{{Width}}}">
   <figure class="news-article__figure border-light-gray">
      <figcaption class="news-article__figure__upper-caption mb-1x">
        <h3 class="text-lg letter-spacing-default">{{{Graphic hed}}}</h3>
        <p>{{{Graphic explainer}}}</p>
    </figcaption>
     <div class="news-article__figure__image__wrapper"><img class="news-article__figure__image mb-2" src="{{{Image URL}}}" alt="{{{Alt Text}}}" /></div>
     <figcaption class="news-article__figure__caption"><span class="text-xxs text-uppercase text-gray">{{{Credit Text}}}</span></figcaption>
   </figure>
</div>
    `
  },
    {
    name: "News Feature Paired Images (full-width)",
    fields: [
      { name: "Image URL Left" },
      { name: "Alt Text Left" },
      { name: "Image URL Right" },
      { name: "Alt Text Right" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" }
    ],
    html: `
<figure class="news-article__figure border-light-gray  plain border-bottom pb-3">
  <div class="news-article__figure__two-figures">
    <div class="news-article__figure__image__wrapper">
      <img src="{{{Image URL Left}}}" alt="{{{Alt Text Left}}}" class="news-article__figure__image">
    </div>
    <div class="news-article__figure__image__wrapper">
      <img src="{{{Image URL Right}}}" alt="{{{Alt Text Right}}}" class="news-article__figure__image">
    </div>
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}} <span class="text-xxs text-uppercase">{{{Credit Text}}}</span></span>
  </figcaption>
</figure>
    `
  },
  {
    name: "Slideshow",
    fields: [],
    child: {
      fields: [
        { name: "Image URL" },
        { name: "Alt Text" },
        { name: "Figure Caption", type: "textarea" },
        { name: "Credit Text" }
      ],
      html: `
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="news-article__figure-img-wrapper">
              <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure-img">
              <div class="news-article__figure-caption d-none"><span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}}<span class="text-xxs text-uppercase">{{{Credit Text}}}</span></span></div>
            </div>
          </div>
        </div>
      `
    },
    html: `
<div class="news-article__slideshow__wrapper">
  <a href="#afterSlideshow-vlb" class="sr-only sr-only-focusable">Skip slideshow</a>
  <div class="news-article__slideshow mb-2">
    <div class="swiper-container-wrapper">
      <div data-loop="true" data-items="1" data-slideby="1" data-autoheight="false" data-responsive="" data-speed="2000" data-autoplay="false" data-animation="slide" data-indicators="true" data-arrow="true" data-controls="true" data-stagepadding="0" data-label="Slideshow" class="swiper-container" data-pause-slide="Pause slideshow" data-play-slide="Play slideshow" data-go-to-slide="Go to slide:" data-next-slide="Go to next slide" data-prev-slide="Go to previous slide">
{{{Child}}}
      </div>
      <div class="swiper-button-container">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
  <figcaption class="border-light-gray pb-2"></figcaption>
  <div class="swiper-pagination"></div>
  <span id="afterSlideshow-vlb" tabindex="-1"></span>
</div>
    `
  },
  {
    name: "Table",
    fields: [
      {
        name: "Position",
        type: "options",
        options: [
          ["Column width", ""],
          ["Half column, left", "half float-left"],
          ["Half column, right", "half float-right"],
          ["1/3 column, left", "third float-left"],
          ["1/3 column, right", "third float-right"]
        ],
        default: "half float-left"
      },
      { name: "Figure Title" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" },
      { 
        name: "Contents", 
        type: "table",
        note: "Paste table contents as comma-separated values (CSV)."},
    ],
    html: `
<figure class="news-article__figure border-light-gray {{{Position}}}">
  <figcaption class="news-article__figure__upper-caption">
    <h3 class="text-lg letter-spacing-default">{{{Figure Title}}}</h3>
    <p>{{{Figure Caption}}}</p>
  </figcaption>
  <div class="news-article__figure__image__wrapper">
    <table class="mb-2 table">
      <tbody>
{{{Contents}}}
      </tbody>
    </table>
  </div>
  <figcaption class="news-article__figure__caption mt-2"><span class="text-xxs text-gray text-uppercase">{{{Credit Text}}}</span></figcaption>
</figure>
    `
  },
    {
    name: "Static page image",
    fields: [
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Credit Text (optional)" }
    ],
    html: `
<figure class="mb-1x">
 <div class="figure__wrapper">
  <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="w-100">
 <figcaption class="mt-2 text-xxs text-uppercase text-gray sans-serif">{{{Credit Text (optional)}}}</figcaption>
 </div>
</figure>
    `
  },
  {
  name: "Careers Column Logos",
  fields: [
      {
        name: "Column",
        type: "options",
        options: [
          ["Career Fables", `
<figure class="news-article__figure border-light-gray third float-left plain border-bottom pb-3">
  <div class="news-article__figure__image__wrapper">
    <img src="/pb-assets/images/careers/career_fables_720x720.jpg" alt="Career Fables logo" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">Career Fables are fictional stories to guide you in your real-life career journey. <span class="text-xxs text-uppercase">grmarc/iStock, adapted by C.&nbsp;Aycock/<cite>Science</cite></span></span>
  </figcaption>
  <div class="mt-2 d-flex justify-content-end btn--more__wrapper">
    <a href="/topic/careers-overline/career-fables" class="btn btn--more animation-icon-shift"><span class="mini-title">View more</span><span aria-hidden="true" class="icon-arrow-right ml-2"></span></a>
  </div>
</figure>
          `],
          ["Experimental Error", `
<figure class="news-article__figure border-light-gray third float-left plain border-bottom pb-3">
  <div class="news-article__figure__image__wrapper">
    <img src="/pb-assets/images/careers/experimental_error_720x720.jpg" alt="Experimental Error logo" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">Experimental Error is a column about the quirky, comical, and sometimes bizarre world of scientific training and careers, written by scientist and comedian Adam Ruben. <span class="text-xxs text-uppercase">Barmaleeva/Shutterstock, adapted by C.&nbsp;Aycock/<cite>Science</cite></span></span>
  </figcaption>
  <div class="mt-2 d-flex justify-content-end btn--more__wrapper">
    <a href="/topic/careers-overline/experimental-error" class="btn btn--more animation-icon-shift"><span class="mini-title">View more</span><span aria-hidden="true" class="icon-arrow-right ml-2"></span></a>
  </div>
</figure>
          `],
          ["Letters to Young Scientists", `
<figure class="news-article__figure border-light-gray third float-left plain border-bottom pb-3">
  <div class="news-article__figure__image__wrapper">
    <img src="/pb-assets/images/careers/letters_to_young_scientists_720x720.jpg" alt="Letters to Young Scientists logo" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">The team-written Letters to Young Scientists column offers training and career advice from within academia. <span class="text-xxs text-uppercase">eduardrobert/iStock, adapted by C.&nbsp;Aycock/<cite>Science</cite></span></span>
  </figcaption>
  <div class="mt-2 d-flex justify-content-end btn--more__wrapper">
    <a href="/topic/careers-overline/letters-young-scientists" class="btn btn--more animation-icon-shift"><span class="mini-title">View more</span><span aria-hidden="true" class="icon-arrow-right ml-2"></span></a>
  </div>
</figure>
          `],
          ["Taken For Granted", `
<figure class="news-article__figure border-light-gray third float-left plain border-bottom pb-3">
  <div class="news-article__figure__image__wrapper">
    <img src="/pb-assets/images/careers/taken_for_granted_720x720.jpg" alt="Taken for Granted logo" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">Taken for Granted is a column about training and career issues from scientific workforce expert Beryl Lieff Benderly. <span class="text-xxs text-uppercase">DenPotisev/iStock, adapted by C.&nbsp;Aycock/<cite>Science</cite></span></span>
  </figcaption>
  <div class="mt-2 d-flex justify-content-end btn--more__wrapper">
    <a href="/topic/careers-overline/taken-granted" class="btn btn--more animation-icon-shift"><span class="mini-title">View more</span><span aria-hidden="true" class="icon-arrow-right ml-2"></span></a>
  </div>
</figure>
          `],
          ["Your Unicorn Career", `
<figure class="news-article__figure border-light-gray third float-left plain border-bottom pb-3">
  <div class="news-article__figure__image__wrapper">
    <img src="/pb-assets/images/careers/your_unicorn_career_720x720.jpg" alt="Your Unicorn Career logo" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">Your Unicorn Career is an advice column about understanding your value and creating professional bliss by career consultant and professional speaker Alaina G. Levine. <span class="text-xxs text-uppercase">Oksanita/iStock, adapted by C.&nbsp;Aycock/<cite>Science</cite></span></span>
  </figcaption>
  <div class="mt-2 d-flex justify-content-end btn--more__wrapper">
    <a href="/topic/careers-overline/your-unicorn-career" class="btn btn--more animation-icon-shift"><span class="mini-title">View more</span><span aria-hidden="true" class="icon-arrow-right ml-2"></span></a>
  </div>
</figure>
          `]
        ],
        default: ""
      },
  ],
  html:`
{{{Column}}}
  `
  },
  {
    name: "Video (YouTube)",
    fields: [
      { name: "Video ID" }
    ],
    html: `
<div class="media-wrap--16x9 mb-4">
  <iframe src="https://www.youtube.com/embed/{{{Video ID}}}" width="100%" frameborder="0" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
</div>
    `
  },
  {
    name: "Video (Brightcove)",
    fields: [
      { name: "Video ID" },
      {
        name: "Aspect Ratio",
        type: "options",
        options: [
          ["16:9", "56.25"],
          ["9:16 (vertical)", "177.778"],
          ["1:1 (square)", "100"]
        ],
        default: "56.25"
      },
      {
        name: "Position",
        type: "options",
        options: [
          ["Column width", ""],
          ["Half column, left", " half float-left"],
          ["Half column, right", " half float-right"],
          ["1/3 column, left", " third float-left"],
          ["1/3 column, right", " third float-right"]
        ],
        default: "",
        note: "Square and vertical videos should be half-col or 1/3-col."
      },
      {
        name: "Is there a caption?",
        type: "options",
        options: [
          ["No", " plain"],
          ["Yes", ""],
        ],
        default: " plain"
      },
      { name: "Caption", type: "textarea", note:"Leave blank if no caption." },
      { name: "Credit Text" },
    ],
    html: `

<figure class="news-article__figure border-light-gray{{{Is there a caption?}}}{{{Position}}}">
  <div class="news-article__figure__image__wrapper">
    <div class="mb-2 news-article__figure__image" style="position: relative; display: block; max-width: 100%;">
      <div style="padding-top: {{{Aspect Ratio}}}%;">
    <iframe src="https://players.brightcove.net/53038991001/Hyrjt3B7x_default/index.html?videoId={{{Video ID}}}" allowfullscreen webkitallowfullscreen mozallowfullscreen style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 100%;">
    </iframe>
      </div>
    </div>
  </div>
  <figcaption class="news-article__figure__caption"><span class="text-sm text-gray letter-spacing-default">{{{Caption}}}<span class="text-xxs ml-1 text-uppercase">{{{Credit Text}}}</span></span></figcaption>
</figure>
    `
  },
  {
    name: "Audio",
    fields: [
      { name: "Audio URL" },
      { name: "Audio Length", note:"Format as mm:ss, e.g. 01:45" },
    ],
    html: `
<div class="mb-1x mt-2x">
    <div class="audio-player larger-icons" data-audio="{{{Audio URL}}}">
        <div class="audio-player__row d-flex align-items-center">
          <button class="btn audio-player__trigger" title="Play" role="button">
            <i class="icon-play audio-player__trigger-play"></i><span class="sr-only audio-player__trigger-play-label">Play</span>
            <i class="icon-pause audio-player__trigger-pause"></i><span class="sr-only audio-player__trigger-pause-label">Pause</span>
          </button>
            <div class="audio-player__navigation d-none d-sm-flex align-items-center mr-3 ml-1">
              <button class="btn audio-player__navigation-backward px-1 mr-1" title="Go ten seconds backward" role="button">
                <i class="icon-media-backward"><span>Skip backwards</span></i><span class="sr-only">Go ten seconds backward</span>
              </button>
              <button class="btn audio-player__navigation-forward px-1" title="Go ten seconds forward" role="button">
                <i class="icon-media-forward"><span>Skip forwards</span></i><span class="sr-only">Go ten seconds forward</span>
              </button>
            </div>
            <div class="audio-player__progress">
                <div class="audio-player__progress-buffer">&nbsp;</div>
                <div class="audio-player__progress-play">&nbsp;</div>
                <div class="audio-player__progress-tooltip text-uppercase text-xss">&nbsp;</div>
                <label class="sr-only" for="audio-progress-38">Progress</label><input id="audio-progress-38" class="audio-player__progress-current" max="100" name="track" type="range" value="50" />
            </div>
            <div class="audio-player__volume">
              <button class="btn audio-player__volume-btn" title="Mute">
                <i class="icon-soundon audio-player__volume-btn-on"></i><span class="sr-only audio-player__volume-btn-on-label">Mute</span>
                <i class="icon-soundoff audio-player__volume-btn-off"></i><span class="sr-only audio-player__volume-btn-off-label">Unmute</span>
              </button>
                <div class="audio-player__volume-control">
                  <label class="sr-only" for="volume-control-38">Volume is at 50%</label><input id="volume-control-38" class="audio-player__volume-control-slider" max="1.0" min="0.0" name="track" step="0.1" type="range" value="0.5" />
                </div>
            </div>
            <div class="audio-player__time d-flex text-xxs text-dark-gray">
                <div class="audio-player__time-current border-right pr-2 mr-2">00:00</div>
                <div class="audio-player__time-total">{{{Audio Length}}}</div>
            </div>
        </div>
    </div>
</div>
    `
  }
];

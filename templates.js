const templateList = [
  {
    name: "Pull quote",
    fields: [
      { name: "Text", type: "textarea" },
      { name: "Author name and affiliation" }
    ],
    html: `
<div class="quotation">
  <img src="/specs/products/aaas/releasedAssets/images/quotation-mark.svg" alt="quotation mark" class="quotation__img">
  <div class="quotation__text">
    <p>
{{{Text}}}
    </p>
  </div>
  <ul class="quotation__source list-inline">
    <li class="list-inline-item">{{{Author name and affiliation}}}</li>
  </ul>
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
    name: "Single Stat (full column)",
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
  {
    name: "Single Stat (half column, left side)",
    fields: [
      { name: "Statistic" },
      { name: "Content text", type: "textarea" }
    ],
    html: `
<div class="news-article__stat half float-left">
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
    name: "Multiple Stats (half column, left side)",
    fields: [],
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
<div class="multiple-stats half float-left">
{{{Child}}}
</div>
    `
  },
  {
    name: "Multiple Stats (half column, left side, grey background)",
    fields: [
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
<div class="multiple-stats half float-left bg-very-light-gray px-1x pt-1_5x mb-2 mb-sm-1_5x">
  <h2 class="h4 title--decorated mb-1x"><span class="text-uppercase mr-2">{{{Box Title}}}</span></h2>
{{{Child}}}
</div>
    `
  },
  {
    name: "News in Brief section (text with title and subtitle)",
    fields: [
      { name: "Overline Text" },
      { name: "Title" },
      { name: "Content text", type: "textarea" }
    ],
    html: `
<span class="font-weight-bold text-primary text-xxs text-uppercase">{{{Overline Text}}}</span>
<h2 class="mb-1x"><span class="mr-2">{{{Title}}}</span></h2>
<p>
{{{Content text}}}
</p>
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
  <p><strong class="mr-1">{{{Title}}}</strong>{{{Content text}}}</p>
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
      { name: "Box Title", default: "RELATED STORY" },
      { name: "Title" },
      { name: "By Author Name" },
      {
        name: "Text",
        type: "textarea",
        note: "Enclose each paragraph of the text in a <P> </P> tag."
      }
    ],
    html: `
<div class="news-article__tracker bg-very-light-gray news-article__tracker--related-story px-1x pt-2 pb-1_5x pb-md-2x mb-2x border-left border-thick border-black-gray">
  <span class="font-weight-bold text-primary text-xxs">{{{Box Title}}}</span>
  <h2 class="my-0"><span class="mr-2">{{{Title}}}</span></h2>
  <span class="text-gray text-xxs text-uppercase">{{{By Author Name}}}</span>
  <div class="mt-2">
{{{Text}}}
  </div>
</div>
    `
  },
  {
    name: "In Focus (figure)",
    fields: [
      { name: "Title", default: "IN FOCUS" },
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
    <figcaption class="news-article__figure__caption text-sm letter-spacing-default">{{{Figure Caption}}}<span class="text-xxs ml-2">{{{Figure Credit}}}</span></figcaption>
  </figure>
</div>
    `
  },
  {
    name: "Section lead-in style (seen in feature template)",
    fields: [
      { name: "Lead-In Text" },
      { name: "Rest of Paragraph", type: "textarea" }
    ],
    html: `
<p class="p2"><span class="section-break-style">{{{Lead-In Text}}}</span>&nbsp;{{{Rest of Paragraph}}}</p>
    `
  },
  {
    name: "Intro Paragraph (for Technology Features)",
    fields: [
      { name: "Paragraph", type: "textarea" }
    ],
    html: `
{{{Paragraph}}}
<hr class="mb-1_5x" />
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
<p><strong class="mr-1 sans-serif font-weight-bold">A:</strong>{{{Answer}}}</p>
    `
  },
  {
    name: "Reader response",
    fields: [
      { name: "Box Title", default: "Responses" },
      {
        name: "Original Response",
        type: "textarea",
        note: "Enclose each paragraph of the text in a <P> </P> tag."
      },
    ],
    child: {
      fields: [
        { name: "Author Name" },
        { name: "Affiliation" }
      ],
      html: `
    <div class="author sans-serif mb-2"><span class="font-weight-bold text-darker-gray text-uppercase text-xs letter-spacing-default mr-1">{{{Author Name}}},</span><span class="text-gray text-xxs letter-spacing-default">{{{Affiliation}}}</span></div>
      `
    },
    html: `
<div class="news-article__nested-reader">
  <h2 class="h4 title--decorated mb-1_5x"><span class="text-uppercase mr-2">{{{Box Title}}}</span></h2>
  <div class="news-article__nested-reader__response mb-2x">
    <div>
{{{Original Response}}}
    </div>
{{{Child}}}
    <!-- Insert nested response here -->
  </div>
</div>
    `
  },
  {
    name: "Nested response to reader response",
    fields: [
      {
        name: "Nested Response",
        type: "textarea",
        note: "Enclose each paragraph of the text in a <P> </P> tag."
      },
    ],
    child: {
      fields: [
        { name: "Author Name" }
      ],
      html: `
      <div class="author sans-serif mb-2"><span class="font-weight-bold text-darker-gray text-uppercase text-xs letter-spacing-default mr-1">{{{Author Name}}}</span></div>
      `
    },
    html: `
    <div class="border-left pl-1x mt-1x">
      <div class="font-italic text-darker-gray">
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
    name: "Figure: Graphic, left side, half-col",
    fields: [
      { name: "Figure Title" },
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" }
    ],
    html: `
<figure class="news-article__figure border-light-gray half float-left">
  <figcaption class="news-article__figure__upper-caption">
    <h3 class="text-lg letter-spacing-default">{{{Figure Title}}}</h3>
    <p>{{{Figure Caption}}}</p>
  </figcaption>
  <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image">
  <figcaption class="news-article__figure__caption mt-2">
    <span class="text-xxs text-gray">{{{Credit Text}}}</span>
  </figcaption>
</figure>
    `
  },
  {
    name: "Figure: Image, left side, half-col",
    fields: [
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" }
    ],
    html: `
<figure class="news-article__figure border-light-gray half float-left ">
  <div class="news-article__figure__image__wrapper">
    <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}}<span class="text-xxs ml-2">{{{Credit Text}}}</span></span>
  </figcaption>
</figure>
    `
  },
  {
    name: "Figure: Image, left side 1/3-col without caption (headshot)",
    fields: [
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Credit Text" }
    ],
    html: `
<figure class="news-article__figure border-light-gray third float-left plain">
  <div class="news-article__figure__image__wrapper">
    <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-xxs text-gray letter-spacing-default">{{{Credit Text}}}</span>
  </figcaption>
</figure>
    `
  },
  {
    name: "Figure: Image, right side, 1/3-col",
    fields: [
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" }
    ],
    html: `
<figure class="news-article__figure border-light-gray third float-right ">
  <div class="news-article__figure__image__wrapper">
    <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}}<span class="text-xxs ml-2">{{{Credit Text}}}</span></span>
  </figcaption>
</figure>
    `
  },
  {
    name: "Figure: Graphic, col-width",
    fields: [
      { name: "Figure Title" },
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" }
    ],
    html: `
<figure class="news-article__figure border-light-gray">
  <figcaption class="news-article__figure__upper-caption">
    <h3 class="text-lg letter-spacing-default">{{{Figure Title}}}</h3>
    <p>{{{Figure Caption}}}</p>
  </figcaption>
  <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image">
  <figcaption class="news-article__figure__caption mt-2">
    <span class="text-xxs text-gray">{{{Credit Text}}}</span>
  </figcaption>
</figure>
    `
  },
  {
    name: "Figure: Image, col-width",
    fields: [
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" }
    ],
    html: `
<figure class="news-article__figure border-light-gray">
  <div class="news-article__figure__image__wrapper">
    <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image mb-2">
  </div>
  <figcaption class="news-article__figure__caption">
    <span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}}<span class="text-xxs ml-2">{{{Credit Text}}}</span></span>
  </figcaption>
</figure>
    `
  },
  {
    name: "Feature Article Figure: Full width with one image",
    fields: [
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" }
    ],
    html: `
<div class="news-article__figure--page-width">
  <figure class="news-article__figure border-light-gray  plain">
    <div class="news-article__figure__image__wrapper">
      <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image mb-2">
    </div>
    <figcaption class="news-article__figure__caption">
      <span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}} <span class="text-xxs letter-spacing-default">{{{Credit Text}}}</span></span>
    </figcaption>
  </figure>
</div>
    `
  },
  {
    name: "Feature Article Figure: Full width with two images",
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
    <span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}} <span class="text-xxs letter-spacing-default">{{{Credit Text}}}</span></span>
  </figcaption>
</figure>
    `
  },
  {
    name: "Feature Article Figure: Wider Than Column",
    fields: [
      { name: "Image URL" },
      { name: "Alt Text" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" }
    ],
    html: `
<div class="news-article__figure--container-width">
  <figure class="news-article__figure border-light-gray  plain border-bottom pb-3">
    <div class="news-article__figure__image__wrapper">
      <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" class="news-article__figure__image mb-2">
    </div>
    <figcaption class="news-article__figure__caption">
      {{{Figure Caption}}} <span class="text-xxs text-gray letter-spacing-default">{{{Credit Text}}}</span>
    </figcaption>
  </figure>
</div>
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
          <div class="swiper-slide">
            <img src="{{{Image URL}}}" alt="{{{Alt Text}}}" data-caption="<span class="text-sm text-gray letter-spacing-default">{{{Figure Caption}}} <span class="text-xxs letter-spacing-default">{{{Credit Text}}}</span></span>" class="news-article__figure-img">
          </div>
      `
    },
    html: `
<div class="news-article__slideshow__wrapper">
  <a href="#afterSlideshow-vlb" class="sr-only sr-only-focusable">Skip slideshow</a>
  <div class="news-article__slideshow mb-2">
    <div class="swiper-container-wrapper">
      <div data-loop="true" data-items="1" data-slideby="1" data-autoheight="false" data-responsive="" data-speed="2000" data-autoplay="false" data-animation="slide" data-indicators="true" data-arrow="true" data-controls="true" data-stagepadding="0" data-label="Slideshow" class="swiper-container" data-pause-slide="Pause slideshow" data-play-slide="Play slideshow" data-go-to-slide="Go to slide:" data-next-slide="Go to next slide" data-prev-slide="Go to previous slide">
        <div class="swiper-wrapper">
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
    name: "Table Figure (half column, right side)",
    fields: [
      { name: "Figure Title" },
      { name: "Figure Caption", type: "textarea" },
      { name: "Credit Text" },
      { name: "Contents", type: "table" }
    ],
    html: `
<figure class="news-article__figure border-light-gray half float-right">
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
  <figcaption class="news-article__figure__caption mt-2"><span class="text-xxs text-gray">{{{Credit Text}}}</span></figcaption>
</figure>
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
  }
];

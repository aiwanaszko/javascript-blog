'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');


  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);

  clickedElement.classList.add('active');


  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');
}


function generateTitleLinks() {
  console.log('Title links have been generated');

  const optArticleSelector = '.post';
  const optTitleSelector = '.post-title';
  const optTitleListSelector = '.titles';
  const optArticleTagsSelector = '.post-tags .list';

    /* remove contents of titlelist */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector);

    let html = '';

    for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');
    console.log(articleId);

    /* find the title element */
    /* get the title from the title element */
    console.log(article.querySelector(optTitleSelector));

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into titleList*/

    html = html + linkHTML;
    console.log(html);

    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);


    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

// call function

generateTitleLinks();

function generateTags(){
  /* find all articles */

  /* START LOOP: for every article: */

    /* find tags wrapper */

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

      /* generate HTML of the link */

      /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();

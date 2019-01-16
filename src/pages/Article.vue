<template>
  <div>
    <content-loader
      :height="160"
      :width="400"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      v-show="isLoading"
    >
      <rect x="88.5" y="17.2" rx="0" ry="0" width="230.46" height="46" />
      <rect x="40.5" y="83.2" rx="0" ry="0" width="323" height="7" />
      <rect x="40.5" y="104.2" rx="0" ry="0" width="323" height="7" />
      <rect x="40.5" y="124.2" rx="0" ry="0" width="323" height="7" />
      <rect x="39.5" y="141.2" rx="0" ry="0" width="323" height="7" />
    </content-loader>
    <div class="container" v-html="this.htmlContent" @click="handleContainerClick">
    </div>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader"

const url = "https://www.interaction-design.org/widgets/articles?ep=usabilitygeek";

export default {
  name: "Article",
  components: {
    ContentLoader
  },
  data() {
    return {
      htmlContent: "",
      lastSlug: "",
      isLoading: true,
      isLoadingMore: false
    }
  },
  mounted()  {
    this.fetchInitialArticles();
  },
  methods: {
    fetchInitialArticles () {
      this.isLoading = true;
      window.fetch(url).then((response) => {
        return response.text()
      }).then((body) => {
        this.htmlContent = body;
        this.lastSlug = this.getLastArticleSlug(body);
        this.isLoading = false;
      }).catch(() => {
        this.isLoading = false;
      })
    },
    handleContainerClick (e) {
      if (e.target.type === 'button') {
        this.handleLoadMoreArticle();
      }
    },
    handleLoadMoreArticle () {
      if (this.isLoadingMore) {
        return;
      }
      this.isLoadingMore = true;
      window.fetch(`https://www.interaction-design.org/widgets/articles/load-more/${this.lastSlug}?ep=usabilitygeek`)
      .then((response) => {
        this.isLoadingMore = false;
        return response.text();
      })
      .then((body) => {
        // append the new articles list
        const newArticles = document.createElement('li');
        newArticles.innerHTML = body;

        const wrapper= document.createElement('div');
        wrapper.innerHTML = this.htmlContent;
        wrapper.querySelector('.articlesWidget__articles').append(newArticles);
        this.htmlContent = wrapper.innerHTML;

        // Update the last slug
        this.lastSlug = this.getLastArticleSlug(body);
      })
      .catch(() => {
        this.isLoadingMore = false;
      })
    },
    getLastArticleSlug(htmlContent) {
      const wrapper= document.createElement('div');
      wrapper.innerHTML = htmlContent;
      const lastArticleUrl = wrapper.querySelector('.article:last-child a').href;
      return lastArticleUrl.split("/").pop().split("?")[0];
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/normalize";

.articlesWidget {
  padding: 0 10px;
}
.articlesWidget__logo {
  display: flex;
  justify-content: center;
}

.articlesWidget__header {
  font-size: 16px;
  font-weight: bold;
  font-stretch: condensed;
  text-transform: uppercase;
  color: #404040;
  display: table-cell;
  border-bottom: 1px solid #009cde;

  &:after {
    content: "";
    display: table-cell;
    width: 100%;
  }
}

.articlesWidget__articles {
  display: flex;
  flex-direction: column;
  list-style: none;

  .article {
    display: flex;
    padding: 10px;
    border-top: 2px solid #dddddd;
    a {
      text-decoration: none;
      font-size: 16px;
      line-height: 1.25;
      color: #404040;
      width: 100%;
    }

    .article__fulltext {
      &:after {
        display: block;
        content: ' ';
        background-image: url('../assets/image/angle-right.svg');
        background-size: 22px 22px;
        height: 22px;
        width: 22px;
        flex-shrink: 0;
        transition: transform .25s cubic-bezier(.175,.885,.32,1.275);
      }

      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .article__title {
      display: flex;
      flex-direction: column;

      .article__publishedTime {
        font-size: 10px;
        font-stretch: condensed;
        color: #848484;
      }
    }

    &:hover {
      background-color: #f9f9f9;


      .article__fulltext {
        &:after {
          transform: translateX(5px);
        }
      }
    }
    transition: background-color .21s cubic-bezier(.455,.03,.515,.955);

  }
}

.articlesWidget__loadMore {
  display: flex;
  justify-content: center;
  padding-top: 10px;

  button {
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
    background-color: #dddddd;

    font-size: 14px;
    font-stretch: condensed;
    text-align: center;
    color: #404040;
    padding: 8px 23px;
  }
}

.articlesWidget__text {
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: #404040;

  a {
    text-decoration: none;
    color: #009cde;
  }
}
</style>

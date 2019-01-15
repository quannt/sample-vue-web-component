<template>
  <div class="container" v-html="this.htmlContent">
  </div>
</template>

<script>
const url = "https://www.interaction-design.org/widgets/articles?ep=usabilitygeek";

export default {
  name: "Article",
  components: {

  },
  data() {
    return {
      htmlContent: ""
    }
  },
  mounted()  {
    window.fetch(url).then((response) => {
      return response.text()
    }).then((body) => {
      this.htmlContent = body;
    })
  }
}
</script>

<style lang="scss">
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

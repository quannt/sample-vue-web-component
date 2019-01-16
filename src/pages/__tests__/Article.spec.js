import { shallowMount } from "@vue/test-utils";
import Article from "../Article.vue";

const htmlContent = `<div class="articlesWidget">
    <div class="articlesWidget__logo">
        <img src="https://public-media.interaction-design.org/images/idf-logo-full.svg" alt="IDF logo" width="200px">
    </div>
    <h2 class="articlesWidget__header">Latest UX daily articles</h2>
    <ul class="articlesWidget__articles">
                    <li class="article">
    <a href="https://www.interaction-design.org/literature/article/don-t-make-me-think-key-learning-points-for-ux-design-for-the-web?ep=usabilitygeek&amp;utm_source=uxdailywidget&amp;utm_medium=widget&amp;utm_campaign=partners&amp;utm_content=usabilitygeek"
       target="_blank"
       class="article__link">
        <div class="article__fulltext">
            <div class="article__title">
                Don’t Make Me Think – Key Learning Points for UX Design for the Web
                <time datetime="1547564400" class="article__publishedTime">
                    1 hour ago
                </time>
            </div>
        </div>
    </a>
</li>
                    <li class="article">
    <a href="https://www.interaction-design.org/literature/article/the-basics-of-recruiting-users-for-usability-testing?ep=usabilitygeek&amp;utm_source=uxdailywidget&amp;utm_medium=widget&amp;utm_campaign=partners&amp;utm_content=usabilitygeek"
       target="_blank"
       class="article__link">
        <div class="article__fulltext">
            <div class="article__title">
                The Basics of Recruiting Users for Usability Testing
                <time datetime="1547553600" class="article__publishedTime">
                    4 hours ago
                </time>
            </div>
        </div>
    </a>
</li>
                    <li class="article">
    <a href="https://www.interaction-design.org/literature/article/7-ux-deliverables-what-will-i-be-making-as-a-ux-designer?ep=usabilitygeek&amp;utm_source=uxdailywidget&amp;utm_medium=widget&amp;utm_campaign=partners&amp;utm_content=usabilitygeek"
       target="_blank"
       class="article__link">
        <div class="article__fulltext">
            <div class="article__title">
                7 UX Deliverables: What will I be making as a UX designer?
                <time datetime="1547553600" class="article__publishedTime">
                    4 hours ago
                </time>
            </div>
        </div>
    </a>
</li>
                    <li class="article">
    <a href="https://www.interaction-design.org/literature/article/when-should-i-conduct-usability-testing-for-a-product?ep=usabilitygeek&amp;utm_source=uxdailywidget&amp;utm_medium=widget&amp;utm_campaign=partners&amp;utm_content=usabilitygeek"
       target="_blank"
       class="article__link">
        <div class="article__fulltext">
            <div class="article__title">
                When Should I Conduct Usability Testing for a Product?
                <time datetime="1547550000" class="article__publishedTime">
                    5 hours ago
                </time>
            </div>
        </div>
    </a>
</li>
            </ul>

    <div class="articlesWidget__loadMore">
        <button type="button">Load more articles</button>
    </div>

    <div class="articlesWidget__text">
        UX Daily is the world's largest free online resource on UX Design by the
        <a href="https://www.interaction-design.org/invite?ep=usabilitygeek&amp;utm_source=uxdailywidget&amp;utm_medium=widget&amp;utm_campaign=partners&amp;utm_content=usabilitygeek" target="_blank">Interaction Design Foundation</a>.

        Become a member and
        <a href="https://www.interaction-design.org/invite?ep=usabilitygeek&amp;utm_source=uxdailywidget&amp;utm_medium=widget&amp;utm_campaign=partners&amp;utm_content=usabilitygeek" target="_blank">
            get 3 months free</a>!
            </div>
</div>`;

beforeEach(function() {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise(resolve => {
      resolve({});
    });
  });
});
describe("Article.vue", () => {
  test("render articles list", () => {
    const wrapper = shallowMount(Article);
    wrapper.setData({ htmlContent: htmlContent, isLoading: false });

    expect(wrapper.findAll(".article")).toHaveLength(4);
  });

  test("renders articles list snapshot correctly", () => {
    const wrapper = shallowMount(Article);
    wrapper.setData({ htmlContent: htmlContent, isLoading: false });

    expect(wrapper.element).toMatchSnapshot();
  });
});

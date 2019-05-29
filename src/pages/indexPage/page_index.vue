<template lang="pug">
	.warp
		.page-thumes
			ul
				li.point(:class="{active : this.currentIndex == 0}")
				li.point(:class="{active : this.currentIndex == 1}")
				li.point(:class="{active : this.currentIndex == 2}")
				li.point(:class="{active : this.currentIndex == 3}")
		div.index(:style="indexStyle")
			IndexSwiper.index-section(:style="sectionStyle")
			FlagshipSpecies.index-section(:style="sectionStyle")
			LatestNews.index-section(:style="sectionStyle")
			PartNers.index-section(:style="sectionStyle")
			FooterTab.index-section(:style="sectionStyle")
</template>
<script>
import FooterTab from "../components/footer_tab.vue";
import FlagshipSpecies from "./indexcomponents/flagship_species.vue";
import LatestNews from "./indexcomponents/latest_news.vue";
import PartNers from "./indexcomponents/partners.vue";
import IndexSwiper from "./indexcomponents/index_swiper.vue";
import { clearTimeout, setTimeout } from 'timers';
export default {
	components: {
		IndexSwiper,
		FlagshipSpecies,
		LatestNews,
		PartNers,
		FooterTab
	},

	computed: {
		getViewPortHeight() {
			return document.documentElement.clientHeight || document.body.clientHeight;
		},

		indexStyle() {
			return {
				transform: `translateY(-${this.currentIndex * this.getViewPortHeight}px)`
			}
		},

		sectionStyle() {
			return {
				height: document.documentElement.clientHeight + 'px' || document.body.clientHeight + 'px',
				width: document.documentElement.clientWidth + 'px' || document.body.clientWidth + 'px'
			}
		}
	},

	data() {
		return {
			scrollTime: 0,
			scrollDaly: 500,
			currentIndex: 0,
		};

	},
	methods: {

		getScrollDelta(e) {;
			e = e || window.event;
			if(e.wheelDelta) {
				return e.wheelDelta > 0
			} else {
				return e.detail> 0
			}
		},

		handleScroll(e) {
			let now = +new Date();
			if(now - this.scrollTime > this.scrollDaly) {
				this.scrollTime = now;
				this.getScrollDelta(e) ? this.currentIndex == 0 ? this.currentIndex = 0 : this.currentIndex-- : this.currentIndex == 3 ? this.currentIndex = 3 : this.currentIndex++;
			} else {
				return false;
			}
		},
		
	},
	mounted() {
		console.log(this.getViewPortHeight);
		window.addEventListener('mousewheel',this.handleScroll, false);
	}
};
</script>

<style lang="scss" scoped>
.warp{
	.page-thumes{
		z-index: 200;
		position: fixed;
		right: 1%;
		top: 40%;
		ul{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100px;
			width: 10px;
			.point{
				width: 5px;
				height: 5px;
				background-color: #c5cbce;
				border-radius: 5px;
			}
			.point.active{
				box-shadow: 0px 0px 2px 4px #8b9695;
			}
		}
	}
	.index{
		overflow: hidden;
		transition: all 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
	}
}
</style>
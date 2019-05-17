<template lang="pug">
	div(class='partners_box')
		div(class='partners_title')
			div(class='partners_title_box')
				div(class="CH_title") 合作伙伴
					p(class="EN_title") 
						i PARTNERS
		div(class='partners_group')
			div(class='partners_list')
				img(class='partners_list_img' src='http://w.wfjjt.top/logo1.png')
			div(class='partners_list')
				img(class='partners_list_img' src='http://w.wfjjt.top/logo2.png')
			div(class='partners_list')
				img(class='partners_list_img' src='http://w.wfjjt.top/logo3.png')
			div(class='partners_list')
				img(class='partners_list_img' src='http://w.wfjjt.top/logo4.png')
			div(class='partners_list')
				img(class='partners_list_img' src='http://w.wfjjt.top/logo5.png')
			div(class='partners_list')
				img(class='partners_list_img' src='http://w.wfjjt.top/logo6.png')
</template>
<script>
export default {
	name: 'partners'
}
</script>
<style lang="scss" scoped>
	.partners_box{
		width: 100%;
		height: 549px;
	}
	.partners_title{
		width: 100%;
		height: 146px;
	}
	.partners_title_box{
		width: 1000px;
		position: relative;
		height: 146px;
		margin: 0 auto;
	}
	.CH_title{
		position: absolute;
		width: 100%;
		height: 56px;
		text-align: center;
		line-height: 56px;
		font-family: PingFangSC-Semibold;
		font-size: 40px;
		color: #2D2F29;
	}
	.EN_title{
		width: 100%;
		height: 43px;
		text-align: center;
		line-height: 43px;
		opacity: 0.93;
		font-family: GillSans-SemiBoldItalic;
		font-size: 36px;
		color: #46787D;
		letter-spacing: 0.6px;
	}
	.partners_group{
		width: 1200px;
		height: 276px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		position: relative;
		margin-bottom: 127px;
	}
	.partners_list{
		width: 338px;
		height: 118px;
		margin-bottom: 40px;
	}  
	.partners_list:nth-child(1),.partners_list:nth-child(4){
		margin-right: 47px;
	}
	.partners_list:nth-child(2),.partners_list:nth-child(5){
		margin-right: 94px;
		margin-left: 47px;
	}
	.partners_list:nth-child(3){
		position:absolute;
		top: 0;
		right:0;
	} 
	.partners_list:nth-child(6) {
		position:absolute;
		top: 158px;
		right:0;
	 }
</style>
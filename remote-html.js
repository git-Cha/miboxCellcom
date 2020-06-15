function getRemoteStyle_mibox2(config) {
   
   const template = config.remote_template;
   const base_url = `/hacsfiles/generic-remote-control-card/remotes/${template}`;    
    
  return `
  ha-card{
    	background-color:transparent;
    	box-shadow:var(--paper-material-elevation-0_-_box-shadow);
    }
    body {
	margin: 0;
	padding: 20px;
	font-family: "Helvetica Neue", Helvetica, Arial, Geneva, sans-serif
}

.container {
	width: 224px;
	margin: 0 auto
}

#remote-control-mibox2 {
	position: relative;
	background: url(${base_url}/remote-back.png) no-repeat;
	width: 153px;
	height: 608px
}

#remote-control-mibox2 h2,
#remote-control-mibox2 span {
	position: absolute;
	left: -5000px
}

#remote-control-mibox2 ul {
	margin: 0;
	padding: 0;
	list-style-type: none
}

#power a,
#microphone a,
#top a,
#clickleft a,
#ok a,
#clickright a,
#bottom a,
#back a,
#live a,
#volumedown a,
#home a,
#volumeup a,
#cellcomtv a,
#netflix a,
#mute a,
#info a {
	position: absolute;
	display: block
}

#remote-control-mibox2 li#power a {
	left: 16px;
	top: 34px;
	width: 45px;
	height: 44px;
	background: url(${base_url}/power.png) no-repeat
}

#remote-control-mibox2 li#power a:hover {
	background-image: url(${base_url}/power_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-mibox2 li#microphone a {
	left: 100px;
	top: 33px;
	width: 44px;
	height: 46px;
	background: url(${base_url}/microphone.png) no-repeat
}

#remote-control-mibox2 li#microphone a:hover {
	background-image: url(${base_url}/microphone_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-mibox2 li#top a {
	width: 16px;
	height: 16px;
	left: 75px;
	top: 93px;
	background: url(${base_url}/top.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#clickleft a {
	left: 28px;
	top: 137px;
	width: 15px;
	height: 15px;
	background: url(${base_url}/clickleft.png) no-repeat
}

#remote-control-mibox2 li#clickleft a:hover {
	background-image: url(${base_url}/clickleft_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-mibox2 li#ok a {
	width: 53px;
	height: 51px;
	left: 54px;
	top: 118px;
	background: url(${base_url}/ok.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#clickright a {
	left: 122px;
	top: 137px;
	width: 15px;
	height: 15px;
	background: url(${base_url}/clickright.png) no-repeat
}

#remote-control-mibox2 li#clickright a:hover {
	background-image: url(${base_url}/clickright_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-mibox2 li#bottom a {
	width: 16px;
	height: 16px;
	left: 73px;
	top: 184px;
	background: url(${base_url}/bottom.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#back a {
	width: 45px;
	height: 46px;	
	left: 16px;	
	top: 210px;
	background: url(${base_url}/left.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#live a {
	width: 46px;
	height: 46px;	
	left: 100px;	
	top: 210px;
	background: url(${base_url}/live.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#volumedown a {
	left: 18px;
	top: 272px;
	width: 43px;
	height: 34px;
	background: url(${base_url}/volumedown.png) no-repeat
}

#remote-control-mibox2 li#volumedown a:hover {
	background-image: url(${base_url}/volumedown_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-mibox2 li#home a {
	width: 54px;
	height: 53px;
	left: 54px;
	top: 261px;
	background: url(${base_url}/home.png) no-repeat 0px 0
}

#remote-control-mibox2 li#volumeup a {
	left: 101px;
	top: 269px;
	width: 44px;
	height: 36px;
	background: url(${base_url}/volume.png) no-repeat
}

#remote-control-mibox2 li#volumeup a:hover {
	background-image: url(${base_url}/volume_over.png);
	background-repeat: no-repeat;
	background-position: 0 0px
}

#remote-control-mibox2 li#cellcomtv a {
	width: 124px;
	height: 27px;
	left: 19px;
	top: 324px;
	background: url(${base_url}/cellcomtv.png) no-repeat 0px 0
}

#remote-control-mibox2 li#netflix a {
	width: 125px;
	height: 30px;
	left: 19px;
	top: 368px;
	background: url(${base_url}/netflix.png) no-repeat 0px 0
}





#remote-control-mibox2 li#source a:hover {
	background-image: url(${base_url}/remote-sitemap.jpg);
	background-repeat: no-repeat;
	background-position: 0 -37px
}

#remote-control-mibox2 li#right a {
	width: 46px;
	height: 45px;
	left: 139px;
	top: 365px;
	background: url(${base_url}/remote-circle3.png) no-repeat -98px -53px
}


#remote-control-mibox2 li#home a:hover {
	background: url(${base_url}/home_over.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#back a:hover {
	background: url(${base_url}/left_over.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#live a:hover {
	background: url(${base_url}/live_over.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#top a:hover {
	background: url(${base_url}/top_over.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#bottom a:hover {
	background: url(${base_url}/bottom_over.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#cellcomtv a:hover {
	background: url(${base_url}/cellcomtv_over.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#netflix a:hover {
	background: url(${base_url}/netflix_over.png) no-repeat 0px 0px
}

#remote-control-mibox2 li#ok a:hover {
	background: url(${base_url}/ok_over.png) no-repeat 0px 0px
}
    
  `;
}

function getRemoteHtml_mibox2(config){
 const template = config.remote_template;
 return `
    
 <div class="container">
            <div style="text-align:center">
			<h1>${config.name}</h1>
			</div>
			<div id="remote-control-mibox2">
				<h2>
					Main navigation
				</h2>
				<ul>
					<li id="power" class="myButton-${template}"><a href="#" title="Power"><span>Power</span></a></li>
					<li id="microphone" class="myButton-${template}"><a href="#" title="microphone"><span>microphone</span></a></li>
					<li id="volumeup" class="myButton-${template}"><a href="#" title="volume"><span>volume</span></a></li>
					<li id="volumedown" class="myButton-${template}"><a href="#" title="volumedown"><span>volumedown</span></a></li>
					<li id="clickleft" class="myButton-${template}"><a href="#" title="clickleft"><span>clickleft</span></a></li>
					<li id="clickright" class="myButton-${template}"><a href="#" title="clickright"><span>clickright</span></a></li>
					
					<li id="live" class="myButton-${template}"><a href="#" title="live"><span>live</span></a></li>
					<li id="cellcomtv" class="myButton-${template}"><a href="#" title="cellcomtv"><span>cellcomtv</span></a></li>
					<li id="netflix" class="myButton-${template}"><a href="#" title="netflix"><span>netflix</span></a></li>
					
				</ul>


				<ul>
					<li class="myButton-${template}" id="home"><a href="#" title="home"><span>home</span></a></li>
					<li class="myButton-${template}" id="back"><a href="#" title="Go back to beginning"><span>back</span></a></li>
					<li class="myButton-${template}" id="top"><a href="#" title="Top of gallery"><span>Top of Gallery</span></a></li>
					<li class="myButton-${template}" id="bottom"><a href="#" title="Bottom of gallery"><span>Bottom of Gallery</span></a></li>
					<li class="myButton-${template}" id="ok"><a href="#" title="OK - start slideshow"><span>OK - start slideshow</span></a></li>
				</ul>
			</div>	
		</div>

`;
}
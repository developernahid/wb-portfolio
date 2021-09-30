
function hero_load_this_config(){var csshero_promise=jQuery.Deferred();window.csshero_theme_is_configurated=false;frame=window.frames['csshero-iframe-main-page'].document.body;is_the7=jQuery('#cssherohtml').attr('data-child-theme-slug');if(is_the7=='the7'){declare_rocket_mode('#main','vc_row , vc_col, vc_row-,wpb_column');}else{function csshero_vc_get_extra_classes(i){var clArray=[];classList=i.attr('class').split(/\s+/);jQuery.each(classList,function(index,item){if((item.toLowerCase().indexOf("vc")<0)&&(item.toLowerCase().indexOf("wpex")<0)&&(item.toLowerCase().indexOf("wpb")<0)&&(item.toLowerCase().indexOf("content")<0)&&(item.toLowerCase().indexOf("vcex")<0)&&(item.toLowerCase().indexOf("reset-")<0)&&(item.toLowerCase().indexOf("animate-")<0)&&(item.toLowerCase().indexOf("remove-")<0)&&(item.toLowerCase().indexOf("theme-")<0)&&(item.toLowerCase().indexOf("editable")<0)&&(item.toLowerCase().indexOf("ui-")<0)&&(item.toLowerCase().indexOf("inherit")<0)&&(item.toLowerCase().indexOf("skin")<0)&&(item.toLowerCase().indexOf("owl")<0)&&(item.toLowerCase().indexOf("clearfix")<0)&&(item.toLowerCase().indexOf("align")<0)&&(item.toLowerCase().indexOf("-columns")<0)&&(item!='clr')&&(item!='default')&&(item!=' ')&&(item!='')&&(item.toLowerCase().indexOf("count_")<0)){clArray.push(item);}});CC=clArray.join('.');if(CC){CC='.'+CC;}else{CC='';}
return CC;}
function vc_config_el(what,ewhat,whatdesc){rArray=[];jQuery(what,frame).each(function(){var t=jQuery(this);var parent=t.closest('.hentry');if(parent.length<1){parent=t.closest('.entry');}
var id='';if(parent.hasClass('type-page')){id=parent.attr('id');id='#'+id;}
ind=jQuery(this).index()+1;rowscope='';rowdesc='';rScope='';customCC=csshero_vc_get_extra_classes(jQuery(this));rDepth=customCC.split('.');rDepth=rDepth.length;if(id=='#undefined')id='';if(parent.hasClass('entry')){rScope=id+'.entry '+what+customCC;}
if(parent.hasClass('hentry')){rScope=id+'.hentry '+what+customCC;}
rArray.push({scope:rScope,depth:rDepth,customClasses:customCC});rArray.sort(function(a,b){if(a.scope>b.scope){return 1}
if(a.scope<b.scope){return-1}
return 0;});});csshero_declare_item(customCC+' h1.wpb_heading',customCC+' H1 Heading');csshero_declare_item(customCC+' h2.wpb_heading',customCC+' H2 Heading');csshero_declare_item(customCC+' h3.wpb_heading',customCC+' H3 Heading');csshero_declare_item(customCC+' h4.wpb_heading',customCC+' H4 Heading');csshero_declare_item(customCC+' h5.wpb_heading',customCC+' H5 Heading');if(customCC!=''){csshero_declare_item(customCC+' .widgettitle',customCC+' Widget Title');}
jQuery.each(rArray,function(i,el){jQuery.each(ewhat,function(escope,dscope){csshero_declare_item(el.scope+' '+escope,el.customClasses.replace('.',' ')+' '+dscope);});csshero_declare_item(el.scope,whatdesc+' '+el.customClasses.replace('.',' '));})}
var VC_rows=jQuery('.wpb_row',frame).length;if(VC_rows>0){vc_config_el('.wpb_row','','Row');icoA={'.vc_icon_element-inner':'Icon Outer Area','.vc_icon_element-inner span':'Icon Element',}
vc_config_el('.vc_icon_element',icoA,'Icon Area');var sepA={'.vc_sep_holder + h4':'Separator Text','.vc_sep_line':'Separator Line'};vc_config_el('.vc_separator',sepA,'Separator');var texA={'p':'Paragraph','a':'Link','img':'Image','strong':'Bold','h1':'H1 Heading','h2':'H2 Heading','h3':'H3 Heading','h4':'H4 Heading','h5':'H5 Heading','h6':'H6 Heading'}
vc_config_el('.wpb_text_column',texA,'Text Block');var imgA={'img':'Image'}
vc_config_el('.wpb_single_image',imgA,'Single Img');var aleA={'.messagebox_text':'Alert Area','p':'Alert Paragraph'}
vc_config_el('.wpb_alert-info',aleA,'Alert Info');vc_config_el('.wpb_alert-warning',aleA,'Alert Warning');vc_config_el('.wpb_alert-success',aleA,'Alert Success');vc_config_el('.wpb_alert-danger',aleA,'Alert Danger');vc_config_el('.wpb_toggle','','Toggle');vc_config_el('.wpb_toggle_content',texA,'Toggle Content');var galA={'.flexslider':'Flexslider','.flex-direction-nav a':'Gallery Nav Link','.flex-control-paging li a':'Gallery Paging Link','.flex-control-paging li a.flex-active':'Gallery Paging Active','.nivoSlider':'Nivoslider','.nivo-control.active':'Nivo Active Item','.nivo-control':'Nivo Controls','.wpb_image_grid_ul':'Gallery Grid','.wpb_image_grid_ul li':'Gallery Grid Item'};vc_config_el('.wpb_gallery',galA,'Gallery');var tabA={'.wpb_tabs_heading':'Tabs Heading','.wpb_tabs_nav':'Tabs Nav','.wpb_tabs_nav li':'Tab','.wpb_tabs_nav a':'Tab Nav Link','.wpb_tabs_nav li.ui-tabs-active':'Active Tab','.wpb_tabs_nav li.ui-tabs-active a':'Active Tab Link','.wpb_tour_tabs_wrapper .wpb_tab':'Tab Content','.wpb_prev_slide':'Tab Prev Slide Area','.wpb_next_slide':'Tab Next Slide Area','.wpb_prev_slide a':'Tab Prev Slide Link','.wpb_next_slide a':'Tab Next Slide Link'};vc_config_el('.wpb_tabs',tabA,'Tabs');vc_config_el('.wpb_tour',tabA,'Tour');var accA={'.wpb_accordion_heading':'Accordion Heading','.wpb_accordion_header a':'Accordion Header Title','.wpb_accordion_header span':'Accordion Header Icon','.wpb_accordion_header.ui-state-active a':'Accordion Active Title','.wpb_accordion_header.ui-state-active span':'Accordion Active Icon','.wpb_accordion_content':'Accordion Content Area'};vc_config_el('.wpb_accordion',accA,'Accordion');gridA={'.vc_gitem-zone':'Grid Item','.vc_grid-item img':'Grid Item Image','.vc_grid-item .vc_custom_heading':'Grid Item Heading Area','.vc_grid-item .vc_custom_heading h4':'Grid Item Heading','.vc_grid-item p':'Grid Item Paragraph','.vc_grid-item .vc_btn3-container':'Grid Item Button Area','.vc_grid-item .vc_btn3-container button':'Grid Item Button',}
vc_config_el('.vc_grid',gridA,'Grid Posts');var btnA={'i.icon':'Icon'}
vc_config_el('.wpb_button',btnA,'Button');vc_config_el('.vc_btn:not(.vc_btn_square):not(.vc_btn_round):not(.vc_btn_outlined):not(.vc_btn_3d):not(.vc_btn_square_outlined)','','Regular Button');vc_config_el('.vc_btn.vc_btn_square','','Square Button');vc_config_el('.vc_btn.vc_btn_round','','Round Button');vc_config_el('.vc_btn.vc_btn_outlined','','Outlined Button');vc_config_el('.vc_btn.vc_btn_3d','','3D Button');vc_config_el('.vc_btn.vc_btn_square_outlined','','Square Outlined Button');new_btn={'button':'BTN'}
vc_config_el('.vc_btn3-container',new_btn,'Button')
ctaA={'h2.wpb_call_text':'CTA H2 Heading','.wpb_button':'CTA Button','.wpb_button i.icon':'CTA Button Icon','.vc_btn':'CTA Button','hgroup':'CTA Heading Area','p':'CTA Paragraph'};vc_config_el('.wpb_call_to_action',ctaA,'CTA Area');ctaA3={'.vc_cta3-content-header':'CTA Header','.vc_cta3-content-header h2':'CTA Title','.vc_cta3-content-header h4':'CTA Subtitle','.vc_icon_element-inner':'CTA Icon Area','.vc_icon_element-inner span':'CTA Icon','.vc_btn3-container':'CTA Button Area','.vc_btn3-container button':'CTA Button',}
vc_config_el('.vc_cta3',ctaA3,'CTA Area');vc_config_el('.vc_call_to_action',ctaA,'CTA');carA={'ol':'Indicators Area','ol li':'Indicator','ol li.vc_active':'Active Indicator','.vc_carousel-control .icon-prev':'Prev Icon','.vc_carousel-control .icon-next':'Next Icon'}
vc_config_el('.vc_images_carousel',carA,'Carousel');teaA={'.isotope-inner':'Grid Item','h2.post-title':'Grid Post Title Area','h2.post-title a':'Grid Post Title','.entry-content':'Grid Post Content','.entry-content p':'Grid Content Paragraph','.entry-content a':'Grid Content Link','.entry-content img':'Grid Content Img','.entry-content span':'Grid Content Span','.entry-content quote':'Grid Content Quote','.entry-content blockquote':'Grid Content Blockquote','.entry-content code':'Grid Content Code','.entry-content table':'Grid Content Table','.entry-content table tr':'Grid Content Table Row','.entry-content table td':'Grid Content Table Cell','.entry-content table th':'Grid Content Table Heading','.entry-content table h1':'Grid Content Heading 1','.entry-content table h2':'Grid Content Heading 2','.entry-content table h3':'Grid Content Heading 3','.entry-content table h4':'Grid Content Heading 4','.entry-content table h5':'Grid Content Heading 5','.entry-content table h6':'Grid Content Heading6',}
vc_config_el('.wpb_teaser_grid',teaA,'Post Grid');pslA={'.wpb_posts_slider_heading':'Slider Heading','.flex-caption':'Caption','h2.post-title':'Post Title Area','h2.post-title a':'Post Title'}
vc_config_el('.wpb_posts_slider',pslA,'Post Slider');widA={'h2.wpb_widgetised_column_heading':'Heading','aside':'Widget','aside h3.widget-title':'Widget Title','aside li':'Widget List Item','aside ul':'Widget List','aside ul li a':'Widget List Link','aside p':'Widget Paragraph','.sidebar-box':'Widget','.sidebar-box h3.widget-title':'Widget Title','.sidebar-box li':'Widget List Item','.sidebar-box ul':'Widget List','.sidebar-box ul li a':'Widget List Link','.sidebar-box p':'Widget Paragraph'}
vc_config_el('.wpb_widgetised_column',widA,'Widgets Area');prbA={'.vc_single_bar':'Single Bar Area','.vc_single_bar small.vc_label':'Single Bar','.vc_single_bar .vc_bar':'Inner Bar',}
vc_config_el('.vc_progress_bar',prbA,'Progress Bars Area');pieA={'.vc_pie_wrapper':'Pie Wrapper','.vc_pie_chart_value':'Pie Value','.vc_pie_chart_back':'Pie Border (use Border Property)'}
vc_config_el('.vc_pie_chart',pieA,'Pie Chart');cuhA={'h2':'H2 Heading'}
vc_config_el('.vc_custom_heading',cuhA,'Custom Heading');seaA={'.input-group':'Search Area','.input-group #s':'Search Area','.input-group #searchsubmit':'Search Area',}
vc_config_el('.vc_wp_search',seaA,'Search');metA={'.widget':'Widget Area','.widget ul':'Widget List','.widget ul li':'Widget List Item','.widget ul li a':'Widget Link','.widget ul li .comment-author-link':'Comment Author Link','.widget ul li .post-date':'Post Date',}
vc_config_el('.vc_wp_meta',metA,'Meta Area');vc_config_el('.vc_wp_recentcomments',metA,'Recent Comments');vc_config_el('.vc_wp_pages',metA,'Pages');vc_config_el('.vc_wp_posts',metA,'Recent Posts');vc_config_el('.vc_wp_links',metA,'Links');vc_config_el('.vc_wp_categories',metA,'Categories');vc_config_el('.vc_wp_archives',metA,'Archives');cldA={'#wp-calendar':'Calendar','#wp-calendar caption':'Month','#wp-calendar thead th':'Calendar Head Cell','#wp-calendar tbody>tr:nth-child(odd)':'Calendar Row Odd','#wp-calendar tbody>tr:nth-child(even)':'Calendar Row Even','#wp-calendar tbody>tr:nth-child(even) a':'Calendar Row Even Link','#wp-calendar tbody>tr:nth-child(odd) a':'Calendar Row Odd Link','#wp-calendar tfoot':'Calendar Footer','#wp-calendar tfoot a':'Calendar Footer Link',}
vc_config_el('.vc_wp_calendar',cldA,'Calendar Area');tgcA={'.tagcloud':'Tag Cloud Area','.tagcloud a':'Tag'}
vc_config_el('.widget_tag_cloud',tgcA,'Tag Cloud Area');menA={'ul.menu':'Container','ul.menu li':'Menu List Item','ul.menu li a':'Menu Link','ul.menu li ul.sub-menu':'Submenu Area','ul.menu li ul.sub-menu li':'Submenu List Item','ul.menu li ul.sub-menu li a':'Submenu Link'}
vc_config_el('.vc_wp_custommenu',menA,'Menu');txwA={'.textwidget':'Text Widget Area','.textwidget p':'Text Widget Paragraph','.textwidget span':'Text Widget Span','.textwidget img':'Text Widget Image','.textwidget h1':'Text Widget H1 Heading','.textwidget h2':'Text Widget H2 Heading','.textwidget h3':'Text Widget H3 Heading','.textwidget h4':'Text Widget H4 Heading','.textwidget h5':'Text Widget H5 Heading','.textwidget h6':'Text Widget H6 Heading','.textwidget strong':'Text Widget Bold Text',}
vc_config_el('.vc_wp_text',txwA,'Text Widget');rssA={'.media-list':'RSS List','.media-list li':'RSS Item','.media-list li .rsswidget':'RSS Title','.media-list li .rss-date':'RSS Date','.media-list li .rssSummary':'RSS Summary','.media-list li cite':'RSS Author','.rsswidget img':'RSS Icon',}
vc_config_el('.vc_wp_rss',rssA,'RSS Widget');gmpA={'.wpb_wrapper':'Map Wrapper'}
vc_config_el('.wpb_gmaps_widget',gmpA,'Map');togA={'.vc_toggle_title':'Toggle Title Area','.vc_toggle_title h4':'Toggle Title','.vc_toggle_content':'Toggle Content',}
vc_config_el('.vc_toggle',togA,'Toggle Area');tabA={'.vc_tta-tab:not(.vc_active) a':'Tab','.vc_tta-tab.vc_active a':'Active Tab','.vc_tta-panels':'Tabs Content','.vc_pagination':'Pagination','.vc_pagination .vc_pagination-item':'Pagination Item','.vc_pagination .vc_pagination-item.vc_active':'Pagination Active Item'}
vc_config_el('.vc_tta-tabs',tabA,'Tabs Area');panA={'.vc_tta-panel-heading':'Accordion Heading','.vc_tta-panel-heading h4':'Accordion Heading H4','.vc_active .vc_tta-panel-heading':'Active Accordion Heading','.vc_active .vc_tta-panel-heading h4':'Active Accordion Heading H4','.vc_tta-panel-body':'Accordion Content',}
vc_config_el('.vc_tta-panels',panA,'Accordion Area');vc_config_el('.vcex-heading','','Heading');vc_config_el('.vcex-button','','Button');exIconA={'.vcex-icon-box-icon':'Icon Area','.vcex-icon-box-icon i':'Icon','img':'Image','.vcex-icon-box-heading':'Heading','.vcex-icon-box-content':'Content','.vcex-icon-box-content p':'Content Paragraph','.vcex-icon-box-content a':'Content Links','.vcex-icon-box-content h1':'Content H1','.vcex-icon-box-content h2':'Content H2','.vcex-icon-box-content h3':'Content H3',}
vc_config_el('.vcex-icon-box',exIconA,'Icon Box Area');exTeasA={'.vcex-teaser-media':'Media Area','.vcex-teaser-media img':'Media Image','.vcex-teaser-content .vcex-teaser-heading':'Heading','.vcex-teaser-content .vcex-teaser-text':'Content Area','.vcex-teaser-content .vcex-teaser-text p':'Content Paragraph','.vcex-teaser-content .vcex-teaser-text a':'Content Link','.vcex-teaser-content .vcex-teaser-text h1':'Content H1','.vcex-teaser-content .vcex-teaser-text h2':'Content H2','.vcex-teaser-content .vcex-teaser-text h3':'Content H3',}
vc_config_el('.vcex-teaser',exTeasA,'Teaser Area');exFeatA={'.vcex-feature-box-media':'Media Area','.vcex-feature-box-media img':'Media Image','.vcex-feature-box-content':'Content','.vcex-feature-box-content .vcex-feature-box-heading':'Heading','.vcex-feature-box-content .vcex-feature-box-text':'Content','.vcex-feature-box-content .vcex-feature-box-text p':'Content Paragraph','.vcex-feature-box-content .vcex-feature-box-text a':'Content Links','.vcex-feature-box-content .vcex-feature-box-text h1':'Content H1','.vcex-feature-box-content .vcex-feature-box-text h2':'Content H2','.vcex-feature-box-content .vcex-feature-box-text h3':'Content H3',}
vc_config_el('.vcex-feature-box',exFeatA,'Feature Area');exListA={'.vcex-icon-wrap':'Icon Area','.vcex-icon-wrap span':'Icon','span.fa':'Icon','a':'Link',}
vc_config_el('.vcex-list_item',exListA,'List Item');exBullA={'ul':'List Wrapper','ul li':'List Item'}
vc_config_el('.vcex-bullets',exBullA,'Bullet List');exPriA={'.vcex-pricing-header':'Header','.vcex-pricing-cost':'Cost Area','.vcex-pricing-cost .vcex-pricing-ammount':'Cost Amount','.vcex-pricing-cost .vcex-pricing-per':'Cost Per','.vcex-pricing-content':'Content','.vcex-pricing-content ul':'Content List','.vcex-pricing-content li':'Content List Item','.vcex-pricing-button':'Button Area','.vcex-pricing-button a':'Button','.vcex-pricing-button .left':'Button Icon Left','.vcex-pricing-button .right':'Button Icon Right',}
vc_config_el('.vcex-pricing',exPriA,'Pricing Table');vc_config_el('.vcex-pricing.featured',exPriA,'Pricing Table');exSkillA={'.vcex-skillbar-title-inner':'Skillbar Inner Title','.vcex-skillbar-title-inner .vcex-icon-wrap':'Skillbar Icon Area','.vcex-skillbar-bar':'Skillbar Inner','.vcex-skill-bar-percent':'Skillbar Percentage',}
vc_config_el('.vcex-skillbar',exSkillA,'Skill Bar');vc_config_el('.vcex-icon','','Icon');exCaptA={'.vcex-milestone-number':'Milestone Number','.vcex-milestone-caption':'Milestone Caption',}
vc_config_el('.vcex-milestone',exCaptA,'Milestone');exNavA={'a':'Link'}
vc_config_el('.vcex-navbar',exNavA,'Navigation');exSeaA={'.vcex-searchbar-input':'Input','.vcex-searchbar-button':'Submit',}
vc_config_el('.vcex-searchbar',exSeaA,'Search Bar');exNlA={'input.email':'Email Input','#mc-embedded-subscribe':'Submit Button'}
vc_config_el('.vcex-newsletter-form',exNlA,'Newsletter Subscribe');exNewsA={'.vcex-recent-news-entry':'Entry','.vcex-recent-news-entry .vcex-recent-news-date':'Entry Date Area','.vcex-recent-news-entry .vcex-recent-news-date .day':'Entry Date Day','.vcex-recent-news-entry .vcex-recent-news-date .month':'Entry Date Month','.vcex-recent-news-entry .vcex-news-entry-details':'Entry Details','.vcex-recent-news-entry .vcex-news-entry-thumbnail':'Entry Thumb Area','.vcex-recent-news-entry .vcex-news-entry-thumbnail img':'Entry Thumb','.vcex-recent-news-entry .vcex-recent-news-entry-title':'Entry Title Area','.vcex-recent-news-entry .vcex-recent-news-entry-title h2':'Entry Title','.vcex-recent-news-entry .vcex-recent-news-entry-title h2 a':'Entry Title Link','.vcex-recent-news-entry .vcex-recent-news-entry-excerpt':'Entry Excerpt','.vcex-recent-news-entry .vcex-recent-news-entry-excerpt p':'Entry Excerpt Paragraph','.vcex-recent-news-entry .vcex-recent-news-entry-excerpt a':'Entry Link',}
vc_config_el('.vcex-recent-news',exNewsA,'Recent News');exGridA={'.vcex-blog-entry-inner .vcex-blog-entry-media':'Entry Media Area','.vcex-blog-entry-inner .vcex-blog-entry-media img':'Entry Media Img','.vcex-blog-entry-inner .vcex-blog-entry-details':'Entry Details Area','.vcex-blog-entry-inner .vcex-blog-entry-title':'Entry Title','.vcex-blog-entry-inner .vcex-blog-entry-title a':'Entry Title Link','.vcex-blog-entry-inner .vcex-blog-entry-date':'Entry Date','.vcex-blog-entry-inner .vcex-blog-entry-readmore-wrap':'Entry Read More Area','.vcex-blog-entry-inner .vcex-blog-entry-readmore-wrap a':'Entry Read More Link','.vcex-blog-entry-inner .vcex-blog-entry-excerpt':'Entry Excerpt','.vcex-blog-entry-inner .vcex-blog-entry-excerpt p':'Entry Excerpt Paragraph',}
vc_config_el('.vcex-blog-grid-wrap',exGridA,'Grid Posts');exCarouA={'.wpex-carousel-slide':'Slide','.wpex-carousel-slide .wpex-carousel-entry-media':'Slide Media Area','.wpex-carousel-slide .wpex-carousel-entry-media img':'Slide Media Img','.wpex-carousel-slide .wpex-carousel-entry-details':'Slide Details','.wpex-carousel-slide .wpex-carousel-entry-details a':'Slide Details Link','.wpex-carousel-slide .vcex-blog-entry-date':'Slide Date','.wpex-carousel-slide .wpex-carousel-entry-excerpt':'Slide Excerpt','.wpex-carousel-slide .wpex-carousel-entry-excerpt p':'Slide Excerpt Paragraph','.owl-prev':'Carousel Prev Button','.owl-next':'Carousel Next Button',}
vc_config_el('.wpex-carousel',exCarouA,'Post Carousel');exTestiA={'.testimonial-entry':'Testimonial','.testimonial-entry .testimonial-entry-content':'Testimonial Content','.testimonial-entry .testimonial-caret':'Testimonial Arrow (use border-top)','.testimonial-entry .testimonial-entry-thumb':'Testimonial Thumb Area','.testimonial-entry .testimonial-entry-thumb img':'Testimonial Thumb','.testimonial-entry .testimonial-entry-meta':'Testimonial Meta Area','.testimonial-entry .testimonial-entry-meta .testimonial-entry-author':'Testimonial Author','.testimonial-entry .testimonial-entry-meta .testimonial-entry-company':'Testimonial Company',}
vc_config_el('.vcex-testimonials-grid-wrap',exTestiA,'Tesimonial Grid');exTestiSliderA={'.vcex-testimonials-fullslider-avatar':'Avatar Area','.vcex-testimonials-fullslider-avatar img':'Avatar Img','.entry p':'Testimonial Text','.vcex-testimonials-fullslider-author':'Testimonial Author','.sp-buttons':'Testimonials Nav Area','.sp-buttons .sp-button':'Testimonials Nav Item','.sp-buttons .sp-button.sp-selected-button':'Testimonials Nav Active Item',}
vc_config_el('.vcex-testimonials-fullslider',exTestiSliderA,'Tesimonial Slider');exPortGridA={'.portfolio-entry-details':'Portfolio Item Details','.portfolio-entry-details .portfolio-entry-title':'Portfolio Item Title Area','.portfolio-entry-details .portfolio-entry-title a':'Portfolio Item Title Link','.portfolio-entry-details .portfolio-entry-excerpt':'Portfolio Item Excerpt','.portfolio-entry-details .portfolio-entry-excerpt p':'Portfolio Item Excerpt Paragraph','.portfolio-entry-media':'Portfolio Item Media Area','.portfolio-entry-media img':'Portfolio Item Media Img','.portfolio-entry-readmore-wrap':'Portfolio Item Read More Area','.portfolio-entry-readmore-wrap a':'Portfolio Item Read More','.vcex-portfolio-filter':'Portfolio Filter Area','.vcex-portfolio-filter a':'Porfolio Filter Item',}
vc_config_el('.vcex-portfolio-grid-wrap',exPortGridA,'Portfolio Grid');exStaffA={'.staff-entry-inner':'Staff Item','.staff-entry-inner .staff-entry-media':'Staff Media Area','.staff-entry-inner .staff-entry-media img':'Staff Media Img','.staff-entry-inner .staff-entry-details':'Staff Details Area','.staff-entry-inner .staff-entry-details h2':'Staff Title','.staff-entry-inner .staff-entry-details h2 a':'Staff Title Link','.staff-entry-inner .staff-entry-excerpt':'Staff Excerpt','.staff-entry-inner .staff-entry-excerpt p':'Staff Excerpt Paragraph','.staff-entry-inner .staff-entry-readmore-wrap':'Staff Readmore Area','.staff-entry-inner .staff-entry-readmore-wrap a':'Staff Readmore Button',}
vc_config_el('.vcex-staff-grid-wrap',exStaffA,'Staff Grid');vc_config_el('.wpex-carousel-staff',exCarouA,'Staff Carousel');}}window.csshero_plugin_is_configurated=true;wcom_card=function(scope,desc){csshero_declare_item(scope,desc);csshero_declare_item(scope+' ul.products li.product > a:not(.button)',desc+' Main Link');csshero_declare_item(scope+' > h2',desc+' Area Title');csshero_declare_item(scope+' ul.products',desc+' List Area');csshero_declare_item(scope+' ul.products li.product',desc+' Item');csshero_declare_item(scope+' ul.products li.product a img',desc+' Img');csshero_declare_item(scope+' ul.products li.product h3',desc+' Title');csshero_declare_item(scope+' ul.products li.product h3 .count',desc+' Product Count');csshero_declare_item(scope+' ul.products li.product .price',desc+' Price Area');csshero_declare_item(scope+' ul.products li.product .price del',desc+' Old Price');csshero_declare_item(scope+' ul.products li.product .price ins',desc+' New Price');csshero_declare_item(scope+' ul.products li.product a.button',desc+' Buttons');csshero_declare_item(scope+' ul.products li.product .star-rating',desc+' Star Rating Area');csshero_declare_item(scope+' ul.products li.product .woocommerce-loop-product__title',desc+' Product Title');}
wcom_product=function(scope,desc){csshero_config_post(scope+' div[itemprop=description]','',desc);csshero_config_post(scope+' .entry-summary','','Summary');csshero_config_post(scope+' .woocommerce-tabs #tab-description','',desc+' Tab Desc');csshero_declare_item(scope,desc);csshero_declare_item(scope+' .product_title',desc+' Title');csshero_declare_item(scope+' .woocommerce-product-rating',desc+' Rating Area');csshero_declare_item(scope+' .woocommerce-review-link',desc+' Reviews Link');csshero_declare_item(scope+' .price',desc+' Price Area');csshero_declare_item(scope+' .woocommerce-product-gallery__wrapper',desc+' Gallery Area')
csshero_declare_item(scope+' .woocommerce-product-gallery__trigger',desc+' Gallery Trigger')
csshero_declare_item(scope+' .price .amount',desc+' Price');csshero_declare_item(scope+' .price del',desc+' Old Price');csshero_declare_item(scope+' .price ins',desc+' New Price');csshero_declare_item(scope+' form.cart',desc+' Quantity Area');csshero_declare_item(scope+' form.cart div.quantity',desc+' Quantity Form');csshero_declare_item(scope+' form.cart div.quantity .plus',desc+' Quantity Plus');csshero_declare_item(scope+' form.cart div.quantity .minus',desc+' Quantity Minus');csshero_declare_item(scope+' form.cart div.quantity input.qty',desc+' Quantity Qty');csshero_declare_item(scope+' form.cart .button',desc+' Add To Cart');csshero_declare_item(scope+' div.images',desc+' Images Area');csshero_declare_item(scope+' div.images .wp-post-image',desc+' Image');csshero_declare_item(scope+' div.images .thumbnails',desc+' Thumbs Area');csshero_declare_item(scope+' div.images .thumbnails .attachment-shop_thumbnail',desc+' Thumb');csshero_declare_item(scope+' .product_meta',desc+' Meta Area');csshero_declare_item(scope+' .product_meta > span',desc+' Meta Inner Area');csshero_declare_item(scope+' p.cart',desc+' Cart Button Area');csshero_declare_item(scope+' .single_add_to_cart_button',desc+' Cart Button');csshero_declare_item(scope+' .product_meta a',desc+' Meta Link');csshero_declare_item(scope+' .woocommerce-tabs',desc+' Tabs Area');csshero_declare_item(scope+' .woocommerce-tabs ul.tabs',desc+' Tabs');csshero_declare_item(scope+' .woocommerce-tabs ul.tabs li',desc+' Tab');csshero_declare_item(scope+' .woocommerce-tabs ul.tabs li.active',desc+' Active Tab');csshero_declare_item(scope+' .woocommerce-tabs ul.tabs li a',desc+' Tab Link');csshero_declare_item(scope+' .woocommerce-tabs ul.tabs li.active a',desc+' Active Tab Link');csshero_declare_item(scope+' .woocommerce-tabs #reviews textarea',desc+' Review Textarea');csshero_declare_item(scope+' .woocommerce-tabs #reviews input',desc+' Review Input');csshero_declare_item(scope+' .woocommerce-tabs #reviews input[type=submit]',desc+' Submit Review');csshero_declare_item(scope+' .star-rating',scope+' Star Rating Area');csshero_declare_item(scope+' .stock',desc+' Stock');csshero_declare_item(scope+' .comment-form-rating',desc+' Rating Area');csshero_declare_item(scope+' .comment-form-rating label',desc+' Rating Area Title');csshero_declare_item(scope+' .comment-form-rating .stars',desc+' Rating Stars Area');csshero_declare_item(scope+' .comment-form-rating .stars a',desc+' Rating Area Single Star');csshero_declare_item(scope+' #comments',desc+' Revs Area');csshero_declare_item(scope+' #comments > h2',desc+' Revs Title');csshero_declare_item(scope+' #comments .comment',desc+' Review Area');csshero_declare_item(scope+' #comments .comment .avatar',desc+' Review Avatar');csshero_declare_item(scope+' #comments .comment .comment-text',desc+' Review Text');csshero_declare_item(scope+' #comments .comment .meta',desc+' Review Meta');csshero_declare_item(scope+' #comments .comment .meta strong',desc+' Review Author');csshero_declare_item(scope+' #comments .comment .meta time',desc+' Review Date');csshero_config_post(scope+' #comments .comment .description','','Review');csshero_declare_item(scope+' #comments h3#reply-title',desc+' Reply Title');csshero_declare_item(scope+' #comments p.stars',desc+' Stars Area');csshero_declare_item(scope+' #comments textarea#comment',desc+' Reply Textarea');csshero_declare_item(scope+' #comments #submit',desc+' Submit Reply');csshero_declare_item(scope+' .gform_variation_wrapper',desc+' Variations Wrapper');csshero_declare_item(scope+' .variations',desc+' Variations Area');csshero_declare_item(scope+' .variations .label',desc+' Variations Label');csshero_declare_item(scope+' .variations .value',desc+' Variations Value');csshero_declare_item(scope+' .variations .value select',desc+' Variations Value Select');}
wcom_notice=function(scope,desc){csshero_declare_item(scope+' .woocommerce-info',desc+' Info');csshero_declare_item(scope+' .woocommerce-info .showcoupon',desc+' Show Coupon Link');csshero_declare_item(scope+' .woocommerce-error',desc+' Error');csshero_declare_item(scope+' .woocommerce-error li',desc+' Error List Item');csshero_declare_item(scope+' .woocommerce-error li strong',desc+' Error List Strong');}
wcom_checkout=function(scope,desc){csshero_declare_item(scope+' form.checkout_coupon',desc+' Coupon Area');csshero_declare_item(scope+' form.checkout_coupon .input-text',desc+' Coupon Field');csshero_declare_item(scope+' form.checkout_coupon input[name=apply_coupon]',desc+' Coupon Submit');csshero_declare_item(scope+' #customer_details',scope+' Customer Details Area');csshero_declare_item(scope+' #customer_details .col-1',scope+' Customer Details Col1');csshero_declare_item(scope+' #customer_details .col-2',scope+' Customer Details Col2');csshero_declare_item(scope+' form.checkout',desc+' Form');csshero_declare_item(scope+' form.checkout h3',desc+' Titles');csshero_declare_item(scope+' form.checkout .form-row',desc+' Form Row');csshero_declare_item(scope+' form.checkout .form-row label',desc+' Form Label');csshero_declare_item(scope+' form.checkout .form-row label .required',desc+' Required Icon');csshero_declare_item(scope+' form.checkout .form-row .input-text',desc+' Input');csshero_declare_item(scope+' #order_review',scope+' Order Review Area');csshero_declare_item(scope+' #order_review table.shop_table',scope+' Order Table');csshero_declare_item(scope+' #order_review table.shop_table th',scope+' Order Table Heading');csshero_declare_item(scope+' #order_review table.shop_table td',scope+' Order Table Cell');csshero_declare_item(scope+' #payment',desc+' Payment Area');csshero_declare_item(scope+' #payment ul.payment_methods',desc+' Payment List');csshero_declare_item(scope+' #payment ul.payment_methods li',desc+' Payment Method');csshero_declare_item(scope+' #payment ul.payment_methods li .payment_box',desc+' Payment Suggestion');csshero_declare_item(scope+' #payment div.form-row',desc+' Place Row');csshero_declare_item(scope+' #payment div.form-row .button',desc+' Place Btn');}
wcom_widget=function(scope,desc){csshero_declare_item(scope+' ul.product_list_widget',desc+' List');csshero_declare_item(scope+' ul.product_list_widget li',desc+' Item');csshero_declare_item(scope+' ul.product_list_widget li .reviewer',desc+' Reviewer');csshero_declare_item(scope+' ul.product_list_widget li .wp-post-image',desc+' Img');csshero_declare_item(scope+' ul.product_list_widget li .amount',desc+' Price');csshero_declare_item(scope+' ul.product_list_widget li del',desc+' Old Price');csshero_declare_item(scope+' ul.product_list_widget li ins',desc+' New Price');csshero_declare_item(scope+' ul.product_list_widget li .star-rating',desc+' Stars');csshero_declare_item(scope+' .widget-title',desc+' Title');csshero_declare_item(scope+' a',desc+' Link');csshero_declare_item(scope+' a.remove',desc+' Remove Icon');csshero_declare_item(scope+' .quantity',desc+' Qty');csshero_declare_item(scope+' .total',desc+' Total Area');csshero_declare_item(scope+' .total strong',desc+' Total Desc');csshero_declare_item(scope+' .total .amount',desc+' Total Price');csshero_declare_item(scope+' .buttons',desc+' Buttons Area');csshero_declare_item(scope+' .buttons .button',desc+' Btn');csshero_declare_item(scope+' .buttons .button.checkout',desc+' Checkout Btn');csshero_declare_item(scope+'.widget_price_filter .ui-slider .ui-slider-range',desc+' Price Slider Range');csshero_declare_item(scope+'.widget_price_filter .ui-slider .ui-slider-handle',desc+' Price Slider Handle');}
wcom_cart=function(scope,desc){csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart','WCOM Cart Table');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart thead','WCOM Cart T Head');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart thead th','WCOM Cart T Head Tab');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart tbody td','WCOM Cart T Body');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-remove','WCOM Cart Remove');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-remove a.remove','WCOM Cart Remove Btn');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-thumbnail','WCOM Cart Thumb');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-thumbnail img','WCOM Cart Thumb Img');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-name','WCOM Cart Name');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-name a','WCOM Cart Name Link');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-price','WCOM Cart Price');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-price .amount','WCOM Cart Price Amount');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-quantity','WCOM Cart Qty');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-subtotal','WCOM Cart Subtotal');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-subtotal .amount','WCOM Cart Subtotal Amount');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions','WCOM Cart Actions');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity','WCOM Cart Quantity Form');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity .plus','WCOM Cart Quantity Plus');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity .minus','WCOM Cart Quantity Minus');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity input.qty','WCOM Cart Quantity Qty');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions #coupon_code','WCOM Cart Coupon Input');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions input[name=apply_coupon]','WCOM Cart Coupon Btn');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions input[name=update_cart]','WCOM Update Cart');csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions input[name=proceed]','WCOM Proceed Btn');csshero_declare_item('.woocommerce .woocommerce-message','WCOM Message Area');csshero_declare_item('.woocommerce .woocommerce-message .button','WCOM Message Area Button');csshero_declare_item('.woocommerce .wc-proceed-to-checkout','Proceed To Check-out Area');csshero_declare_item('.woocommerce .wc-proceed-to-checkout .button','Proceed To Check-out Button');csshero_declare_item('body.et_color_scheme_red.woocommerce-page .wc-proceed-to-checkout a.button','Proceed To Check-out Button');csshero_declare_item('.woocommerce .cart-collaterals','WCOM Cart Totals Area');csshero_declare_item('.woocommerce .cart-collaterals .cart_totals','WCOM Cart Totals');csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table','WCOM Cart Totals Table');csshero_declare_item('.woocommerce .cart-collaterals .cart-discount a','WCOM Remove Coupon');csshero_declare_item('.woocommerce .cart-collaterals .cart_totals h2','WCOM Cart Totals Titles');csshero_declare_item('.woocommerce .cross-sells','Cross Sells Area');csshero_declare_item('.woocommerce .cross-sells > h2','Cross Sells Area TItle');csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table','WCOM Cart Totals Table');csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table th','WCOM Cart Totals Th');csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table td','WCOM Cart Totals Td');csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator','WCOM Cart Shipping Area');csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator h2 a.shipping-calculator-button','WCOM Cart Shipping Btn');csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator .form-row','WCOM Cart Shipping Row');csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator .form-row input.input-text','WCOM Cart Shipping Input');csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator button[name=calc_shipping]','WCOM Cart Shipping Btn');}
wcom_track=function(scope,desc){csshero_declare_item(scope+' form.track_order',desc+' Form');csshero_declare_item(scope+' form.track_order label',desc+' Label');csshero_declare_item(scope+' form.track_order .input-text',desc+' Input');csshero_declare_item(scope+' form.track_order .button',desc+' Btn');}
wcom_generic=function(scope){csshero_declare_item(scope+' h1.page-title','WCOM Page Title');csshero_declare_item(scope+' p.woocommerce-result-count','WCOM Result Count');csshero_declare_item(scope+' form.woocommerce-ordering','WCOM Ordering Form');csshero_declare_item(scope+' .woocommerce-breadcrumb','WCOM Breadcrumb Area');csshero_declare_item(scope+' .woocommerce-breadcrumb a','WCOM Breadcrumb Link');csshero_declare_item(scope+' span.onsale','WCOM Sale Icon');csshero_declare_item(scope+' .storefront-sorting','Sorting Area');csshero_declare_item(scope+' .site-header-cart .cart-contents','Widget Main');}
wcom_final_checkout=function(scope,desc){csshero_declare_item(scope+' .woocommerce h2',desc+' Title');csshero_declare_item(scope+' .woocommerce p',desc+' Paragraph');csshero_declare_item(scope+' .woocommerce .order_details',desc+' Details');csshero_declare_item(scope+' .woocommerce .order_details li',desc+' Details Tab');csshero_declare_item(scope+' .woocommerce .order_details strong',desc+' Details Value');csshero_declare_item(scope+' .woocommerce .shop_table',desc+' Table');csshero_declare_item(scope+' .woocommerce .shop_table th',desc+' Product TH');csshero_declare_item(scope+' .woocommerce .shop_table td',desc+' Product TD');csshero_declare_item(scope+' .woocommerce table a',desc+' Product Table Link');csshero_declare_item(scope+' .woocommerce dl.customer_details',desc+' Customer Details Area');csshero_declare_item(scope+' .woocommerce dl.customer_details dt',desc+' Customer DT');csshero_declare_item(scope+' .woocommerce dl.customer_details dd',desc+' Customer DD');csshero_declare_item(scope+' .woocommerce .addresses',desc+' Addresses Area');csshero_declare_item(scope+' .woocommerce .addresses .title',desc+' Addresses Title Area');csshero_declare_item(scope+' .woocommerce .addresses .title h3',desc+' Addresses Title');csshero_declare_item(scope+' .woocommerce .addresses address p',desc+' Address');}
wcom_pagination=function(scope){csshero_declare_item(scope+' .woocommerce-pagination','WCOM Pagination Area');csshero_declare_item(scope+' .woocommerce-pagination .page-numbers','WCOM Pagination');csshero_declare_item(scope+' .woocommerce-pagination a.page-numbers','WCOM Pagination Item');csshero_declare_item(scope+' .woocommerce-pagination .page-numbers.current','WCOM Current Pagination Item');csshero_declare_item(scope+' .woocommerce-pagination .page-number','WCOM Pagination Item');csshero_declare_item(scope+' .woocommerce-pagination .page-number.current','WCOM Current Pagination Item');}
wcom_cart();wcom_generic('.woocommerce');wcom_card('.woocommerce','WCOM Product List');wcom_card('.hentry .woocommerce','WCOM Embedded Product');wcom_card('.woocommerce .related','WCOM Related Products');wcom_card('.woocommerce .upsells','WCOM Upsells Products');wcom_product('.woocommerce div.product','WCOM Product');wcom_product('.woocommerce #content div.product','WCOM Product');wcom_product('.woocommerce #content-area div.product','WCOM Product (Divi)');wcom_notice('.woocommerce','WCOM');wcom_checkout('.woocommerce','WCOM Checkout');wcom_track('.woocommerce','WCOM Tracking');wcom_card('.woocommerce .cross-sells','Related Sells');wcom_final_checkout('.woocommerce-checkout','WCOM Checkout');wcom_pagination('.woocommerce');wcom_widget('.et_pb_widget.woocommerce','WCOM Widget');wcom_widget('.woocommerce.widget','WCOM Widget');wcom_widget('.woocommerce.widget.widget_products','WCOM Widget Prods');wcom_widget('.woocommerce.widget.widget_recent_reviews','WCOM Widget Revs');wcom_widget('.woocommerce.widget.widget_shopping_cart','WCOM Shopping Cart');window.csshero_plugin_is_configurated=true;setTimeout(function(){csshero_promise.resolve();},1000);return csshero_promise;}
function hero_get_theme_name(){return"cardealer";}
function theme_config_load_has_failed(){return true;}
function csshero_declare_item(selector,description){var selector=selector.replace(/  /g,' ');configuration_paths[selector]={path:selector,desc:description};}
function csshero_refine_property(){console.log('csshero_refine_property non è definita')}
$bg='background-color,background-image,background-repeat,background-attachment,background-size,background-position';$padding='padding-left,padding-top,padding-right,padding-bottom';$margin='margin-left,margin-top,margin-right,margin-bottom';$basic='background-color,background-image,background-repeat,background-attachment,background-size,background-position,color';function csshero_config_sidebar(scope,inner_scope,prefix){if(!inner_scope){inner_scope='.widget';}
if(!prefix){prefix='Sidebar';}
csshero_declare_item(scope,prefix);csshero_declare_item(scope+' '+inner_scope,prefix+' Widget');csshero_declare_item(scope+' '+inner_scope+' ul',prefix+' List Container');csshero_declare_item(scope+' '+inner_scope+' ul li',prefix+' List Element');csshero_declare_item(scope+' '+inner_scope+' a',prefix+' Links');csshero_declare_item(scope+' '+inner_scope+' p',prefix+' Paragraphs');csshero_declare_item(scope+' '+inner_scope+' img',prefix+' Image');csshero_declare_item(scope+' '+inner_scope+' h1',prefix+' Text Widget h1');csshero_declare_item(scope+' '+inner_scope+' h2',prefix+' Text Widget h2');csshero_declare_item(scope+' '+inner_scope+' h3:not('+inner_scope+'-title)',prefix+' Text Widget h3');csshero_declare_item(scope+' '+inner_scope+' h4',prefix+' Text Widget h4');csshero_declare_item(scope+' '+inner_scope+' h5',prefix+' Text Widget h5');csshero_declare_item(scope+' '+inner_scope+' h6',prefix+' Text Widget h6');csshero_declare_item(scope+' '+inner_scope+' #s',prefix+' Search Input');csshero_declare_item(scope+' '+inner_scope+' #searchsubmit',prefix+' Search Submit');csshero_declare_item(scope+' '+inner_scope+' #searchform',prefix+' Searchform');csshero_declare_item(scope+' '+inner_scope+' .searchsubmit',prefix+' Search Submit');csshero_declare_item(scope+' '+inner_scope+' .searchform',prefix+' Searchform');csshero_declare_item(scope+' '+inner_scope+' .search-submit',prefix+' Search Submit');csshero_declare_item(scope+' '+inner_scope+' .search-form',prefix+' Searchform');csshero_declare_item(scope+' '+inner_scope+' input[type=text]',prefix+' Text Input');csshero_declare_item(scope+' '+inner_scope+' .widget-title',prefix+' Widget Title');csshero_declare_item(scope+' '+inner_scope+' input[type=submit]',prefix+' Submit Button');csshero_declare_item(scope+' '+inner_scope+' button',prefix+' Button');}
function csshero_config_post(scope,inner_scope,prefix){if(!prefix){prefix='Article';}
csshero_declare_item(scope,prefix);csshero_declare_item(scope+' .entry-header',prefix+' Header');csshero_declare_item(scope+' .entry-header .entry-title',prefix+' Header Title');csshero_declare_item(scope+' .entry-header .entry-title a',prefix+' Header Title Link');csshero_declare_item(scope+' .entry-header .comments-link',prefix+' Header Comments Area');csshero_declare_item(scope+' .entry-header .comments-link a',prefix+' Header Comments Area Link');csshero_declare_item(scope+' .page-title',prefix+' Page Title');csshero_declare_item(scope+' .entry-title',prefix+' Entry Title');csshero_declare_item(scope+' .entry-title a',prefix+' Entry Title Link');csshero_declare_item(scope+' '+inner_scope+' h1',prefix+' Content h1');csshero_declare_item(scope+' '+inner_scope+' h2',prefix+' Content h2');csshero_declare_item(scope+' '+inner_scope+' h3',prefix+' Content h3');csshero_declare_item(scope+' '+inner_scope+' h4',prefix+' Content h4');csshero_declare_item(scope+' '+inner_scope+' h5',prefix+' Content h5');csshero_declare_item(scope+' '+inner_scope+' h6',prefix+' Content h6');csshero_declare_item(scope+' .entry-header img.wp-post-image',prefix+' Entry Header Images');csshero_declare_item(scope+' '+inner_scope,prefix+' Entry Content');csshero_declare_item(scope+' '+inner_scope+' p',prefix+' Content Paragraph');csshero_declare_item(scope+' '+inner_scope+' a',prefix+' Content Links');csshero_declare_item(scope+' '+inner_scope+' blockquote',prefix+' Content Blockquotes');csshero_declare_item(scope+' '+inner_scope+' blockquote p',prefix+' Content Blockquotes Paragraph');csshero_declare_item(scope+' '+inner_scope+' ul',prefix+' Unordered List');csshero_declare_item(scope+' '+inner_scope+' ul li',prefix+' Unordered List Item');csshero_declare_item(scope+' '+inner_scope+' ol',prefix+' Ordered List');csshero_declare_item(scope+' '+inner_scope+' ol li',prefix+' Ordered List Item');csshero_declare_item(scope+' '+inner_scope+' ins',prefix+' Content Inserted Parts');csshero_declare_item(scope+' '+inner_scope+' del',prefix+' Content Deleted Parts');csshero_declare_item(scope+' '+inner_scope+' img:not(.wp-smiley)',prefix+' Content Images');csshero_declare_item(scope+' '+inner_scope+' img.wp-smiley',prefix+' Content Smiles');csshero_declare_item(scope+' '+inner_scope+' table',prefix+' Table Body');csshero_declare_item(scope+' '+inner_scope+' tr',prefix+' Table Row');csshero_declare_item(scope+' '+inner_scope+' td',prefix+' Table Cell');csshero_declare_item(scope+' '+inner_scope+' thead',prefix+' Table Heading');csshero_declare_item(scope+' '+inner_scope+' th',prefix+' Table Heading Cell');csshero_declare_item(scope+' '+inner_scope+' tfoot',prefix+' Table Footer');csshero_declare_item(scope+' '+inner_scope+' hr',prefix+' Break Line');csshero_declare_item(scope+' '+inner_scope+' code',prefix+' Code');csshero_declare_item(scope+' '+inner_scope+' strong',prefix+' Strong');csshero_declare_item(scope+' .entry-meta',prefix+'  Meta Area');csshero_declare_item(scope+' .entry-meta a',prefix+'  Meta Link');csshero_declare_item(scope+' p.tags',prefix+' Tags Area');csshero_declare_item(scope+' p.tags a',prefix+' Tag');csshero_declare_item(scope+' '+inner_scope+' .wp-caption','Caption Area');csshero_declare_item(scope+' '+inner_scope+' .wp-caption a','Caption Links');csshero_declare_item(scope+' '+inner_scope+' .wp-caption .wp-caption-text','Caption Text');}
function csshero_config_menu(scope,ulscope,prefix){if(!ulscope){ulscope='';}
if(!prefix){prefix='NAV';}
csshero_declare_item(scope,prefix+' - Navigation Container');csshero_declare_item(scope+' ul'+ulscope+' li',prefix+' - Main Menu Element');csshero_declare_item(scope+' ul'+ulscope+' li a',prefix+' - Main Menu Link');csshero_declare_item(scope+' ul'+ulscope+' li.current-menu-item a',prefix+' - Currently Active Menu Link');csshero_declare_item(scope+' ul'+ulscope+' li.current-cat a',prefix+' - Current Category Menu Link');csshero_declare_item(scope+' ul'+ulscope+' li ul li',prefix+' - Second Level Menu Element');csshero_declare_item(scope+' ul'+ulscope+' li ul li a',prefix+' - Second Level Menu Links');csshero_declare_item(scope+' ul'+ulscope,prefix+' - Navigation');csshero_declare_item(scope+' ul'+ulscope+' .sub-menu',prefix+' Submenu');csshero_declare_item(scope+' ul'+ulscope+' .current-menu-item > a',prefix+' - Current Menu Link');csshero_declare_item(scope+' ul'+ulscope+' .current-menu-ancestor > a',prefix+' - Current Menu Link');csshero_declare_item(scope+' ul'+ulscope+' .current_page_item > a',prefix+' - Current Menu Link');csshero_declare_item(scope+' ul'+ulscope+' .current_page_ancestor > a',prefix+' - Current Menu Link');}
function csshero_config_comments(scope){if(!scope){scope='#comments'}
csshero_declare_item(scope,'Comments Area');csshero_declare_item(scope+' .comments-title','Comments Area Title');csshero_declare_item(scope+' #comments-title','Comments Area Title');csshero_declare_item(scope+' .commentlist li article','Comment');csshero_declare_item(scope+' .commentlist li article.comment','Comment');csshero_declare_item(scope+' .commentlist li div.comment','Comment');csshero_declare_item(scope+' .commentlist .pingback','Comment Pingback');csshero_declare_item(scope+' .commentlist .comment .comment-author,'+scope+' .commentlist .fn','Comment Author');csshero_declare_item(scope+' .commentlist .comment .comment-author a','Comment Author Link');csshero_declare_item(scope+' .commentlist .comment header','Comment Header');csshero_declare_item(scope+' .commentlist .comment time','Comment Date');csshero_declare_item(scope+' .commentlist .comment .avatar','Comment Author Avatar');csshero_declare_item(scope+' .commentlist .comment-content p','Comment Paragraph');csshero_declare_item(scope,'Comments Area');csshero_declare_item(scope+' .comments-title','Comments Area Title');csshero_declare_item(scope+' .comment-list li article','Comment');csshero_declare_item(scope+' .comment-list li article.comment','Comment');csshero_declare_item(scope+' .comment-list li div.comment','Comment');csshero_declare_item(scope+' .comment-list .pingback','Comment Pingback');csshero_declare_item(scope+' .comment-list .comment .comment-author, '+scope+' .comment-list .fn, '+scope+' .comment-list .comment .comment-author a','Comment Author');csshero_declare_item(scope+' .comment-list .comment header','Comment Header');csshero_declare_item(scope+' .comment-list .comment time','Comment Date');csshero_declare_item(scope+' .comment-list .comment .avatar','Comment Author Avatar');csshero_declare_item(scope+' .comment-list .comment-content p','Comment Paragraph');}
function new_csshero_config_comments(scope,listname,comment_container){if(!scope){scope='#comments'}
csshero_declare_item(scope,'Comments Area');csshero_declare_item(scope+' .comments-title','Comments Area Title');csshero_declare_item(scope+' #comments-title','Comments Area Title');csshero_declare_item(scope+' '+listname+' '+comment_container,'Comment');csshero_declare_item(scope+' '+listname+' '+comment_container+'.pingback','Comment Pingback');csshero_declare_item(scope+' '+listname+' '+comment_container+' .comment-author,'+scope+' '+listname+' '+comment_container+' .fn','Comment Author');csshero_declare_item(scope+' '+listname+' '+comment_container+' .comment-author a','Comment Author Link');csshero_declare_item(scope+' '+listname+' '+comment_container+' header','Comment Header');csshero_declare_item(scope+' '+listname+' '+comment_container+' time','Comment Date');csshero_declare_item(scope+' '+listname+' '+comment_container+' .avatar','Comment Author Avatar');csshero_declare_item(scope+' '+listname+' '+comment_container+' .comment-avatar','Comment Author Avatar');csshero_declare_item(scope+' '+listname+' '+comment_container+' p','Comment Paragraph');csshero_declare_item(scope+' '+listname+' '+comment_container+' p a','Comment Link');csshero_declare_item(scope+' '+listname+' '+comment_container+' .comment-reply-link','Comment Reply Link');csshero_declare_item(scope+' '+listname+' .children','Comment Children Area');csshero_declare_item(scope+' '+listname+' '+comment_container+' .comment-content','Comment Content');}
function csshero_config_respond(scope,innerscope){if(!scope){scope='#comments'}
if(!innerscope){innerscope='#respond'}
csshero_declare_item(scope+' '+innerscope,'Respond Area');csshero_declare_item(scope+' '+innerscope+' a','Respond Links');csshero_declare_item(scope+' '+innerscope+' #cancel-comment-reply-link','Cancel Reply Link');csshero_declare_item(scope+' '+innerscope+' h3#reply-title','Respond Title');csshero_declare_item(scope+' '+innerscope+' .logged-in-as','Respond Logged In Text');csshero_declare_item(scope+' '+innerscope+' .logged-in-as a','Respond Logged In Text Link');csshero_declare_item(scope+' '+innerscope+' .form-allowed-tags','Respond Allowed Comments Tags Area');csshero_declare_item(scope+' '+innerscope+' .form-allowed-tags code','Respond Allowed Comments Tags');csshero_declare_item(scope+' '+innerscope+'  #submit','Respond Submit Reply');csshero_declare_item(scope+' '+innerscope+' .comment-form-comment label','Respond Form Title');csshero_declare_item(scope+' '+innerscope+' textarea','Respond Form Textarea');csshero_declare_item(scope+' '+innerscope+' input','Respond Form Input');csshero_declare_item(scope+' '+innerscope+' input[type=submit]','Respond Form Submit Button');csshero_declare_item(scope+' a.comment-reply-link','Comment Reply Link');}
function csshero_declare_pseudo(pseudo,scope,suggestion,css){if(!css){css='top: 0; left: 0; width:100%; height: 100%;'}
jQuery(window.frames['csshero-iframe-main-page'].document.body).find(scope).each(function(){var position=jQuery(this).css('position');if(position=='absolute'||position=='fixed'){}else{jQuery(this).css('position','relative');}
jQuery(this).append('<div class="csshero-pseudo editable" editableclass="'+pseudo+'" editablesuggestion="'+suggestion+'" style="position: absolute;'+css+'"></div>');});}
function csshero_woocommerce_config(wc,wcp){}
var declare_rocket_mode=function(delimiter,additional_excluded_classes,additional_excluded_ids,pseudo_lookup,skippers){var excluded_classes=['editable','clearfix','clear','hfeed','animatedParent','animate','animated','clr','fa-','lazy','js','sf-','type-','format-','category-','tag-','status','post-','cat-item','page-item','widget-','widget_','menu-item','odd','even','page_item','cat_item','menu_item','byuser','col-','portrait','landscape'];var excluded_ids=['menu-','comment-'];if(additional_excluded_classes){if(jQuery.isArray(additional_excluded_classes)){additional_excluded_classes=additional_excluded_classes;}else{additional_excluded_classes=additional_excluded_classes.replace(/ /g,'').split(',');}
excluded_classes=jQuery.merge(excluded_classes,additional_excluded_classes);}
if(additional_excluded_ids){if(jQuery.isArray(additional_excluded_ids)){additional_excluded_ids=additional_excluded_ids;}else{additional_excluded_ids=additional_excluded_ids.replace(/ /g,'').split(',');}
excluded_ids=jQuery.merge(excluded_ids,additional_excluded_ids);}
var findValid=function(c,array){for(var i=0,len=array.length;i<len;i++){if(c.indexOf(array[i])>-1){return null;break;}}
return c;}
var identifier=function(ele){data=[];ele_obj=jQuery(ele);TAG=ele_obj.prop('tagName');ID=ele_obj.attr('id');var classes=[];CLASS=ele_obj.attr('class');DESC='';if(CLASS){CLASS=CLASS.split(' ');if(CLASS.length<100){jQuery(CLASS).each(function(i,cl){valid_class=findValid(cl,excluded_classes);startsWith=cl[0];if(cl&&isNaN(startsWith)&&cl!=''&&valid_class)classes.push(cl)})
CLASS='.'+classes.join('.');DESC=classes.join(' ');}else{CLASS='';}}else{CLASS='';}
if(CLASS=='.')CLASS='';if(ID&&ID!=''&&findValid(ID,excluded_ids)){DESC=ID;ID='#'+ID;CLASS='';}else{ID='';}
if(ID.indexOf('post-')>-1){ID='';DESC='Post';}
scope=TAG+CLASS+ID
DESC_TAG=TAG;if(TAG=='A')DESC_TAG='Link';if(TAG=='UL')DESC_TAG='List';if(TAG=='OL')DESC_TAG='Ordered List';if(TAG=='LI')DESC_TAG='Item';if(TAG=='I')DESC_TAG='Icon';if(TAG=='P')DESC_TAG='Paragraph'
if(ele_obj.hasClass('widget')){scope=TAG;DESC=DESC_TAG;}
if(CLASS==''&&ID==''){PARENT_DESC=ele_obj.parent().attr('editablesuggestion');if(!PARENT_DESC)PARENT_DESC='';DESC=PARENT_DESC+' '+DESC_TAG;}
if(TAG=='HTML'||TAG=='BODY'){scope=TAG;DESC=TAG;}
identifier_object=[];identifier_object.push({scope:scope,desc:DESC,});return identifier_object;}
var removeNextIDs=function(split,string){string=string+' ';splitstring=string.split(split);fullstring='';jQuery(splitstring).each(function(i,b){if(i>0)fullstring+=split+b;})
new_scope='';new_string=fullstring.replace(/#.+?\s/g,"");new_scope=splitstring[0]+new_string;return new_scope;}
var getUniquePath=function(node){var parts=[];var descs=[];if(delimiter&&delimiter!=''){parents=jQuery(node).parentsUntil(delimiter);}else{parents=jQuery(node).parents();}
parents.each(function(i,element){element_data=identifier(element);parts.push(element_data[0].scope);descs.push(element_data[0].desc)});fullscope=parts.join(' > ',parts.reverse());fulldesc=descs.join(' ',descs.reverse());if(delimiter&&delimiter!='')fullscope=delimiter+' '+fullscope;full_element_data=[];full_element_data.push({fullscope:fullscope,fulldesc:fulldesc,})
return full_element_data;}
rocketframe=window.frames['csshero-iframe-main-page'].document;if(delimiter&&delimiter!=''){csshero_declare_item(delimiter,delimiter)
range=jQuery(delimiter+' *',rocketframe);}else{csshero_declare_item('body','Site Body')
range=jQuery('body *',rocketframe);}
pseudo_checker=[];range.each(function(i,o){thi=identifier(jQuery(this));thi_scope=thi[0].scope;thi_desc=thi[0].desc;t=getUniquePath(jQuery(this))[0].fullscope;d=getUniquePath(jQuery(this))[0].fulldesc;t=t+' > '+thi_scope;if(pseudo_lookup){console.log('faccio uno pseudo lookup')
w=t.replace('HTML > BODY > ','');if(jQuery.inArray(w,pseudo_checker)==-1){var original_el_w=window.getComputedStyle(rocketframe.querySelector(t)).getPropertyValue('width')
var pseudo_after_w=window.getComputedStyle(rocketframe.querySelector(t),':after').getPropertyValue('width')
if(original_el_w!=pseudo_after_w&&pseudo_after_w!='auto'&&pseudo_after_w!=0&&pseudo_after_w!='0px'){pseudo_checker.push(w);csshero_declare_pseudo(w+':after',w,thi_desc+' After','width:100%;height:100%;');}}}
splits=['widget','sidebar','comment','-meta','aside','menu','nav'];jQuery(splits).each(function(i,split){if(t.indexOf(split)>-1){t=removeNextIDs(split,t);}});if(skippers){jQuery(skippers).each(function(i,skip){if(t.indexOf(skip)>-1){w=t.split(' ');ritmo=jQuery.grep(w,function(wi){return wi.indexOf(skip)>-1;});jQuery(ritmo).each(function(i,rit){t=t.replace('> '+rit+' >','').replace('> '+rit,'').replace(rit+' >','').replace(rit,'');})}})}
t=t.trim();csshero_declare_item(t,thi_desc)});}
function generate_editables(forced){if(!forced){if(typeof csshero_theme_is_configurated=='undefined'){var need_auto_config=true;}else{if(csshero_theme_is_configurated){var need_auto_config=false;}else{var need_auto_config=true;}}}else{var need_auto_config=true;}
$('#csshero-editable-loader').hide();var paths=configuration_paths;csshero_apply_custom_ediandsugg(live_paths)
for(var u in paths){sele=paths[u].path;desc=paths[u].desc;try{var el=$(sele,hero_frame);}
catch(error){console.log(sele+' is not a valid selector')}
el.each(function(){var n=$(this);csshero_apply_ediandsugg(n,sele,desc)})}
var config_loader=$('#csshero-editable-loader > span');if(1){$('html *:not(.editable):not(.csshero-excluded-from-config)',hero_frame).addClass('editable no-config-el');}}
function csshero_apply_custom_ediandsugg(array){$('*[custom_editableclass]',hero_frame).removeAttr('custom_editableclass').removeAttr('custom_editablesuggestion');for(var z in array){if(array[z]['path_type']!='context_specific'){sele=array[z].path;desc=array[z].desc;if(!desc||desc==''||desc==' ')var desc=sele;try{var el=$(sele,hero_frame);el.each(function(){if($(this).attr('custom_editableclass')){var cec=$(this).attr('custom_editableclass').split(' | ');var ces=$(this).attr('custom_editablesuggestion').split(' | ');var cec=unique(cec);var ces=unique(ces);}
if(cec){var prev_ce=cec.join(' | ')+' | ';var prev_cs=ces.join(' | ')+' | ';}else{var prev_ce='';var prev_cs='';}
var final_sele=prev_ce+sele;var final_desc=prev_cs+desc;$(this).attr('custom_editableclass',final_sele).attr('custom_editablesuggestion',final_desc).addClass('editable')})}
catch(error){console.log(sele+' is not a valid selector')}}}}
function csshero_apply_ediandsugg(el,_selector,_sugg){var _selector=_selector.trim();if(_selector.indexOf('  ')>-1){var _selector=_selector.replace(/  /g,' ')}
var _selector_comes_from_live_paths=live_paths[_selector];if(!_selector_comes_from_live_paths){el.attr('original_editableclass',_selector)}
var _sugg_comes_from_live_paths=live_paths[_selector];if(!_sugg_comes_from_live_paths){el.attr('original_editablesuggestion',_sugg)}
var editableclass=el.attr('editableclass');var editablesuggestion=el.attr('editablesuggestion')
if(editableclass){if(_selector!=editableclass){var new_editableclass=_selector+' | '+editableclass;var new_editablesuggestion=_sugg+' | '+editablesuggestion;}else{var new_editableclass=_selector;var new_editablesuggestion=_sugg;}}else{var new_editableclass=_selector;var new_editablesuggestion=_sugg;}
el.attr('editableclass',new_editableclass).attr('editablesuggestion',new_editablesuggestion).addClass('editable').removeClass('no-config-el')}
function csshero_zoom_on_element(t){var c='csshero-currently-hovered';if(!t.is('.'+c)){$('.focus-probe').remove()
$('.'+c,hero_frame).removeClass(c)
t.addClass(c)
csshero_hover_element(t,false)}}
function csshero_editables_scanner_wrapper(y){if(y.hasClass('no-config-el')&&!y.hasClass('has-been-processed')){var all=y.toArray();var y_parents=y.parents().toArray();$.merge(all,y_parents)
var all=all.reverse();$.each(all,function(d){var d=$(all[d]);if(d.is('.no-config-el'))csshero_editables_scanner(d);})}}
function compare(a,b){var p=parseInt(specificity(a).join(''))
var q=parseInt(specificity(b).join(''))
if(p>q)return 1;if(q>p)return-1;return 0;}
function csshero_editables_scanner(element){if(element.hasClass('has-been-processed'))return;var accepted_el=csshero_get_applied_css_rules(element);var the_ob=[]
for(var a in accepted_el){var spec=parseInt(specificity(accepted_el[a]).join(''))
var elo=accepted_el[a];the_ob.push({el:elo,spec:spec})}
the_ob.sort(function(a,b){return a.spec-b.spec});var n_accepted_el=[];for(var t in the_ob){if(the_ob[t].el)n_accepted_el.push(the_ob[t].el)}
if(n_accepted_el.length>0){var primary_el=n_accepted_el[n_accepted_el.length-1]
var primary_el_spec=parseInt(specificity(primary_el).join(''));if(primary_el_spec<2){var new_primary=scan_for_parent(element,primary_el)['e'];if(new_primary)n_accepted_el.unshift(new_primary)
n_accepted_el.sort(function(a,b){return parseInt(specificity(a).join(''))-parseInt(specificity(b).join(''))})}
var finalizer=unique(n_accepted_el);finalizer=finalizer.reverse()
var rendered_finalizer=finalizer.join(' | ');var finalize_sugg=csshero_generate_sugg(finalizer[0]);var rendered_finalizer_sugg=csshero_generate_sugg(rendered_finalizer);element.attr('original_editableclass',finalizer[0]).attr('original_editablesuggestion',finalize_sugg).addClass('has-been-processed')
element.attr('editableclass',rendered_finalizer).attr('editablesuggestion',rendered_finalizer_sugg).addClass('editable').addClass('has-been-processed')}}
function specificity(selector,isStyleAttribute){selector=selector||"";function numMatches(regex){return(selector.match(regex)||[]).length;}
var numClasses=numMatches(/\.[\w-_]+\b/g);var numIds=numMatches(/#[\w-_]+\b/g);var numNamesInBraces=0;var namesInBraces=selector.match(/\[[^\]]*\b[\w-_]+\b[^\]]*\]/g)||[];for(var idx=0;idx<namesInBraces.length;++idx){numNamesInBraces+=(namesInBraces[idx].match(/\b[\w-_]+\b/g)||[]).length;}
var results=[0,0,0,0];results[0]=isStyleAttribute?1:0;results[1]=numIds;results[2]=numMatches(/\[[^\]]+\]/g)+numClasses;results[3]=numMatches(/\b[\w-_]+\b/g)-numIds-numClasses-numNamesInBraces;return results;}
function scan_for_parent(element,primary_el){var parent=element.closest('*[original_editableclass]');if(parent.length){var parent_original=parent.attr('original_editableclass');var new_primary_el=parent_original+' /// '+primary_el;var new_primary_el=new_primary_el.split(' /// ')
var new_primary_el=unique(new_primary_el);var new_primary_el=new_primary_el.join(' ')
var new_primary_el_spec=parseInt(specificity(new_primary_el).join(''));}
return{e:new_primary_el,s:new_primary_el_spec}}
function csshero_generate_sugg(sugg){var sugg=sugg+' ';var sugg=sugg.split('.').join(' ').split('#').join('');var sugg=sugg.replace(/ a /g,' link ').replace(/ p /g,' paragraph ').replace(/ ul /g,' list ').replace(/ li /g,' item ').replace(/ ol /g,' ordered list ');var sugg=sugg.trim().replace(/  /g,' ')
return sugg;}
function csshero_hover_element(element,show_only_this){var has_editable_from_style=csshero_get_applied_css_rules(element);if(has_editable_from_style.length==0&&!element.attr('custom_editableclass')&&!element.hasClass('brizy-forced')&&!element.attr('editableclass')){element.removeClass('editable')
return;}
if(!element.attr('editableclass')&&!element.is('.no-rocket *')){var edited_range=$('.csshero-currently-hovered',hero_frame)
$.each(edited_range,function(w){csshero_editables_scanner_wrapper($(this));});$(window).trigger('made_editables')}
var canvas=$('#csshero-focus-view')
var custom_editableclass=element.attr('custom_editableclass');var custom_editablesugg=element.attr('custom_editablesuggestion');if(!custom_editableclass){var custom_editableclass='';}else{var custom_editableclass=custom_editableclass+' | ';}
if(!custom_editablesugg){var custom_editablesugg='';}else{var custom_editablesugg=custom_editablesugg+' | ';}
var editablesugg=element.attr('editablesuggestion');if(!editablesugg)var editablesugg='';var editableclass=element.attr('editableclass');if(!editableclass)var editableclass='';var all_editableclasses=custom_editableclass+editableclass;var all_editablesuggs=custom_editablesugg+editablesugg;var cla=all_editableclasses.split(' | ')[0]
if(!cla||cla=='')return;canvas.removeClass('we-have-no-config')
if(show_only_this){var cla=show_only_this;}else{var cla=cla;}
canvas.attr('data-els',cla)
try{$(cla+':in-viewport',hero_frame)}catch(err){if(err)return;}
var elements=$(cla+':in-viewport',hero_frame).toArray();if(elements.length==0){var elements=$('html',hero_frame).find(cla+':in-viewport',hero_frame).toArray();}
var scrolled=$(hero_frame).scrollTop()
var fw=canvas.outerWidth();var fh=canvas.outerHeight();canvas.show()
var eindex=0;var check=core.text().replace(/\s*\{\s*/g,"{");check=check.split('{}').join('||');$(elements).each(function(i,v){eindex++;var h=$(v).outerHeight();var w=$(v).outerWidth();if(w==0||h==0)return;var t=$(v).offset().top;var t=t-scrolled;var l=$(v).offset().left;var label_pos_t='label_bottom';var label_pos_l='label_left';if($(v).is('.csshero-currently-hovered')){var is_edited=false;var es=all_editablesuggs.split(' | ');var ec=all_editableclasses.split(' | ');var ed=[]
for(var f in ec){if(check.indexOf(ec[f]+'{')>-1){is_edited=true;ed.push({s:es[f],c:ec[f]});}}
var eg=JSON.stringify(ed)
$(v).attr('data-send-editables',eg)
var cl='current-probe';if(is_edited)cl+=' probe-edited'
if(t+h>fh/2&&t>20){var label_pos_t='label_top';}
if(l>fw/2){var label_pos_l='label_right';}
if(!element.hasClass('no-config-el')){var sug=es[0];}else{var sug=ec[0];}
var len=$(ec[0],hero_frame).length;var is_animated='';if(hero_animations[ec[0]]){var is_animated='<span class="is_animated">Animated</span>';cl+=' probe-animated';}else{var is_animated='';}
var label='<div class="focus-label"><div class="focus-label-inner"><span class="hamb"></span><span class="sug">'+sug+'</span><span class="cnt">'+len+'</span>'+is_animated+'<span class="edt">edited</span><span class="chioder ico"></span></div><div class="probe-mask"></div></div>';var p=$(v).css('padding')
var probe_padding='<div style="border-width:'+p+';" class="focus-probe-p"></div>';var m=$(v).css('margin');var rad=$(v).css('border-radius');var b=$(v).css('border-width')
if(b!='0px'){var b_sum=b.split(' ');var b_val=0;for(var u in b_sum){var uu=parseInt(b_sum[u]);b_val+=uu;}
if(b_val>2){var b_cla=''}else{var b_cla='hi'}
var probe_borders='<div style="border-radius:'+rad+';border-width:'+b+';" class="focus-probe-b '+b_cla+'"></div>';}else{var probe_borders='';}
var nm=m.split(' ');var _nm=[];var _ng=[]
var them=[];for(var j in nm){var nn=parseFloat(nm[j])
var the_m=nn<0?0:nn;var pos=nn<0?0:nn*-1
var neg=nn<0?nn*-1:0;_ng.push(neg+'px')
_nm.push(pos+'px')
them.push(the_m+'px')}
var neg=_ng.join(' ');var neg_mar=_nm.join(' ');var probe_margin='<div style="border-width:'+them.join(' ')+';margin:'+neg_mar+';" class="focus-probe-m"></div>';var probe_negatives='<div style="border-width:'+neg+';" class="focus-probe-n"></div>'}else{var cl=''
var label='';var probe_padding='';var probe_margin='';var probe_borders='';var probe_negatives='';}
var sty='top:'+t+'px;left:'+l+'px;width:'+w+'px;height:'+h+'px;'
var hov='<div data-probe-scope="'+cla+'" style="'+sty+'" class="'+cl+' focus-probe '+label_pos_l+' '+label_pos_t+'">'+label+probe_padding+probe_margin+probe_borders+probe_negatives+'</div>';var ich=canvas.attr('data-els')
if(cla==ich)$(hov).appendTo(canvas)})}
function csshero_get_applied_css_rules(element){var appliedRules=[];var context=window.frames['csshero-iframe-main-page'].document.styleSheets;var element=$(element,window.frames['csshero-iframe-main-page'].document);var check_internal=new RegExp(location.host);for(var x=0;x<context.length;x++){var style_el=context[x].ownerNode;var is_internal=true;var href=$(style_el).attr('href');if(href&&!check_internal.test(href))is_internal=false;if($(style_el).attr('data-selector')||$(style_el).attr('id')=='csshero-style-protect')is_internal=false;if(href&&is_internal==true){if(href.indexOf('wpcss_action')>-1)is_internal=false;}
if(is_internal){var rules=context[x].cssRules;for(var i=0;i<rules.length;i++){var rl=rules[i].selectorText;var is_ok_rule=true;try{element.is(rl)}
catch(err){var is_ok_rule=false;}
if(rl&&is_ok_rule){if(element.is(rl)){appliedRules.push(rl)}}}}}
var accepted_el=[];for(var e in appliedRules){var ei=appliedRules[e];var eu=ei.split(',');for(var x in eu){var eux=eu[x].trim().replace(/"/g,'').replace(/'/g,'').replace(/.js/g,'');if(eux&&element.is(eux)&&eux!='*'&&eux!=''&&eux!=' '&&eux!='div'&&eux.indexOf(':hover')==-1&&eux.indexOf(':visited')==-1&&eux.indexOf(':focus')==-1&&eux.indexOf(':active')==-1&&eux.indexOf(':link')==-1&&eux.indexOf('[data-aos')==-1&&eux!='.clearfix'){eux=eux.trim();if(eux[eux.length-1]=='*')eux=eux.slice(0,-1)+element[0].tagName;accepted_el.push(eux)}}}
accepted_el=unique(accepted_el)
return accepted_el;}
function unique(list){var result=[];$.each(list,function(i,e){if($.inArray(e,result)==-1)result.push(e);});return result;}
function csshero_config_login_els(){var custom_els={'body.login':'Login Body','body.login #login .button':'Login Button'}
for(var c in custom_els){$(c,hero_frame).attr('editablesuggestion',custom_els[c]).attr('editableclass',c).removeClass('no-config-el').addClass('has-been-processed')}}
function no_zoom(){if((body.hasClass('enable-navigation')||(body.hasClass('inspector-on')&&$('.auto-select').is('.nose')))){var ret=true;}else{var ret=false;}
return ret;}
$(window).on('frameready',function(e){var selector='.editable';$(document).off('click','.hero-rc [data-toggle]')
$(document).off('',selector)
$(document).off('','.hero-rc li:not(.chioder):not(.title)')
$(document).on('mouseleave','.hero-rc',function(){hero_click_wrapper(current_el())
$('.hero-rc').remove()
$('.hamb.open').removeClass('open')}).on('click','.hero-rc li:not(.chioder):not(.title):not(.dd)',function(){var c=$(this).attr('data-context');var d=$(this).attr('data-context-desc')
var fake_el=$('<div editableclass="'+c+'" editablesuggestion="'+d+'"></div>')
hero_update_selector_bar(fake_el);hero_click_wrapper(c)
$('.hero-rc').remove()}).on('click','.focus-label .sug, .focus-label .edt',function(){var curH=$('.cur-hov-el',hero_frame);if(!curH.is(current_el())){curH.trigger('click')}}).on('click','.chioder',function(){var curH=$('.cur-hov-el',hero_frame);if(!curH.is(current_el())){curH.trigger('click')}
$('.hero-rc').remove();$('.wysi-inner-tab.hid[data-tab="properties"] .wysi-tab-title').trigger('click')
$('.hero-group:not(.closed) .hero-group-head').trigger('click')
$('.hero-group.closed[data-group="spacings"] .hero-group-head').trigger('click')
csshero_prepara_chiodi($('.currently-clicked',hero_frame))}).on('click','.hero-rc [data-toggle]',function(){var t=$(this).attr('data-toggle')
$(t).toggleClass('open')
$(this).toggleClass('open')}).on('click','.hamb',function(){var t=$(this)
t.toggleClass('open');if(t.is('.open')){$('.cur-hov-el',hero_frame).trigger('contextmenu')
var ttop=$(this).offset().top;if((ttop+300)>$(window).outerHeight()){ttop=ttop-25-$('.hero-rc').outerHeight();}
$('.hero-rc').css({'left':$(this).offset().left+'px','top':ttop+45+'px'})}else{$('.hero-rc').remove();}})
$(hero_frame).on('mouseenter mousemove',selector,function(e){if($('.hero-rc').length>0)return;$('.cur-hov-el',hero_frame).removeClass('cur-hov-el')
e.stopPropagation();$(this).addClass('cur-hov-el')
if(!body.hasClass('hovering-probe')&&!$(this).is('html')&&!body.hasClass('inchiodato')){if(!no_zoom())csshero_zoom_on_element($(this));}}).on('contextmenu',selector,function(e){if(no_zoom()){return;}
hero_get_edited_els()
$(this).addClass('scroll-anchor')
$('.hero-rc').remove()
var rcw=300;var rch=220;e.stopPropagation();e.preventDefault();var l=e.pageX;l=l+$('#csshero-iframe-main-page').offset().left-$('#csshero-iframe-main-page').contents().scrollLeft();var t=e.pageY;t=t+$('#csshero-iframe-main-page').offset().top-$('#csshero-iframe-main-page').contents().scrollTop();if(l>$(window).outerWidth()-rcw)l=l-rcw
if(t>$(window).outerHeight()-rch){t=t-rch
var m='10px';}else{var m='-20px'}
var ec=$(this).attr('editableclass').split(' | ')
var se=$(this).attr('data-send-editables')
var es=$(this).attr('editablesuggestion').split(' | ')
var ct=return_context_els(ec[0],es[0],$(this))
$('.currently-clicked',hero_frame).removeClass('currently-clicked')
$(this).addClass('currently-clicked')
ec=unique(ec);var ecl='';for(var e in ec){var len=$(ec[e],hero_frame).length;if(len>0&&ec[e].indexOf(':hover')==-1&&ec[e].indexOf(':active')==-1&&ec[e].indexOf(':visited')==-1){if(ct.indexOf('data-context="'+ec[e]+'"')==-1)ecl+='<li class="ico" data-context-desc="'+es[e]+'" data-context="'+ec[e]+'"><b>'+es[e]+'</b><em>'+ec[e]+'</em><span>'+len+'</span></li>';}}
var el=$('<div style="max-height:'+rch+'px;width:'+rcw+'px;top:'+t+'px;left:'+l+'px;" class="hero-rc scroller"><ul><li data-context="'+ec[0]+'" class="chioder ico">Adjust Spacings</li></ul><ul><li class="title open" data-toggle=".dd-1">Editing Context:</li><li class="dd open dd-1"><ul>'+ct+'</ul></li><li class="title open" data-toggle=".dd-2">Matching Selectors:</li><li class="dd-2 open dd"><ul>'+ecl+'</ul></li></ul><div class="csshero-add-selector-toggle-wrap"><b class="csshero-add-selector-toggle">Add Selector<em>+</em></b></div></div>');el.find('li[data-context]').each(function(){var edi=$(this).attr('data-context')
if(hero_edited_els.indexOf(edi)>-1){$(this).addClass('is-edited')}})
el.css('opacity',0)
el.appendTo(body)
el.animate({'marginTop':m,opacity:1},100);$(window).trigger('update_tips')
hero_setup_scrollers();}).on('click',selector,function(e){$('.scroll-anchor').removeClass('scroll-anchor')
$('.hero-rc').remove()
if(body.hasClass('editing_snippet')){$('#hero-editor #hero-wysiwyg .wysi-inner').removeClass('has-open')
body.removeClass('editing_snippet')}
if(no_zoom()){return;}
e.preventDefault();e.stopPropagation();clean_empty_rules();$(this).addClass('scroll-anchor')
$('.currently-clicked',hero_frame).removeClass('currently-clicked')
$(this).addClass('currently-clicked')
$('.csshero-clicked-range',hero_frame).removeClass('csshero-clicked-range')
var c=hero_update_selector_bar($(this));c=c[0]
hero_click_wrapper(c)}).on('mousedown',selector,function(e){$(this).addClass('csshero-clicked-range')
e.preventDefault();body.removeClass('editing-element')
var edited_range=$('.csshero-clicked-range',hero_frame);edited_range=edited_range.toArray();hero_build_bottom_bar(edited_range)})})
function csshero_event_logger(context='v4',description='load'){var context='v4_'+context;var key='6144565deea052703b7fee265fba5e21736';var url='https://p.csshero.org/production-v4/heroes-event-logger.php?key='+key+'&event_context='+context+'&event_name='+description;$.ajax({url:url,type:'GET',success:function(response){},error:function(xhr,status){}});}
function sort_mqs(){var mks=[];$('#hero-mqs > span:not([data-mq="all"])').each(function(){mks.push($(this).attr('data-mq'))})
var code=core.html();code=code.replace(/\s*\{\s*/g,"{");for(var d in mks){var mq=mks[d]
var start=code.indexOf(mq);if(start>-1){start=start+mq.length;var close=find_closing_bracket(code,start)
if(close>start){var nao=mq+code.substring(start,close+1);code=code.replace(nao,'')
var nicer_nao=nao.replace(mq,mq+'\n')
code+=nicer_nao;}}}
core.html(code)}
function hero_undo(){$('#hero-history .hero-step.cur + .hero-step').trigger('click')}
function hero_redo(){$('#hero-history .hero-step.cur').prev().trigger('click')}
function hero_generate_to_be_stored_data(){var to_be_stored={obj:{less:core.text(),animations:hero_animations,custom_gfonts:custom_gfonts},css:$('.csshero-style-render',hero_frame).text()}
return to_be_stored;}
function hero_store_history_step(cc){var cuc=cc?cc:'';if(!$('#hero-save').is('.err')){var d=new Date();var dh=d.getHours();var dm=d.getMinutes();var ds=d.getSeconds();var dd=d.getDate();var dn=d.getMonth()+1;var dy=d.getFullYear();var date=dy+'/'+dn+'/'+dd+' @ '+dh+':'+dm+':'+ds;var storable=JSON.stringify(hero_generate_to_be_stored_data());var cur=$('.hero-step.cur');if(cur.find('pre').text()!=storable){cur.removeClass('cur')
$('#hero-history').prepend('<div class="hero-step cur '+cuc+'"><span>'+date+'</span><pre>'+storable+'</pre></div>')}}
update_history_btns()}
function apply_style(){if(body.is('.mq-on'))sort_mqs();code=core.text();HEROWorker.postMessage({type:'less',val:code,built_in_libs:hero_built_in_libs})}
function current_el(){return $('#hero-code-editor-selector').text()}
function hero_build_bottom_bar(array){bottom_bar.empty()
var str='';for(var a in array){var rep=$(array[a]).attr('editablesuggestion');if(rep){var sug=rep.split(' | ')[0]
var cla=$(array[a]).attr('editableclass').split(' | ')[0]
if(cla&&cla!='')str+='<span data-sel="'+cla+'"><span class="ico"></span><label>'+sug+'</label></span>'}}
bottom_bar.html(str)}
function clear_prop_value(prop,no_render){var widget=$('.hero-prop[data-prop="'+prop+'"]');var input=widget.find('.hero-val');input.trigger('hilight');core.find('span em.hero-prop-em').remove()
widget.find('.hero-val-mask').empty();if(no_render)return;set_mirror_value(mirror,core.find('.hero-inner:not(:has(.hero-inner))').text())
apply_style();setTimeout(function(){var val=$(current_el(),hero_frame).css(prop)
hero_update_widget(widget,val,false)
hero_store_history_step()},300)}
function get_input_unit(el){var nam=el.val();nam=nam.split(' ')[0]
var unit=nam.match(/[^\d.-]/g);if(unit){unit=unit.join('')
if(unit=='auto'||unit.indexOf('@')>-1)unit='px'}else{unit='';}
return unit;}
function hero_get_color(color){var color=color.replace('!important','')
var ret=hero_global_vars[color]?hero_global_vars[color].compiled:color;return ret;}
function hero_update_widget(widget,val,is_edited){if(!widget||!val)return;if(is_edited){widget.attr('data-edited','edited')}else{widget.removeAttr('data-edited')}
if(widget.is('[data-prop="transform"]')){prepare_transform_widget(val)}
if(widget.is('[data-prop="background-image"]')){widget.find('.has-prev').removeClass('has-prev')
widget.find('.mini-prev').css('background-image','none')
if(val=='none'){widget.closest('.hero-group-wrap').addClass('no-bg-img')}else{if(val.indexOf('-gradient')>-1){var dest=widget.find('.hero-make-gradient')}else{var dest=widget.find('.hero-make-img')}
dest.addClass('has-prev').find('.mini-prev').css('background-image',val)
if(val.indexOf('url(')>-1){widget.closest('.hero-group-wrap').removeClass('no-bg-img')}else{widget.closest('.hero-group-wrap').addClass('no-bg-img')}}}
widget.find('.hero-val').val(val)
hero_update_mask_val(widget.find('.hero-val'))
var picker=widget.find('.hero-picker')
var btns=widget.find('.hero-btns')
var slider=widget.find('.hero-slider-wrap input')
if(picker.length>0){picker.css('background-color',hero_get_color(val))}
if(!widget.is('[data-prop="filter"]')){if(slider.length>0){if(widget.is('[data-prop="opacity"]')){var slider_val=val*10;}else{var slider_val=val;}
slider.val(parseInt(slider_val))}}else{widget.find('input[type="range"]').each(function(){if(val!='none'){var f=$(this).attr('data-filter')+'(';if(val.indexOf(f)==-1)return;var g=val.substring(val.indexOf(f)+f.length)
g=g.split(')')[0]
if(g.indexOf('deg')==-1&&g.indexOf('px')==-1)g=g*100;}else{var g=0;}
$(this).val(parseInt(g))})}
if(btns.length>0){btns.find('.hero-btn.cur').removeClass('cur')
btns.find('.hero-btn[data-val="'+val+'"]').addClass('cur')}
var stn=widget.find('.set-to-none');if(stn.length>0){if(val=='none'){stn.addClass('hid')}else{stn.removeClass('hid')}}
update_editor_count_labels()}
function get_global_vars(){HEROWorker.postMessage({type:'scan_vars',val:core.text()})}
function get_global_classes(){HEROWorker.postMessage({type:'scan_classes',val:core.text()})}
function hero_prepare_wysiwyg(code){var t0=performance.now();if(code[code.length-1]!=';')code+=';'
var ty=CSSJSON.toJSON(code)
var atts=ty.attributes;var counter=0;for(var a in atts){if(editor.find('.hero-prop[data-prop="'+a+'"]').length>0)counter+=1;}
$('.wysi-inner-tab[data-tab="properties"] .wysi-tab-title .cnt').text(counter)
get_global_vars();get_global_classes();var is_real_el=false;try{$(current_el(),hero_frame)
is_real_el=true;}catch(err){}
$('.hero-val-wrap.show-dd').removeClass('show-dd')
var props=$('.hero-prop').toArray();for(var p in props){var t=$(props[p]);t.removeClass('d_only').removeClass('is_imp')
var prop=t.attr('data-prop');var isedited=false;if(code.indexOf('._d('+prop)>-1){t.addClass('d_only')
isedited=true;}else{if(atts[prop])isedited=true;}
if(atts[prop]){var val=atts[prop]}else{if(is_real_el){var val=$(current_el(),hero_frame).eq(0).css(prop)}else{var val='none'}}
if(prop=='font-size'){if(code.indexOf('.rfs(')>-1){isedited=true;$('.hero-prop[data-prop="font-size"]').addClass('rfs-wid')
val=code.split('.rfs(')[1]
val=val.split(')')[0]}else{$('.hero-prop[data-prop="font-size"]').removeClass('rfs-wid')}}
if(val&&val.indexOf('!important')>-1)t.addClass('is_imp')
hero_update_widget(t,val,isedited)}
if(!$('.wysi-inner-tab[data-tab="animations"]').is('.hid'))csshero_load_animations();update_editor_count_labels()
hero_detect_edits()
var t1=performance.now();hero_log('hero_prepare_wysiwyg took '+(t1-t0))}
function update_editor_count_labels(){if(hero_animations[current_el()]){$('.wysi-inner-tab[data-tab="animations"] > h4 .cnt').html('1')}else{$('.wysi-inner-tab[data-tab="animations"] > h4 .cnt').html('0')}
$('.wysi-inner-tab[data-tab="snippets"] > h4 .cnt').html($('.hero-snippet.cur').length)
$('.wysi-inner-tab[data-tab="properties"] > h4 .cnt').text($('.hero-prop[data-edited="edited"]').length)}
function hero_detect_edits(){var cur=current_el();if(!cur||cur=='')cur='.heronone';var ms={}
$('#hero-mqs span[data-mq]').each(function(){var mq=$(this).attr('data-mq');var na=$(this).attr('data-name');ms[na]=mq;})
HEROWorker.postMessage({type:'detect_mq_edits',curel:cur,mqs:ms,val:$('.csshero-style-render',hero_frame).text()})}
function set_mirror_value(miro,code){var ori_code=code;if(miro==mirror){code=code.trim();code=current_el()+'{\n'+code+'\n}';}
if(typeof css_beautify=='function'&&ori_code&&ori_code!=''&&ori_code!=' '&&$('.hero-beautify').is('.cur')){code=css_beautify(code,{'indent_size':3,'indent_char':' ','preserve_newlines':false,})}
if(code.indexOf('{}')>-1)code=code.split('{}').join('{\n\n}')
miro.setValue(code)
if(miro==mirror){var totalLines=miro.lineCount();var lastLine=miro.lineCount();miro.markText({line:0,ch:0},{line:1,ch:0},{inclusiveLeft:true,atomic:true,className:'readOnly-line',readOnly:true,replacedWith:document.createTextNode(""),});miro.markText({line:lastLine-1,ch:0},{line:lastLine,ch:0},{inclusiveRight:true,atomic:true,className:'readOnly-line',readOnly:true,replacedWith:document.createTextNode(""),});}}
function escape_reg_exp(string){return string.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
function clean_empty_rules(){var emps=core.find('.hero-inner:empty');if(emps.length>0)emps.closest('.hero-outer').remove();}
function hero_throttle(event,delay){var timer=null;return function(){var context=this,args=arguments;clearTimeout(timer);timer=window.setTimeout(function(){event.apply(context,args);},delay||500);};}
function hero_click_wrapper(sel,skipper){if(!sel||sel==''||sel==' ')return;body.addClass('loaded')
if(body.is('.inspector-on')){if(!skipper)hero_hilight_in_inspector(sel);return;}
if(body.is('.mq-on')){mark_code_in_core(get_current_mq(),core,'hero-mq')
if(core.find('.hero-mq').length==0){core.append('\n'+get_current_mq()+'{\n<span class="hero-outer">'+sel+'{<span class="hero-inner"></span>\n}</span>\n}')
load_editor(sel,$('.hero-mq'))}else{load_editor(sel,$('.hero-mq > .hero-inner').eq(0))}}else{load_editor(sel)}
if($('.hero-rc').length>0)return;var bar=$('#hero-selector-bar .load-line')
bar.fadeIn(200).animate({'width':'100%'},200,function(){setTimeout(function(){bar.fadeOut(300,function(){bar.css('width','0')
$('.cnt.srcing').trigger('click')})},200)})}
function load_editor(selector,context=core,skip_check){var t0=performance.now();hero_il8();var code=context.text().trim();mark_code_in_core(selector,context);var dest=context.find('.hero-inner:not(:has(.hero-inner))');if(dest.length>0){var node_code=dest.eq(0).text();}else{var node_code='';context.append('<span class="hero-outer">\n'+selector+'{<span class="hero-inner"></span>}</span>')}
$('#hero-code-editor-selector').html(selector)
set_mirror_value(mirror,node_code)
hero_prepare_wysiwyg(node_code)
$('.hero-options').each(function(){if($(this).find('.hero-option:not(.cur)').length>0){$(this).addClass('multi')}else{$(this).removeClass('multi')}})
var t1=performance.now();hero_log('load_editor took '+(t1-t0))}
function hero_refresh_mirrors(){$('.CodeMirror').each(function(i,el){el.CodeMirror.refresh();});}
function set_element_prop(prop,val,render,requirement,custom_class){if(!prop)return;if(requirement){if(requirement.indexOf('@gfont')>-1){var requi=requirement.replace('@gfont','');if(core.text().indexOf('fonts.googleapis.com')>-1){if(core.text().indexOf(requi)==-1){var gfonted_code=core.html().replace('css?family=','css?family='+requi);var check_requi=requi.split('|').join('')
if(gfonted_code.indexOf(check_requi+'|'+check_requi)>-1)gfonted_code=gfonted_code.replace(check_requi+'|'+check_requi,check_requi+'|')
core.html(gfonted_code)}}else{core.html('@import url("https://fonts.googleapis.com/css?family='+requi+'");\n'+core.html())}}else{if(core.text().indexOf(requirement)==-1){core.html(requirement+'\n'+core.html())}}}
if($('.hero-prop[data-prop="'+prop+'"]').is('.d_only')){remove_snippet('._d('+prop)
prop='._d('+prop+','+val+')';val=false;}
if($('.hero-prop[data-prop="'+prop+'"]').is('.is_imp')){val=val.split('!important')[0]+'!important';}
mark_prop_in_core(prop);if(val){var applier=prop+':'+val+';';}else{var applier=prop+';'}
core.find('span em.hero-prop-em').text(applier)
if(custom_class)core.find('span em.hero-prop-em').addClass(custom_class)
set_mirror_value(mirror,core.find('.hero-inner:not(:has(.hero-inner))').text())
if(val)hero_update_widget($('.hero-prop[data-prop="'+prop+'"]'),val,true)
if(render)apply_style();if(val&&val.indexOf('!important')==-1&&val.indexOf('@')==-1&&$(current_el(),hero_frame).length>0){setTimeout(function(){if(prop.indexOf('color')>-1){if(prop=='filter')return;if(prop.indexOf('color')>-1&&val.indexOf('rgb')==-1)return;var pse=$('<div>mu</div>');pse.css(prop,val)
if(pse.css(prop)!=$(current_el(),hero_frame).css(prop)){$('.hero-prop[data-prop="'+prop+'"] .i-imp').trigger('click')}}},500)}}
function grab_between(string,start,end){var ret=string.slice(string.indexOf(start)+1,string.lastIndexOf(end))
return ret;}
function mark_prop_in_core(prop,context=core){if(!prop)return;var zprop=escape_reg_exp(prop)
var re=new RegExp("(^|[^-])\\b"+zprop+"\\b([^-]|$)","i")
var node=context.find('.hero-inner:not(:has(.hero-inner))');if(node.length==0){console.log('nce sta, ricarico?')
hero_click_wrapper(current_el())
var node=context.find('.hero-inner:not(:has(.hero-inner))');}
var start='<em class="hero-prop-em">';var code=node.html()
code=code.split('&amp;').join('&')
code=code.split(start).join('')
code=code.split('</em>').join('')
var backup_els=[];var u=-1;var backups=code.match(/\{[^\}]*\}/g);if(backups){backups.forEach((e)=>{u++;code=code.replace(e,'§'+u+'£')
backup_els.push(e)});}
code=code.replace(re,'\n'+start+prop+':')
code=code.split(start)
var sta=code[0]
var fin=code[1]
if(fin){var del='\n'
if(fin.indexOf(';')<fin.indexOf('\n'))del=';'
if(fin.indexOf(del)==-1){fin+=';</em>'}else{var rep=del;if(rep!=';')rep=';'
fin=fin.replace(del,rep+'</em>')}
var ty=sta+start+fin;}else{var ty=node.text()+'\n'+start+'</em>';}
for(var a in backup_els){ty=ty.replace('§'+a+'£',backup_els[a])}
ty=ty.replace(/;;/g,';').replace('\n\n'+start,'\n'+start);node.html(ty)}
function mark_code_in_core(selector,context=core,cla=''){if(!selector)return;var selector=selector.trim();var code=context.text();var comm_arr=code.match(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm);if(comm_arr){comm_arr.forEach((e)=>{var nc=e.split('{').join('(-AG-)').split('}').join('(-CG-)')
code=code.replace(e,nc)});}
var marker_start='<span class="hero-inner">'
var marker_end='</span>';var outer_marker_start='<span class="hero-outer '+cla+'">'
var backup_els=[];var u=-1;code=code.replace(/\s*\{\s*/g,"{");for(var i=0;i<code.length;i++){if(code[i]==="{"){u++;var end=find_closing_bracket(code,i);var nao=code.substring(i,end+1);code=code.replace(nao,'§'+u+'£§-n-£');backup_els.push(nao)}}
code='§-n-£'+code.replace(/\}/g,'}§-n-£').split('*/').join('*/§-n-£').replace(/;/g,';§-n-£')
code=code.replace(/\t/g,'§-t-£').replace(/\n/g,'§-l-£').replace(/\r/g,'§-r-£').replace(/ \§/g,'§').replace(/\£ /g,'£')
var backup_code=code;hell_checker=code;code=code.split('£'+selector+'§');if(code.length>1){code=code.slice(0,-1).join('£'+selector+'§')+'£'+outer_marker_start+selector+marker_start+'§'+code.slice(-1);}else{code=backup_code;}
for(var a in backup_els){code=code.replace('§'+a+'£',backup_els[a])}
code=code.replace(marker_start+'{','{\n'+marker_start).replace(/\§-t-\£/g,'\t').replace(/\§-l-\£/g,'\n').replace(/\§-r-\£/g,'\r').replace(/\§-n-\£/g,'').replace(/\§-d-\£/g,'  ')
if(code.indexOf('§')>-1)code=code.split('§')[0]+'{}\n// SOMETHING BAD HAPPENED :('
var identifier=marker_start;var start=code.indexOf(identifier);var end=find_closing_bracket(code,start);code=[code.slice(0,end),marker_end,code.slice(end)].join('');code=code.replace(marker_end+'}',marker_end+'}'+marker_end)
if(code.indexOf('(-AG-)')>-1)code=code.split('(-AG-)').join('{')
if(code.indexOf('(-CG-)')>-1)code=code.split('(-CG-)').join('}')
code=code.trim()
context.html(code)}
function get_current_mq(){var ret=body.attr('data-mq')?body.attr('data-mq'):'all';return ret;}
function setup_global_classes(){hero_built_in_libs='';var load1=$.get(hero_root+'lesslibs/snippets.less',function(data){hero_built_in_libs+=data;});var load2=$.get(hero_root+'lesslibs/rfs.less',function(data){hero_built_in_libs+=data;});$.when(load1,load2).done(function(){apply_style();setTimeout(function(){HEROWorker.postMessage({type:'default_classes',val:hero_built_in_libs})},200)});}
function draw_snippets_panel(obj){setTimeout(function(){var cus=$('.hero-snippet-group[data-group="custom"]');if(cus.is('.open')){var cla='open';}else{var cla='';}
cus.remove();var classer=$('.wysi-inner-tab[data-tab="snippets"] .wysi-child')
classer.append(obj)
classer.find('.snippet-par .snipar:not(.checked)').each(function(){var val=$(this).val();if(is_color(val)){$(this).after('<div class="hero-picker-wrap"><div class="hero-picker" style="background-color:'+is_color(val)+';"></div></div>')}
$(this).addClass('checked')})
classer.find('.hero-snippet-group[data-group="custom"]').addClass(cla)
hero_setup_scrollers();check_for_applied_snippets();},400)}
function hero_setup_scrollers(){$('.scroller:not(.ps)').each(function(){var ps=new PerfectScrollbar($(this)[0],{useBothWheelAxes:false,suppressScrollX:true,wheelPropagation:false});});}
function hero_set_layout_prefs(){var ob={detached:false,inspector:false,code_editor_hidden:false,hide_colors_in_code:false,code_theme:'csshero-theme',beautify:true}
if(body.is('.no-colors-in-code'))ob['hide_colors_in_code']=true;if(body.is('.detached-editor'))ob['detached']=true;if(body.is('.inspector-on'))ob['inspector']=true;ob['editor_width']=editor.outerWidth();ob['insp_fontsize']=$('.CodeMirror').css('font-size')
ob['code_theme']=$('.swap-theme.cur').attr('data-theme')
if(!$('.hero-beautify').is('.cur')){ob['beautify']=false;}
if($('.wants-no-sele').length>0){ob['insp_nosele']=$('.wants-no-sele .cur').attr('data-val')}else{if($('.auto-select').is('.nose')){ob['insp_nosele']='no'}else{ob['insp_nosele']='yes'}}
if(editor.is('.max-wysiwyg'))ob['code_editor_hidden']=true;localStorage.setItem('CSSHERO-LAYOUT-PREFS',JSON.stringify(ob))}
function hero_get_layout_prefs(){var ob=localStorage.getItem('CSSHERO-LAYOUT-PREFS')
if(!ob)return;ob=JSON.parse(ob)
var curtheme=ob.code_theme;if(ob['beautify']==false){$('.hero-beautify').removeClass('cur');}
if(curtheme){$('.swap-theme.cur').removeClass('cur')
$('.swap-theme[data-theme="'+curtheme+'"]').addClass('cur').trigger('click')}
if(ob['hide_colors_in_code']){body.addClass('no-colors-in-code')}
if(ob.editor_width){editor.css('width',ob.editor_width+'px')
$('#csshero-wrap').css('width','calc(100% - 5px - '+ob.editor_width+'px'+')');}
if(ob.insp_nosele&&ob.insp_nosele=='no'){$('.auto-select').addClass('nose')}
if(ob.detached)$('.hero-detach-editor').trigger('click')
if(ob.inspector)$('.inspector-trigger').trigger('mousedown')
if(ob.insp_fontsize)$('.CodeMirror, #hero-code-editor-selector').css('font-size',ob.insp_fontsize)
if(ob.code_editor_hidden)editor.addClass('max-wysiwyg')}
function initialize_hero(){core=$('#hero-core');wysi=$('#hero-wysiwyg');$('#hero-editor').resizable({handles:"e",maxWidth:900,minWidth:275,resize:function(event,ui){var w=ui.size.width+5
$('#csshero-wrap').css('width','calc(100% - '+w+'px'+')');},start:function(){$('#hero-editor').before('<div id="hero-drag-mask"></div>')},stop:function(){$('#hero-drag-mask').remove();hero_refresh_mirrors()
hero_set_layout_prefs();},});var saved_less='';hero_animations={}
custom_gfonts=[];var stored_data=$('#csshero-data-from-db').text();if(stored_data&&stored_data!=''){var saved_obj=JSON.parse(stored_data);if(saved_obj.less)saved_less=saved_obj.less
if(saved_obj.animations)hero_animations=saved_obj.animations;if(saved_obj.custom_gfonts)custom_gfonts=saved_obj.custom_gfonts;}
core.html(saved_less)
get_global_vars();get_global_classes();$('#hero-mqs').append('<span class="ico cur" data-name="all" data-mq="all"></span>')
for(var d in default_mqs){$('#hero-mqs').append('<span class="def-mq ico" data-name="'+default_mqs[d].name+'" data-mq="'+default_mqs[d].value+'"></span>');}
wysi.append('<div class="wysi-inner"></div>')
var structure='';var tabbs=['Properties','Snippets','Animations'];for(var j in tabbs){var tj=tabbs[j].toLowerCase()
var cla=j==0?'':'hid'
var src=tj=='properties'?'<span class="ico hero-search-trigger"></span>':''
structure+='<div class="wysi-inner-tab '+cla+'" data-tab="'+tj+'"><h4 class="wysi-tab-title">'+tj+src+'<span class="cnt">0</span></h4><div class="wysi-child"></div></div>'}
wysi.find('.wysi-inner').append(structure)
$('.wysi-inner-tab[data-tab="properties"] .wysi-child').append('<div class="prop-search-wrap"><span class="ico hero-search-ico"></span><input class="prop-search" placeholder="Search prop" /><span class="hero-review-props ico"></span></div>')
for(var d in defaults){var el='<div data-group="'+d+'" class="hero-group closed"><div class="hero-group-head ico">'+d+'</div><div class="hero-group-wrap">';for(var dd in defaults[d]){var numeric=defaults[d][dd].numeric?'<div class="hero-numeric"><span class="plus">+</span><span class="minus">-</span></div>':'';var is_adv=defaults[d][dd].advanced?'is_adv':'';var picker=defaults[d][dd].colorpicker?'<div class="hero-picker-wrap"><div class="hero-picker"></div></div>':'';var slider='';var prop_actions='<div class="hero-prop-actions"><span class="p-imp" title="Set !important"></span><span class="p-des" title="Appy Desktop Only"></span><span title="Reset to default value" class="p-res"></span><div><span class="i-imp ico">!important</span><span class="i-des ico">Desktop Only</span><span class="i-res ico">Reset</span></div></div>'
if(defaults[d][dd].slidable){var min=defaults[d][dd].range[0];var max=defaults[d][dd].range[1];slider='<div class="hero-slider-wrap"><input type="range" min="'+min+'" max="'+max+'"></div>';}
var var_render='<div class="hero-load-vars ico oe">\
     <div class="hero-extra scroller var-loader">\
      <div class="extra-title">\
       <span>Variables</span>\
       <span class="hero-closer ico"></span>\
      </div>\
      <div class="var-setter">\
       <input required="required" type="text" placeholder="@varName" />\
       <span class="var-set">Save</span>\
      </div>\
      <div class="var-loader-inner"></div>\
     </div>\
    </div>';var ddown='';var ddown_class='';if(defaults[d][dd].dropdown){ddown_class='has_ddown';ddown='<div class="hero-dropdown-wrap"><span></span><ul class="scroller hero-ddown">';for(var q in defaults[d][dd].dropdown){if('object'==typeof defaults[d][dd].dropdown[q]){var grp=defaults[d][dd].dropdown[q];var grp_send='<ul data-grp="'+q+'"><li class="grp-title">'+q+'</li>';for(var g in grp){grp_send+='<li data-val="'+grp[g]+'">'+grp[g]+'</li>'}
grp_send+='</ul>'
ddown+=grp_send;}else{ddown+='<li data-val="'+defaults[d][dd].dropdown[q]+'">'+defaults[d][dd].dropdown[q]+'</li>';}}
ddown+='</ul></div>'}
var buttons='';var buttons_class='';if(defaults[d][dd].buttons){buttons_class='has_btns';buttons+='<div class="hero-btns">'
for(var b in defaults[d][dd].buttons){buttons+='<span class="hero-btn ico" data-val="'+defaults[d][dd].buttons[b]+'"></span>';}
buttons+='</div>'}
var compact_class=defaults[d][dd].compact?'compact':'';var title=defaults[d][dd].custom_label?defaults[d][dd].custom_label:dd;var set_to_none=defaults[d][dd].set_none?'<span class="set-to-none ico"></span>':'';var headlink='';if(dd=='font-family')headlink+='<span class="hero-project-gfonts">Add Fonts</span>';if(dd.indexOf('__')==-1){el+='<div class="hero-prop '+compact_class+' '+is_adv+' '+buttons_class+' '+ddown_class+'" data-prop="'+dd+'"><div class="prop-head"><b>'+title+'</b>'+headlink+prop_actions+'</div>'+buttons+'<div class="hero-val-wrap">'+slider+var_render+'<div class="hero-val-inner"><div class="hero-val-mask"></div><input type="text" spellcheck="false" class="hero-val" data-prop="'+dd+'" /></div>'+set_to_none+picker+numeric+ddown+'</div></div>';}else{if(dd=='__notice'){el+='<div class="hideable hero-props-notice"><span class="ico"></span>'+defaults[d][dd]+'</div>'}}}
el+='</div><div class="hero-back-to-group"><span>Back</span></div></div>'
var shadow_builder='<div class="csshero-shadow-builder hero-extra"></div>';var el=$(el);el.find('.hero-prop[data-prop="filter"] .hero-val-wrap').before(filterer)
el.find('.hero-prop[data-prop="background-repeat"],.hero-prop[data-prop="background-size"]').wrapAll('<div class="bg-group bg-group-01" />');el.find('.hero-prop[data-prop="background-position"]').wrap('<div class="bg-group bg-group-02" />')
el.find('.hero-prop[data-prop="background-image"]').addClass('has-btns').append('<div class="hero-action-btns"><span class="hero-make-img oe">Image<div class="mini-prev ico"></div><div class="csshero-unsplash-wrapper scroller hero-extra"><div class="unsplash-title extra-title"><span data-mode="unsplash" class="cur">Unsplash</span><span data-mode="local">Your Media</span><span class="hero-closer ico"></span></div><div class="hero-img-mode-wrap open-tab" data-mode="unsplash"><div class="unsplash-head"><div class="ico csshero-unsplash-search"><input value="" type="text" placeholder="Search Images" /></div><div class="csshero-unsplash-sorter"><span class="cur">latest</span><span>oldest</span><span>popular</span></div></div><div class="csshero-unsplash-loader" data-page="1"></div><div class="csshero-unsplash-footer"><p>Photos by <a target="_blank" href="//unsplash.com?utm_source=css-hero&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></p><div class="csshero-unsplash-pagination img-pagination"><span class="prev">prev</span><span class="next">next</span></div></div></div><div class="hero-img-mode-wrap" data-mode="local"></div></div></span><span class="hero-make-gradient oe">Gradient<div class="mini-prev ico"></div></span></div>');el.find('.hero-prop[data-prop="font-size"] .hero-val-wrap').prepend('<span class="hero-rfs ico"></span>');el.find('.hero-prop[data-prop="text-shadow"]').addClass('has-btns').append('<div class="hero-action-btns"><span class="csshero-make-shadow oe">Make Shadow'+shadow_builder+'</span></div>')
el.find('.hero-prop[data-prop="box-shadow"]').addClass('has-btns').append('<div class="hero-action-btns"><span class="csshero-make-shadow oe">Make Shadow'+shadow_builder+'</span></div>')
var border_arrs=['border','border-top','border-right','border-bottom','border-left']
var befo='<div class="hero-border-switch hideable">';for(var b in border_arrs){var cla='';if(b==0){cla='visi';}
befo+='<span class="'+cla+'" data-show="'+border_arrs[b]+'"></span>'
var gg=border_arrs[b]
el.find('.hero-prop[data-prop="'+gg+'-width"],.hero-prop[data-prop="'+gg+'-color"],.hero-prop[data-prop="'+gg+'-style"]').wrapAll('<div data-border-group="'+gg+'-group" class="hero-border-group '+cla+'" />')}
befo+='</div>'
el.find('.hero-border-group').eq(0).before(befo)
el.find('.hero-prop[data-prop="transform"]').before(transformer_head);el.find('.hero-prop[data-prop="transform"] .hero-val-wrap').before(transformer);el.appendTo($('.wysi-inner-tab[data-tab="properties"] .wysi-child'));el.find('.hero-prop').each(function(){initialize_pickers($(this));})}
var cm1=$('#hero-code-editor-cm')[0];mirror=CodeMirror(cm1,{lineNumbers:false,scrollbarStyle:"overlay",value:'',mode:"text/x-less",theme:"csshero-theme",lineWrapping:true,autoCloseBrackets:true,tabSize:3,indentUnit:1,extraKeys:{"Alt-F":"findPersistent","Cmd-F":"findPersistent"},matchBrackets:true,});var cm2=$('#hero-core-cm')[0];inspector_mirror=CodeMirror(cm2,{lineNumbers:true,scrollbarStyle:"overlay",value:'',mode:"text/x-less",theme:"csshero-theme",lineWrapping:true,autoCloseBrackets:true,tabSize:3,indentUnit:1,extraKeys:{"Alt-F":"findPersistent","Cmd-F":"findPersistent"},matchBrackets:true,colorpicker:{mode:'edit',},foldGutter:true,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"]});set_mirror_value(inspector_mirror,saved_less)
hero_setup_scrollers()
csshero_load_animations()
$("#csshero-inner-frame-wrap").resizable({handles:"e",minWidth:200,resize:function(event,ui){$('#hero-mq-reference').css('width',ui.size.width+'px')
var rr=[];var rd=[];$('.hero-bottom-bar-mq .custom-mq.focus').removeClass('focus')
$('.hero-bottom-bar-mq .custom-mq:not([data-type="min-width"])').each(function(){if($(this).outerWidth()+parseInt($(this).css('margin-left'))>ui.size.width&&ui.size.width>parseInt($(this).css('margin-left'))){rr.push($(this).outerWidth())
$(this).attr('data-w',$(this).outerWidth())}})
$('.hero-bottom-bar-mq .custom-mq[data-type="min-width"]').each(function(){if($(this).outerWidth()<ui.size.width){rd.push($(this).outerWidth())
$(this).attr('data-w',$(this).outerWidth())}})
if(rr.length>0){var closest=rr.reduce(function(prev,curr){return(Math.abs(curr-ui.size.width)<Math.abs(prev-ui.size.width)?curr:prev);});$('.hero-bottom-bar-mq .custom-mq[data-w="'+closest+'"]').addClass('focus')}
if(rd.length>0){var closest_min=rd.reduce(function(prev,curr){return(Math.abs(curr-ui.size.width)<Math.abs(prev-ui.size.width)?curr:prev);});$('.hero-bottom-bar-mq .custom-mq[data-w="'+closest_min+'"]').addClass('focus')}},start:function(){body.addClass('hero-resize')
remove_probes()},stop:function(){body.removeClass('hero-resize');var cur=$('.hero-bottom-bar-mq .custom-mq.focus').eq(0).attr('data-mq')
if(!cur)cur='all'
hero_load_mq_view(cur)}});}
function hero_load_extra(t){t.toggleClass('open')
if(t.is('.open')){t.closest('.hero-prop').addClass('extra-zoom')
wysi.before('<div class="extra-mask hero-closer" style="top:'+wysi.offset().top+'px;height:'+wysi.outerHeight()+'px"></div>')
var extra=t.find('.hero-extra')
var t_l=t.offset().left+t.outerWidth()/2;var e_w=editor.outerWidth();if(t_l>e_w/2){var xtr=t.offset().left+t.outerWidth();var x_r=(editor.outerWidth()-xtr)*-1;extra.css({'margin-left':'auto','left':'auto','right':0,'margin-right':x_r+'px'})}else{var x_l=editor.offset().left-t.offset().left+parseInt($('.hero-prop').css('padding-left'));extra.css('margin-left',x_l+'px');}}else{$('.extra-mask').remove();t.closest('.hero-prop').removeClass('extra-zoom')}}
function hero_update_mask_val(input){var val=input.val();if(val.indexOf('@')>-1){var str=val+' '
str=str.split('@')
var fin='';for(var s in str){var g=str[s];if(s==0){fin+=g}else{var splitter=g.match(/\W/);fin+='<span>@'+g.replace(splitter[0],'</span>'+splitter[0]);}}
var gh=$('<div>'+fin+'</div>')
if(gh.text().trim()==gh.find('span:first-of-type').text().trim())gh.find('span').addClass('only-var')
var val=gh.html();}
input.closest('.hero-val-inner').find('.hero-val-mask').html(val)}
function update_history_btns(){var cur=$('#hero-history .hero-step.cur');if($('#hero-history .hero-step').length==1){return;}
$('.hero-history:not(.load)').addClass('act')
if($('#hero-history .hero-step.cur').is('.saved')){$('#hero-cancel').addClass('no-cancel')}else{$('#hero-cancel').removeClass('no-cancel')}}
function hero_load_step(string){var lss=JSON.parse(string)
var _lss=lss.obj.less
hero_animations=lss.obj.animations;if('undefined'==typeof csshero_initialize_animations){}else{window.frames['csshero-iframe-main-page'].csshero_initialize_animations(hero_animations);}
if(!$('.wysi-inner-tab[data-tab="animations"]').is('.hid'))csshero_load_animations()
core.html(_lss)
if(body.is('.inspector-on')){set_mirror_value(inspector_mirror,core.text())}else{setTimeout(function(){hero_click_wrapper(current_el())},100);}
apply_style();update_history_btns()
hero_get_edited_els()}
function csshero_enrich_google_fonts(){var sen="<style>@import url('https://fonts.googleapis.com/css?family=";var fwrap=$('.hero-prop[data-prop="font-family"] .hero-dropdown-wrap');var gfonts=$('ul[data-grp="Google Fonts"]');for(var m in custom_gfonts){if(gfonts.find('li[data-val="'+custom_gfonts[m]+'"]').length==0){gfonts.append('<li data-val="'+custom_gfonts[m]+'">'+custom_gfonts[m]+'</li>')}}
hero_sort_alphabetically(gfonts,'li[data-val]')
fwrap.find('li[data-val]').each(function(){var val=$(this).attr('data-val')
$(this).css('font-family',val)
if($(this).is('[data-grp="Google Fonts"] *')){val=val.replace(/ /g,'+')
sen+=val+'|'}})
sen+="');"
fwrap.prepend(sen)}
function initialize_onload(){csshero_event_logger('generic','load')
code_editor=$('#hero-code-editor');editor=$('#hero-editor');hero_frame=window.frames['csshero-iframe-main-page'].document;cssheroframe=hero_frame;body=$('#csshero-body').addClass('hero-loaded');csshero_custom_carrier='';framewrap=$('#csshero-inner-frame-wrap');bottom_bar=$('.hero-bottom-bar-nav')
setup_global_classes();hero_store_history_step('saved')
csshero_enrich_google_fonts()
hero_get_layout_prefs()
hero_get_edited_els()
hero_check_edits_from_v3()}
jQuery.extend({isValidSelector:function(selector){if(typeof(selector)!=='string'){return false;}
try{var $element=$(selector);}catch(error){return false;}
return true;}});function hero_get_edited_els(){mark_code_in_core('bananas')
var gu=hell_checker.match(/£(.*?)§/g);for(var g in gu){var fum=gu[g].substring(1,gu[g].length-1);var zu=0;var sel='';if(fum&&$.isValidSelector(fum)){sel+=fum;zu+=$(fum,hero_frame).length;if(sel&&sel.length>2&&zu>0){hero_edited_els.push(sel)
var ec=$(fum,hero_frame).attr('editableclass');var es=$(fum,hero_frame).attr('editablesuggestion');if(!ec)var ec='';if(ec.indexOf('| '+sel)==-1&&ec.indexOf(sel+' |')==-1){var final_ec=(!ec)?sel:ec+' | '+sel;var final_es=(!es)?sel:es+' | '+sel;$(fum,hero_frame).attr('editableclass',final_ec).addClass('editable')
$(fum,hero_frame).attr('editablesuggestion',final_es)}}}}}
function hero_set_border_to_default_solid(t){var prop=t.closest('.hero-prop').attr('data-prop');if(prop.indexOf('border-')>-1&&prop.indexOf('radius')==-1){var block=t.closest('.hero-border-group').find('.hero-prop[data-prop*="style"]');var sty=block.find('.hero-val').val();if(sty.indexOf('none')>-1){set_element_prop(block.attr('data-prop'),'solid')}}}
function hero_update_selector_bar(el,fake_el){selector_bar.empty()
var all_editables=el.attr('editableclass').split(' | ');var all_sugs=el.attr('editablesuggestion').split(' | ');var c=[all_editables[0]]
var states=['hover','active','visited']
var ae=all_editables[0];var se=all_sugs[0];for(var k in states){ae=ae.replace(':'+states[k],'')
se=se.replace(':'+states[k],'')}
selector_bar.append('<div data-cla="'+ae+'" class="ico hero-selector-el">'+se+'</div>')
if(!fake_el){var stater=$('.hero-states').empty();$('.hero-status b').text('state')
var clean_c=c[0];for(var s in states){clean_c=clean_c.split(':'+states[s]).join('')}
if($(clean_c,hero_frame).prop("tagName")!='A')states=['hover']
stater.append('<div data-status="'+clean_c+'">None</div>')
for(var s in states){if(hero_edited_els_arr[get_current_mq()]){if(hero_edited_els_arr[get_current_mq()]['css'].indexOf(clean_c+':'+states[s])>-1){var ed='ed'}else{var ed='';}
stater.append('<div class="'+ed+'" data-status="'+clean_c+':'+states[s]+'">'+states[s]+'</div>')}}}
var tx=selector_bar.find('.hero-selector-el').text();if(tx.indexOf('[only')>-1){var cl='';if(tx.indexOf('-this]')>-1){cl='ot'}
if(tx.indexOf('on template')>-1){cl='te'}
if(tx.indexOf('on page')>-1){cl='pa'}
selector_bar.addClass('ctx-special').attr('data-ctx',cl)}else{selector_bar.removeClass('ctx-special').removeAttr('data-ctx')}
if(tx.length>35){$('#hero-selector-bar').attr('data-tip','<h4>'+tx+'</h4><p>'+selector_bar.find('.hero-selector-el').attr('data-cla')+'</p>').attr('data-tip-orient','e')}else{$('#hero-selector-bar').removeAttr('data-tip').removeAttr('data-tip-orient')}
return c;}
function hero_get_mq_render_width(mq){var mq_dets={}
var sp=mq.split('(')
for(var s in sp){if(sp[s].indexOf(')')>-1){var them=sp[s].split(')')[0];var set=them.split(':')[0].trim();var val=them.split(':')[1].trim();mq_dets[set]=val;}}
if(mq_dets['max-width']){desired_width=mq_dets['max-width'];desired_width=parseInt(desired_width)-1+'px'
var ty='max-width'}else{desired_width=mq_dets['min-width'];desired_width=parseInt(desired_width)+1+'px'
var ty='min-width'}
var ret={val:desired_width,type:ty,max_w:mq_dets['max-width'],min_w:mq_dets['min-width']}
return ret;}
function hero_load_mq_view(mq,res){if(mq=='all'){body.removeClass('mq-on').attr('data-mq','')
if(res){$('#hero-mq-reference').css('width','100%')
framewrap.removeAttr('style')}}else{body.addClass('mq-on').attr('data-mq',mq)
if(res){var desired_width=hero_get_mq_render_width(mq).val;framewrap.css('width',desired_width)
$('#hero-mq-reference').css('width',desired_width)}}
if($('.scroll-anchor',hero_frame).length>0){$('iframe').contents().scrollTop($('.scroll-anchor',hero_frame).offset().top-200);}
if(current_el()){body.trigger('hero_mq_view')}
$('#hero-mqs span.cur').removeClass('cur')
$('#hero-mqs span[data-mq="'+mq+'"]').addClass('cur')
sort_mqs()}
function hero_open_dialog(title,contents){var dialog=$('<div class="hero-dialog"><main><div class="close-dialog ico close"></div><h4>'+title+'</h4>'+contents+'</main></div>').hide();dialog.appendTo(editor).fadeIn(300)}
function hero_il8(){$('.hero-dialog').remove();}
function is_color(color){if(color[0]==('@')&&hero_global_vars[color]){var color=hero_global_vars[color].compiled;}
var color=color.replace('!important','')
var $div=$("<div>");$div.css("border","1px solid "+color);if($div.css('border-color')){is_color_ret=$div.css('border-color');}else{is_color_ret=false;}
return is_color_ret;}
function return_context_els(oc,os,t,get_only_obj){var context_obj={};context_obj['normally']={f:oc,desc:os}
var b=$('body',hero_frame);var b_classes=b.attr('class').split(' ');var current={}
var check=hell_checker;var is_edited='';for(var k in b_classes){var b_class=b_classes[k];if(b_class.match(/^page-id-([0-9]+)$/)){var context_id=b_class.replace('page-id-','')
context_obj['page']={s:b_class,d:context_id};}
if(b_class.match(/^category-([0-9]+)$/)){var context_id=b_class.replace('category-','')
context_obj['cat']={s:b_class,d:context_id};}
if(b_class.indexOf('page-template-')>-1&&b_class.indexOf('-php')==-1){var context_id=b_class.replace('page-template-','')
context_obj['template']={s:b_class,d:context_id};}}
var contexts='';if(!$.isEmptyObject(context_obj)){for(var c in context_obj){var cont=context_obj[c];if(c=='normally'){}else{var oc_s=oc.split(' ');var oc_ok=[];for(var s in oc_s){var el=$(oc_s[s],hero_frame);if(!el.is('body')&&!el.is('html')){oc_ok.push(oc_s[s]);}}
var specific_context=cont['s']
var context_id=cont['d']
var context_selector='.'+specific_context+' '+oc_ok.join(' ');cont['f']=context_selector;contexts='<li class="is-ctx ico '+c+' '+is_edited+'" data-context-desc="'+os+' [only on '+c+' '+context_id+']" data-context="'+context_selector+'"><b>Only on this '+c+'</b><em>'+c+' '+context_id+'</em></li>'+contexts;cont['desc']=os+' [only on '+c+' '+context_id+']';}}}
context_obj['ot']={d:'only this',f:t.getPath(),desc:os+' [only-this]'}
var is_ot_edited='';contexts='<li class="is-ctx ico only-this '+is_ot_edited+'" data-context-desc="'+os+' [only-this]" data-context="'+t.getPath()+'"><b>Only this Element</b></li>'+contexts;if(get_only_obj){var returnable=context_obj;}else{var returnable=contexts;}
return returnable;}
function remove_probes(){$('.focus-probe').remove();}
function check_for_applied_snippets(){hero_log('check_for_applied_snippets')
var el=core.find('.hero-inner:not(:has(.hero-inner))');var cnt=0;$('.hero-snippet').each(function(){var nice=$(this).attr('data-cla-name').split('(')[0]
if(el.text().indexOf(nice)>-1){$(this).addClass('cur')
cnt++;}else{$(this).removeClass('cur')}})
update_editor_count_labels()}
function remove_snippet(snippet){var checker=snippet;var el=core.find('.hero-inner:not(:has(.hero-inner))');var area=el.text();area=area.split(' ;').join(';')
if(area.indexOf(checker)==-1)return;var sub=area.split(checker)[1].split(';')[0];var end=area.replace(checker+sub+';','')
el.text(end)
set_mirror_value(mirror,core.find('.hero-inner:not(:has(.hero-inner))').text())
apply_style()}
jQuery.fn.extend({getPath:function(){var pathes=[];this.each(function(index,element){var path,$node=jQuery(element);while($node.length){var realNode=$node.get(0),name=realNode.localName;if(!name){break;}
name=name.toLowerCase();var parent=$node.parent();var sameTagSiblings=parent.children(name);if(sameTagSiblings.length>1){allSiblings=parent.children();var index=allSiblings.index(realNode)+1;if(index>0){name+=':nth-child('+index+')';}}
classes=jQuery(realNode).attr('class');if(jQuery(realNode).attr('id')){name='#'+jQuery(realNode).attr('id');}else{if(classes&&classes.indexOf('post-')>-1){classes_arr=classes.split(' ');single_post_class=jQuery.grep(classes_arr,function(a){return a.indexOf('post-')==0;});if(single_post_class.length>0){name='.'+single_post_class.join('.');}}}
path=name+(path?' > '+path:'');$node=parent;}
pathes.push(path);});return pathes.join(',');}});function hero_scrollto(element,offset){if(!offset)var offset=40;var scroller=element.closest('.scroller');if(scroller.length==0)return;var s_t=scroller.offset().top;var s_s=scroller.scrollTop();var e_t=element.offset().top;var e_t=e_t+s_s;var scrolled_pos=e_t-s_t-offset;scroller.animate({scrollTop:scrolled_pos},0).trigger('ps-scroll-y');}
function hero_add_additional_gfonts(imps){if(!imps||imps.indexOf(''))return;var im=imps.split(';')
$('.hero-prop[data-prop="font-family"] li.user-gfont').remove();var gfonter=$('ul[data-grp="Google Fonts"]');var sty=gfonter.closest('.hero-dropdown-wrap').find('style');var reqs='';for(var i in im){if(im[i].indexOf('fonts.googleapis.com')>-1){reqs+=im[i]+';';var fams=im[i].split('family=')[1]
var fam=fams.split(/(?:"|')+/).slice(0,-1).join('');if(fam.indexOf('|')>-1){var li='';var gam=fam.split('|');for(var g in gam){var game=gam[g].split('+').join(' ');if(game&&gfonter.find('li[data-val="'+game+'"]').length==0){gfonter.append('<li style="font-family:'+game+';" class="user-gfont" data-val="'+game+'">'+game+'</li>');var nym=sty.html().split('css?family=').join('css?family='+gam[g]+'|')
sty.html(nym)}}}else{var ofam=fam;fam=fam.split('+').join(' ')
if(fam&&gfonter.find('li[data-val="'+fam+'"]').length==0){gfonter.append('<li style="font-family:'+fam+';" class="user-gfont" data-val="'+fam+'">'+fam+'</li>');var nym=sty.html().split('css?family=').join('css?family='+ofam+'|')
sty.html(nym)}}}}
hero_sort_alphabetically(gfonter,'li[data-val]')}
function hero_grab_page_colors(){return;var css=[];for(var sheeti=0;sheeti<hero_frame.styleSheets.length;sheeti++){var sheet=hero_frame.styleSheets[sheeti];var rules=('cssRules'in sheet)?sheet.cssRules:sheet.rules;for(var rulei=0;rulei<rules.length;rulei++){var rule=rules[rulei];if('cssText'in rule)
css.push(rule.cssText);else
css.push(rule.selectorText+' {\n'+rule.style.cssText+'\n}\n');}}
css=css.join('\n')
HEROWorker.postMessage({type:'page_colors',val:css})}
function hero_sort_alphabetically(wrapper,elements){wrapper.find(elements).detach().sort(function(a,b){var at=$(a).text().split('_').join('z')
var bt=$(b).text().split('_').join('z')
return at.localeCompare(bt);}).appendTo(wrapper);}
function remove_unused_gfonts(){var code=core.html().replace(/  /g,' ');var gfonts=code.match(/fonts.googleapis.com(.*?)\;/g)
if(!gfonts)return;for(var g in gfonts){var new_g=gfonts[g]
var fonts=gfonts[g].replace(/'/g,'').replace(/"/g,'').split(')')[0].split('=')[1].split('|');for(var f in fonts){var f_check=fonts[f].split('+').join(' ');var t_check=f_check.split(':')[0]
var is_present=code.replace(/: /g,':').indexOf('font-family:'+t_check)
console.log(f_check+' '+t_check+' '+is_present)
if(is_present==-1){var g_check=f_check.split(' ').join('+');code=code.replace(g_check,'')}
code=code.split('||').join('|')
code=code.split("@import url('https://fonts.googleapis.com/css?family=');").join('')
code=code.split("@import url(https://fonts.googleapis.com/css?family=);").join('')
code=code.split('@import url("https://fonts.googleapis.com/css?family=");').join('')}}
core.html(code)}
function hero_load_tree(){var s=$('#hero-tree').empty()
var d='<div class="custom-editable-els"><h4>Custom Selectors</h4>';if(hero_edited_els.length>0){var done=[];for(var h in hero_edited_els){if(done.indexOf(hero_edited_els[h])==-1){d+='<div class="tree-selector-wrap" data-c="'+hero_edited_els[h]+'"><b>'+hero_edited_els[h]+'</b></div>';done.push(hero_edited_els[h])}}}
d+='<div class="add-selector-trigger-wrap"><span class="csshero-add-selector-toggle">ADD</span></div></div>';s.prepend(d)
var el=$('.editable',hero_frame);el.each(function(){var cl='';if(!$(this).attr('editableclass'))return;var t_c=$(this).attr('editableclass').split(' | ')[0]
var t_d=$(this).attr('editablesuggestion').split(' | ')[0]
var t_p=$(this).parents('.editable').toArray().length
t_p='<span class="tab"></span>'.repeat(t_p);var edited=[];for(var t in hero_edited_els_arr){var g=hero_edited_els_arr[t]
if(g['css'].indexOf(t_c+'{')>-1){edited.push(t)}}
var edits='';var cl='';if(edited.length>0){cl+='edi'
edits+='<div class="ed">'
for(var e in edited){var cc='';if($('#hero-mqs > span[data-mq="'+edited[e]+'"]').is('.sm')){var cc='small'}
edits+='<span data-ref="'+edited[e]+'" title="Edited on '+edited[e]+'" class="ico mq-ref '+cc+'"></span>'}
edits+='</div>'}
if(s.find('[data-c="'+t_c+'"]').length==0)s.append('<div data-c="'+t_c+'" class="tree-selector-wrap '+cl+'">'+t_p+'<b>'+t_d+edits+'</b></div>')})}
function hero_copy_to_clipboard(str,minify){if(minify){str=str.replace(/\n/g,'').replace(/  /g,' ').replace(/: /g,':').replace(/; /g,';').replace(/ :/g,':').replace(/ ;/g,';').replace(/\{ /g,'{').replace(/ \{/g,'{').replace(/\} /g,'}').replace(/ \{/g,'}')
var comm_arr=str.match(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm);if(comm_arr){comm_arr.forEach((e)=>{str=str.replace(e,'')});}}
const el=document.createElement('textarea');el.value=str;el.setAttribute('readonly','');el.style.position='absolute';el.style.left='-9999px';document.body.appendChild(el);const selected=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):false;el.select();document.execCommand('copy');document.body.removeChild(el);if(selected){document.getSelection().removeAllRanges();document.getSelection().addRange(selected);}};function hero_log(text){if(is_debug())console.log(text)}
function is_debug(){return window.location.hash=='#debug';}
function psplit(s){var depth=0,seg=0,rv=[];s.replace(/[^(),]*([)]*)([(]*)(,)?/g,function(m,cls,opn,com,off,s){depth+=opn.length-cls.length;var newseg=off+m.length;if(!depth&&com){rv.push(s.substring(seg,newseg-1));seg=newseg;}
return m;});rv.push(s.substring(seg));return rv;}
function spacesplit(s){var depth=0,seg=0,rv=[];s.replace(/[^() ]*([)]*)([(]*)( )?/g,function(m,cls,opn,com,off,s){depth+=opn.length-cls.length;var newseg=off+m.length;if(!depth&&com){rv.push(s.substring(seg,newseg-1));seg=newseg;}
return m;});rv.push(s.substring(seg));return rv;}
function hero_hilight_in_inspector(ediclass,nodialog){if($('.auto-select').is('.nose'))return;var marked=[]
var zurb=inspector_mirror.getSearchCursor(ediclass)
var u=0;for(var cursor=inspector_mirror.getSearchCursor(ediclass+' {');cursor.findNext();){u++;if(u==1){marked.push(inspector_mirror.markText(cursor.from(),cursor.to()));inspector_mirror.setSelection(cursor.from(),cursor.to());var searched_line=cursor.to().line;var t=inspector_mirror.charCoords({line:searched_line,ch:0},"local").top;var middleHeight=inspector_mirror.getScrollerElement().offsetHeight/2;inspector_mirror.scrollTo(null,t-middleHeight-5);}}
if(marked.length==0&&!nodialog){hero_il8();hero_open_dialog('Add to Inspector?','<p>Want to add the <b class="cf">'+ediclass+'</b> selector to Inspector?</p><div class="dialog-options wants-no-sele"><span data-val="no"><label>Dont ask again</label></span></div><div class="hero-dialog-footer"><span class="btn hero-cancel close-dialog check-for-autoselect">No</span><span data-cla="'+ediclass+'" class="hero-add-to-inspector check-for-autoselect">Yes</span></div>')}}
function hero_load_variables_panel(){var panel=$('#project-vars').empty();var cnt='';var vg={}
for(var v in hero_global_vars){var val=hero_global_vars[v].compiled;var pick='';var cla='';var pal='';if(v.indexOf('__')>-1)cla='is-pal'
if(is_color(val)){pick+='<span class="hero-picker hero-var-prev" style="background-color:'+is_color(val)+';"></span>';pal+='<span class="pal ico" data-tip="Create Palette" data-tip-orient="n"></span>'}
var origin=v.split('__')[0];if(cla=='is-pal'&&hero_global_vars[origin]){var cat=v.split('__')[1].split('-')[0]
if(!vg[origin])vg[origin]={}
if(!vg[origin][cat])vg[origin][cat]=[]
var t_pick=pick.replace('hero-picker','')
vg[origin][cat].push('<div class="hero-var '+cla+'" data-var="'+v+'"><span class="v">'+t_pick+'</span><span class="del ico"></span></div>')}else{cnt+='<div class="hero-var hero-var-indexer '+cla+'" data-var="'+v+'"><span class="hidden">'+v+'</span><input data-original-val="'+v+'" class="n" value="'+v+'" /><span class="v">'+pick+'<input type="text" value="'+hero_global_vars[v].value+'" /></span>'+pal+'<span class="del ico"></span></div>';}}
for(var g in vg){for(var h in vg[g])
cnt+='<div class="hero-var-group hero-var-indexer" data-group="'+h+'"><span class="hidden">'+g+'</span><b>'+h+'</b><div class="hero-var-group-inner">'+vg[g][h].join('')+'</div></div>'}
panel.append(cnt)
hero_sort_alphabetically(panel,'.hero-var-indexer')
$('.hero-var.is-pal').each(function(){var n=$(this).attr('data-var').split('__')[0];if($('.hero-var[data-var="'+n+'"]').length>0){$(this).attr('data-var-reference',n)
$('.hero-var[data-var="'+n+'"]').addClass('has-pal')}})
var i_need=panel.html();panel.prepend('<div class="hero-create-var"><div class="hero-cvar"><div><input class="na" placeholder="@name" /><input class="va" placeholder="value" /></div><div><span class="hero-cancel-new-var">Cancel</span><span class="hero-save-new-var">Add</span></div></div><div class="hero-svar"><span>Create New Var</span></div></div>');return i_need;}
function hero_update_var_value(v,newval){if(!hero_global_vars[v])return;var val=hero_global_vars[v].value;var code=core.text();code=code.replace(/  +/g,' ');code=code.split(v+' :').join(v+':')
code=code.split(': '+val).join(':'+val);if(newval=='delete'){code=code.split(v+':'+val+';').join('')
code=code.split(v).join(val)
delete hero_global_vars[v];}else{code=code.split(v+':'+val).join(v+':'+newval)
hero_global_vars[v]={value:newval,compiled:newval};}
core.text(code)
if(v.indexOf('__')==-1){get_global_vars()
apply_style()
if(body.is('.inspector-on')){set_mirror_value(inspector_mirror,core.text())}else{hero_click_wrapper(current_el())}
hero_store_history_step()}}
function hero_return_palettes(variable_name){var color_val=variable_name;var hero_color_combinations={'analog':['spin('+variable_name+',30)','spin('+variable_name+',-30)'],'tones':['lighten('+variable_name+',60%)','lighten('+variable_name+',40%)','lighten('+variable_name+',20%)',color_val,'darken('+variable_name+',20%)','darken('+variable_name+',40%)','darken('+variable_name+',60%)'],'shades':['fade('+variable_name+',20%)','fade('+variable_name+',40%)','fade('+variable_name+',60%)','fade('+variable_name+',80%)',color_val],'tri':[variable_name,'spin('+variable_name+', 120)','spin('+variable_name+', -120)'],'quadri':[variable_name,'spin('+variable_name+', (90))','spin('+variable_name+', (180))','spin('+variable_name+', (270))'],'palette':[variable_name,'spin('+variable_name+', 180)','darken(spin('+variable_name+', 180), 15%)','lighten('+variable_name+', 15%)','lighten('+variable_name+', 30%)'],'darken':['darken('+variable_name+',5%)','darken('+variable_name+',10%)','darken('+variable_name+',15%)','darken('+variable_name+',20%)','darken('+variable_name+',25%)'],'lighten':['lighten('+variable_name+',5%)','lighten('+variable_name+',10%)','lighten('+variable_name+',15%)','lighten('+variable_name+',20%)','lighten('+variable_name+',25%)'],'text':['mix('+variable_name+',contrast('+variable_name+', black, white, 43%),20)']}
return hero_color_combinations;}
function csshero_load_images(destination,offset){var offset=parseInt(offset)
var base_url=hero_base_url;$.ajax({url:base_url+'?csshero_get_images=1&load_offset='+offset,success:function(data){if(data){var next=offset+1;var prev=offset-1;if(prev<0)prev=0;$('.hero-local-media').remove();destination.append('<div class="hero-local-media">'+data+'<div class="hero-local-images-nav img-pagination"><b>Page '+(offset+1)+'</b><span class="prev" data-page="'+prev+'">Prev</span><span class="next" data-page="'+next+'">Next</span></div></div>');}else{}}});}
function hero_hilight_edits(el){var wy=el.closest('.wysi-inner-tab').find('.wysi-child').removeClass('open-by-search')
if(el.is('[data-tab="properties"] *')){if(!el.is('.srcing')){el.addClass('srcing')
$('.hero-prop').each(function(){$(this).removeClass('hid')
if($(this).attr('data-edited')!='edited'){$(this).addClass('hid');}else{wy.addClass('open-by-search')
if($(this).closest('.hero-group').is('.closed')){$(this).closest('.hero-group').removeClass('closed')}}})}else{el.removeClass('srcing')
$('.open-by-search').removeClass('open-by-search');$('.hero-group').addClass('closed')}}else{if(!el.is('.srcing')){el.addClass('srcing')
$('.hero-snippet.cur').each(function(){$(this).closest('.wysi-child').addClass('open-by-search')
$(this).closest('.hero-snippet-group').addClass('open')})}else{el.removeClass('srcing')
$('.open-by-search').removeClass('open-by-search')
$('.hero-snippet-group').removeClass('open')}}}
function hero_open_global_overlay(title,conts){body.append('<div id="hero-full-overlay"><div class="full-overlay-contents scroller"><div class="overlay-head"><h4>'+title+'</h4><span class="close-full ico"></span></div>'+conts+'</div></div>')
hero_setup_scrollers();}
function hero_check_edits_from_v3(){var v4_data=hero_generate_to_be_stored_data().obj;if(!v4_data.less&&$.isEmptyObject(v4_data.animations)){var v3_load_url=hero_base_url+'?csshero_action=get_vintage_array';$.ajax({url:v3_load_url,success:function(data){if(data){try{var data=JSON.parse(data)
if(typeof data==='object'){var data=data;}}catch(err){var data={}}
var v3_code='';if($.isEmptyObject(data))return;hero_animations=data.animations;if(!hero_animations)hero_animations={}
for(var v in data.csshero_variables){v3_code+=v+':'+data.csshero_variables[v].var_prop+';\n';}
for(var g in data.global_classes){v3_code+=g+'{\n'+data.global_classes[g].cla_prop+'\n}';}
for(var l in data.live_array){v3_code+=csshero_json_to_string(data.live_array,l)+'\n'}
for(var m in data.live_mq_array){var mq_def=[];var mp=data.live_mq_array[m].pr;if(!$.isEmptyObject(mp)){for(var g in data.live_mq_array[m].mq_details){mq_def.push('('+g+':'+data.live_mq_array[m].mq_details[g]+')');}
v3_code+='@media screen and '+mq_def.join(' and ')+'{\n';for(var m in mp){v3_code+=csshero_json_to_string(mp,m)+'\n'}
v3_code+='\n}';}}
if(confirm('Hey, want to import your V3 edits?')){core.text(v3_code)
apply_style();sort_mqs();hero_store_history_step()}}}});}}
function csshero_json_to_string(obj,scope){if(scope){var objToString=JSON.stringify(obj[scope])}else{var objToString=JSON.stringify(obj)
var scope='';}
if(objToString){objToString=objToString.replace(/"}/g,';}').replace(/,"/g,'').replace(/":"/g,':').replace(/":{"/g,'{').replace(/"/g,';').replace(/\{;/g,'{');objToString=objToString.replace(/ISCLASS-([0-9]+):/g,'');objToString=objToString.split('ISEMPTY:ISEMPTYPROP;').join('');objToString=scope+objToString;objToString=objToString.split('*/;').join(' */\n');objToString=objToString.replace(/ISCOMMENT:/g,'');objToString=objToString.replace(/ISCOMMENT-([0-9]+):/g,'/* ');objToString=objToString.replace(/ISCOMMENT-([0-9]+);/g,'/* ');objToString=objToString.replace(/@import-([0-9]+):/g,'@import ');objToString=objToString.replace(/@import-([0-9]+);/g,'@import ');}else{objToString='';}
return objToString;}
function getAllColors(elems){var rgbRegex=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;var allColors=[];var total=elems.length;var x,y,elemStyles,styleName,styleValue,rgbVal;for(x=0;x<total;x++){elemStyles=window.getComputedStyle(elems[x]);for(y=0;y<elemStyles.length;y++){styleName=elemStyles[y];styleValue=elemStyles[styleName];if(!styleValue){continue;}
styleValue+="";rgbVal=styleValue.match(rgbRegex);if(!rgbVal){continue;}
if(allColors.indexOf(rgbVal.input)==-1){allColors.push(rgbVal.input);}}}
return allColors;}
var hero_global_classes={};var hero_global_vars={};HEROWorker.addEventListener('message',function(e){var type=e.data.type
hero_log(type)
if(type=='return_mq_edits'){$('#hero-mqs span .ed').remove();var mqe=e.data.val;for(var m in mqe){if(mqe[m].is_edited){$('#hero-mqs span[data-name="'+m+'"]').append('<b class="ed"></b>')}}
hero_edited_els_arr=e.data.val;}
if(type=='css'){var imports=e.data.imps;if(body.attr('data-available-libs')!=imports){hero_add_additional_gfonts(imports)
body.attr('data-available-libs',imports)}
$('.csshero-style-render',hero_frame).remove()
$('body',hero_frame).append('<style class="csshero-style-render">'+imports+e.data.val+'</style>');hero_grab_page_colors();$('#hero-save').text('SAVE & PUBLISH').removeClass('err')
$('.error_line').removeClass('error_line')
$('.hero-err').remove();$('.custom-mq').remove();for(var a in e.data.custom_mqs){if($('#hero-mqs span[data-mq="'+e.data.custom_mqs[a]+'"]').length==0){var determine_w=parseInt(hero_get_mq_render_width(e.data.custom_mqs[a]).val)>600?'lg':'sm';$('#hero-mqs').append('<span data-name="'+e.data.custom_mqs[a]+'" class="ico custom-mq '+determine_w+'" data-mq="'+e.data.custom_mqs[a]+'"></span>')}}
$('#hero-mqs span:not([data-mq="all"])').each(function(){var d=$(this).attr('data-mq')
var ds=hero_get_mq_render_width(d);var des=parseInt(ds.val)
if(ds.max_w&&ds.min_w){var mar=ds.min_w;des=des-parseInt(ds.min_w)}else{var mar='0px';}
var type=hero_get_mq_render_width(d).type;$('#hero-mq-reference').append('<div data-mq="'+d+'" style="width:'+des+'px;margin-left:'+mar+';" class="custom-mq" data-type="'+type+'"><label>'+d+'</label></div>')})
$('.chioding',hero_frame).each(function(){var os=$(this).attr('ory_style')
$(this).removeAttr('style')
if(os)$(this).removeAttr('ory_style').attr('style',os)})
$('#hero-temp-styler',hero_frame).remove()
$(window).trigger('update_tips')
if(!current_el()){hero_detect_edits()
setTimeout(function(){$('#hero-preload').fadeOut(300)},300)}}
if(type=='less_error'){$('#hero-save').text('ERROR!').addClass('err')
var l=e.data.val.line-e.data.rql;var err_line=$('#hero-core-cm .CodeMirror-linenumber').filter(function(){return $(this).text().toLowerCase()===l.toString();})
err_line.addClass('error_line')
editor.append('<div class="hero-err"><h4>Error <span>(Line: '+l+')</span></h4><p>'+e.data.val.message+'</p></div>')}
if(type=='return_vars'){hero_global_vars=e.data.val;if($('.hero-service[data-s="variables"]').is('.open'))hero_load_variables_panel()}
if(type=='default_classes_return'){if(!$('.wysi-inner-tab[data-tab="snippets"] .wysi-child').is('.loaded')){draw_snippets_panel(e.data.val)
$('.wysi-inner-tab[data-tab="snippets"] .wysi-child').addClass('loaded')}}
if(type=='return_classes'){hero_global_classes=e.data.val.variables;draw_snippets_panel(e.data.val.the_html)}
if(type=='return_page_colors'){hero_site_colors=e.data.val;}},false);function csshero_prepare_font_manager(){var manager=$('#hero-font-manager')
var cats=manager.find('.hero-fm-cats')
var list=manager.find('.hero-fm-lister')
$.ajax({dataType:"json",url:"https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDxladV-apMhr_5M_D_iR-pe6mqJ02gEmI",success:function(data){var fonts=data.items;u=0;var all_google_fonts_list=[];$(fonts).each(function(f){var font=fonts[f];var cat=font.category;var fam=font.family;var fam_nice=fam.replace(/ /g,'+');var vra=font.variants;if(cats.find('li[data-sort="'+cat+'"]').length==0){u++;var acti=(u==1)?'active':''
cats.append('<li  class="'+acti+'" data-sort="'+cat+'">'+cat+'</li>');list.append('<div class="hero-font-list-wrapper '+acti+'" data-sort="'+cat+'"><div class="hero-font-list"></div></div>');}
if(vra.length>1){var var_len=vra.length}else{var var_len='';}
var full_variant=[];for(var v in vra){var variant=vra[v];var end_variant=variant;if(variant.indexOf('0italic')>-1)end_variant=variant.replace(/0italic/g,'0i');full_variant.push(end_variant)}
var all_variations=full_variant.join(',');var dest=list.find('div[data-sort="'+cat+'"] .hero-font-list');if(dest.closest('.hero-font-list-wrapper').is('.active')){var disa=''}else{var disa='disabled'}
var f_link='<link rel="stylesheet" disabled href="//fonts.googleapis.com/css?family='+fam_nice+'">';var included=''
var used='';if(default_gfonts.indexOf(fam)>-1){included='<b data-tip="Built-in font" data-tip-orient="n" class="inc"></b>';var used='used';var adder='';}else{var adder='<b class="add-font" data-tip="Add / Remove Font" data-tip-orient="n"></b>';}
if(custom_gfonts.indexOf(fam)>-1){var used='used'}
var zoom_contents='<link rel=\'stylesheet\' disabled href=\'//fonts.googleapis.com/css?family='+fam_nice+':'+all_variations+'\'><div class=\'variant-head '+used+'\'>'+fam+'<b class=\'add-font\'></b></div>';for(var z in full_variant){var variant=full_variant[z];var variant_style='normal';if(variant.indexOf('i')>-1){variant=variant.replace(/i/g,'')
variant_style='italic';}}
dest.append('<div class="fam hid '+used+'" data-fam="'+fam+'"><span style="font-family:'+fam+';">'+fam+'</span>'+f_link+included+adder+'</div>');})
$('.hero-fm-cats li.active').trigger('click')}})}
function csshero_render_fonts_in_manager(){var el=document.querySelector('.hero-fm-lister');var vv=$('#hero-font-manager').offset().top+$('#hero-font-manager').outerHeight()
el.addEventListener('ps-scroll-y',function(){var fams=$('.hero-font-list-wrapper.active .fam')
fams.each(function(){var t=$(this)
var tt=t.offset().top;if(tt<vv){setTimeout(function(){t.removeClass('hid')},500)
t.find('link').removeAttr('disabled')}})});}
$(document).on('click','.hero-project-gfonts',function(){var cnt='<div id="hero-font-manager"><ul class="hero-fm-cats"></ul><div class="hero-fm-lister scroller"></div><div class="hero-fm-zoomer scroller"></div></div>';hero_open_global_overlay('Google Fonts',cnt)
csshero_prepare_font_manager()
csshero_render_fonts_in_manager()}).on('click','.hero-fm-cats li',function(){$('.hero-fm-cats li.active').removeClass('active')
$(this).addClass('active')
var cat=$(this).attr('data-sort')
var show=$('.hero-font-list-wrapper[data-sort="'+cat+'"]');var hide=$('.hero-font-list-wrapper').not(show)
show.addClass('active');hide.removeClass('active');$('.hero-fm-lister').animate({scrollTop:0},100)
var event=new CustomEvent("ps-scroll-y");document.querySelector('.hero-fm-lister').dispatchEvent(event)
$('.hero-fm-zoomer').hide();}).on('click','#hero-font-manager .add-font',function(e){e.stopPropagation();var fam=$(this).closest('.fam');var font=fam.attr('data-fam')
if(custom_gfonts.indexOf(font)==-1){custom_gfonts.push(font)
fam.addClass('used');csshero_enrich_google_fonts()}else{custom_gfonts=custom_gfonts.filter(function(value,index,arr){return value!=font;});fam.removeClass('used');$('ul[data-grp="Google Fonts"] li[data-val="'+font+'"]').remove();}}).on('click','#hero-font-manager .fam',function(){});var large_screens_def='@media screen and (min-width:1025px)';var default_mqs=[{name:'tablet-landscape',value:'@media screen and (max-width:1024px)'},{name:'tablet-portrait',value:'@media screen and (max-width:768px)'},{name:'mobile-landscape',value:'@media screen and (max-width:568px)'},{name:'mobile-portrait',value:'@media screen and (max-width:320px)'}]
var default_gfonts=['Alegreya','Anonymous Pro','Archivo','Arvo','BioRhyme','Cabin','Cardo','Chivo','Cormorant','Crimson Text','Domine','Eczar','Fira Sans','IBM Plex Sans','Inconsolata','Inknut Antiqua','Lato','Libre Baskerville','Libre Franklin','Lora','Montserrat','Neuton','Open Sans','PT Sans','PT Serif','Playfair Display','Poppins','Proza Libre','Raleway','Roboto','Roboto Mono','Roboto Slab','Rubik','Rubik Mono One','Source Code Pro','Source Sans Pro','Source Serif Pro','Space Mono','Spectral','Work Sans'];var defaults={"background":{"background-color":{"colorpicker":1,"custom_label":'Color',},"background-image":{"set_none":1,"custom_label":'Image',"dropdown":['none','linear-gradient(90deg,#FDEB71,#F8D800)','linear-gradient(90deg,#ABDCFF,#0396FF)','linear-gradient(90deg,#FEB692,#EA5455)','linear-gradient(90deg,#CE9FFC,#7367F0)','linear-gradient(90deg,#90F7EC,#32CCBC)','linear-gradient(90deg,#FFF6B7,#F6416C)','linear-gradient(90deg,#81FBB8,#28C76F)','linear-gradient(90deg,#E2B0FF,#9F44D3)','linear-gradient(90deg,#F97794,#623AA2)','linear-gradient(90deg,#FCCF31,#F55555)','linear-gradient(90deg,#F761A1,#8C1BAB)','linear-gradient(90deg,#43CBFF,#9708CC)','linear-gradient(90deg,#5EFCE8,#736EFE)','linear-gradient(90deg,#FAD7A1,#E96D71)','linear-gradient(90deg,#FFD26F,#3677FF)','linear-gradient(90deg,#A0FE65,#FA016D)','linear-gradient(90deg,#FFDB01,#0E197D)','linear-gradient(90deg,#FEC163,#DE4313)','linear-gradient(90deg,#92FFC0,#002661)','linear-gradient(90deg,#EEAD92,#6018DC)','linear-gradient(90deg,#F6CEEC,#D939CD)','linear-gradient(90deg,#52E5E7,#130CB7)','linear-gradient(90deg,#F1CA74,#A64DB6)','linear-gradient(90deg,#E8D07A,#5312D6)','linear-gradient(90deg,#EECE13,#B210FF)','linear-gradient(90deg,#79F1A4,#0E5CAD)','linear-gradient(90deg,#FDD819,#E80505)','linear-gradient(90deg,#FFF3B0,#CA26FF)','linear-gradient(90deg,#FFF5C3,#9452A5)','linear-gradient(90deg,#F05F57,#360940)','linear-gradient(90deg,#2AFADF,#4C83FF)','linear-gradient(90deg,#FFF886,#F072B6)','linear-gradient(90deg,#97ABFF,#123597)','linear-gradient(90deg,#F5CBFF,#C346C2)','linear-gradient(90deg,#FFF720,#3CD500)','linear-gradient(90deg,#FF6FD8,#3813C2)','linear-gradient(90deg,#EE9AE5,#5961F9)','linear-gradient(90deg,#FFD3A5,#FD6585)','linear-gradient(90deg,#C2FFD8,#465EFB)','linear-gradient(90deg,#FD6585,#0D25B9)','linear-gradient(90deg,#FD6E6A,#FFC600)','linear-gradient(90deg,#65FDF0,#1D6FA3)','linear-gradient(90deg,#6B73FF,#000DFF)','linear-gradient(90deg,#FF7AF5,#513162)','linear-gradient(90deg,#F0FF00,#58CFFB)','linear-gradient(90deg,#FFE985,#FA742B)','linear-gradient(90deg,#FFA6B7,#1E2AD2)','linear-gradient(90deg,#FFAA85,#B3315F)','linear-gradient(90deg,#72EDF2,#5151E5)','linear-gradient(90deg,#FF9D6C,#BB4E75)','linear-gradient(90deg,#F6D242,#FF52E5)','linear-gradient(90deg,#69FF97,#00E4FF)','linear-gradient(90deg,#3B2667,#BC78EC)','linear-gradient(90deg,#70F570,#49C628)','linear-gradient(90deg,#3C8CE7,#00EAFF)','linear-gradient(90deg,#FAB2FF,#1904E5)','linear-gradient(90deg,#81FFEF,#F067B4)','linear-gradient(90deg,#FFA8A8,#FCFF00)','linear-gradient(90deg,#FFCF71,#2376DD)','linear-gradient(90deg,#FF96F9,#C32BAC)']},"background-position":{"custom_label":'Position',"buttons":['top left','top','top right','left','center','right','bottom left','bottom','bottom right'],"compact":true,},"background-repeat":{"custom_label":'Tile',"advanced":1,"buttons":['no-repeat','repeat','repeat-x','repeat-y'],"compact":true,},"background-size":{"buttons":['auto','cover','contain','100% 100%'],"advanced":1,"compact":true,},"background-blend-mode":{"custom_label":'Blend Mode',"advanced":1,"dropdown":['normal','multiply','screen','overlay','darken','lighten','color-dodge','dodge','saturation','color','luminosity'],"compact":true,},"background-attachment":{"custom_label":'Scroll',"dropdown":['fixed','scroll'],"compact":true,"advanced":1,}},"typography":{"color":{"colorpicker":1,},"font-size":{"numeric":1,"slidable":1,"range":[0,200]},"line-height":{"numeric":1,"slidable":1,"range":[0,100],"advanced":1,},"font-family":{"dropdown":{'System Fonts':["Georgia, serif","'Palatino Linotype', Palatino, serif","'Times New Roman', Times, serif","Arial, Helvetica, sans-serif","'Arial Black', Gadget, sans-serif","'Comic Sans MS', cursive, sans-serif","Impact, Charcoal, sans-serif","'Lucida Grande', sans-serif","Tahoma, Geneva, sans-serif","'Trebuchet MS', Helvetica, sans-serif","Verdana, Geneva, sans-serif","'Courier New', Courier, monospace","'Lucida Console', Monaco, monospace"],'Google Fonts':default_gfonts},},"font-weight":{"dropdown":['100','200','300','400','500','600','700','800','900'],"custom_label":'Weight',"advanced":1,},"font-style":{"buttons":['normal','italic'],"compact":true,"custom_label":'Style',},"text-transform":{"buttons":['none','capitalize','uppercase','lowercase'],"compact":true,"custom_label":'Transform',"advanced":1,},"text-decoration":{"buttons":['none','underline','overline','line-through'],"compact":true,"custom_label":'Decoration',"advanced":1,},"text-align":{"buttons":['left','center','right','justify'],"compact":true,"custom_label":'Align',},"letter-spacing":{"numeric":1,"compact":true,"advanced":1,},"word-spacing":{"numeric":1,"compact":true,"advanced":1,},"text-shadow":{"set_none":1,"advanced":1,}},"borders":{"border-width":{"numeric":1,"slidable":1,"range":[0,100],"inner_group":'border-all',},"border-color":{"colorpicker":1,"inner_group":'border-all',},"border-style":{"buttons":['none','solid','dotted','dashed'],"inner_group":'border-all',},"border-top-width":{"numeric":1,"slidable":1,"range":[0,100],"inner_group":'border-top',},"border-top-color":{"colorpicker":1,"inner_group":'border-top',},"border-top-style":{"buttons":['none','solid','dotted','dashed'],"inner_group":'border-top',},"border-right-width":{"numeric":1,"slidable":1,"range":[0,100],"inner_group":'border-right',},"border-right-color":{"colorpicker":1,"inner_group":'border-right',},"border-right-style":{"inner_group":'border-right',"buttons":['none','solid','dotted','dashed'],},"border-bottom-width":{"numeric":1,"slidable":1,"range":[0,100],"inner_group":'border-bottom',},"border-bottom-color":{"colorpicker":1,"inner_group":'border-bottom',},"border-bottom-style":{"inner_group":'border-bottom',"buttons":['none','solid','dotted','dashed'],},"border-left-width":{"numeric":1,"slidable":1,"range":[0,100],"inner_group":'border-left',},"border-left-color":{"colorpicker":1,"inner_group":'border-left',},"border-left-style":{"inner_group":'border-left',"buttons":['none','solid','dotted','dashed'],},},"border-radius":{"border-radius":{"numeric":1,"slidable":1,"range":[0,100],},"border-top-left-radius":{"numeric":1,"custom_label":'Radius Top Left',"compact":true,"advanced":1,},"border-top-right-radius":{"numeric":1,"custom_label":'Radius Top Right',"compact":true,"advanced":1,},"border-bottom-right-radius":{"numeric":1,"custom_label":'Radius Bottom Right',"compact":true,"advanced":1,},"border-bottom-left-radius":{"numeric":1,"compact":true,"custom_label":'Radius Bottom Left',"advanced":1,},},"spacings":{"padding":{"numeric":1,"slidable":1,"range":[0,200]},"padding-top":{"numeric":1,"compact":true,"range":[0,100],"advanced":1,},"padding-right":{"numeric":1,"compact":true,"range":[0,100],"advanced":1,},"padding-bottom":{"numeric":1,"compact":true,"range":[0,100],"advanced":1,},"padding-left":{"numeric":1,"compact":true,"range":[0,100],"advanced":1,},"margin-top":{"numeric":1,"slidable":1,"range":[-100,100]},"margin-right":{"numeric":1,"slidable":1,"range":[-100,100]},"margin-bottom":{"numeric":1,"slidable":1,"range":[-100,100]},"margin-left":{"numeric":1,"slidable":1,"range":[-100,100]},},"transform":{"transform":{"advanced":1,},"transform-origin":{"advanced":1,"buttons":['top left','top','top right','left','center','right','bottom left','bottom','bottom right']},},"filters":{"filter":{"set_none":1,}},"lists":{"list-style-type":{"buttons":['disc','circle','decimal'],},"list-style-image":{},"list-style-position":{"buttons":['inside','outside']},},"extra":{"box-shadow":{"set_none":1,},"float":{"buttons":['none','left','right'],"advanced":1,},"visibility":{"buttons":['visible','hidden'],"advanced":1,},"opacity":{"slidable":1,"range":[0,10]},"box-sizing":{"buttons":['border-box','content-box'],"advanced":1,},"display":{"buttons":['none','block','inline','inline-block']},"transition":{"set_none":1,"advanced":1,}},"measures":{"__is-advanced":true,"__notice":'<b>Warning:</b> those properties may break your layout, use\'m only if you\'re 100% sure of what you\'re doing.',"min-width":{"numeric":1,"range":[0,2000]},"max-width":{"numeric":1,"range":[0,2000]},"min-height":{"numeric":1,"range":[0,2000]},"max-height":{"numeric":1,"range":[0,2000]},"width":{"numeric":1,"range":[0,2000]},"height":{"numeric":1,"range":[0,2000]},},"positioning":{"__is-advanced":true,"__notice":'<b>Warning:</b> those properties may break your layout, use\'m only if you\'re 100% sure of what you\'re doing.',"position":{"dropdown":['static','relative','absolute','fixed']},"top":{"numeric":1,"slidable":1,"range":[-1000,1000]},"right":{"numeric":1,"slidable":1,"range":[-1000,1000]},"bottom":{"numeric":1,"slidable":1,"range":[-1000,1000]},"left":{"numeric":1,"slidable":1,"range":[-1000,1000]}},}
var filters={'sepia':{min:0,max:100,unit:''},'blur':{min:0,max:20,unit:'px'},'brightness':{min:0,max:100,unit:''},'contrast':{min:0,max:100,unit:''},'grayscale':{min:0,max:100,unit:''},'hue-rotate':{min:0,max:360,unit:'deg'},'invert':{min:0,max:100,unit:''},'opacity':{min:0,max:100,unit:''},'saturate':{min:0,max:100,unit:''},'sepia':{min:0,max:100,unit:''},}
var filterer='';for(var f in filters){var fil=filters[f]
filterer+='<div class="hero-val-wrap hero-filter-wrap" data-filter="'+f+'"><span class="ico"></span><b>'+f+'</b><div class="hero-slider-wrap"><input type="range" value="0" min="'+fil.min+'" max="'+fil.max+'" data-filter="'+f+'" data-unit="'+fil.unit+'" /></div></div>';}
var grad_dragging=false;function hero_gradient_builder(gradient){var returner='<div class="csshero-gradient-builder"><div class="gradient-val"><input type="text" value="'+gradient+'" /></div>';if(gradient){var colors=[];var gr_type=gradient.split('(')[0];var gr_options_backup=gradient.slice(gradient.indexOf('(')+1,gradient.lastIndexOf(')'));gr_options=gr_options_backup.trim().replace(/, /g,',').replace(/  /g,' ');gr_options=psplit(gr_options);var gr_direction=gr_options[0];gr_direction=gr_direction.trim().replace(/  /g,' ');if(!is_color(gr_direction)){gr_render_direction=0;if(gr_direction=='to top left')gr_render_direction='-45deg';if(gr_direction=='to left')gr_render_direction='-90deg';if(gr_direction=='to bottom left')gr_render_direction='-135deg';if(gr_direction=='to bottom')gr_render_direction='-180deg';if(gr_direction=='to bottom right')gr_render_direction='-135deg';if(gr_direction=='to right')gr_render_direction='90deg';if(gr_direction=='to top right')gr_render_direction='45deg';if(gr_direction=='to top')gr_render_direction='0deg';if(gr_direction.indexOf('deg')>-1){gr_render_direction=gr_direction;}}else{gr_render_direction=0;}
var gr_clr=[];if(is_color(gr_direction.split(' ')[0])){var tshold=-1;}else{var tshold=0;}
for(var g in gr_options){if(g>tshold){var q=gr_options[g]
var q=q.split(' ')
g_val=q[0];g_pos=q[1];if(!g_pos)g_pos='not-set';gr_clr.push({pos:g_pos,val:g_val})}}
holder_class='';var render_gradient='';for(var c in gr_clr){var pos=gr_clr[c].pos;if(!pos||pos=='not-set'){pos='';}else{pos=' '+pos;}
var color_rappresentation=gr_clr[c].val;if(color_rappresentation.indexOf('@')>-1&&hero_global_vars[color_rappresentation]){var color_rappresentation=hero_global_vars[color_rappresentation];}else{var color_rappresentation=color_rappresentation;}
render_gradient+=color_rappresentation+pos+',';}
render_gradient=render_gradient.slice(0,-1);var pushers=[{name:'n-o',grad:'-45deg'},{name:'n',grad:'0deg'},{name:'n-e',grad:'45deg'},{name:'c-o',grad:'-90deg'},{name:'c',grad:'0'},{name:'c-e',grad:'90deg',},{name:'s-o',grad:'-135deg'},{name:'s',grad:'180deg'},{name:'s-e',grad:'135deg'}];var nice_pushers='';for(var p in pushers){nice_pushers+='<div class="push '+pushers[p].name+'" data-grad="'+pushers[p].grad+'"></div>';}
var gradient_orienter='<div class="csshero-grad-orienter"><div class="pusher">'+nice_pushers+'</div><div class="orient-express" style="transform:rotate('+gr_render_direction+');"></div></div>';if(gr_type.indexOf('radial-gradient')>-1){var radial_direction=gr_direction.split('at')[1];if(radial_direction){var radial_direction=radial_direction.trim().split(' ');var radial_direction='left:'+radial_direction[0]+'; top:'+radial_direction[1]+';'}
var gradient_orienter='<div class="csshero-radial-orienter"><div class="csshero-radial-wave-wrap"><div class="csshero-radial-wave"></div></div><div class="csshero-radial-gradient-pointer" style="'+radial_direction+'"></div></div>';}
if(gr_type.indexOf('repeating-')>-1){var is_repeating='repeating';}else{var is_repeating='';}
if(is_color(gr_direction.split(' ')[0]))gr_direction='180deg';returner+='<div class="grad-orienter-wrap"><div class="gr-orient">'+gradient_orienter+'</div><div class="gr-val"><div><label>Direction</label><input type="text" value="'+gr_direction+'" /></div><div><label>Repeat</label><span class="gr-repeat '+is_repeating+'"></span></div></div></div>';var render_gradient='linear-gradient(to right,'+render_gradient+')';var render_gradient_ok=csshero_return_gradient_prev(render_gradient)
returner+='<div class="csshero-gradient-render-wrap"><div class="csshero-gradient-render" style="background-image:'+render_gradient_ok+';"></div></div><div class="csshero-gradient-color-holder '+holder_class+'">';var color_index=0;var color_total=gr_clr.length;for(var c in gr_clr){color_index++;clr_pos=gr_clr[c].pos;var clr_pos_name=clr_pos;if(clr_pos=='not-set'){var clr_pos=parseInt((100*(color_index-1))/(color_total-1))+'%';}
var color_print=gr_clr[c].val;var color_print=hero_get_color(color_print);clr_direction='left';returner+='<div class="csshero-gradient-color" style="'+clr_direction+':'+clr_pos+';" ><div class="gradient-color-delete ico"></div><div class="gradient-color-handle ico"></div><div class="gradient-picker-inner hero-picker" data-position="'+clr_pos_name+'" data-original-color-val="'+gr_clr[c].val+'" style="background-color:'+color_print+';"></div></div>';}
returner=returner+'</div></div>';return returner;}}
function csshero_return_gradient_prev(receive){if(receive.indexOf('@')>-1){for(var v in hero_global_vars){receive=receive.split(v).join(hero_global_vars[v])}}
return receive;}
$(document).on('click','.hero-make-gradient',function(){var t=$(this);if(t.is('.open')){t.removeClass('open-grad')
$('.csshero-gradient-super-wrap').remove()
return;}
var widget=t.closest('.hero-prop')
var val=widget.find('.hero-val').val();t.addClass('open-grad');var type='linear';var val_l='linear-gradient(to top,white,black)';var val_r='radial-gradient(farthest-corner,white,black)';if(val.indexOf('radial-gradient')>-1){val_r=val;type='radial'}
if(val.indexOf('linear-gradient')>-1){val_l=val;}
t.append('<div class="csshero-gradient-super-wrap hero-extra" data-show-type="'+type+'"><div class="extra-title csshero-gradient-tabber"><span data-t="linear">Linear</span><span data-t="radial">Radial</span><span class="hero-closer ico"></span></div><div class="csshero-gradient-wrapper csshero-gradient-wrapper-linear">'+hero_gradient_builder(val_l)+'</div></div>')
widget.find('.csshero-gradient-super-wrap').append('<div class="csshero-gradient-wrapper csshero-gradient-wrapper-radial">'+hero_gradient_builder(val_r)+'</div>')
hero_load_grad_pickers();}).on('mousedown','.orient-express',function(){grad_dragging=true}).on('mouseup','.orient-express',function(){grad_dragging=false}).on('mouseenter','.orient-express',function(){var box=$(this);var inp=$(this).closest('.grad-orienter-wrap').find('.gr-val input');var boxCenter=[box.offset().left+box.width()/2,box.offset().top+box.height()/2];$(document).on('mousemove click','.orient-express',function(e){if(grad_dragging||e.type=='click'){var angle=Math.atan2(e.pageX-boxCenter[0],-(e.pageY-boxCenter[1]))*(180/Math.PI);var angle=parseInt(angle);box.css({'transform':'rotate('+angle+'deg)'});inp.val(angle+'deg').trigger('keyup')}});}).on('keyup','.grad-orienter-wrap .gr-val input',function(e){var grad=$(this).val();var current_input=$(this).closest('.csshero-gradient-builder').find('.gradient-val input');var current_grad=current_input.val();var current_grad_type=current_grad.split('(')[0];var angle=grad;var current_options=current_grad.slice(current_grad.indexOf('(')+1,current_grad.lastIndexOf(')'));var current_orientation_backup=psplit(current_options);var current_orientation=current_orientation_backup[0]
if(!is_color(current_orientation.split(' ')[0])){current_orientation_backup.splice(0,1,angle);var new_grad=current_orientation_backup.join(',');current_input.val(current_grad_type+'('+new_grad+')').trigger('update')}else{current_orientation_backup.splice(0,0,angle);var new_grad=current_orientation_backup.join(',');current_input.val(current_grad_type+'('+new_grad+')').trigger('update')}}).on('click','.gr-repeat',function(){var val=$(this).closest('.csshero-gradient-builder').find('.gradient-val input').val();$(this).toggleClass('repeating')
if(val.indexOf('repeating-')>-1){var new_val=val.replace(/repeating-/g,'')}else{var new_val='repeating-'+val;}
$(this).closest('.csshero-gradient-builder').find('.gradient-val input').val(new_val).trigger('update-from-drag')}).on('click','.gradient-color-delete',function(){$('.csshero-gradient-color-holder').trigger('mousemove')
$('.csshero-gradient-color.cloned').remove();var current_input=$(this).closest('.csshero-gradient-builder').find('.gradient-val input')
var val=current_input.val();var current_grad_type=val.split('(')[0];var color=$(this).closest('.csshero-gradient-color');var len=$(this).closest('.csshero-gradient-color-holder').find('.csshero-gradient-color:not(.cloned)').length;var idx=color.index();var current_options=val.slice(val.indexOf('(')+1,val.lastIndexOf(')'));var current_orientation_backup=psplit(current_options);var current_orientation=current_orientation_backup[0]
if(!is_color(current_orientation.split(' ')[0])){var _idx=idx+1;}else{var _idx=idx;}
current_orientation_backup.splice(_idx,1);var new_grad=current_orientation_backup.join(',');if(len>=3){current_input.val(current_grad_type+'('+new_grad+')').trigger('update')
color.remove();}else{alert('Gradient requires at least two colors')}}).on('update keyup update-from-drag','.gradient-val input',hero_throttle(function(e){var wrapper=$(this).closest('.csshero-gradient-builder');var tval=$(this).val()
var gradient_new_preview=tval.slice(tval.indexOf('(')+1,tval.lastIndexOf(')'));var gradient_new_preview=gradient_new_preview.replace(/, /g,',');var gradient_new_preview=psplit(gradient_new_preview)
var new_grad_prev=[];var new_grad_positions=[];for(var g in gradient_new_preview){var gradient_checker=gradient_new_preview[g].split(' ')[0];var position_checker=gradient_new_preview[g].split(' ')[1];if(is_color(gradient_checker)){new_grad_prev.push(gradient_checker);if(!position_checker)var position_checker='not-set';new_grad_positions.push(position_checker)}}
if(e.type!='update-from-drag'){for(var c in new_grad_prev){wrapper.find('.csshero-gradient-color-holder .csshero-gradient-color').eq(c).find('.gradient-picker-inner').css('background-color',new_grad_prev[c]).attr('data-original-color-val',new_grad_prev[c])}
var idx=0;for(var c in new_grad_positions){idx++;if(new_grad_positions[c]!='not-set'){var css_position=new_grad_positions[c];}else{if(idx==0){var css_position=0;}else{if(idx==new_grad_positions.length){var css_position='100%';}}}
wrapper.find('.csshero-gradient-color-holder .csshero-gradient-color').eq(c).find('.gradient-picker-inner').attr('data-position',new_grad_positions[c]);wrapper.find('.csshero-gradient-color-holder .csshero-gradient-color').eq(c).css('left',css_position)}}
var first_gradient_param=gradient_new_preview[0].split(' ')[0];if(!is_color(first_gradient_param)){gradient_new_preview.splice(0,1);}
var new_grad_prev=gradient_new_preview.join(',')
var final_grad_prev='linear-gradient(to right,'+new_grad_prev+')';var grad_to_be_rendered_final=csshero_return_gradient_prev(final_grad_prev)
wrapper.find('.csshero-gradient-render').css('background-image',grad_to_be_rendered_final)
var sel=$(this).closest('.hero-prop').find('.hero-val').val(tval);set_element_prop('background-image',tval,true)
hero_store_history_step()},300)).on('mousedown','.gradient-picker-inner',function(){$('.gradient-picker-inner.cur').removeClass('cur')
$(this).addClass('cur')}).on('mousemove','.csshero-gradient-color-holder',function(e){var cursor_x=e.pageX;var holder_w=parseInt($(this).outerWidth());var holder_x=parseInt($(this).offset().left);var reference=$(this).find('.csshero-gradient-color').eq(0).clone();reference.addClass('cloned')
if((cursor_x-holder_x)>0&&(cursor_x-holder_x)<holder_w){if(!$(this).find('.cloned').length)$(this).append(reference)
var cloner_position=cursor_x-holder_x;var cloner_position=parseInt((cloner_position*100)/holder_w);var clone=$(this).find('.cloned');clone.css('left',cloner_position+'%');clone.find('.gradient-picker-inner').attr('data-position',cloner_position+'%')}}).on('mouseleave','.csshero-gradient-color-holder',function(e){$(this).find('.cloned').remove();}).on('click','.csshero-gradient-color-holder .cloned',function(e){var all_colors=[]
$(this).closest('.csshero-gradient-color-holder').find('.csshero-gradient-color').each(function(){all_colors.push($(this).offset().left)})
all_colors.sort(sortNumber);var final_position='';final_position=all_colors.indexOf($(this).offset().left);$(this).removeClass('cloned')
var original_input=$(this).closest('.csshero-gradient-builder').find('.gradient-val input');var original_grad_backup=original_input.val();var original_grad=original_grad_backup.slice(original_grad_backup.indexOf('(')+1,original_grad_backup.lastIndexOf(')'));var new_grad=psplit(original_grad);var color_position=final_position;if(!is_color(new_grad[0].split(' ')[0]))final_position=final_position+1;var new_gradient_el=$(this).find('.gradient-picker-inner').attr('data-original-color-val')+' '+$(this).find('.gradient-picker-inner').attr('data-position');new_grad.splice(final_position,0,new_gradient_el);var new_grad=new_grad.join(',');var final_grad=original_grad_backup.replace(original_grad,new_grad);original_input.val(final_grad).trigger('update-from-drag')
var new_clone=$(this).clone();if(color_position>-1){$(this).closest('.csshero-gradient-color-holder').find('.csshero-gradient-color').eq(color_position).before(new_clone)}else{$(this).closest('.csshero-gradient-color-holder').prepend(new_clone)}
$(this).remove()
hero_load_grad_pickers();}).on('click','.csshero-gradient-tabber span',function(){var t=$(this);var type=t.attr('data-t');var w=t.closest('.csshero-gradient-super-wrap');w.attr('data-show-type',type)}).on('mouseenter mousemove','.csshero-gradient-color:not(.cloned)',function(){$(this).closest('.csshero-gradient-color-holder').find('.cloned').hide();}).on('mouseleave','.csshero-gradient-color:not(.cloned)',function(){$(this).closest('.csshero-gradient-color-holder').find('.cloned').show();}).on('click','.pusher .push',function(){$(this).closest('.csshero-gradient-builder').find('.gr-val input').val($(this).attr('data-grad')).trigger('keyup');$(this).closest('.csshero-gradient-builder').find('.orient-express').css('transform','rotate('+$(this).attr('data-grad')+')');})
function sortNumber(a,b){return a-b;}
function hero_load_grad_pickers(){var gradient_pickers=$(".csshero-gradient-color");var radial_pointers=$('.csshero-radial-gradient-pointer');gradient_pickers.each(function(){var cont=$(this).closest('.csshero-gradient-color-holder');var hand=$(this).find('.gradient-color-handle');$(this).draggable({axis:'x',containment:cont,handle:hand,drag:function(event){var wrapper=$(this).closest('.csshero-gradient-wrapper');var gr_repeat=wrapper.find('.gr-repeat');if(gr_repeat.is('.repeating')){var repeat='repeating-';}else{var repeat='';}
if(wrapper.is('.csshero-gradient-wrapper-linear')){var grad_type='linear-gradient'}else{var grad_type='radial-gradient'}
var grad_w=$(this).closest('.csshero-gradient-builder').find('.csshero-gradient-render').outerWidth();var grad_w=parseInt(grad_w)-parseInt($(this).outerWidth());var grad_dir=$(this).closest('.csshero-gradient-builder').find('.gr-val input').val();var grad_input=$(this).closest('.csshero-gradient-builder').find('.gradient-val input');var w=$(this).closest('.csshero-gradient-color-holder');var divs=w.find('.csshero-gradient-color:not(.cloned)');divs.sort(function(a,b){var contentA=parseInt($(a).css('left'))
var contentB=parseInt($(b).css('left'))
return(contentA<contentB)?-1:(contentA>contentB)?1:0;}).appendTo(w)
var divs=w.find('.csshero-gradient-color:not(.cloned)');var n=[];divs.each(function(){var e=$(this).find('.gradient-picker-inner');var c=e.attr('data-original-color-val');var l=$(this).css('left')
if(l.indexOf('%'==-1))l=parseInt((parseInt(l)*100)/grad_w);if(l>100)l=100;n.push(c+' '+l+'%');})
grad_input.val(repeat+grad_type+'('+grad_dir+','+n.join(',')+')').trigger('update-from-drag')
return;}});});radial_pointers.each(function(){var cont=$(this).closest('.csshero-radial-orienter');$(this).draggable({containment:cont,drag:function(event){var bg=$(this).closest('.csshero-gradient-builder').find('.gradient-val input');var bgval=bg.val();var cont_w=parseInt(cont.outerWidth());var cont_h=parseInt(cont.outerHeight());var drag_t=parseInt($(this).css('top'));var drag_l=parseInt($(this).css('left'));var wave=cont.find('.csshero-radial-wave');var perc_l=parseInt(drag_l*100/cont_w);var perc_h=parseInt(drag_t*100/cont_h);var wave_class_h=(perc_h<50)?'from-top':'from-bottom';var wave_class_l=(perc_l<50)?'from-left':'from-right';var bgval_options=bgval.slice(bgval.indexOf('(')+1,bgval.lastIndexOf(')'));var bgval_arr=psplit(bgval_options);if(is_color(bgval_arr[0])){var replace_idx=0;var radial_option='farthest corner at';}else{var replace_idx=1;var radial_option=bgval_arr[0].split('at');var radial_option=radial_option[0]+' at';}
var radial_option=radial_option+' '+perc_l+'% '+perc_h+'%';var radial_option=radial_option.replace(/  /g,' ');bgval_arr.splice(0,replace_idx,radial_option)
bg.val('radial-gradient('+bgval_arr.join(',')+')').trigger('update');$(this).closest('.csshero-gradient-super-wrap').find('.gr-val input').val(radial_option)
wave.attr('data-wave-h',wave_class_h).attr('data-wave-l',wave_class_l)}});})
initialize_pickers($('.csshero-gradient-super-wrap'))}
function hero_send_color_to_gradient_builder(cl){var el=$('.gradient-picker-inner.cur');console.log(el.length)
el.css('background',cl)
var end=el.closest('.csshero-gradient-builder').find('.gradient-val input');var original=end.val();var original_options=original.slice(original.indexOf('(')+1,original.lastIndexOf(')'));var updater_position=el.attr('data-position');var ori_color=cl;console.log(cl)
el.attr('data-original-color-val',ori_color)
if(updater_position!='not-set')ori_color=ori_color+' '+updater_position;var original_optins_arr=psplit(original_options);var updater_index=el.closest('.csshero-gradient-color').index();if(!is_color(original_optins_arr[0].split(' ')[0]))updater_index=updater_index+1;original_optins_arr.splice(updater_index,1,ori_color);var updated_val=original_optins_arr.join(',');var updated_val=original.replace(original_options,updated_val)
end.val(updated_val).trigger('update-from-drag')}
$(document).on('click','.csshero-make-shadow',function(){var wid=$(this).closest('.hero-prop');var default_grad='rgba(255,0,0,1) 5px 5px 10px';if(wid.hasClass('show-shadow-maker')){wid.removeClass('show-shadow-maker')
return;}
wid.addClass('show-shadow-maker');var prop=wid.attr('data-prop');var val=wid.find('.hero-val').val().replace(/  /g,' ');if(!val||val=='none'){var val=default_grad;}
var val=psplit(val)[0];var con=wid.find('.csshero-shadow-builder');var split_val=spacesplit(val);if(split_val.length<3){var val=default_grad;var split_val=spacesplit(val)}
var sha_color='';var sha_inset='';for(var v in split_val){var shaval=split_val[v];if(is_color(shaval)){var sha_color=shaval;var sha_color_print=shaval;}
if(shaval=='inset'){var sha_inset=shaval;}
if(shaval.indexOf('@')>-1){var sha_color=shaval;var sha_color_print=hero_get_color(shaval);}}
var split_val=$.grep(split_val,function(value){return value!=sha_color;});if(sha_inset&&sha_inset!=''){var split_val=$.grep(split_val,function(value){return value!=sha_inset;});}
var split_val=$.grep(split_val,function(value){return value!='';});var pos_x=split_val[0];var pos_y=split_val[1];if(split_val[2]){var blur=split_val[2];}else{var blur='0px';}
if(split_val[3]){var spread=split_val[3];}else{var spread='0px';}
var inset='<div class="sha-node sha-pos" data-sha-val="'+sha_inset+'"><label>Shadow Position</label><div class="sha-pos-btns"><span data-val="inset">Inside</span><span data-val="">Outside</span></div></div>';var color='<span class="hero-closer ico"></span><div data-sha-val="'+sha_color+'" class="sha-color sha-node"><label>Color</label><div class="hero-picker-wrap"><div data-original-color-val="'+sha_color+'" style="background-color: '+sha_color_print+';" class="hero-picker"></div></div></div>';var blurrer='<div class="sha-node sha-full-node sha-blur" data-sha-val="'+blur+'"><label>Blur</label><div class="slider-wrap-outer"><div class="slider-wrap"><input class="csshero-sha-slider-element" type="range" min="0" max="50" step="1" value="'+parseInt(blur)+'"></div><input type="text" value="'+blur+'" /></div></div>';var spreader='<div class="sha-node sha-spread sha-full-node" data-sha-val="'+spread+'"><label>Spread</label><div class="slider-wrap-outer"><div class="slider-wrap"><input class="csshero-sha-slider-element" type="range" min="0" max="50" step="1" value="'+parseInt(spread)+'"></div><input type="text" value="'+spread+'" /></div></div>';var positioner='<div class="sha-node sha-ori-wrap" data-sha-val="'+pos_x+' '+pos_y+'"><label>Orientation</label><div class="sha-orienter"><div class="sha-snapper"></div><div class="sha-snapper"></div><div class="sha-snapper"></div><div class="sha-snapper"></div><div class="sha-anchor"><div class="handle"></div></div></div></div>';if(prop=='text-shadow'){var inset='';var spreader='';}
con.empty().append(positioner+blurrer+spreader+color+inset);initialize_pickers(con.find('.sha-color'))
var cont=con.find('.sha-orienter');var handle=con.find('.handle');handle.css({'left':pos_x,'top':pos_y}).draggable({snap:".sha-snapper",snapMode:"inner",snapTolerance:1,containment:cont,drag:hero_throttle(function(event){var thisPos=$(this).position();var x=parseInt(thisPos.left*.5);var y=parseInt(thisPos.top*.5);$(this).closest('.sha-node').attr('data-sha-val',x+"px "+y+"px");$(this).closest('.csshero-shadow-builder').trigger('updatesha');},300)});}).on('click','.sha-head .closer',function(){$(this).closest('.hero-prop').find('.csshero-make-shadow').trigger('click')}).on('click','.sha-pos-btns > span',function(){var val=$(this).attr('data-val');$(this).closest('.sha-node').attr('data-sha-val',val);$(this).closest('.csshero-shadow-builder').trigger('updatesha');}).on('change','.csshero-sha-slider-element',hero_throttle(function(e){$(this).closest('.sha-node').attr('data-sha-val',$(this).val()+"px");$(this).closest('.csshero-shadow-builder').trigger('updatesha');},300)).on('updatesha','.csshero-shadow-builder',function(){var nodes=$(this).find('.sha-node');var new_sha=[];nodes.each(function(){var val=$(this).attr('data-sha-val');new_sha.push(val)
$(this).find('input[type="text"]').val(val)})
var prop=$(this).closest('.hero-prop').attr('data-prop');set_element_prop(prop,new_sha.join(' '),true)
hero_store_history_step();}).on('keyup','.sha-node input[type="text"]',function(){$(this).closest('.sha-node').attr('data-sha-val',$(this).val());$(this).closest('.csshero-shadow-builder').trigger('updatesha');$(this).closest('.sha-node').find('.csshero-sha-slider-element').val($(this).val())})
var transforms=['scale','translate','rotate','skew']
var scene='<div class="ht-scene"><div class="ht-val" contenteditable></div><div class="ht-ref"></div><div class="ht-ref ht-cont ico"></div></div>'
var skewer_scene='<div class="ht-scene"><div class="ht-skewer"><div class="ht-skewer-v-track ht-skewer-track"><span></span></div><div class="ht-skewer-h-track ht-skewer-track"><span></span></div></div><div class="ht-val" contenteditable></div><div class="ht-ref"></div><div class="ht-ref ht-cont"></div></div>'
var transformer_head='<div class="hero-transformer-head">\
       <div class="ht-head">\
        <span class="cur" data-trans="scale">Scale</span>\
        <span data-trans="translate">Translate</span>\
        <span data-trans="rotate">Rotate</span>\
        <span data-trans="skew">Skew</span>\
       </div>\
      </div>';var transformer='<div class="hero-transformer">\
      <div class="ht-wrap">\
       <div class="ht-inner cur" data-tr="scale">\
        '+scene+'\
       </div>\
       <div class="ht-inner" data-tr="translate">\
        '+scene+'\
       </div>\
       <div class="ht-inner" data-tr="rotate">\
        <div class="ht-scene">\
         <div class="ht-ref"></div>\
         <div class="ht-val" contenteditable></div>\
         <div class="ht-rotate r-01"><div class="rot-sha"></div><div class="draggino"></div></div>\
        </div>\
       </div>\
       <div class="ht-inner" data-tr="skew">\
        '+skewer_scene+'\
       </div>\
      </div>\
     </div>';$(window).on('frameready',function(){var res=$('.ht-inner[data-tr="scale"] .ht-cont')
var res_ref=$('.ht-inner[data-tr="scale"] .ht-ref')
var tra=$('.ht-inner[data-tr="translate"] .ht-cont')
var ske=$('.ht-inner[data-tr="skew"] .ht-cont')
var tra_ref=$('.ht-inner[data-tr="translate"] .ht-ref')
var transl_l='';var transl_t='';tra.draggable({drag:function(event,ui){transl_l=parseInt(tra.offset().left-tra_ref.offset().left)*5;transl_t=parseInt(tra.offset().top-tra_ref.offset().top)*5;$(this).closest('.ht-inner').find('.ht-val').text(transl_l+'px, '+transl_t+'px')
$('#hero-temp-styler',hero_frame).text(current_el()+'{transform:'+hero_push_transforms()+';}')},start:function(){$('body',hero_frame).append('<style id="hero-temp-styler"></style>')
tra.css('margin-left',((parseInt(tra.outerWidth)/2)*-1)+'px')},stop:function(){hero_push_transforms(true);},containment:'parent',scroll:false});res.resizable({aspectRatio:res.outerWidth()/res.outerHeight(),handles:'se',resize:function(event,ui){var scale=ui.size.width;scale=scale/res_ref.outerWidth();scale=Math.round(scale*100)/100
$(this).css('margin','-'+ui.size.height/2+'px -'+ui.size.width/2+'px')
$(this).closest('.ht-inner').find('.ht-val').text(scale)
$('#hero-temp-styler',hero_frame).text(current_el()+'{transform:'+hero_push_transforms()+';}')},start:function(){$('body',hero_frame).append('<style id="hero-temp-styler"></style>')},stop:function(){hero_push_transforms(true);}});$('.draggino').each(function(){var fur=$(this)
var mur=fur.closest('.ht-rotate')
var sur=mur.find('.rot-sha');var ref=$(this).closest('.ht-inner').find('.ht-ref')
$(this).draggable({drag:function(e,ui){var r=mur.width()/2;var small_r=fur.width()/2;var origin_x=r-small_r;var origin_y=r-small_r;var x=ui.position.left-origin_x,y=ui.position.top-origin_y;var l=Math.sqrt(x*x+y*y);var l_in=Math.min(r-small_r,l);ui.position={'left':x/l*l_in+origin_x,'top':y/l*l_in+origin_y};var angleDeg=parseInt(Math.atan2(ui.position.top-origin_y,ui.position.left-origin_x)*180/Math.PI);sur.css('transform','rotate('+angleDeg+'deg)');ref.css('transform','rotate('+angleDeg+'deg)');$(this).closest('.ht-inner').find('.ht-val').text(angleDeg+'deg');$('#hero-temp-styler',hero_frame).text(current_el()+'{transform:'+hero_push_transforms()+';}')},start:function(){$('body',hero_frame).append('<style id="hero-temp-styler"></style>')},stop:function(){hero_push_transforms(true);}})})
$('.ht-skewer-track > span').each(function(){var t=$(this)
var par=t.closest('.ht-skewer-track')
t.draggable({containment:"parent",drag:function(e,ui){var l='';var to='';if(t.is('.ht-skewer-v-track *')){l=t.offset().left-par.offset().left;l=par.outerWidth()/2-l-t.outerWidth()/2;l=l/2
t.attr('data-skew',l+'deg')}else{to=t.offset().top-par.offset().top;to=par.outerHeight()/2-to-t.outerHeight()/2;t.attr('data-skew',to+'deg')}
var sk=[];$('.ht-skewer-track > span').each(function(){var ski=$(this).attr('data-skew');if(ski)sk.push(ski)})
ske.css('transform','skew('+sk.join(',')+')');$(this).closest('.ht-inner').find('.ht-val').text(sk.join(','))
$('#hero-temp-styler',hero_frame).text(current_el()+'{transform:'+hero_push_transforms()+';}')},start:function(){$('body',hero_frame).append('<style id="hero-temp-styler"></style>')},stop:function(){hero_push_transforms(true);}})});})
$(document).on('click','.ht-head > span',function(){var t=$(this).attr('data-trans')
$('.ht-inner.cur , .ht-head .cur').removeClass('cur')
$('.ht-inner[data-tr="'+t+'"]').addClass('cur')
$(this).addClass('cur')}).on('keyup','.ht-val',hero_throttle(function(){hero_push_transforms(true);},500))
function hero_push_transforms(send){var pup='';$('.ht-inner').each(function(){var t=$(this).attr('data-tr');var v=$(this).find('.ht-val').text();if(v)pup+=t+'('+v+') ';});pup=pup.trim();if(send)set_element_prop('transform',pup,true);hero_store_history_step()
return pup;}
function prepare_transform_widget(prop){if(prop=='none'){$('.ht-cont,.ht-ref,.rot-sha').removeAttr('style')
$('.ht-val').text('')
return;}
var prop=prop.replace(/  /g,' ').split(' ,').join(',').split(', ').join(',').trim()
var g=prop.split(' ')
for(var h in g){var pro=g[h].split('(')[0]
var val=g[h].split('(')[1].replace(')','')
var wrap=$('.ht-inner[data-tr="'+pro+'"]');wrap.find('.ht-val').text(val)
if(pro=='translate'){var lef='';var top='';lef=val.split(',')[0];lef=parseInt(lef)/5+'px'
if(val.split(',')[1]){top=val.split(',')[1];top=','+parseInt(top)/5+'px'}
wrap.find('.ht-cont').css({'left':'calc(50% + '+lef+')','top':'calc(50% + '+top+')'})}
if(pro=='scale'){var el=wrap.find('.ht-ref');var ne_w=el.outerWidth()*parseFloat(val)
var ne_h=el.outerHeight()*parseFloat(val)
wrap.find('.ht-cont').css({'width':ne_w+'px','height':ne_h+'px','margin':'-'+ne_h/2+'px -'+ne_w/2+'px'})}
if(pro=='skew'){var el=wrap.find('.ht-cont');el.css('transform','skew('+val+')')}
if(pro=='rotate'){wrap.find('.ht-ref,.rot-sha').css('transform','rotate('+val+')');}}}
$(document).on('keydown',function(e){var evtobj=window.event?event:e;var body=$('#csshero-body');var focused_mirror=$('.CodeMirror-focused').length;if(evtobj.keyCode==72&&evtobj.metaKey)e.preventDefault();if(!focused_mirror){if(evtobj.keyCode==90&&evtobj.ctrlKey)hero_undo();if(evtobj.keyCode==90&&evtobj.metaKey)hero_undo();if(evtobj.keyCode==88&&evtobj.ctrlKey)hero_redo();if(evtobj.keyCode==88&&evtobj.metaKey)hero_redo();}
if(evtobj.keyCode==72&&evtobj.metaKey){body.toggleClass('enable-navigation')
remove_probes()
return false;}
if(evtobj.keyCode==72&&evtobj.ctrlKey){body.toggleClass('enable-navigation')
return false;}
if(evtobj.keyCode==83&&evtobj.ctrlKey){e.preventDefault();$('#hero-save').trigger('click')
return false;}
if(evtobj.keyCode==83&&evtobj.metaKey){e.preventDefault();$('#hero-save').trigger('click')
return false;}
if(evtobj.keyCode==32){}})
function csshero_prepara_chiodi(thi){body.removeClass('edited-by-chiodo')
body.append('<div class="chiodo-mask"></div>')
$('.hero-bottom-bar-nav').before('<div class="chiodo-mask bt"></div>')
var lats=['top','right','bottom','left']
var lats_p=['s','w','n','e']
var lats_m=['n','e','s','w']
var prb=$('.current-probe');if(body.is('.inspector-on'))return;body.addClass('inchiodato')
var sel='';var ory_style='';prb.append('<div class="chiodo-back"></div><div class="chiodo-in"></div>');prb.attr('data-will-send','{}')
thi.addClass('check-chiodo')
for(var l in lats){var m=thi.css('margin-'+lats[l]);var p=thi.css('padding-'+lats[l]);if(lats[l]=='left'||lats[l]=='right'){var stu='width';}else{var stu='height';}
var ss=stu+':'+m+';';var tt=stu+':'+p+';';var cla_m='';if(parseInt(m)<10)cla_m='small';var cla_p='';if(parseInt(p)<10)cla_p='small';var ins='<span class="con pad '+cla_p+'" style="'+tt+'"><span><b contenteditable>'+p+'</b></span></span><span class="con mar '+cla_m+'" style="'+ss+'"><span><b contenteditable>'+m+'</b></span></span>';prb.append('<span data-side="'+lats[l]+'" class="chiodo '+lats[l]+'">'+ins+'</span>');$('.chiodo.'+lats[l]+' .con').each(function(){var con=$(this)
if(con.is('.mar')){var hands=lats_m;var pro='margin';var mino=-999;}else{var hands=lats_p;var pro='padding'
var mino=5;}
var ref=$(this).find('b');var thi_prop='';var thi_zz='';var sel='';var needs_display=false;var ccs=con.closest('.chiodo')
var cc=ccs.attr('class');var neg='';con.resizable({handles:hands[l],minHeight:mino,minWidth:mino,resize:function(event,ui){body.addClass('edited-by-chiodo')
sel=$('.csshero-code-wrap').attr('data-editing_element')
if(!thi.hasClass('chioding')){thi.addClass('chioding');ory_style=thi.attr('style');thi.attr('ory_style',ory_style)}
if(thi.css('display')=='inline'){thi.css('display','inline-block')
needs_display=true;}
if(cc.indexOf('top')>-1||cc.indexOf('bottom')>-1){thi_zz=ui.size.height-0;var side='top';var side_prop='height'}else{thi_zz=ui.size.width-5;var side='left'
var side_prop='width'}
thi_zz=parseInt(thi_zz)
if(neg)thi_zz=thi_zz*-1;if(thi_zz<10&&thi_zz>-10){con.addClass('small')}else{con.removeClass('small')}
if(con.is('.mar'))csshero_setup_negatives(con,ccs.attr('data-side'),thi_zz)
thi_prop=pro+'-'+ccs.attr('data-side');var w_t=$(window.frames['csshero-iframe-main-page'].document).scrollTop();var w_l=$(window.frames['csshero-iframe-main-page'].document).scrollLeft();thi.attr('style',function(i,s){return(s||'')+thi_prop+':'+thi_zz+'px!important;transition:none!important;'});ref.html(thi_zz+'px')
prb.css({prop:thi_zz+'px','height':thi.outerHeight(),'top':thi.offset().top-w_t,'left':thi.offset().left-w_l,'width':thi.outerWidth()})},start:function(){neg=con.is('.neg')?true:false;},stop:function(event,ui){if(needs_display)set_element_prop('display','inline-block');var will_send=JSON.parse(prb.attr('data-will-send'))
will_send[thi_prop]=thi_zz+'px';prb.attr('data-will-send',JSON.stringify(will_send))}});if($(this).is('.mar')){csshero_setup_negatives($(this),lats[l],m)}})}}
function csshero_setup_negatives(el,orient,size){var size=parseInt(size)
if(orient=='top'||orient=='bottom'){var side='top';var side_prop='height'}else{var side='left'
var side_prop='width'}
var pos_size=size<0?size*-1:size;var mar_size=size<0?pos_size*-1:0;if(pos_size>=0&&pos_size<=5)pos_size=5;if(size<0){el.addClass('neg')
if(orient=='top'||orient=='left')el.css(side,pos_size+'px')}else{el.removeClass('neg')
if(orient=='top'||orient=='left')el.css(side,'auto')}
el.css('min-'+side_prop,pos_size+'px').css('margin-'+side,mar_size+'px')}
window.addEventListener("wheel",function(event){if(body.is('.inchiodato'))csshero_shutdown_chiodi();});function csshero_shutdown_chiodi(){if(!$('.current-probe').attr('data-will-send')){body.removeClass('inchiodato')
return;}
var props=JSON.parse($('.current-probe').attr('data-will-send'))
$('check-chiodo',hero_frame).each(function(){if($(this).attr('ory_style')){$(this).attr('style',$(this).attr('ory_style'))}else{$(this).removeAttr('style')}})
for(var h in props){set_element_prop(h,props[h],true)}
if(body.is('.edited-by-chiodo'))apply_style()
body.trigger('end_chiodi')
$('#csshero-body').removeClass('inchiodato');$('.chiodo').remove();$('.chiodo-back').remove();$('.chiodo-in').remove();$('.chiodo-mask').remove();$('#csshero-focus-view').empty().removeAttr('data-els')}
$(document).on('click','.chiodo-back, .chiodo-mask, .chiodo-in',function(e){e.stopPropagation();csshero_shutdown_chiodi();}).on('mousemove','.inchiodato .csshero-editor-wrap',function(){csshero_shutdown_chiodi();}).on('mousemove','.inchiodato #csshero-focus-view:empty',function(){csshero_shutdown_chiodi();}).on('mousemove','.inchiodato .csshero-super-top-bar',function(){csshero_shutdown_chiodi();}).on('keyup','.chiodo b',function(e){var value=$(this).text();if(e.keyCode==13){e.preventDefault();body.addClass('edited-by-chiodo')
var el=$('.currently-clicked',hero_frame)
var sel=$('.csshero-code-wrap').attr('data-editing_element')
var pos=$(this).closest('.chiodo').attr('data-side')
var pro=$(this).closest('.con').is('.mar')?'margin':'padding';var the_prop=pro+'-'+pos;var prb=$('.current-probe');if(el.css('display')=='inline'){el.css('display','inline-block')
var needs_display=true;}else{var needs_display=false;}
var val=$(this).text();var val=val==parseInt(val)?val+'px':val;var w_t=$(window.frames['csshero-iframe-main-page'].document).scrollTop();var w_l=$(window.frames['csshero-iframe-main-page'].document).scrollLeft();el.css(the_prop,val)
prb.css({'height':el.outerHeight(),'top':el.offset().top-w_t,'left':el.offset().left-w_l,'width':el.outerWidth()})
if(needs_display)set_element_prop('display','inline-block');set_element_prop(the_prop,val)
body.trigger('end_chiodi')
$('.chiodo').remove();$('.chiodo-back').remove();$('.chiodo-in').remove();$('.chiodo-mask').remove();csshero_prepara_chiodi(el)}}).on('keydown','.chiodo b',function(e){if(e.keyCode==13){e.preventDefault();}});$(document).on('end_chiodi',body,function(){setTimeout(function(){hero_store_history_step()},300)})
var tips={'.hero-reset-props':{desc:'Reset all element properties',orient:'n'},'.hero-make-class':{desc:'Store edits as Snippet',orient:'n'},'#hero-mqs > span':{desc:'',orient:'s'},'.hero-review-props':{desc:'Review edited props',orient:'s'},'.hero-rfs':{desc:'<h4>Use responsive scalable font size</h4><p>RFS (simply the abbreviation for Responsive Font Size) is a font size engine which automatically calculates the appropriate font size based on the dimensions of the browser viewport.</p>',orient:'e'},'.hero-detach-editor':{desc:'Detach Editor',orient:'s'},'.hero-rc span':{desc:'Elements on this page',orient:'n'}}
$(window).on('frameready update_tips',function(){for(var t in tips){$(t).attr('data-tip',tips[t].desc).attr('data-tip-orient',tips[t].orient)}})
$(document).on('mouseenter mousemove','[data-tip]',function(){var el=$(this);var tip=el.attr('data-tip')
var ori=el.attr('data-tip-orient')
$('.hero-tip').remove();var posL=el.offset().left+el.outerWidth()/2
var posT=el.offset().top;if(ori.indexOf('s')>-1)posT='top:'+(posT+el.outerHeight()+2)+'px';if(ori.indexOf('n')>-1)posT='bottom:'+($(window).outerHeight()-posT+5)+'px'
if(ori.indexOf('e')>-1){posT='top:'+(posT+el.outerHeight()/2)+'px';posL+=el.outerWidth()/2+2;posL='left:'+posL+'px;margin-left:0;margin-top:-10px;'}else{posL='left:'+posL+'px;';}
if(ori=='ne'){posT='bottom:'+($(window).outerHeight()-el.offset().top)+'px';posL='left:'+el.offset().left+'px;'}
if(el.is('#hero-mqs *'))tip=el.attr('data-mq')
var dest=el.is('#hero-full-overlay *')?$('#hero-full-overlay'):body;dest.append('<div data-ori="'+ori+'" class="hero-tip" style="'+posT+';'+posL+'"><div class="hero-tip-inner">'+tip+'</div></div>')}).on('mouseleave','[data-tip]',function(){$('.hero-tip').remove();})
var animation_settings={'data-aos':['fade','fade-up','fade-down','fade-left','fade-right','fade-up-right','fade-up-left','fade-down-right','fade-down-left','flip-up','flip-down','flip-left','flip-right','slide-up','slide-down','slide-left','slide-right','zoom-in','zoom-in-up','zoom-in-down','zoom-in-left','zoom-in-right','zoom-out','zoom-out-up','zoom-out-down','zoom-out-left','zoom-out-right'],'data-aos-easing':['linear','ease','ease-in','ease-out','ease-in-out','ease-in-back','ease-out-back','ease-in-out-back','ease-in-sine','ease-out-sine','ease-in-out-sine','ease-in-quad','ease-out-quad','ease-in-out-quad','ease-in-cubic','ease-out-cubic','ease-in-out-cubic','ease-in-quart','ease-out-quart','ease-in-out-quart'],'data-aos-offset':[-400,-300,-200,-100,-50,0,50,100,200,300,400],'data-aos-delay':[0,50,100,150,200,250,300,350,400,450,500,600,700,800,900,1000,1500,2000,3000],'data-aos-duration':[0,200,500,1000,1500,2000,2500,3000,3500,4000,4500,5000],'data-aos-once':['true','false'],}
$(window).on('frameready',function(){if('undefined'==typeof window.frames['csshero-iframe-main-page'].csshero_initialize_animations)return;window.frames['csshero-iframe-main-page'].csshero_initialize_animations(hero_animations);})
$(document).on('click','.wysi-inner-tab[data-tab="animations"].hid .wysi-tab-title',function(){csshero_load_animations()})
function csshero_load_animations(){var curel=current_el();var animator=$('.wysi-inner-tab[data-tab="animations"] .wysi-child').empty()
var animator_contents='<div class="hero-animations-wrap">';for(var v in animation_settings){if(hero_animations[curel]&&hero_animations[curel][v]){var label=hero_animations[curel][v];}else{var label='none'}
var nice_label=v.replace('data-aos-','')
if(nice_label=='data-aos')var nice_label='on reveal effect';animator_contents+='<div class="curanim-wrap" data-label="'+label+'" data-attribute="'+v+'"><b>'+nice_label+'</b><div class="hero-val-wrap"><div class="hero-val-inner"><input value="'+label+'" type="text" spellcheck="false" class="hero-val"></div><div class="hero-dropdown-wrap"><span></span><ul class="scroller hero-ddown">';if(v!='data-aos-once')animator_contents+='<li data-val="none">none</li>';for(var q in animation_settings[v]){animator_contents+='<li data-val="'+animation_settings[v][q]+'">'+animation_settings[v][q]+'</li>'}
animator_contents+='</ul></div></div></div>'}
var previous_animations='<div class="previous-animations">';for(var v in hero_animations){if(curel==v){var cur='cur'}else{var cur='';}
var aniel='<div data-ani="'+v+'" class="csshero-load-animation '+cur+'">'+v+'<span class="del"></span></div>';previous_animations+=aniel;}
animator_contents+='</div>';animator.append(animator_contents)
animator.prepend('<div class="hero-description">Easily apply on scroll animations to the currently selected element. Animations are triggered when the user scrolls the page and the current element reaches the viewport.</div>');animator.append(previous_animations)
hero_setup_scrollers();}
function csshero_apply_animation(el,animations_obj){var elis=$(el,hero_frame);if(animations_obj&&animations_obj['data-aos']){for(var v in animations_obj){elis.attr(v,animations_obj[v])}
hero_animations[el]=animations_obj;}else{delete hero_animations[el]
for(var q in animation_settings){elis.removeAttr(q)}}
csshero_load_animations()
document.getElementById('csshero-iframe-main-page').contentWindow.AOS.refreshHard();}
$(document).on('click','.curanim-wrap li[data-val]',function(){var value=$(this).attr('data-val')
var wrap=$(this).closest('.curanim-wrap');var curel=current_el();var wraps=$('.curanim-wrap')
wrap.attr('data-label',value);var compiler={}
wraps.each(function(){var prop=$(this).attr('data-attribute')
var val=$(this).attr('data-label');if(val&&val!='none'){compiler[prop]=val;csshero_event_logger('animations','applies_animation')}})
hero_animations[curel]=compiler;csshero_apply_animation(curel,compiler)
hero_store_history_step()})
function return_spectrum_options(startcolor,customclass,t){if(!customclass)customclass='no-class'
var prop=t.closest('.hero-prop').attr('data-prop')
var opz={color:startcolor,preferredFormat:'rgb',showAlpha:true,showInput:true,allowEmpty:false,showInitial:true,containerClassName:customclass,showPalette:true,selectionPalette:["rgba(0,0,0,0)"],palette:[['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#16a085','#27ae60','#2980b9','#8e44ad','#2c3e50','#f1c40f','#e67e22','#e74c3c','#ecf0f1','#95a5a6','#f39c12','#d35400','#c0392b','#bdc3c7','#7f8c8d'],['#f44336','#E91E63','#9C27B0','#673AB7','#3F51B5','#2196F3','#03A9F4','#00BCD4','#009688','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722','#795548','#9E9E9E','#607D8B','#263238'],],show:function(){$('body',hero_frame).append('<style id="hero-temp-styler"></style>')
body.append('<div class="hero-picker-mask"></div>')},move:function(color){color=color.toRgbString();if(t.is('.hero-val-wrap *'))$('#hero-temp-styler',hero_frame)[0].textContent=current_el()+'{'+prop+':'+color+'!important;}';},hide:function(){$('.hero-picker-mask').remove();$('.hero-picker.cur').removeClass('cur')},change:function(color){color=color.toRgbString();if(t.is('.csshero-shadow-builder *')){t.closest('.sha-node').attr('data-sha-val',color)
t.css('background',color)
t.closest('.csshero-shadow-builder').trigger('updatesha')}
if(t.is('.gradient-picker-inner')){hero_send_color_to_gradient_builder(color)}
if(t.is('.hero-val-wrap *')){hero_update_widget($('.hero-picker.cur').closest('.hero-prop'),color,true)
var input=$('.hero-picker.cur').closest('.hero-val-wrap').find('.hero-val')
input.trigger('picker_keyup')}
if(t.is('.snippet-params *')){$('.hero-picker.cur').closest('.snippet-par').find('input').val(color).trigger('keyup')}}}
return opz;}
function initialize_pickers(el){}
$(document).on('mouseup','.hero-picker',function(){setTimeout(function(){var cp=$('.codemirror-colorpicker');cp.append('<div class="hero-picker-footer"><span class="close-picker-dialog">Cancel</span><span class="submit-picker-dialog">OK</span></div>');},100)}).on('click','.hero-picker-footer > span',function(){if($(this).is('.submit-picker-dialog')){$('.hero-picker-mask').trigger('mouseup')}else{$('#hero-temp-styler',hero_frame).remove();}
$('.codemirror-colorpicker').remove();$('.hero-picker-mask').remove();}).on('click','.hero-picker',function(){var t=$(this)
var prop=t.closest('.hero-prop').attr('data-prop')
var bg=t.css('background-color')
var ColorPicker=CodeMirrorColorPicker.ColorPicker;var color=(bg=='transparent'||bg=='rgba(0, 0, 0, 0)')?'white':bg;$('body',hero_frame).append('<style id="hero-temp-styler"></style>')
body.append('<div class="hero-picker-mask"></div>')
var page_colors=getAllColors($('body,body *',hero_frame))
var colorpicker=new ColorPicker({colorSets:[{name:'Site Colors',colors:page_colors},{name:'Flat',colors:['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#16a085','#27ae60','#2980b9','#8e44ad','#2c3e50','#f1c40f','#e67e22','#e74c3c','#ecf0f1','#95a5a6','#f39c12','#d35400','#c0392b','#bdc3c7','#7f8c8d']},{name:'Material',colors:['#f44336','#E91E63','#9C27B0','#673AB7','#3F51B5','#2196F3','#03A9F4','#00BCD4','#009688','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722','#795548','#9E9E9E','#607D8B','#263238']},]})
var to=t.offset().top+t.outerHeight()+10;var le=t.offset().left+t.outerWidth()+10;if(le>($(window).outerWidth()-300))le=le-300;colorpicker.show({left:le,top:to,hideDelay:999999},color,function(color){t.attr('color-reference',color)
if(t.is('.hero-val-wrap *'))$('#hero-temp-styler',hero_frame)[0].textContent=current_el()+'{'+prop+':'+color+'!important;}';})}).on('mouseup','.hero-picker-mask',function(e){var t=$('.hero-picker[color-reference]');var color=t.attr('color-reference');if(t.is('.csshero-shadow-builder *')){t.closest('.sha-node').attr('data-sha-val',color)
t.css('background',color)
t.closest('.csshero-shadow-builder').trigger('updatesha')}
if(t.is('.gradient-picker-inner')){hero_send_color_to_gradient_builder(color)}
if(t.is('.hero-val-wrap *')){hero_update_widget($('.hero-picker.cur').closest('.hero-prop'),color,true)
var input=$('.hero-picker.cur').closest('.hero-val-wrap').find('.hero-val')
input.trigger('picker_keyup')}
if(t.is('.snippet-params *')){$('.hero-picker.cur').closest('.snippet-par').find('input').val(color).trigger('keyup')}
if(t.is('#project-vars *')){$('.hero-picker.cur').closest('.hero-var').find('.v input').val(color).trigger('remote_keyup')}
t.removeAttr('color-reference')
$(this).remove();$('.hero-picker.cur').removeClass('cur')})
var unsplash_app_id='205797f685f288d58f13cfe0755e011d48ff7ac4e39f72366223c80f1f97b858';function load_unsplash_images(container,page,navigate){var query=$('.csshero-unsplash-search input').val();var filter=$('.csshero-unsplash-sorter .cur').text()
var how_many=6;if(!page)var page=1;container.empty();var api='https://api.unsplash.com/photos';var url=api+'/?client_id='+unsplash_app_id+'&per_page='+how_many+'&page='+page+'&order_by='+filter;if(query!==''){var api='https://api.unsplash.com/search/photos';var url=api+'/?client_id='+unsplash_app_id+'&per_page='+how_many+'&query='+query+'&page='+page+'&order_by='+filter;}
$.getJSON(url,function(data){if(query!==''){data=data.results;}
for(var elem in data){var img=data[elem];var id=img['id'];var color_item=img['color'];var color_item='<span data-id="'+id+'" data-color="'+color_item+'" class="csshero-unsplash-img-color" style="background-color:'+color_item+';"></span>';var username=img['user']['username'];var username='<a target="_blank" href="//unsplash.com/@'+username+'?utm_source=css-hero&utm_medium=referral&utm_campaign=api-credit" class="username">@'+username+'</a>';var thumb=img['urls']['thumb']
var chooser='<div class="unsplash-chooser"><b>Choose size</b>';for(var s in img['urls']){var l=s;if(s=='raw')var l='Extra-large'
if(s=='full')var l='Large';if(s=='regular')var l='Medium';if(s=='thumb')var l='Extra-small';if(s=='small')var l='Small';chooser+='<span data-ping="'+img['links']['download_location']+'" data-link="'+img['urls'][s]+'">'+l+'</span>'}
chooser+='</div>';var chooser='<span class="unsplash-zoom" data-img-id="'+id+'" data-preview="'+img['urls']['small']+'">'+chooser+'</span>';container.append('<div class="csshero-unsplash-img" style="background-image:url('+thumb+');">'+chooser+username+color_item+'</div>')}}).done(function(){container.show();if(navigate){if(navigate=='next'){var img_trigger=container.find('.csshero-unsplash-img').eq(0);}else{var img_trigger=container.find('.csshero-unsplash-img').length;var img_trigger=container.find('.csshero-unsplash-img').eq(img_trigger-1);}
img_trigger.find('.unsplash-zoom').trigger('click')}})}
$(document).on('click','.unsplash-zoom',function(){var wrap=$('.csshero-unsplash-wrapper');var img_wrap=$(this).closest('.csshero-unsplash-img');var img=$(this).attr('data-preview');var actions=$(this).html();var actions=actions+'<span class="unsplash-apply-img">Apply Image</span>';$('.csshero-unsplash-img.zoomed').removeClass('zoomed');img_wrap.addClass('zoomed');$('.csshero-unsplash-zoom-img').remove();wrap.addClass('hide-img')
var structure='\<div class="csshero-unsplash-zoom-img">\
      <div class="unsplash-zoom-close ico"></div>\
      <div class="unsplash-zoom-in">\
       <div class="unsplash-zoom-nav zoom-next"></div>\
       <div class="unsplash-zoom-nav zoom-prev"></div>\
       <div class="unsplash-zoom-img" style="background-image:url('+img+');">\
      </div>\
      <div class="unsplash-zoom-actions">'+actions+'</div>\
      </div>\
     </div>\
 \
 ';wrap.append(structure);}).on('click','.unsplash-apply-img',function(){$('.unsplash-zoom-actions').toggleClass('show-sizes')}).on('click','.unsplash-zoom-close',function(){$('.csshero-unsplash-zoom-img').remove();$('.csshero-unsplash-wrapper').removeClass('hide-img')}).on('click','.unsplash-zoom-nav',function(){var loader=$('.csshero-unsplash-loader');if($(this).is('.zoom-next')){var destiny=$('.csshero-unsplash-img.zoomed').next('.csshero-unsplash-img');var page=parseInt(loader.attr('data-page'))+1;var nav_trigger='next';}else{var destiny=$('.csshero-unsplash-img.zoomed').prev('.csshero-unsplash-img');var page=parseInt(loader.attr('data-page'))-1;var nav_trigger='prev';}
if(destiny.length>0){destiny.find('.unsplash-zoom').trigger('click')}else{if(page<1&&nav_trigger=='prev')return;loader.attr('data-page',page)
load_unsplash_images(loader,page,nav_trigger);}}).on('click','.unsplash-title [data-mode]',function(e){$('.unsplash-title [data-mode]').toggleClass('cur')
$('.hero-img-mode-wrap').toggleClass('open-tab')
var d=$('.hero-img-mode-wrap[data-mode="local"]').empty()
if($('.unsplash-title [data-mode="local"]').is('.cur')){var form=$('.csshero-upload-img-form')[0].outerHTML;d.prepend(form)
csshero_load_images(d,0);}}).on('click','.hero-local-images-nav > span',function(){var p=$(this).attr('data-page')
csshero_load_images($('.hero-img-mode-wrap[data-mode="local"]'),p);}).on('click','.csshero-upload-img-form input[name="submit"]',function(e){e.preventDefault();var file=$('.hero-img-mode-wrap input[type="file"]').prop('files')[0]
if(!file)return;var fd=new FormData();var nonce=$("#csshero_saving_nonce_field").val();fd.append("action",'csshero_upload_image');fd.append("csshero_saving_nonce_field",nonce)
fd.append('newpicture',file)
$.post({url:hero_ajax_url,csshero_saving_nonce_field:nonce,data:fd,processData:false,contentType:false,dataType:'text',},function(response){csshero_load_images($('.hero-img-mode-wrap[data-mode="local"]'),0);$('.hero-img-mode-wrap input[type="file"]').val('')});}).on('click','.csshero-media-img',function(){var url=$(this).attr('data-url')
var hy=JSON.parse($(this).attr('data-available-sizes'));if(hy&&hy.large)url=hy.large;var prop=$(this).closest('.hero-prop').attr('data-prop')
set_element_prop(prop,'url("'+url+'")',true)
hero_store_history_step()})
$(document).on('click','.hero-make-img',function(){var widget=$(this).closest('.hero-prop');var loader=$('.csshero-unsplash-loader');$('.csshero-unsplash-wrapper').removeClass('hide-img')
if(!widget.hasClass('show-img-loader')){widget.addClass('show-img-loader')
load_unsplash_images(loader);$('.csshero-unsplash-zoom-img').remove();}else{widget.removeClass('show-img-loader')}}).on('click','.csshero-unsplash-src',function(){load_unsplash_images($('.csshero-unsplash-loader'));}).on('click','.unsplash-chooser > span',function(){$('.unsplash-zoom-actions').removeClass('show-sizes')
var is_important='';if($(this).closest('.hero-prop').hasClass('is_imp')){var is_important='!important';}
var img=$(this).attr('data-link');var url='url('+img+')'+is_important;set_element_prop('background-image',url,true)
hero_store_history_step()
var ping=$(this).attr('data-ping')
var url=ping+'/?client_id='+unsplash_app_id;$.ajax({url:url,success:function(data){}});}).on('click','.csshero-unsplash-pagination > span',function(){var loader=$('.csshero-unsplash-loader');var current_page=parseInt(loader.attr('data-page'));if($(this).is('.prev')){var next_page=current_page-1;}else{var next_page=current_page+1;}
if(next_page<=1)var next_page=1;loader.attr('data-page',next_page);load_unsplash_images(loader,next_page);}).on('keyup','.csshero-unsplash-search input',function(e){if($(this).val()==''||e.keyCode==13)load_unsplash_images($('.csshero-unsplash-loader'));}).on('click','.csshero-unsplash-sorter > span',function(){$('.csshero-unsplash-sorter span.cur').removeClass('cur');$(this).addClass('cur')
load_unsplash_images($('.csshero-unsplash-loader'));}).on('click','.csshero-unsplash-img-color',function(){var name=$(this).attr('data-id')
var name="@color-"+name;var v=$(this).attr('data-color')
if(confirm('Do you want me to create a color variable with this color('+v+')?')){if(csshero_variables[name]){alert('variable '+name+' is already defined');}else{csshero_variables[name]={var_prop:v,var_type:"color_var"}
csshero_save_step('variable','',name,v)
csshero_prepare_variables(csshero_variables)}}})
$(document).on('click','.open-snapshot-save',function(){var cnt='<div class="hero-save-snapshot-panel">\
     <p>You can use CheckPoints to store a copy of your actual edits status, without publishing it.</p>\
     <div>\
      <input class="snapshot-name" placeholder="CheckPoint Name" />\
      <span class="save-snapshot">Save</span>\
     </div>\
    </div>';hero_open_global_overlay('Save CheckPoint',cnt)}).on('keyup','.snapshot-name',function(e){if(13==e.keyCode)$('.save-snapshot').trigger('click')}).on('click','.save-snapshot',function(){if(body.is('.inspector-on'))hero_store_history_step();var dgt=$('#hero-history .hero-step.cur pre').text();var snapshot_name=$('.snapshot-name').val();snapshot_name=snapshot_name.replace(/ /g,'_').replace(/\W/g,'')
if(!snapshot_name||snapshot_name==''){alert('Please provide a snapshot name')
return;}
if(snapshot_name&&snapshot_name!=''&&snapshot_name!=' '){jQuery.post(csshero_admin_ajax_url,{'action':'csshero_save_preset','csshero-livearray-saving-field':dgt,'csshero_preset_name':snapshot_name,'csshero_saving_nonce_field':$("#csshero_saving_nonce_field").val(),},function(response){if(response!=="Saved"){alert(response);}else{$('.full-overlay-contents .close-full').trigger('click');hero_load_snapshots()}});}
csshero_event_logger('snapshot','saves_snapshot')}).on('click','.hero-delete-snapshot',function(e){e.stopPropagation();if(confirm('Do you want to permanently delete this Snapshot?')){var base_url=hero_base_url;var step=$(this).closest('.csshero-snapshot');var id=step.attr('data-csshero-step-id')
$.ajax({url:base_url+'?csshero_action=delete_snapshot&step_id='+id,success:function(data){step.fadeOut(300,function(){$(this).remove();})}});}});function hero_load_snapshots(){var base_url=hero_base_url;var snapshots_url=base_url+'?csshero_action=list_saved_snapshots&snapshot_type=preset';var stepper=$('#hero-snapshots').empty();$.ajax({url:snapshots_url,success:function(data){if(data){var steps=$(data).find('.hero-step').clone().addClass('csshero-snapshot').append('<span class="hero-delete-snapshot ico"></span>')
stepper.append(steps)}}});}
var mirror,inspector_mirror,core,hero_frame,wysi,code_editor,editor,body,csshero_custom_carrier,framewrap,choices,hero_root,bottom_bar,selector_bar,hero_built_in_libs,hell_checker,hero_site_colors,hero_animations,cssheroframe,hero_base_url,hero_ajax_url,custom_gfonts;var hero_edited_els=[];var live_paths={}
var configuration_paths={};var req_libs={};var hero_edited_els_arr={}
var load_timer=0;$(window).on('hashchange',function(){if(is_debug()){$('#hero-core').addClass('visi')}else{$('#hero-core').removeClass('visi')}})
$(document).ready(function(){hero_ajax_url='';var hjr=csshero_admin_ajax_url.split('//');for(var i in hjr){if(i!=0)hero_ajax_url+='//'+hjr[i]}
hero_base_url='';var hpr=$('#csshero-body').attr('data-site-base-url').split('//');for(var h in hpr){if(h!=0)hero_base_url+='//'+hpr[h]}
var check_interval=setInterval(time_checker,100);function time_checker(){load_timer+=1;if($('body').hasClass('hero-loaded')||load_timer==600){stop_check_interval()}}
function stop_check_interval(){clearInterval(check_interval);if(!$('body').hasClass('hero-loaded')){if(confirm('Something went wrong, try reloading the page?')){location.reload(true);}}}
selector_bar=$('#hero-selectors');hero_root=$('body').attr('data-plugin-root');if(hero_root.indexOf('//')>-1){hero_root=hero_root.split('//')
var zoot=''
for(var r in hero_root){if(r!=0)zoot+='//'+hero_root[r]}
hero_root=zoot;}
initialize_hero();$('iframe').on('load',function(){initialize_onload();$(this).contents().scroll(function(){$('.focus-probe').remove();if(!$('#add-selector-box').is('.closed'))$('#add-selector-box > input').trigger('keyup')});mirror.on('change',hero_throttle(function(e){if(mirror.state.focused){var val=grab_between(e.getValue(),'{','}');core.find('span.hero-inner:not(:has(.hero-inner))').html('\n'+val+'\n');apply_style()}},500))
mirror.on('change',hero_throttle(function(e){if(mirror.state.focused){hero_prepare_wysiwyg(core.find('span.hero-inner:not(:has(.hero-inner))').text())
hero_store_history_step()}},1500))
inspector_mirror.on('change',hero_throttle(function(e){core.html(e.getValue())
apply_style()
get_global_vars()},500))
var url=window.location.href;var split_url=url.split('?');var hero_param='?'+split_url[1];var src=$('#csshero-iframe-main-page').attr('src');if(url.indexOf('&rocket=true')>-1||url.indexOf('&local=true')>-1){generate_editables();}else{if(src.indexOf('csshero_style_wp_login_page=1')>-1){generate_editables(true);csshero_config_login_els();}else{hero_load_this_config().done(function(){generate_editables();});}}
$(window).trigger('made_editables')
var frame_url=window.frames['csshero-iframe-main-page'].location.href;if(frame_url.indexOf('?rand')==-1){history.replaceState('','CSS Hero',frame_url+hero_param);}
$('body',hero_frame).append('<style>*{user-select:none!important;}</style>')
$('#csshero-main-stylesheet-css',hero_frame).remove();$(window).trigger('frameready')});}).on('click','#hero-mqs span',function(){hero_load_mq_view($(this).attr('data-mq'),true);}).on('mousedown','#hero-editor:not(.inspi) .inspector-trigger',function(){body.addClass('inspector-on');hero_set_layout_prefs()
remove_unused_gfonts()
clean_empty_rules()
var tt=core.text();$('#hero-mqs > span:not(.cur)').each(function(){var m=$(this).attr('data-mq')
if(tt.indexOf(m+'{}')>-1)tt=tt.replace(m+'{}','')})
set_mirror_value(inspector_mirror,tt)
hero_refresh_mirrors();if(current_el())hero_hilight_in_inspector(current_el(),true)
$('.extra-mask').trigger('click')}).on('mousedown','.inspector-on .csshero-logo',function(){body.removeClass('inspector-on');var curel=$('#hero-selectors .hero-selector-el').eq(0).attr('data-cla');hero_set_layout_prefs()
hero_store_history_step()
get_global_vars()
setTimeout(function(){hero_get_edited_els()
if(curel){hero_click_wrapper(curel)
hero_refresh_mirrors();}},300)}).on('hilight','.hero-val',function(e){var prop=$(this).closest('.hero-prop').attr('data-prop')
mark_prop_in_core(prop)}).on('keyup picker_keyup','.hero-val',hero_throttle(function(){var val=$(this).val()
var prop=$(this).closest('.hero-prop').attr('data-prop')
if(val){set_element_prop(prop,val,true)
hero_store_history_step()}},300)).on('keyup','.hero-prop .hero-val',hero_throttle(function(){var prop=$(this).closest('.hero-prop').attr('data-prop')
if(!$(this).val()){clear_prop_value(prop)}},800)).on('click','#hero-save',function(){var hero_loader=$('head').find('script[src^="https://p.csshero.org/production-v4/heroes-loader-v4.php"]').attr('src');if(hero_loader&&hero_loader.indexOf('css-hero-demo')>-1){alert('Saving is disabled in demo mode');return;}
var t=$(this)
if(t.is('.err')){alert('ERROR, NO SAVE')}else{t.addClass('saving')
remove_unused_gfonts()
clean_empty_rules()
var q=hero_generate_to_be_stored_data();var the_saved_obj=q.obj;var the_style=q.css;$.post(hero_ajax_url,{'action':'csshero_save_state','csshero-livearray-saving-field':JSON.stringify(the_saved_obj),'csshero-css-saving-field':the_style,'csshero_saving_nonce_field':$("#csshero_saving_nonce_field").val(),},function(response){$('#hero-history .hero-step.cur').addClass('saved')
update_history_btns();t.removeClass('saving').addClass('has-saved')
setTimeout(function(){t.removeClass('has-saved')},1000)
if(response!=="Saved"){alert(response);}else{}});if(body.is('inspector-on'))csshero_event_logger('insp','saves_while_inspector')}}).on('click','#hero-cancel',function(){$('#hero-history .hero-step.saved').eq(0).trigger('click')}).on('click','.hero-reset',function(){if(confirm('Do you really want to reset all theme edits?')){core.html('')
set_mirror_value(inspector_mirror,core.text())
apply_style()
hero_store_history_step()
hero_animations={};custom_gfonts=[];hero_edited_els=[];window.frames['csshero-iframe-main-page'].csshero_initialize_animations(hero_animations);csshero_load_animations();setTimeout(function(){hero_click_wrapper(current_el())},300)}}).on('click','.hero-prop-actions span',function(){var t=$(this);var input=t.closest('.hero-prop').find('.hero-val')
var prop=t.closest('.hero-prop').attr('data-prop')
var curr=input.val();if(t.is('.i-imp')){if(curr.indexOf('!important')>-1){var n_val=curr.replace('!important','')
t.closest('.hero-prop').removeClass('is_imp')}else{var n_val=curr+'!important';t.closest('.hero-prop').addClass('is_imp')}
set_element_prop(prop,n_val,true)
hero_store_history_step()}
if(t.is('.i-res')){var prop=$(this).closest('.hero-prop').attr('data-prop')
if(t.is('.d_only *'))t.closest('.hero-prop-actions').find('.i-des').trigger('triggered_click')
clear_prop_value(prop)
hero_store_history_step()}}).on('input change mousedown','.hero-slider-wrap input',function(e){if($(this).is('.rfs-wid *')){if(e.type=='change'){remove_snippet('.rfs')
set_element_prop('.rfs('+$(this).val()+')','',true)
$(this).closest('.hero-prop').find('.hero-val').val($(this).val())}
return;}
if($(this).is('.hero-filter-wrap *')){var fils=[];$('.hero-filter-wrap input[type="range"]').each(function(){var val=$(this).val();if(val&&val>0){var fil_type=$(this).attr('data-filter');var unit=$(this).attr('data-unit')
if(!unit)val=val/100;fils.push(fil_type+'('+val+unit+')')}})
var filj=fils.join(' ');if(e.type=='mousedown'){$('#hero-temp-styler',hero_frame).remove();$('body',hero_frame).append('<style id="hero-temp-styler"></style>')}
if(e.type=='input'){$('#hero-temp-styler',hero_frame)[0].textContent=current_el()+'{filter:'+filj+'!important;}';$(this).closest('.hero-prop').find('.hero-val').val(filj)}
if(e.type=='change'){if(fils.length==0){clear_prop_value('filter')}else{set_element_prop('filter',filj,true)}}
hero_store_history_step();return;}
hero_set_border_to_default_solid($(this));var prop=$(this).closest('.hero-prop').find('.hero-val').attr('data-prop')
if(prop=='opacity'){var val=parseInt($(this).val())/10;val=val.toString();}else{var val=$(this).val()+get_input_unit($(this).closest('.hero-prop').find('.hero-val'))}
if(e.type=='mousedown'){$('body',hero_frame).append('<style id="hero-temp-styler"></style>')}
if(e.type=='input'){$('#hero-temp-styler',hero_frame)[0].textContent=current_el()+'{'+prop+':'+val+'!important;}';$(this).closest('.hero-prop').find('.hero-val').val(val)}
if(e.type=='change'){set_element_prop(prop,val,true);hero_store_history_step();}}).on('click','.hero-numeric span',function(){var input=$(this).closest('.hero-val-wrap').find('.hero-val');var val=input.val();var unit=get_input_unit(input)
val=parseInt(val)
var prop=$(this).closest('.hero-prop').find('.hero-val').attr('data-prop')
var n_val=$(this).is('.plus')?val+1:val-1;hero_set_border_to_default_solid($(this))
if($(this).closest('.hero-prop').is('.rfs-wid')){remove_snippet('.rfs')
set_element_prop('.rfs('+n_val+')','',true)
$(this).closest('.hero-prop').find('.hero-val').val(n_val)
return;}
set_element_prop(prop,n_val+unit,true)
hero_store_history_step();}).on('click','.hero-btn',function(){var val=$(this).attr('data-val')
var prop=$(this).closest('.hero-prop').attr('data-prop')
if($(this).is('.cur')){clear_prop_value(prop)}else{set_element_prop(prop,val,true)}
hero_store_history_step();}).on('click','.hero-make-class',function(){var code=mirror.getValue();code=grab_between(code,'{','}');var save_class_contents='<div class="hero_save_class_wrap"><p>Time to make a new snippet? Please give it a proper name (Ex: mySnippet)</p><input spellcheck="false" id="hero_save_class_name" placeholder=".mySnippet" /><pre id="hero_save_class_contents">'+code+'</pre><p>Do you want me to replace the current element styles with this snippet aswell?</p><div class="dialog-options"><span data-val="yes" class="cur"><label>Yes</label></span><span data-val="no"><label>No</label></span></div><div class="hero-dialog-footer"><span class="btn hero-cancel close-dialog">Cancel</span><span class="hero-save-class">Save</span></div></div>'
hero_open_dialog('Store edits as Snippet',save_class_contents)}).on('click','.dialog-options > span',function(){$('.dialog-options > span.cur').removeClass('cur')
$(this).addClass('cur')}).on('keyup','#hero_save_class_name',function(e){if(e.keyCode==13)$('.hero-save-class').trigger('click')}).on('click','.hero-save-class',function(){var name=$('#hero_save_class_name').val().trim();name=name.replace(/ /g,'_')
if(name[0]!='.')name='.'+name;var contents=$('#hero_save_class_contents').html();if(name.length>0&&contents.length>0&&name[0]=='.'){if(name.indexOf('(')!=name.indexOf(')')){alert('Error in class name')
return;}
if(core.text().indexOf(name+'(')>-1){alert('Class name already in use')
return;}
if($(this).closest('.hero_save_class_wrap').find('.dialog-options span[data-val="yes"]').is('.cur')){core.find('.hero-inner:not(:has(.hero-inner))').text('')}
if(name.indexOf('(')==-1&&name.indexOf(')')==-1)name+='()';set_element_prop(name,false,true,name+'{'+contents+'}')
hero_store_history_step()
$('.close-dialog').trigger('click')
get_global_classes()
csshero_event_logger('snippets','creates_snippet')}else{alert('there might be something wrong')}}).on('click','.hero-reset-props',function(){core.find('.hero-inner:not(:has(.hero-inner))').text('')
hero_store_history_step()
apply_style()
setTimeout(function(){hero_click_wrapper(current_el())},500)}).on('click','.close-dialog',function(){hero_il8();}).on('click','.hero-step',function(){var step=$(this)
if(step&&step.is('.hero-step-type-old')){if(step.is('.cur')){$('#hero-history .hero-step').eq(0).trigger('click')
return;}
var url=step.attr('data-json-load-url')
$.ajax({url:url,success:function(data){hero_load_step(data)
$('.hero-step.cur').removeClass('cur')
step.addClass('cur')
csshero_event_logger('snapshot','loads_snapshot')}});return;}
var lss=step.find('pre').text()
hero_load_step(lss)
$('.hero-step.cur').removeClass('cur')
step.addClass('cur')}).on('click','.oe',function(e){var t=$(this);hero_load_extra(t)}).on('click','.hero-extra',function(e){e.stopPropagation();}).on('click','.hero-search-trigger',function(e){e.stopPropagation();$('.prop-search-wrap').toggleClass('visi')}).on('click','.hero-group-head',function(){$('.srcing').removeClass('srcing')
if($(this).closest('.wysi-child').is('.open-by-search')){$('.wysi-child').removeClass('open-by-search')
$('.hero-group').addClass('closed')
$('.hero-snippet-group').removeClass('open')}
$('.prop-search').val('').trigger('proxy_keyup')
$(this).closest('.hero-group').toggleClass('closed')
$(this).closest('.wysi-child').toggleClass('open')
$('.wysi-inner').toggleClass('has-open')
hero_scrollto($('.wysi-inner'))}).on('click','.hero-pal',function(){var val=$(this).attr('data-val')
if($(this).is('.snippet-params *')){$(this).closest('.snippet-par').find('input').val(val).trigger('keyup')}else{var prop=$(this).closest('.hero-prop').attr('data-prop')
set_element_prop(prop,val,true)
hero_store_history_step()}}).on('hero_mq_view','body',hero_throttle(function(){clean_empty_rules()
hero_click_wrapper(current_el(),true)},100)).on('click','.hero-bottom-bar-nav > span',function(){var sel=$(this).attr('data-sel')
var c=hero_update_selector_bar($(sel,hero_frame));hero_click_wrapper(c[0])}).on('click','.hero-load-vars',function(e){e.stopPropagation();var vl=$(this).find('.var-loader-inner');var val=$(this).closest('.hero-prop').find('.hero-val').val();vl.empty().append(hero_load_variables_panel())
hero_sort_alphabetically(vl,'.hero-var-indexer')
vl.find('.hero-picker').removeClass('hero-picker')
$(this).closest('.hero-prop').find('.var-setter input').attr('data-val',val)
return;var vl=$(this).find('.var-loader-inner');var val=$(this).closest('.hero-prop').find('.hero-val').val();$(this).closest('.hero-prop').find('.var-setter input').attr('data-val',val)
vl.empty();for(var h in hero_global_vars){if(vl.find('.hero-var[data-vname="'+h+'"]').length>0)vl.find('.hero-var[data-vname="'+h+'"]').remove()
var varval=hero_global_vars[h].compiled;if(is_color(varval)){var prev='<span class="hero-var-prev" style="background-color:'+varval+';"></span>'}else{var prev='<span class="hero-var-prev no"></span>';}
vl.append('<div class="hero-var lvar" data-vname="'+h+'"><span class="n">'+h+'</span><span class="v">'+prev+'<label>'+hero_global_vars[h].value+'</label></span></div>')}
hero_sort_alphabetically(vl,'.hero-var')}).on('click','.var-loader-inner .hero-var',function(e){var t=$(this);e.stopPropagation();var wid=t.closest('.hero-prop');var prop=wid.attr('data-prop')
var vv=t.attr('data-var')
if(t.is('.snippet-params *')){t.closest('.snippet-par').find('input').val(vv)
return;}
csshero_event_logger('vars','applies_var')
set_element_prop(prop,vv,true);hero_store_history_step()}).on('click','.var-set',function(){var val=$(this).closest('.var-setter').find('input').attr('data-val').split('!important')[0]
var nam=$(this).closest('.var-setter').find('input').val()
var wid=$(this).closest('.hero-prop');var prop=wid.attr('data-prop')
if(!nam||!val)return;$(this).closest('.var-setter').find('input').val('');if(wid.is('.d_only'))return;if(nam[0]!='@')nam='@'+nam;set_element_prop(prop,nam,true,nam+':'+val+';');hero_store_history_step()
$('.oe.open').trigger('click')
get_global_vars();csshero_event_logger('vars','creates_new_var')}).on('click','.hero-selector-el',function(){var c=$(this).attr('data-cla')
$('.hero-selector-el.cur').removeClass('cur')
$(this).addClass('cur')
hero_click_wrapper(c)}).on('click','#hero-ctx-chooser .hero-option:not(.cur)',function(){var t=$(this)
var c=t.attr('data-context')
var s=t.attr('data-context-desc');hero_click_wrapper(c)}).on('click','.hero-dropdown-wrap > span',function(){var val=$(this).closest('.hero-prop').find('.hero-val').val();if(!val)val=$(this).closest('.curanim-wrap').find('.hero-val').val();var wrap=$(this).closest('.hero-val-wrap')
wrap.toggleClass('show-dd')
if(wrap.is('.show-dd')){wrap.find('.focused-li').removeClass('focused-li')
val=val.replace(/"/g,'')
var el=wrap.find('li[data-val="'+val+'"]');el.addClass('focused-li')
if(el.length>0)hero_scrollto(el,40)}}).on('click','.hero-prop .hero-dropdown-wrap ul li[data-val]',function(){var val=$(this).attr('data-val')
var wid=$(this).closest('.hero-prop');var prop=wid.attr('data-prop')
if($(this).is('.focused-li')){clear_prop_value(prop)
wid.find('.focused-li').removeClass('focused-li')
return;}
wid.find('.hero-val').val(val)
wid.find('.focused-li').removeClass('focused-li')
$(this).addClass('focused-li')
if($(this).is('ul[data-grp="Google Fonts"] *')){var req_val=val.split(' ').join('+')
var req='@gfont'+req_val+'|'}else{var req=false;}
set_element_prop(prop,val,true,req)
hero_store_history_step()
$(this).closest('.show-dd').removeClass('show-dd')}).on('mousedown mouseup','.mode-props',function(e){}).on('mousedown','.hero-snippet .apply-snippet',function(){var sni=$(this).closest('.hero-snippet');var cla=sni.attr('data-cla-name')
if(sni.is('.cur')){remove_snippet(cla.split('(')[0])
sni.removeClass('cur')}else{if(!sni.is('[data-group="custom"] *')&&!sni.is('[data-group="utils"] *')){sni.closest('[data-group]').find('.cur').each(function(){$(this).find('.apply-snippet').trigger('mousedown')})}
if(sni.find('.snippet-params').length>0){var send_cla=cla.split('(')[0]+'('
sni.find('.snippet-params .snipar').each(function(){send_cla+=$(this).val()+',';})
send_cla=send_cla.slice(0,-1)
send_cla+=')'}else{var send_cla=cla;}
set_element_prop(send_cla,'',true,false)
sni.addClass('cur')
csshero_event_logger('snippets','applies_snippet')}
hero_store_history_step()
update_editor_count_labels()}).on('mouseup','.hero-snippet .apply-snippet',function(){hero_store_history_step()})
var PrevTimeLeft=100;$(document).on('mouseenter mouseleave','.hero-snippet:not(.cur) .preview-snippet',function(e){var t=$(this)
var s=t.find('span')
if(e.type=='mouseenter'){var previewTimer=setInterval(function(){PrevTimeLeft-=1;if(t.is(':hover'))s.css('width',90-PrevTimeLeft+'%')
if(PrevTimeLeft<=0){clearInterval(previewTimer);PrevTimeLeft=100;if(t.is(':hover')){var sni=t.closest('.hero-snippet');sni.find('.apply-snippet').trigger('mousedown')
sni.addClass('previewing')}}},5);}else{s.css('width','0')}}).on('mousemove','.hero-snippet',function(){$('.hero-snippet.previewing').find('.apply-snippet').trigger('mousedown')
$('.hero-snippet.previewing').removeClass('previewing')
PrevTimeLeft=100;$('.preview-snippet > span').css('width','0')}).on('click','.hero-snippet-group .hero-group-head',function(){$(this).closest('.hero-snippet-group').toggleClass('open')}).on('keyup','.snippet-params input',function(){$(this).closest('.snippet-par').find('.hero-picker').css('background-color',$(this).val())}).on('mousedown','.hero-picker',function(){$(this).addClass('cur')}).on('mouseenter','.hero-snippet:not(.clok)',function(){initialize_pickers($(this))
$(this).addClass('clok')}).on('mousemove mouseenter','body:not(.inchiodato) #hero-editor , body:not(.inchiodato) #hero-bar',function(){remove_probes();}).on('keyup proxy_keyup','.prop-search',hero_throttle(function(e){var val=$(this).val();var wy=$(this).closest('.wysi-child').removeClass('open-by-search')
$('#hero-wysiwyg .hideable').hide();if(e.type=='keyup')$('.hero-group').addClass('closed')
$('.hero-prop').each(function(){$(this).removeClass('hid')
$('.hero-review-props').removeClass('act')
if(!val||val==''){$('#hero-wysiwyg .hideable').show();return;}
$('.hero-review-props').addClass('act')
if(val=='edited'){if($(this).attr('data-edited')!='edited'){$(this).addClass('hid');}else{wy.addClass('open-by-search')
if($(this).closest('.hero-group').is('.closed')){$(this).closest('.hero-group').removeClass('closed')}}}else{if($(this).attr('data-prop').indexOf(val)==-1){$(this).addClass('hid');}else{wy.addClass('open-by-search')
if($(this).closest('.hero-group').is('.closed')){$(this).closest('.hero-group').removeClass('closed')}}}})},300)).on('click','.hero-review-props',function(){var ino=$('.prop-search');if($(this).is('.act')){ino.val('')
$(this).removeClass('act')}else{ino.val('edited')
$(this).addClass('act')}
ino.trigger('keyup')}).on('click','.hero-border-switch > span:not(.visi)',function(){var show=$(this).attr('data-show')
$('.hero-border-group.visi, .hero-border-switch > span.visi').removeClass('visi')
$('.hero-border-group[data-border-group="'+show+'-group"]').addClass('visi')
$(this).addClass('visi')}).on('click','.hero-detach-editor',function(){$('body').toggleClass('detached-editor')
hero_set_layout_prefs()
if($('body').is('.detached-editor')){$('#hero-editor').draggable({handle:"#hero-head",start:function(){$('#hero-editor').before('<div id="hero-drag-mask"></div>')},stop:function(){$('#hero-drag-mask').remove();},});}else{var w=$('#hero-editor').css('width')
$('#hero-editor').removeAttr('style').css('width',w).draggable('destroy')}
$('#hero-bottom-actions').hide();$('#hero-editor #hero-code-editor').hide();setTimeout(function(){$('#hero-bottom-actions').show()
$('#hero-editor #hero-code-editor').show()},30)}).on('click triggered_click','.hero-prop-actions .i-des',function(e){var t=$(this);var wid=t.closest('.hero-prop')
var val=wid.find('.hero-val').val().split('!important')[0]
wid.removeClass('is_imp')
var prop=wid.attr('data-prop')
if(t.is('.d_only *')){remove_snippet('._d('+prop)
wid.removeClass('d_only')
set_element_prop(prop,val,true)
if(e.type!='triggered_click')hero_store_history_step();}else{wid.addClass('d_only')
clear_prop_value(prop,true)
set_element_prop('._d('+prop+','+val+')',false,true)
hero_store_history_step()}}).on('click','.hero-toggle-code-editor',function(){editor.toggleClass('max-wysiwyg')
if(!editor.hasClass('max-wysiwyg'))hero_refresh_mirrors();hero_set_layout_prefs()}).on('click','.navigate',function(){body.toggleClass('enable-navigation')}).on('mouseenter mousemove click','.tree-selector-wrap',function(e){var c=$(this).attr('data-c');if(e.type=='click'&&$(c,hero_frame).length>0){hero_click_wrapper(c)
hero_update_selector_bar($(c,hero_frame))}else{csshero_zoom_on_element($(c,hero_frame))}}).on('click','.close-service',function(){$('.hero-service.open').removeClass('open')}).on('click','*[data-service]',function(){var service=$(this).attr('data-service')
$('.hero-service.open').removeClass('open')
$('.hero-service[data-s="'+service+'"]').toggleClass('open')
$(this).toggleClass('cur')
if(!$(this).is('.cur'))return;if(service=='tree')hero_load_tree();if(service=='variables')hero_load_variables_panel()
if(service=='snapshots')hero_load_snapshots();}).on('click','.wysi-tab-title',function(){var t=$(this);$('.wysi-inner-tab:not(.hid)').not(t.closest('.wysi-inner-tab')).addClass('hid')
t.closest('.wysi-inner-tab').toggleClass('hid')
if(!t.is('.hid'))hero_scrollto($('.wysi-inner'))
if(t.is('.wysi-inner-tab[data-tab="animations"]:not(.hid) *')){t.closest('.wysi-inner-tab').find('.wysi-child').addClass('open')}}).on('mouseup','.wysi-inner-tab[data-tab="snippets"] h4',function(){var wra=$('.wysi-inner-tab[data-tab="snippets"] .wysi-child')
if(!wra.is('.loaded'))return;get_global_classes()}).on('click','#hero-inspector-bottom-actions span',function(){var mini=false;if($(this).is('.exp-less')){var dest=core;}else{if($(this).is('.exp-mini'))mini=true;var dest=$('.csshero-style-render',hero_frame)}
var str=dest.text()
hero_copy_to_clipboard(str,mini)
alert('Code copied to clipboard, enjoy!')}).on('mouseenter','.hero-bottom-bar-nav > span',function(){var el=$(this).attr('data-sel')
csshero_zoom_on_element($(el,hero_frame));}).on('mouseup','.sp-cancel',function(){$('#hero-temp-styler',hero_frame).remove()}).on('click','.hero-closer',function(){var t=$(this);if(t.is('.hero-extra *')){t.closest('.oe').trigger('click')
return;}
$('.oe.open').trigger('click')}).on('click','.hero-rfs',function(){var wid=$(this).closest('.hero-prop');var inp=wid.find('.hero-val');var val=inp.val();val=parseInt(val)
if(isNaN(val))val=50;wid.toggleClass('rfs-wid')
clear_prop_value('font-size',true)
if(wid.is('.rfs-wid')){set_element_prop('.rfs('+val*2+')','',true)
inp.val(val*2)}else{remove_snippet('.rfs');inp.val(val/2+'px')}}).on('click','.hero-status',function(){$(this).find('label').toggleClass('open')}).on('click','.hero-status [data-status]',function(){hero_click_wrapper($(this).attr('data-status'))
var t=$(this).text().toLowerCase()=='none'?'state':$(this).text();$('.hero-status b').text(t)}).on('click','.mod-snippet',function(){var nm=$(this).closest('.hero-snippet').attr('data-cla-name')
var fake_el=$('<div editableclass="'+nm+'" editablesuggestion="'+nm+'"></div>')
hero_update_selector_bar(fake_el,true);$('.mode-props[data-toggle="wysiwyg"]').trigger('mousedown')
load_editor(nm)
body.addClass('editing_snippet')
$('.wysi-inner-tab[data-tab="properties"] .wysi-tab-title').trigger('click')}).on('click','.inc-dec-fs',function(){var mirrors=$('.CodeMirror, #hero-code-editor-selector');var fs=parseInt(mirrors.css('font-size'))
if($(this).is('.minus')){fs=fs-1}else{fs=fs+1;}
mirrors.css('font-size',fs+'px')
hero_set_layout_prefs()}).on('click','.swap-theme',function(){inspector_mirror.setOption("theme",$(this).attr('data-theme'))
$('.swap-theme.cur').removeClass('cur')
$(this).addClass('cur')
hero_set_layout_prefs();}).on('click','.hero-add-to-inspector',function(){var ediclass=$(this).attr('data-cla');var doc=inspector_mirror.getDoc();var cursor=doc.getCursor();var line=doc.getLine(cursor.line);var pos={line:inspector_mirror.lineCount(),ch:line.length-1}
doc.replaceRange('\n'+ediclass+' {\n \n}',pos);var marked=[]
for(cursor=inspector_mirror.getSearchCursor(ediclass+' {');cursor.findNext();){marked.push(inspector_mirror.markText(cursor.from(),cursor.to()));inspector_mirror.setSelection(cursor.from(),cursor.to());}
hero_il8();}).on('mousedown','.check-for-autoselect',function(){if($('.wants-no-sele .cur').attr('data-val')=='no'){$('.auto-select').addClass('nose')}else{$('.auto-select').removeClass('nose')}
hero_set_layout_prefs()}).on('click','.hero-beautify',function(){$(this).toggleClass('cur')
if($(this).is('.cur')){set_mirror_value(inspector_mirror,core.text())}
hero_set_layout_prefs()}).on('click','.auto-select',function(){$(this).toggleClass('nose')
hero_set_layout_prefs()}).on('click','.show-colors-in-code',function(){body.toggleClass('no-colors-in-code')
hero_set_layout_prefs()}).on('click','.unlogged-tool',function(){var cla=$(this).attr('data-switch-class')
var param=$(this).attr('data-param')
var src=$('#csshero-iframe-main-page').attr('src')
if(src.indexOf(param)>-1){var url=src.replace(param,'')
body.removeClass(cla)
if(cla=='viewing-login-page'){$('#back-to-normal-editing').remove();}}else{var url=src+param;body.addClass(cla)
if(cla=='viewing-login-page'){body.removeClass('loaded')
$('#csshero-inner-frame-wrap').append('<span id="back-to-normal-editing">&larr; Back</span>')}}
$('#csshero-iframe-main-page').attr('src',url)
generate_editables()}).on('click','#back-to-normal-editing',function(e){body.removeClass('loaded')
$('.csshero-style-login-page').trigger('click');}).on('click','.hero-history.act',function(){var t=$(this)
if(t.is('.back')){hero_undo()
return;}
if(t.is('.forth')){hero_redo()
return;}
if(t.is('.load')){return;}}).on('mouseleave','.hero-pro',function(){$('.hero-prop.act').removeClass('act')}).on('mouseenter','.prop-head b:not([data-tip])',function(){var t=$(this)
var prop=t.closest('.hero-prop').attr('data-prop')
var url='https://developer.mozilla.org/en-US/docs/Web/CSS/'+prop+'/';var nico=$('<div></div>')
nico.load(url+" #wikiArticle > p:first-of-type",function(){var text=$(this).text();text=text.replace(prop,'<span>'+prop+'</span>')
t.attr('data-tip',text).attr('data-tip-orient','ne')
if(t.is(':hover'))t.trigger('mousemove')});}).on('keyup','.hero-var .n',hero_throttle(function(e){if(e.keyCode==13){e.preventDefault();var v=$(this).val();var g=$(this).attr('data-original-val')
if(v[0]!='@'||g==v||$('.hero-var[data-var="'+v+'"]').length>0||v.split('@').length>2){alert('Hmm, something wrong')
return;}else{var code=core.text();code=code.replace(/  +/g,' ');var splits=[':',';',',','}','\n',')','+','-','/','*']
for(var i in splits){var s=splits[i];code=code.split(g+' '+s).join(g+s).split(g+s).join(v+' '+s)}
var vv=v.replace('@','')
var gg=g.replace('@','');code=code.split('@{'+gg+'}').join('@{'+vv+'}')
core.text(code)
if(body.is('.inspector-on')){set_mirror_value(inspector_mirror,core.text())}else{hero_click_wrapper(current_el())}
hero_store_history_step()
$(this).attr('data-original-val',v);}}},500)).on('keyup remote_keyup','.hero-var .v input',hero_throttle(function(e){if(e.type=='remote_keyup'||(e.type=='keyup'&&e.keyCode==13)){var q=$(this).closest('.hero-var')
var v=q.find('.n').attr('data-original-val');var val=$(this).val();hero_update_var_value(v,val)}},500)).on('click','.hero-save-new-var',function(){var nam=$(this).closest('.hero-cvar').find('.na').val().trim();var val=$(this).closest('.hero-cvar').find('.va').val().trim();if(!nam||!val)return;if(nam[0]!='@')nam='@'+nam;if(hero_global_vars[nam])return;var t=nam+':'+val+';\n';core.prepend(t)
get_global_vars()
if(body.is('.inspector-on'))set_mirror_value(inspector_mirror,core.text())
csshero_event_logger('vars','creates_new_var')}).on('click','.hero-svar > span, .hero-cancel-new-var',function(){$('.hero-svar , .hero-cvar').toggle();}).on('click','.hero-var .del',function(){var v=$(this).closest('.hero-var').attr('data-var');if(confirm('Do you really want to delete '+v+' variable? I will make sure to replace all '+v+' instances in code with it\'s original value ('+hero_global_vars[v].value+')')){$('.hero-var[data-var-reference="'+v+'"]').each(function(){var _v=$(this).attr('data-var')
hero_update_var_value(_v,'delete')})
hero_update_var_value(v,'delete')
hero_store_history_step()}}).on('click','.hero-var .pal',function(){var v=$(this).closest('.hero-var').find('.n').val();var ori=hero_global_vars[v].value;var pal=hero_return_palettes(v)
var palette=[];for(var p in pal){for(var g in pal[p]){var num=g==0&&p=='text'?'':'-'+g;palette.push(v+'__'+p+num+':'+pal[p][g])}}
hero_update_var_value(v,ori+';\n'+palette.join(';\n'))
hero_store_history_step()
return;if(confirm('Do you want to generate a palette for this color?')){var v=$(this).closest('.hero-var').find('.n').val();var ori=hero_global_vars[v].value;var palette=v+'__p0:lighten(spin('+v+',180),15%);\n'+v+'__p1:lighten(spin('+v+', 180),10%);\n'+v+'__p2:lighten('+v+', 15%);\n'+v+'__p3:lighten('+v+', 25%)'
hero_update_var_value(v,ori+';\n'+palette)}
hero_store_history_step()}).on('click','.hero-back-to-group',function(){if($(this).is('.hero-snippet-group *')){$(this).closest('.hero-snippet-group').find('.hero-group-head').trigger('click')}else{$(this).closest('.hero-group').find('.hero-group-head').trigger('click')}}).on('click','.hero-add-mq',function(){var mqs=''
$('#hero-mqs > span.custom-mq').each(function(){var m=$(this)
var mq=m.attr('data-mq');var _min='';var _max='';if(mq.indexOf('min-width')>-1)_min=mq.split('min-width')[1].split(')')[0].replace(':','');var min='<div><label>Min:</label><input data-s="min-width" value="'+_min+'" /></div>'
if(mq.indexOf('max-width')>-1)_max=mq.split('max-width')[1].split(')')[0].replace(':','');var max='<div><label>Max:</label><input data-s="max-width" class="wm-max" value="'+_max+'" /></div>'
mqs+='<div class="mq-editor" data-mq="'+mq+'"><h4>'+m.attr('data-name')+'</h4><div class="wm">'+min+max+'<span class="hbtn update-mq">Update</span></div></div>';})
if(body.is('.mq-on')){var base_size=$('#csshero-inner-frame-wrap').outerWidth()+1+'px';}else{var base_size='';}
mqs+='<div class="mq-editor new"><h4>Add New Media Query</h4><div class="wm"><div><label>Min:</label><input data-s="min-width" placeholder="Min width (in pixels)" /></div><div><label>Max:</label><input value="'+base_size+'" data-s="max-width" placeholder="Max width (in pixels)" /></div><span class="hbtn add-new-mq">Add</span></div></div>';hero_open_global_overlay('Custom Media Queries',mqs)}).on('click','#hero-full-overlay, #hero-full-overlay .close-full',function(){$('#hero-full-overlay').fadeOut(300,function(){$(this).remove();})}).on('click','#hero-full-overlay .full-overlay-contents',function(e){e.stopPropagation();}).on('keyup','.wm input',function(e){if(e.keyCode==13)$(this).closest('.wm').find('.hbtn').trigger('click')}).on('click','.wm .hbtn',function(){var t=$(this);var mq=t.closest('.mq-editor').attr('data-mq')
var n_mq_a=[]
t.closest('.mq-editor').find('[data-s]').each(function(){if($(this).val()&&$(this).val().trim()!=''){var val=parseInt($(this).val())
val+='px'
n_mq_a.push('('+$(this).attr('data-s')+':'+val+')');}})
if(n_mq_a.length==0)return;var n_mq='@media screen and '+n_mq_a.join(' and ');t.closest('.mq-editor').attr('data-mq',n_mq)
var is_new_mq_ok=false;if(t.is('.add-new-mq')){if($('#hero-mqs span[data-mq="'+n_mq+'"]').length==0){core.html(core.html()+'\n'+n_mq+'{\n\n}')
is_new_mq_ok=true;csshero_event_logger('mq','creates_new_mq')}else{alert('This Media Query is already available')
return;}}else{core.html(core.html().replace(mq,n_mq))}
apply_style()
setTimeout(function(){$('#hero-full-overlay').remove()
$('#hero-bar .hero-add-mq').trigger('click')
if(is_new_mq_ok)$('#hero-mqs span[data-mq="'+n_mq+'"]').trigger('click');hero_store_history_step()},800)}).on('click','.set-to-none',function(){var prop=$(this).closest('.hero-prop').attr('data-prop')
set_element_prop(prop,'none',true)
hero_store_history_step()}).on('click','.wysi-inner-tab h4 .cnt',function(e){var t=$(this);if(!t.closest('.wysi-inner-tab').is('.hid')){e.stopPropagation();}
hero_hilight_edits(t)}).on('click','.icons-browser .icon-el',function(){var i=$(this).attr('data-val')
var ref=$(this).closest('.icons-browser').attr('data-reference');$('.snippet-par[data-par-hook="'+ref+'"] .snipar').val(i)}).on('click','.csshero-quit a',function(e){if(!$('#hero-cancel').is('.no-cancel')){if(!confirm('You may have some unsaved changes, quit CSS Hero?')){e.preventDefault();}}}).on('click','.submit-new-selector',function(){var sel=$(this).closest('.add-selector').find('input').val();if(sel){core.text(core.text()+'\n'+sel+'{}')
hero_click_wrapper(sel)}}).on('keyup','.add-selector input',function(){var val=$(this).val();var cnt=$(this).closest('.add-selector').find('.elcnt')
if(val&&val!=' '&&val!='.'&&val!='#'&&val!=':'){var el=$(val,hero_frame);cnt.html('<b>'+el.length+'</b> on this page')}else{cnt.empty();}}).on('click','.csshero-add-selector-toggle',function(){$('.hero-service.open').removeClass('open')
var t=$(this)
var i=$('#add-selector-box input')
if(t.is('.hero-rc *')){$('#add-selector-box').addClass('multi')
var zeds=$('.hero-rc ul li[data-context]')
$('.hero-add-selector-input-wrap > ul').empty()
zeds.each(function(){var ctx=$(this).attr('data-context');var des=$(this).find('b').text();if(des)des='<b>'+des+'</b> ';if($('.hero-add-selector-input-wrap > ul li[data-ctx="'+ctx+'"]').length==0)$('.hero-add-selector-input-wrap > ul').append('<li data-ctx="'+ctx+'">'+des+'<span>'+ctx+'</span></li>')})
i.val($('.hero-rc .dd-2 li:first-of-type > em').text())
i.trigger('keyup')
$('#add-selector-box').removeClass('closed')}else{i.val('')
$('#add-selector-box').removeClass('multi')
$('#add-selector-box').toggleClass('closed');}
if($('#add-selector-box').is('.closed')){$('.selector-preview-mask').empty();$('.add-selector-count').html('0')}}).on('click','.hero-add-selector-input-wrap > span',function(){$('.hero-add-selector-input-wrap').toggleClass('closed')}).on('click','.hero-add-selector-input-wrap li[data-ctx]',function(){var ctx=$(this).attr('data-ctx')
$('.hero-add-selector-input-wrap input').val(ctx).trigger('keyup')
$('.hero-add-selector-input-wrap').toggleClass('closed')}).on('keyup','#add-selector-box input',function(){var t=$(this).val().trim();var b=$('.add-selector-save')
var msk=$('.selector-preview-mask')
if(t&&$.isValidSelector(t)){b.removeClass('invalid')
var el=$(t,hero_frame);var len=el.length;if(len&&len>0){$('.add-selector-count').html(len)
msk.empty()
el.each(function(){var t=$(this)
var o=t.offset();var o_left=o.left;var o_top=o.top-$(hero_frame).scrollTop();msk.append('<div class="msk-el" style="width:'+t.outerWidth()+'px;height:'+t.outerHeight()+'px;top:'+o_top+'px;left:'+o_left+'px;"></div>')})}else{$('.add-selector-count').html('0')
msk.empty();}}else{b.addClass('invalid')
msk.empty();}
$('.focus-probe').remove();}).on('click','.add-selector-save:not(.invalid)',function(){var prev=core.text();var inp=$('#add-selector-box input');var new_selector=inp.val();core.text(prev+'\n'+new_selector+'{\n\t\n}')
hero_get_edited_els();hero_click_wrapper(new_selector)
inp.val('')
$('.add-selector-count').html('0');hero_update_selector_bar($(new_selector,hero_frame))
$('.selector-preview-mask').empty();}).on('keyup','.hero-prop[data-prop="font-family"] .hero-val',hero_throttle(function(){var v=$(this).val().toLowerCase();var items=$(this).closest('.hero-prop').find('.hero-ddown li[data-val]')
if($(this).closest('.hero-prop').find('.hero-val-wrap').is('.show-dd')){items.each(function(){var t=$(this)
var vv=t.attr('data-val').toLowerCase()
if(vv.indexOf(v)==-1){t.hide();}else{t.show();}})}},500)).on('click','.hero-prop[data-prop="font-family"] .hero-dropdown-wrap > span',function(){var els=$(this).closest('.hero-prop').find('.hero-ddown li[data-val]');els.show();}).on('mouseenter mouseleave','.hero-prop[data-prop="background-image"] .hero-ddown li[data-val]',function(e){var v=$(this).attr('data-val');if(e.type=='mouseenter'){$(this).css('background-image',v)}else{$(this).removeAttr('style')}})
$(window).on('made_editables',function(){return;var src=$('#csshero-iframe-main-page').attr('src');if(src.indexOf('csshero_style_wp_login_page=1')==-1)hero_get_edited_els()
hero_click_wrapper(current_el())}).bind('beforeunload',function(){if(window.location.hash=='#debug'||window.location.hash=='#dev')return;if(!$('.hero-step.cur').is('.saved')){return'Are you sure you want to leave?';}})
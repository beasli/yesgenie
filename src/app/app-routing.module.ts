import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
    
  { path: 'intro', loadChildren: './yesgenie/Pages/intro/intro.module#IntroPageModule' },
 
  // For Becrux Sidemenu Paths
  { path: 'bs-about-us', loadChildren: './yesgenie/Pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'bs-add-review', loadChildren: './yesgenie/Pages/add-review/add-review.module#AddReviewPageModule' },
  { path: 'bs-cart', loadChildren: './yesgenie/Pages/cart/cart.module#CartPageModule' },
  { path: 'bs-contact-us', loadChildren: './yesgenie/Pages/contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'bs-currency-list', loadChildren: './yesgenie/Pages/currency-list/currency-list.module#CurrencyListPageModule' },
  { path: 'bs-downloads', loadChildren: './yesgenie/Pages/downloads/downloads.module#DownloadsPageModule' },
  { path: 'bs-forgot-password', loadChildren: './yesgenie/Pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'bs-intro', loadChildren: './yesgenie/Pages/intro/intro.module#IntroPageModule' },
  { path: 'bs-language', loadChildren: './yesgenie/Pages/language/language.module#LanguagePageModule' },
  { path: 'bs-login', loadChildren: './yesgenie/Pages/login/login.module#LoginPageModule' },
  { path: 'bs-my-account', loadChildren: './yesgenie/Pages/my-account/my-account.module#MyAccountPageModule' },
  { path: 'bs-my-orders', loadChildren: './yesgenie/Pages/my-orders/my-orders.module#MyOrdersPageModule' },
  { path: 'bs-news', loadChildren: './yesgenie/Pages/news/news.module#NewsPageModule' },
  { path: 'bs-news-detail', loadChildren: './yesgenie/Pages/news-detail/news-detail.module#NewsDetailPageModule' },
  { path: 'bs-news-list', loadChildren: './yesgenie/Pages/news-list/news-list.module#NewsListPageModule' },
  { path: 'bs-notifications', loadChildren: './yesgenie/Pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'bs-order', loadChildren: './yesgenie/Pages/order/order.module#OrderPageModule' },
  { path: 'bs-order-detail', loadChildren: './yesgenie/Pages/order-detail/order-detail.module#OrderDetailPageModule' },
  { path: 'bs-privacy-policy', loadChildren: './yesgenie/Pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'bs-product-detail', loadChildren: './yesgenie/Pages/product-detail/product-detail.module#ProductDetailPageModule' },
 
  { path: 'bs-products', loadChildren: './yesgenie/Pages/products/products.module#ProductsPageModule' },
  { path: 'bs-refund-policy', loadChildren: './yesgenie/Pages/refund-policy/refund-policy.module#RefundPolicyPageModule' },
  { path: 'bs-reviews', loadChildren: './yesgenie/Pages/reviews/reviews.module#ReviewsPageModule' },
  { path: 'bs-reward-points', loadChildren: './yesgenie/Pages/reward-points/reward-points.module#RewardPointsPageModule' },
  { path: 'bs-scratch-card', loadChildren: './yesgenie/Pages/scratch-card/scratch-card.module#ScratchCardPageModule' },
  { path: 'bs-search', loadChildren: './yesgenie/Pages/search/search.module#SearchPageModule' },
  { path: 'bs-select-country', loadChildren: './yesgenie/Pages/select-country/select-country.module#SelectCountryPageModule' },
  { path: 'bs-select-zones', loadChildren: './yesgenie/Pages/select-zones/select-zones.module#SelectZonesPageModule' },
  { path: 'bs-settings', loadChildren: './yesgenie/Pages/settings/settings.module#SettingsPageModule' },
  { path: 'bs-shipping-method', loadChildren: './yesgenie/Pages/shipping-method/shipping-method.module#ShippingMethodPageModule' },
  { path: 'bs-sign-up', loadChildren: './yesgenie/Pages/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'bs-store', loadChildren: './yesgenie/Pages/store/store.module#StorePageModule' },
  { path: 'bs-term-services', loadChildren: './yesgenie/Pages/term-services/term-services.module#TermServicesPageModule' },
  { path: 'bs-thank-you', loadChildren: './yesgenie/Pages/thank-you/thank-you.module#ThankYouPageModule' },
  { path: 'bs-wish-list', loadChildren: './yesgenie/Pages/wish-list/wish-list.module#WishListPageModule' },
  { path: 'bs-addresses', loadChildren: './yesgenie/Pages/address-pages/addresses/addresses.module#AddressesPageModule' },
  { path: 'bs-billing-address', loadChildren: './yesgenie/Pages/address-pages/billing-address/billing-address.module#BillingAddressPageModule' },
  { path: 'bs-shipping-address', loadChildren: './yesgenie/Pages/address-pages/shipping-address/shipping-address.module#ShippingAddressPageModule' },
  
  { path: 'bs-categories', loadChildren: './yesgenie/Pages/categorie-pages/categories5/categories5.module#Categories5PageModule' },
  
  { path: 'bs-sub-categories', loadChildren: './yesgenie/Pages/categorie-pages/sub-categories/sub-categories.module#SubCategoriesPageModule' },
  // { path: 'bs-sub-categories2', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories2/sub-categories2.module#SubCategories2PageModule' },
  // { path: 'bs-sub-categories3', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories3/sub-categories3.module#SubCategories3PageModule' },
  // { path: 'bs-sub-categories4', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories4/sub-categories4.module#SubCategories4PageModule' },
  // { path: 'bs-sub-categories5', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories5/sub-categories5.module#SubCategories5PageModule' },
  // { path: 'bs-sub-categories6', loadChildren: './i-becrux-side/Pages/categorie-pages/sub-categories6/sub-categories6.module#SubCategories6PageModule' },
  { path: 'bs-home', loadChildren: './yesgenie/Pages/home-pages/home6/home6.module#Home6PageModule' },

  { path: 'otpverify', loadChildren: './yesgenie/Pages/otpverify/otpverify.module#OtpverifyPageModule' },
  { path: 'verify', loadChildren: './yesgenie/Pages/verify/verify.module#VerifyPageModule' },

  { path: 'followers', loadChildren: './yesgenie/Pages/followers/followers.module#FollowersPageModule' },
  { path: 'profile-settings', loadChildren: './yesgenie/Pages/profile-settings/profile-settings.module#ProfileSettingsPageModule' },
  { path: 'tabs', loadChildren: './yesgenie/Pages/tabs/tabs.module#TabsPageModule' },
  { path: 'change-password', loadChildren: './yesgenie/Pages/change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'wallet', loadChildren: './yesgenie/Pages/wallet/wallet.module#WalletPageModule' },
  { path: 'quote-request', loadChildren: './yesgenie/Pages/quote-request/quote-request.module#QuoteRequestPageModule' },
  { path: 'contact-info', loadChildren: './yesgenie/Pages/contact-info/contact-info.module#ContactInfoPageModule' },
  { path: 'user-settings', loadChildren: './yesgenie/Pages/user-settings/user-settings.module#UserSettingsPageModule' },
  { path: 'message', loadChildren: './yesgenie/Pages/message/message.module#MessagePageModule' },
  { path: 'support', loadChildren: './yesgenie/Pages/support/support.module#SupportPageModule' },
  { path: 'nearest-product', loadChildren: './yesgenie/Pages/nearest-product/nearest-product.module#NearestProductPageModule' },
  { path: 'multiple-shipping-address', loadChildren: './yesgenie/Pages/address-pages/multiple-shipping-address/multiple-shipping-address.module#MultipleShippingAddressPageModule' },
  { path: 'update-shipping-address', loadChildren: './yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.module#UpdateShippingAddressPageModule' },
  { path: 'following', loadChildren: './yesgenie/Pages/following/following.module#FollowingPageModule' }

 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import reviewsData from '@/data/reviews.json';
export type Review = { id:number; name:string; rating:number; date:string; verified:boolean; source:string; avatar:string; text:string };
export const reviews = reviewsData.reviews as Review[];
export const reviewSummary = { business: reviewsData.business, rating: reviewsData.rating, totalReviews: reviewsData.total_reviews, reviewUrl: reviewsData.review_url, source: reviewsData.source };

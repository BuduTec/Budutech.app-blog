
import Link from 'next/link';
import { reviewSummary, reviews } from '@/lib/reviews';
import { SITE } from '@/lib/site';

export function ReviewSection() {
  return (
    <section className="container-page py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><div className="small-label">Google Reviews</div><h2 className="h2 mt-2">Trusted by entrepreneurs across Nigeria</h2><p className="lead mt-4 max-w-2xl">Based on {reviewSummary.totalReviews} verified Google reviews and a {reviewSummary.rating} rating.</p></div>
        <div className="flex flex-wrap gap-3"><Link href={SITE.googleProfileUrl} target="_blank" className="btn-secondary">View all Google Reviews</Link><Link href={SITE.googleReviewUrl} target="_blank" className="btn-primary">Leave a Review</Link></div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {reviews.slice(0, 6).map((review) => (
          <article key={review.id} className="card p-6">
            <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-full bg-budutech-50 font-bold text-budutech-800">{review.avatar}</div><div><div className="font-semibold text-slate-950">{review.name}</div><div className="text-xs text-slate-500">{review.date} • Verified Google review</div></div></div>
            <div className="mt-4 text-yellow-500">★★★★★</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

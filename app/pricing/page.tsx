import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Discover the best deals for our products',
 keywords: ['Pricing Page', 'Pricing', 'Product Pricing'],
};

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">PricingPage</span>
        </>
    )
}
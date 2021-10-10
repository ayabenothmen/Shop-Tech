import React from 'react'
 
const ListAuctions = ({ biddings }) => {
    return (
        <div class="reviews w-75">
            <h3>Other's Auctions:</h3>
            <hr />
            {biddings && biddings.map(bidding => (
                <div key={bidding._id} class="review-card my-3">
                    <div class="#">
                        <div class="#" style={{ width: `${"20px"}` , color:`${"red"}`, fontWeight: "bold"}}>auction</div>
                    </div>
                    <p class="review_user">by {bidding.name}</p>
                    <p class="review_comment">{bidding.auction}</p>
 
                    <hr />
                </div>
            ))}
        </div>
    )
}
 
export default ListAuctions
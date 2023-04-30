import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat consequatur explicabo laudantium dolorem corporis aspernatur voluptate natus voluptates, aliquid officiis quasi eos quidem vero! Deserunt quibusdam nemo accusantium reprehenderit praesentium? Nam velit atque magnam harum accusantium doloribus facilis recusandae, quidem beatae est corrupti itaque sed laudantium debitis optio sunt autem pariatur. Blanditiis perferendis voluptas, fugiat velit nihil quisquam sequi ipsum repellat, porro hic nisi quam laudantium esse, quia corporis cum quae? Minima cumque vel ipsam beatae ipsum eum, quaerat possimus aliquam. Id suscipit excepturi velit quas mollitia, blanditiis quis obcaecati illum aperiam quasi veritatis dicta ipsam consectetur praesentium nulla!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;
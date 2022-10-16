
const Heart = ({ showHeart }) => {

    if (showHeart) {
        return (
            <div className="absolute inset-center z-10  animate-ping heart">
                <svg width="100px" height="100px" viewBox="0 0 100 100">
                    <title>Heart</title>
                    <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Heart" fill="#ff0080">
                            <path d="M49.8041967,92.9955634 C47.9496299,92.9127475 45.3371274,91.6705079 41.966689,89.2688449 C32.8832783,83.1195016 26.194415,78.2209686 21.9000992,74.5732457 C17.6057835,70.9255227 13.2569893,66.4483327 8.85371675,61.1416755 C-3.89707124,42.0365366 -2.87545729,25.9654751 11.9185586,12.928491 C25.1791829,4.70096259 37.8729967,5.03702443 50,13.9366765 L50,13.9366765 C62.1270033,5.03702443 74.8208171,4.70096259 88.0814414,12.928491 C102.875457,25.9654751 103.897071,42.0365366 91.1462833,61.1416755 C86.7430107,66.4483327 82.3942165,70.9255227 78.0999008,74.5732457 C73.805585,78.2209686 67.1167217,83.1195016 58.033311,89.2688449 C54.5424998,91.7562816 51.8647295,93 50,93 Z" id="Shadow"></path>
                            <path d="M49.8041967,92.9955634 C47.9496299,92.9127475 45.3371274,91.6705079 41.966689,89.2688449 C32.8832783,83.1195016 26.194415,78.2209686 21.9000992,74.5732457 C17.6057835,70.9255227 13.2569893,66.4483327 8.85371675,61.1416755 C-3.89707124,42.0365366 -2.87545729,25.9654751 11.9185586,12.928491 C25.1791829,4.70096259 37.8729967,5.03702443 50,13.9366765 L50,13.9366765 C62.1270033,5.03702443 74.8208171,4.70096259 88.0814414,12.928491 C102.875457,25.9654751 103.897071,42.0365366 91.1462833,61.1416755 C86.7430107,66.4483327 82.3942165,70.9255227 78.0999008,74.5732457 C73.805585,78.2209686 67.1167217,83.1195016 58.033311,89.2688449 C54.5424998,91.7562816 51.8647295,93 50,93 Z" id="Colour"></path>
                        </g>
                    </g>
                </svg>
            </div>

        )
    }

}

export default Heart
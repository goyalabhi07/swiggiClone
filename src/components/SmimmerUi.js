const ShimmerUi = () => {
    return (
        <div className="restro-list">
            {
                Array(10).fill("").map((e, i) => <div key={i} className="shimmer-card"></div>)
            }
        </div>
    )
}

export default ShimmerUi;
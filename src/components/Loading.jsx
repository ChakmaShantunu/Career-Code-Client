const Loading = ({ text = "Loading..." }) => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
            <p className="mt-4 text-base-content/60">{text}</p>
        </div>
    );
};

export default Loading;
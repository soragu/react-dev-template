const My = {
    sqrt(x) {
        if (x < 0) throw new Error("negative number dose not have square root");
        return Math.exp(Math.log(x) / 2);
    }
};

export default My;

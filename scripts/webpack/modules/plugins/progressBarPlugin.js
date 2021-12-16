import ProgressBarPlugin from 'progress-bar-webpack-plugin';

export const progressBarPlugin = () => ({
    plugins: [
        new ProgressBarPlugin(),
    ],
});

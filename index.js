import {WorkflowFactory} from "cwlts/models";
import {Workflow, SVGArrangePlugin, ZoomPlugin} from "cwl-svg";

import "cwl-svg/src/assets/styles/themes/rabix-dark/theme";

import bcbio from "cwl-svg/cwl-samples/bcbio";
import fastqc from "cwl-svg/cwl-samples/fastqc";

const samples = [
    WorkflowFactory.from(bcbio),
    WorkflowFactory.from(fastqc)
];

const svgRoot = document.getElementById("svg");
const workflow = new Workflow({
    model: samples[0],
    svgRoot: svgRoot,
    plugins: [
        new SVGArrangePlugin(),
        new ZoomPlugin()
    ]
});

// Listen for button click
document
    .getElementById('replace')
    .addEventListener('click', () => {
        samples.reverse();
        workflow.destroy();
        workflow.draw(samples[0]);
    });

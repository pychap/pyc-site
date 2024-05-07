// https://roughnotation.com/
import { annotate } from 'rough-notation';

const e = document.querySelector('.link');
// annotate(e, { type: 'underline', animationDuration: 1000 });
const annotation = annotate(e, { type: 'underline', animationDuration: 1000, color: 'tomato', padding: [1, 0]});
// isShowing = true;
annotation.show();
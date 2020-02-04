/*
I got these files from FileSilo
*/

import React from 'react';
import './reset.css';
import './style.css';


class Angles extends React.Component {

    render() {
        return (
            <div className="outer-container">
			<header>
				<h1>CSS3<span> Angular Layouts</span></h1>
				<h2>Creating interesting layouts with background images</h2>
			</header>
			<section className="container">
				<div className="angle full" data-stretch = "../images/netrunner.png">
					<article className="content">
						<h3>Full Throttle</h3>
						<p>Much leopard imaginative cogently intolerable llama a crud melodiously or immeasurably a far covetously vehement contrary or while concrete or amid the bat repeatedly ubiquitous spent jeez panda following and and formidably since staunchly flamingo toward conditionally other haughty the crane the toward expectantly. </p>
					</article>
				</div>
				<div className="angle">
					<article className="content">
						<h3>Total Control</h3>
						<p>Irrespective according strived jeez a beyond jaguar to in crab some when hey prodigiously hello playfully depending however gosh some hamster slit lion dismounted boundlessly save so hummingbird walrus and earnest amid abnormally however infallibly gawked on incapably in rightly.</p>
					</article>
				</div>
				<div className="angle">
					<article className="content">
						<h3>Powerful</h3>
						<p>Stared some luscious grimaced as versus gawkily pitifully emotionally scowled before one buffalo egotistically insane much like maturely fought much overate far hello far unnecessarily much a in abusive much less alas and especially as amazing far freshly broken ouch limpet owl painfully less aboard much suave a untruthfully or one too many. </p>
					</article>
				</div>
				<div className="angle">
					<article className="content">
						<h3>Fine Tuning</h3>
						<p>That guinea in far breezily much far ouch in tardily built above a contumaciously misspelled paid less against realistically unexplainably cuddled this leered fiendishly parrot that haughtily blissful as jaguar raccoon one befell this nonchalantly threw desirably flapped dog some gazelle rabidly since one.</p>
					</article>
				</div>
				<div className="angle">
					<article className="content">
						<h3>Eco Friendly</h3>
						<p>Less attractive a up jeez ashamed this around this aboard and said below less more this somber shortsightedly until erroneous glibly articulate hey hey much mammoth yikes that grouped mercifully froze under more swelled rhinoceros as the where cardinal that darn goldfinch less greyhound in but this this diligent crud mistakenly, gnashed fled thus one inside.</p>
					</article>
				</div>
                <div className = "angle">
                    <article className = "content">
                        <h3>Closing Remarks</h3>
                        <p>These are the closing remarks</p>
                    </article>
                </div>
			</section>
        </div>
        );
    }
}

export default Angles;
var React = require("react");
var FunctionTabs = require("./functionTabs");
var Tutorial = require("./tutorial");


var WindowLayout = React.createClass({
	render: function() {
		return (
			<div className = "mainWindows">
				<div className="container-fluid">
					<div className="row-fluid">
						<FunctionTabs></FunctionTabs>
						<div className="tabbable tabs-left mainWindowContainer">
							<ul className="nav nav-tabs left-pannel">
								<li className="fileListLabel">List Of Files</li>
								<li className="divider"></li>
								<li className="active"><a>file1.c</a></li>
								<li><a>file2.c</a></li>
								<li><a>file3.java</a></li>
								<li><a>file4.java</a></li>
							</ul>
							<div className="tab-content file-context">
								<p>#include stdio.h</p>
								<p>main(argc, argv)</p>
								<p>int argc;</p>
								<p>char *argv[];</p>
								<p>  int i,fact, n;</p>
								<p>  n = atoi(argv[1]);   </p>     
								<p>  fact = 1;</p>
								<p>    fact = fact * i;</p>
								<p>  printf("%d\n",fact);</p>
							</div>
							<Tutorial></Tutorial>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = WindowLayout;
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Translate Tamil to English</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="css/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index1.jsp">Translate Tamil to English</a>
            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-envelope"></i> <b class="caret"></b></a>
                    <ul class="dropdown-menu message-dropdown">
                          <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                       <img class="media-object" src="/pic01.png" alt="" style="height: 43px;width: 35px;">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>Sathya</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 2:32 PM</p>
                                        <p>You have 2 unread Messages.</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                        <img class="media-object" src="/pic02.png" alt="" style="height: 37px;width: 35px;">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>Saranya</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>You have got a new notification.</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-footer">
                            <a href="#">Read All New Messages</a>
                        </li>
                    </ul>
                </li>
                
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> Saranya<b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-fw fa-envelope"></i> Inbox</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-fw fa-gear"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li >
                        <a href="index1.jsp"><i class="fa fa-fw fa-dashboard"></i> Morphological Analysis</a>
                    </li>
                    <li  >
                        <a href="charts.jsp"><i class="fa fa-fw fa-bar-chart-o"></i> POS</a>
                    </li>
                    <li>
                        <a href="tables.jsp"><i class="fa fa-fw fa-table"></i> Chunking</a>
                    </li>
                    <li class="active">
                        <a href="forms.jsp"><i class="fa fa-fw fa-edit"></i> Transliteration</a>
                    </li>
                    <li>
                        <a href="bootstrap-elements.jsp"><i class="fa fa-fw fa-desktop"></i> Named Entity Recognition</a>
                    </li>
                     <li id="queryprocess">
                        <a href="qp.jsp" id="qpclick" style="cursor: pointer;" href="qp.jsp"><i class="fa fa-fw fa-desktop"></i> Query Processing</a>
                    </li>
                    <li id="morph" >
                        <a href="qp.jsp" id="morclick" style="cursor: pointer;" ><i class="fa fa-fw fa-desktop"></i> Morphological analysis for English</a>
                    </li>
                    <li id="woa">
                        <a href="qp.jsp" id="woaclick" style="cursor: pointer;"><i class="fa fa-fw fa-desktop"></i> Word Order Analysis</a>
                    </li>
                    <li id="errorcor" >
                        <a href="qp.jsp" id="errorclick" style="cursor: pointer;"><i class="fa fa-fw fa-desktop"></i> Error Correction</a>
                    </li>
<!--                     <li> -->
<!--                         <a href="bootstrap-grid.jsp"><i class="fa fa-fw fa-wrench"></i> Bootstrap Grid</a> -->
<!--                     </li> -->
<!--                     <li> -->
<!--                         <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> Dropdown <i class="fa fa-fw fa-caret-down"></i></a> -->
<!--                         <ul id="demo" class="collapse"> -->
<!--                             <li> -->
<!--                                 <a href="#">Dropdown Item</a> -->
<!--                             </li> -->
<!--                             <li> -->
<!--                                 <a href="#">Dropdown Item</a> -->
<!--                             </li> -->
<!--                         </ul> -->
<!--                     </li> -->
<!--                     <li> -->
<!--                         <a href="blank-page.jsp"><i class="fa fa-fw fa-file"></i> Blank Page</a> -->
<!--                     </li> -->
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Transliterate
                        </h1>
                        <ol class="breadcrumb">
                            <li>
                                <i class="fa fa-dashboard"></i>  <a href="index1.jsp">English language</a>
                            </li>
                            <li class="active">
                                <i class="fa fa-bar-chart-o"></i> Transliterate
                            </li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->

                <!-- Flot Charts -->
                 <div class="form-group">
                                <label>Paste your English Content</label><br/>
                               <script language="JavaScript" src="js/english_tamil_unicode.js" type="text/JavaScript"></script>
																							<form name="unidoc">
																										<p align="center">
																											<textarea id="box1" style="font-size: 12px; width: 45%; height: 350px;" name="box1" rows="20" cols="40" onkeyup="startText(this,document.unidoc.box2)" onselect="startText(this,document.unidoc.box2)"></textarea>
																											<textarea id="box2" style="font-size: 14px; width: 45%; font-family: TAU_1_ELANGO_Barathi, Latha, TSCu_InaiMathi, TSCu_ArulMathi, TSCu_InaiKathir, InaiKathir_Unicode, Code2000, TSC_Avarangal, TabAvarangal2, Latha, InaiMathi_Unicode, InaiKathir_Unicode, Arial Unicode MS, aAvarangal; height: 350px;" name="box2" rows="20" cols="40"></textarea>
																										</p>
																							</form>
                            </div>
<!--                 <div class="row"> -->
<!--                     <div class="col-lg-12"> -->
<!--                         <h2 class="page-header">Page under construction</h2> -->
<!--                         <p class="lead" style="visibility: hidden;">Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features. For full usage instructions and documentation for Flot Charts, visit <a href="http://www.flotcharts.org/">http://www.flotcharts.org/</a>.</p> -->
<!--                     </div> -->
<!--                 </div> -->
                <!-- /.row -->

                <div class="row" style=" visibility: hidden;">
                    <div class="col-lg-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o"></i> Line Graph Example with Tooltips</h3>
                            </div>
                            <div class="panel-body">
                                <div class="flot-chart">
                                    <div class="flot-chart-content" id="flot-line-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row" style="visibility: hidden;">
                    <div class="col-lg-4">
                        <div class="panel panel-green">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Pie Chart Example with Tooltips</h3>
                            </div>
                            <div class="panel-body">
                                <div class="flot-chart">
                                    <div class="flot-chart-content" id="flot-pie-chart"></div>
                                </div>
                                <div class="text-right">
                                    <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="panel panel-yellow">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Multiple Axes Line Graph Example with Tooltips and Raw Data</h3>
                            </div>
                            <div class="panel-body">
                                <div class="flot-chart">
                                    <div class="flot-chart-content" id="flot-multiple-axes-chart"></div>
                                </div>
                                <div class="text-right">
                                    <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row" style="visibility: hidden;">
                    <div class="col-lg-6">
                        <div class="panel panel-red">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Moving Line Chart</h3>
                            </div>
                            <div class="panel-body">
                                <div class="flot-chart">
                                    <div class="flot-chart-content" id="flot-moving-line-chart"></div>
                                </div>
                                <div class="text-right">
                                    <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Bar Graph with Tooltips</h3>
                            </div>
                            <div class="panel-body">
                                <div class="flot-chart">
                                    <div class="flot-chart-content" id="flot-bar-chart"></div>
                                </div>
                                <div class="text-right">
                                    <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

                <!-- Morris Charts -->
                <div class="row" style=" visibility: hidden;">
                    <div class="col-lg-12">
                        <h2 class="page-header">Morris Charts</h2>
                        <p class="lead">Morris.js is a very simple API for drawing line, bar, area and donut charts. For full usage instructions and documentation for Morris.js charts, visit <a href="http://www.oesmith.co.uk/morris.js/">http://www.oesmith.co.uk/morris.js/</a>.</p>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row" style="visibility: hidden;">
                    <div class="col-lg-12">
                        <div class="panel panel-green">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-bar-chart-o"></i> Area Line Graph Example with Tooltips</h3>
                            </div>
                            <div class="panel-body">
                                <div id="morris-area-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row" style="visibility: hidden;">
                    <div class="col-lg-4">
                        <div class="panel panel-yellow">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Donut Chart Example</h3>
                            </div>
                            <div class="panel-body">
                                <div id="morris-donut-chart"></div>
                                <div class="text-right">
                                    <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="panel panel-red">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Line Graph Example with Tooltips</h3>
                            </div>
                            <div class="panel-body">
                                <div id="morris-line-chart"></div>
                                <div class="text-right">
                                    <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Bar Graph Example</h3>
                            </div>
                            <div class="panel-body">
                                <div id="morris-bar-chart"></div>
                                <div class="text-right">
                                    <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery Version 1.11.0 -->
    <script src="js/jquery-1.11.0.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="js/plugins/morris/raphael.min.js"></script>
    <script src="js/plugins/morris/morris.min.js"></script>
    <script src="js/plugins/morris/morris-data.js"></script>

    <!-- Flot Charts JavaScript -->
    <!--[if lte IE 8]><script src="js/excanvas.min.js"></script><![endif]-->
    <script src="js/plugins/flot/jquery.flot.js"></script>
    <script src="js/plugins/flot/jquery.flot.tooltip.min.js"></script>
    <script src="js/plugins/flot/jquery.flot.resize.js"></script>
    <script src="js/plugins/flot/jquery.flot.pie.js"></script>
    <script src="js/plugins/flot/flot-data.js"></script>

</body>

</html>

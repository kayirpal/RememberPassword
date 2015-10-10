var totalGridCount = 0, // Store the status of total number of grids in the form
    currentGridDisplayed = 0, // Store the current displayed grid value
	// Funnel Chart
	totalChartFunnelCount = 0, // Store the status of total number of grids in the form
	currentChartFunnelCount = 0,
	defaultChartFunnels = 1,
    currentChartFunnelDisplayed = 0,
 	eleGridCount_DD,
	//chartFunnelNumberValues = { "0": "------ Select ------", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10" },
    chartFunnelNumberValues = { "0": "------ Select ------", "1": "1", "2": "2", "3": "3", "4": "4" },
	// Funnel Chart End

    defaultColumnsDisplayed = 2, // Default number of grids to be shown on the form
    totalListColumns = 0, // Store the status of total number of columns in list form
    defaultListColumns = 1, // Default number of columns to be shown on list form
    isPresentGroup = false,

 eleGridCount_DD,
  eleChartFunnelCount_DD,
 eleGridDisplayState, eleGridTitle = [], // Elements for accessing the grid controls
 eleGridTilePosition = '',
 gridReportID, gridWebPartID,
 isOverlayEnabled = false,
 overlayParentTile = "",
// Global variables for maintaining component status
 dataTileValue = "Data",
 chartTileValue = "Chart",
 listTileValue = "List",
 freeTextTileValue = "FreeText",
 gridTextTileValue = "Grid",
 staticTileValue = "Static",
 liveTileValue = "Live",
 slidingPixels = 600,
 dataColorDefaultValue = "DefaultColor",
 dataColorCustomValue = "CustomColor",
 TrendPattern = "TrendPattern",
 selectedTileTypeValue = "Data",
 percentageString = "percentage",
 seperator = "$|$",
 noDataAvailable = "NA",
 dataTileSliderStatus = 1,
 tileSlidingWidth = 564.25,
 animateSpeed = 350,
 isFormValid = false,
 isCurrentFieldValid = true,
 functionCallCounter, validCaseCounter,
 targetID,
 isColumnVisibilityModified = false,
 rtSectionsTiles = {},
 oTiles = [],
 oSections = [],
 oSectionTiles = [],
 oSection = [],
 oSectionTilesString = "",
 selectedLayout = "2by2",
 RunWithElevateAccount = "",
 RunWithElevatedCheckboxStatus = false,
 reportingTemplateSectionID = "section0",
 lastSectionIndex = 0,
 lastTileIndex = 0,
 loggedInUser = "",
 presentTileID = 0,
 //siteName = "", reportName = "",
 defaultLayoutOptions = ["22", "42", "82"],
 isEditTile = false,
 mappingRowCounter,
 gridNumberValues = { "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10" },
 gridDisplayStateValues = { "0": "------ Select ------", "true": "Tabs", "false": "Sequence" },
 gridPagingValues = { "0": "------ Select ------", "true": "Enable", "false": "Disable" },
 gridColTypes = { "0": "------ Select ------", "data": "Data", "sparkchart": "Sparkline Chart", "trendchart": "Trend Chart", "barchart": "Bar Chart" },
 gridColumnFormatValues = { "0": "------ Select ------", "text": "Text", "count": "Count", "revenue": "Revenue", "percentage": "Percentage" },
 gridColumnConditionalFormatValues = { "none": "None", "BGFormatting": "Background-Color", "TrafficLights": "Traffic Lights", "Arrow": "Trend Arrows" },
 dataTypeValues = { "1": "Static", "2": "Live" },
 dataTileIntervalValues = { "0": "-- Select --", "3": "3 Seconds", "4": "4 Seconds", "5": "5 Seconds", "6": "6 Seconds", "7": "7 Seconds" },
 chartLegendValues = { "0": "------ Select ------", "true": "Show", "false": "Hide" },
 chartResultOrderValues = { "0": "------ Select ------", "col": "Column Wise", "row": "Row Wise" },
 tileDataFormatValues = { "0": "------ Select ------", "Count": "Count", "Revenue": "Revenue", "Percentage": "Percentage" },
 chartValueFormatValues = { "0": "------ Select ------", "Count": "Count", "Revenue": "Revenue" },
 chartShowLabelOptionValues = { "0": "------ Select ------", "None": "None", "Value": "Value", "Percentage": "Percentage" },
 tileDataLineFormatValues = { "0": "------ Select ------", "Count": "Count", "Revenue": "Revenue", "Percentage": "Percentage" },
 tileDataSSbarFormatValues = { "0": "------ Select ------", "Count": "Count", "Revenue": "Revenue" },
 tileDataPercentageValues = { "0": "------ Select ------", "Fraction": "Fraction", "Percentage": "Percentage" },
 //tileChartTileValues = { "0": "------ Select ------", "hbar": "Horizontal Bar Chart", "hr2": "------------------------", "pie": "Pie Chart", "ppie": "Percentage Pie Chart", "hr3": "------------------------", "ssbar": "Single Stacked Bar Chart", "pssbar": "Percentage Single Stacked Bar Chart" },
 tileChartTileValues = {
     "0": "------ Select ------",
     //"hbar": "Horizontal Bar Chart",
     //"hr2": "------------------------",
     "pie": "Pie Chart",
     //"ppie": "Percentage Pie Chart",
     //"hr3": "------------------------",
     //"ssbar": "Single Stacked Bar Chart",
     //"pssbar": "Percentage Single Stacked Bar Chart"
 },
 // tileChartTileValues = { "0": "------ Select ------", "hbar": "Horizontal Bar Chart", "bar": "Vertical Bar Chart", "hr2": "------------------------", "pie": "Pie Chart", "ppie": "Percentage Pie Chart", "hr3": "------------------------", "ssbar": "Single Stacked Bar Chart", "pssbar": "Percentage Single Stacked Bar Chart" },
 // TO DO: Need to add de prioritised charts 
 // tileChartNonTileValues = { "0": "------ Select ------", "zinghbar": "Horizontal Bar Chart", "zingbar": "Vertical Bar Chart","zingschbar":"Horizontal Single Combo Bar Chart","zingmchbar":"Horizontal Multiple Combo Bar Chart","zingmcvbar":"Multiple Column Verticle Bar Chart", "hr2": "------------------------", "zingpie": "Pie Chart", "zingppie": "Percentage Pie Chart", "hr3": "------------------------", "zingssbar": "Single Stacked Bar Chart", "zingpssbar": "Percentage Single Stacked Bar Chart", "hr4": "------------------------", "zingline": "Line Chart", "zingscatter": "Scatter Chart" },
 tileChartNonTileValues = {

     "0": "------ Select ------",

     //"zingtop5bar": "Top 5 Bar Chart",
     //"zinghbar": "Horizontal Bar Chart",
     //"zingbar": "Vertical Bar Chart",
     // TO DO: Need to add de prioritised charts
     // "zingbar": "Vertical Bar Chart",
     //"hr5": "------------------------",
     //"zingschbar": "Single Group Horizontal Bar Chart",
     //"zingmchbar": "Grouped Horizontal Bar Chart",
     //"zingmcvbar": "Grouped Vertical Bar Chart",
     //: New Chart Type
     //"zinglmcvbar": "Labeled Grouped Vertical Bar Chart",
     //"zingapmcvbar": "Grouped Vertical Bar Chart (Static Width)",
     //"hr2": "------------------------",
     //"zingpie": "Pie Chart",
     //"zinginnerring": "Inner Ring Pie Chart",
     //"zingpiewithmetric": "Pie Chart with Metric",
     //"zingppie": "Percentage Pie Chart",
     //: New Chart Type
     // "zingdoughnut": "Doughnut Chart",
     //"maqlargedoughnut": "Large Doughnut Chart",
     //"hr3": "------------------------",
     //"zingssbar": "Single Stacked Bar Chart",
     //"zingpssbar": "Percentage Single Stacked Bar Chart",
     //"zingmsbar": "Grouped Stacked Bar Chart",
     //"zingline": "Line Chart Zing",
     //"zingscatter": "Scatter Chart",
     //"hr5": "------------------------",
     //"zinghfunnel": "Horizontal Funnel Chart",
     //"zingvfunnel": "Vertical Funnel Chart",
     //"hr6": "------------------------",
     //"zingtop5bar": "Top 5 Bar Chart",
     //"zinggrouptop5bar": "Group Top 5 Bar Chart",
     //"highfunnel": "High Funnel Chart",
     //"hr6": "------------------------",
     "maqpiechart": "Pie Chart",
     //"mediumdonut": "Medium Donut Chart",
     "maqdonut": "Donut Chart",
     //"maqmediumdonut": "MAQ Medium Donut Chart",
     //"hr8": "------------------------",
     //"zingdataoverlay": "Data overlay Chart",
     //"hr9": "------------------------",
     //"hr7": "------------------------",  
     //"zingcolumn": "Column Chart",   
     //"zingbubble": "Bubble Chart",
     //"zinglinebarchart": "Line Bar Chart",
     //"hr8": "------------------------",
     //"treemap": "Tree Map",
     //"zinggaugechart": "Zing Gauge Chart",
     "maqgaugechart": "Gauge Chart",
     "maqcolumnchart": "Column Chart",
     "maqcustomcolumn": "Custom Column Chart",
     "maqline": "Line Chart",
     "maqlinebarchart": "Line Bar Chart",
     "maqhighfunnel": "High Funnel Chart",
     "MAQhFunnelChart": "Horizontal Funnel Chart",
 },
  //Update this array with restricted layouts for charts
 tileLayoutsSupport = {
     //NonTileCharts
     "zinghbar": ["2by2", "3by2", "4by2"],
     "zingbar": ["1by1", "2by2"],
     "zingschbar": ["2by2", "4by2"],
     "zingmchbar": ["2by2", "3by2", "4by2"],
     "zingmcvbar": ["2by2", "4by2", "8by2"],
     "zinglmcvbar": ["2by2", "4by2"],
     "zingapmcvbar": ["4by2", "8by2"],
     "zinginnerring": ["2by2", "4by2"],
     "zingpiewithmetric": ["2by2", "4by2"],
     "zingdoughnut": ["1by1", "3by2", "4by2"],
     "zingssbar": ["2by1", "2by2", "4by2"],
     "zingpssbar": ["2by1", "2by2"],
     "zingmsbar": ["2by2", "4by2"],
     "zingline": ["2by2", "4by2", "8by2"],
     "maqline": ["2by2", "4by2", "8by2"],
     "zingscatter": ["1by1"],
     "zingpie": ["2by2", "4by2"],
     "zingppie": ["1by1", "2by2", "4by2"],
     "zingtop5bar": ["3by2", "4by2"],
     "zinggrouptop5bar": ["3by2", "4by2"],
     "maqdonut": ["2by2", "3by2", "4by2"],
     //"MAQhFunnelChart": ["3by2", "4by2"],
     "maqpiechart": ["2by2", "3by2", "4by2"],
     "mediumdonut": ["2by2"],
     "zingcolumn": ["4by2", "6by2", "8by2"],
     "zinglinebarchart": ["6by2", "8by2"],
     "zingbubble": ["8by2"],
     //Tile Charts
     "hbar": ["2by2", "3by2", "4by2"],
     "bar": ["2by2", "4by2"],
     "pie": ["2by2", "4by2"],
     "ppie": ["1by1", "2by2", "4by2"],
     "ssbar": ["2by1", "2by2", "4by2"],
     "pssbar": ["2by1", "2by2", "4by2"],
     "treemap": ["3by2", "4by2"],
     "zinggaugechart": ["2by2"],
     "maqgaugechart": ["2by2"],
     "maqcolumnchart": ["2by2", "4by2", "6by2", "8by2"],
     "maqcustomcolumn": ["4by2", "6by2", "8by2"],
     "maqhighfunnel": ["2by2"],
     "maqlinebarchart": ["4by2", "6by2", "8by2"],
     "MAQhFunnelChart": ["8by2"]
 },
 oDicSampleQuery = {
     "DataTile": {
         "ONDB": "SELECT <<MeasureColumn>> FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure>>} ON COLUMNS FROM <<CUBE>> WHERE (<<@FilterPublishTag>>)"
         , "OFFDB": "SELECT <<MeasureColumn>> FROM <<TableName>>"
         , "OFFCUBE": "SELECT { <<Measure>>} ON COLUMNS FROM <<CUBE>>"
     }
     , "ListTile": {
         "ONDB": "Sample List tile query with AQ ON, for DB type"
         , "ONCUBE": "Sample List tile query with AQ ON, for CUBE type"
         , "OFFDB": "Sample List tile query with AQ OFF, for DB type"
         , "OFFCUBE": "Sample List tile query with AQ OFF, for CUBE type"
     }
     , "GridTile": {
         "ONDB": "Sample Grid tile query with AQ ON, for DB type"
         , "ONCUBE": "Sample Grid tile query with AQ ON, for CUBE type"
         , "OFFDB": "Sample Data Grid query with AQ OFF, for DB type"
         , "OFFCUBE": "Sample Data Grid query with AQ OFF, for CUBE type"
     }
    , "pie": {
        "ONDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>' "
         , "ONCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>>"
             , "OFFCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>>"
    }
    , "maqcolumnchart": {
        "ONDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>' "
         , "ONCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>>"
             , "OFFCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>>"
    }
         , "maqcustomcolumn": {
             "ONDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>' "
         , "ONCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>>"
             , "OFFCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>>"
         }
        , "maqdonut": {
            "ONDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>' "
         , "ONCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>>"
             , "OFFCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>>"
        }
         , "MAQhFunnelChart": {
             "ONDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>' "
         , "ONCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>>"
             , "OFFCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>>"
         }

            , "maqpiechart": {
                "ONDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>' "
         , "ONCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT TOP (1) <<Column 1>>, <<Column 2>> ,...  FROM <<TableName>>"
             , "OFFCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,…. } ON COLUMNS FROM <<CUBE>>"
            }
        , "hbar": {
            "ONDB": "SELECT <<GroupColumn>>, <<Column 1>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>> } ON COLUMNS , <<Dimension Attribute>> ON ROWS FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<Column 1>> ,...  FROM <<TableName>> "
         , "OFFCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>> } ON COLUMNS , <<Dimension Attribute>> ON ROWS FROM <<CUBE>>"
        }
     , "ppie": {
         "ONDB": "SELECT <<GroupColumn>>, <<PercentageColumn 1>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,<<Percentage>> } ON COLUMNS FROM  <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<PercentageColumn 1>> ,...  FROM <<TableName>> "
         , "OFFCUBE": "SELECT {  <<Measure 1>>  ,<<Measure 2>>  ,<<Percentage>> } ON COLUMNS FROM <<CUBE>>"
     }
     , "ssbar": {
         "ONDB": "SELECT <<GroupColumn>>, <<Column 1>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT <<Measure>> ON 0,<<Dimension>> ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<Column 1>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT <<Measure>> ON 0,<<Dimension>> ON 1 FROM <<CUBE>>"
     }
     , "pssbar": {
         "ONDB": "select col1 from table_name WHERE Area = '@PAREA’"
         , "ONCUBE": "Sample tile pssbar query with AQ ON, for CUBE type"
         , "OFFDB": "select col1 from table_name"
         , "OFFCUBE": "Sample tile pssbar query with AQ OFF, for CUBE type"
     }
      , "zinghbar": {
          "ONDB": "SELECT <<GroupColumn>>, <<Column 1>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT {   <<Measure 1>>  ,<<Measure 2>> } ON 0 ,<<Dimension>> ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<Column 1>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {   <<Measure 1>>  ,<<Measure 2>> } ON 0 ,<<Dimension>> ON 1 FROM <<CUBE>>"
      }
     , "zingschbar": {
         "ONDB": "SELECT <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT {   <<Measure 1>>   ,<<Measure 2>>  ,<<Measure 3>>  }  ON 0  FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<MeasureColumn 1>>, <<MeasureColumn 1>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {   <<Measure 1>>   ,<<Measure 2>>  ,<<Measure 3>>  }  ON 0  FROM <<CUBE>>"
     }
     , "zingmchbar": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT {   <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {   <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
     }
     , "zingmcvbar": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM  <<CUBE>>"
     }
     , "zinglmcvbar": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {  <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
     }
     , "zingapmcvbar": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {  <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
     }
     , "zingpie": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn>>  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
             , "ONCUBE": "SELECT <<Measure>> ON 0, <<Dimension>> ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
             , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn>>  FROM <<TableName>>"
             , "OFFCUBE": "SELECT <<Measure>> ON 0, <<Dimension>> ON 1 FROM  <<CUBE>>"
     }
         , "zinginnerring": {
             "ONDB": "SELECT <<ChartTitle>>, <<RingName1>>, <<Ring Metric 1>>, <<Ring Metric 2>>,<<Ring Metric 3>> FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "TBD: SELECT <<Measure>> ON 0, <<Dimension>> ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<ChartTitle>>, <<RingName1>>, <<Ring Metric 1>>, <<Ring Metric 2>>,<<Ring Metric 3>> FROM <<TableName>> "
         , "OFFCUBE": "TBD: SELECT <<Measure>> ON 0, <<Dimension>> ON 1 FROM  <<CUBE>>"
         }
      , "zingpiewithmetric": {
          "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn>>  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT <<Measure>> ON 0, <<Dimension>> ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn>>  FROM <<TableName>>"
         , "OFFCUBE": "SELECT <<Measure>> ON 0, <<Dimension>> ON 1 FROM  <<CUBE>>"
      }
     , "zingppie": {
         "ONDB": "SELECT <<GroupColumn>>, <<PercentageMeasureColumn>>  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT <<PercentageMeasure>> ON 0, <<Dimension>> ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<PercentageMeasureColumn>>  FROM <<TableName>>"
         , "OFFCUBE": "SELECT <<PercentageMeasure>> ON 0, <<Dimension>> ON 1 FROM  <<CUBE>>"
     }
     , "zingssbar": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM  <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {  <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
     }
     , "zingpssbar": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {  <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
     }
     , "zingmsbar": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {  <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
     }
     , "zingline": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {  <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
     }
       , "zinglinebarchart": {
           "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {  <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
       }
     , "maqline": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {  <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
     }
     , "maqlinebarchart": {
         "ONDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
         , "ONCUBE": "SELECT { <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
         , "OFFDB": "SELECT <<GroupColumn>>, <<MeasureColumn 1>>, <<MeasureColumn 2>> ,...  FROM <<TableName>>"
         , "OFFCUBE": "SELECT {  <<Measure 1>>   ,<<Measure 2>>, ... } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
     }
    , "zinggaugechart": {
        "ONDB": "SELECT <<Actual>>, <<Target>>, <<MoM Variance>>, <<[OPTIONAL VALUE] RedRegion-EndValue(In percentage)>>, <<[OPTIONAL VALUE] GreenRegion-StartValue(In percentage)>>, <<[OPTIONAL VALUE] Minimum Value for Gauge(In terms of revenue)>>, <<[OPTIONAL VALUE] Maximum Value for Gauge(In terms of revenue)>>    FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
        , "ONCUBE": "SELECT { <<Actual>>, <<Target>>, <<MoM Variance>>, <<[OPTIONAL VALUE] RedRegion-EndValue(In percentage)>>, <<[OPTIONAL VALUE] GreenRegion-StartValue(In percentage)>>, <<[OPTIONAL VALUE] Minimum Value for Gauge(In terms of revenue)>>, <<[OPTIONAL VALUE] Maximum Value for Gauge(In terms of revenue)>> } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
        , "OFFDB": "SELECT <<Actual>>, <<Target>>, <<MoM Variance>>, <<[OPTIONAL VALUE] RedRegion-EndValue(In percentage)>>, <<[OPTIONAL VALUE] GreenRegion-StartValue(In percentage)>>, <<[OPTIONAL VALUE] Minimum Value for Gauge(In terms of revenue)>>, <<[OPTIONAL VALUE] Maximum Value for Gauge(In terms of revenue)>>   FROM <<TableName>>"
        , "OFFCUBE": "SELECT {  <<Actual>>, <<Target>>, <<MoM Variance>>, <<[OPTIONAL VALUE] RedRegion-EndValue(In percentage)>>, <<[OPTIONAL VALUE] GreenRegion-StartValue(In percentage)>>, <<[OPTIONAL VALUE] Minimum Value for Gauge(In terms of revenue)>>, <<[OPTIONAL VALUE] Maximum Value for Gauge(In terms of revenue)>> } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
    }
    , "maqgaugechart": {
        "ONDB": "SELECT <<Actual>>, <<Target>>, <<[OPTIONAL VALUE] MoM Variance>>, <<[OPTIONAL VALUE] RedRegion-EndValue(In percentage)>>, <<[OPTIONAL VALUE] GreenRegion-StartValue(In percentage)>>, <<[OPTIONAL VALUE] Minimum Value for Gauge(In terms of revenue)>>, <<[OPTIONAL VALUE] Maximum Value for Gauge(In terms of revenue)>>    FROM <<TableName>> WHERE <<FilterColumn>> = '@<<FilterPublishTag>>'"
        , "ONCUBE": "SELECT { <<Actual>>, <<Target>>, <<[OPTIONAL VALUE] MoM Variance>>, <<[OPTIONAL VALUE] RedRegion-EndValue(In percentage)>>, <<[OPTIONAL VALUE] GreenRegion-StartValue(In percentage)>>, <<[OPTIONAL VALUE] Minimum Value for Gauge(In terms of revenue)>>, <<[OPTIONAL VALUE] Maximum Value for Gauge(In terms of revenue)>> } ON 0 ,{ <<Dimension>> } ON 1 FROM <<CUBE>> WHERE (<<@FilterPublishTag>>"
        , "OFFDB": "SELECT <<Actual>>, <<Target>>, <<[OPTIONAL VALUE] MoM Variance>>, <<[OPTIONAL VALUE] RedRegion-EndValue(In percentage)>>, <<[OPTIONAL VALUE] GreenRegion-StartValue(In percentage)>>, <<[OPTIONAL VALUE] Minimum Value for Gauge(In terms of revenue)>>, <<[OPTIONAL VALUE] Maximum Value for Gauge(In terms of revenue)>>   FROM <<TableName>>"
        , "OFFCUBE": "SELECT {  <<Actual>>, <<Target>>, <<[OPTIONAL VALUE] MoM Variance>>, <<[OPTIONAL VALUE] RedRegion-EndValue(In percentage)>>, <<[OPTIONAL VALUE] GreenRegion-StartValue(In percentage)>>, <<[OPTIONAL VALUE] Minimum Value for Gauge(In terms of revenue)>>, <<[OPTIONAL VALUE] Maximum Value for Gauge(In terms of revenue)>> } ON 0 ,{ <<Dimension>>   }  ON 0 ,{ <<Dimension>>} ON 1 FROM <<CUBE>>"
    }


 },
 tileChartTypeAspectValues = { "0": "------ Select ------", "tile": "Tile Chart", "zing": "Non-Tile Chart" },
 tileChartLegendPosValues = { "0": "------ Select ------", "top": "Top", "bottom": "Bottom" },
 tileChartDrillDownType = { "0": "------ Select ------", "complete": "Complete", "chart": "Chart" },

 //: New Colors Added
 colourPickerValues = ["FFFFFF", "FFFC9E", "FFB900", "DD5900", "F472D0",
                        "9B4F96", "FFF100", "FF8C00", "E81123", "EC008C",
                        "68217A", "FCD116", "EB3C00", "BA141A", "B4009E",
                        "442359", "4668C5", "6DC2E9", "00D8CC", "55D455",
                        "E2E584", "00188F", "00BCF2", "00B294", "009E49",
                        "BAD80A", "002050", "0072C6", "008272", "007233",
                        "7FBA00", "969696", "F3F3F5", "002050", "7FBA00"],
 colourPickerName = ["White", "Yellow 100", "Orange 124", "Red 1665", "Magenta 218",
                    "Purple 258", "Process Yellow", "Orange 144", "Red 185", "Process Magenta",
                    "Purple 526", "Yellow 116", "Orange 166", "Red 1807", "Magenta 241",
                    "Purple 269", "Blue 660", "Cyan 2985", "Teal 325", "Green 7480",
                    "Lime 586", "Blue 286", "Process Cyan", "Teal 3275", "Green 355",
                    "Lime 382", "Blue 288", "Cyan 300", "Teal 3295", "Green 348",
                    "Lime 376", "Grey", "Light Grey", "Dark Blue", "Dark Green"],

 iconPickerValues = ["Star", "Trophy", "Leader"],
 iconPickerNames = ["Star", "Trophy", "Leader"],
 tileConfigurationXML = '',
 gridConfigurationXML = '',
 zoneConfigArray = [],
 sectionZoneID = '',
 errorTextMessages =
 [
     "Field cannot be empty",
     "Field cannot exceed more than @maxLength characters",
     "Field should contains atleast @minLength characters"
 ],
 errorQueryMessages =
 [
     "Field cannot be empty",
     "Field cannot contain special characters",
     "Field text cannot contain more than 15 characters",
     "Syntax error",
     "Query cannot contain keyword",
     "Query should atleast contain keywords 'SELECT' and 'FROM'"
 ],
 totalDivArray =
 [
     "divTrendContainer1", "divTrendContainer2", "divTrendContainer3", "stopLightBody1",
     "stopLightBody2", "stopLightBody3",
     //"divChartValueBox", 
     "divChartTooltipFormat",
     "divChartLabelFormat", "divChartValueQuery", "divChartValueFormat_DD",
     //"divChartSubTitle", "divChartDataFormat_DD", "divChartLegend_DD", "divChartLegendPos_DD", "divChartResultOrder_DD","divChartXLabelMapping", "divChartDataMapping", "divChartRemainingDataMapping", "divChartTargetDataMapping",
     //"divChartScaleXLabel", "divChartScaleYLabel", "divChartScaleYLabelInfo", "divChartScaleXLabelInfo", "divChartGrandTotalMapping", "DivTitleBackgroundColor", "divTitleMeasureDataMapping", "divTitleLabelDataFormat", 
     "DivChartBackColorPicker",
     //: New Metadata feature Added
     "divChartLabelMetaDataProvidedFlag", "divChartLabelMetaDataCountPerDataItem",
     // Added for new charts     
     //"divRowLabels", "divBottomLabels", "divLegends", "divTargetLabel", 
     "ChartFunnelSlidingDiv",
     // Added for updates in Column chart     
     //"divColumnTitle", 
     //"divTopLabel", "divTopLabelIndex", "divTopLabelFormat", "divBottomLabels", "divBottomLabelIndex", "divBottomLabelFormat", "divTargetLabels", "divTargetLabelIndex", "divKeyMetricIndex", "divTargetLabelFormat","divDividerIndex", 
     "divColumnColor",

     "FunnelChartDiv",
     "divChartLegendIndex",
     //"divMetricText", 
     //"divChartDDLink", 
     "DivChartFontColorPicker",
     //"divChartHorizontalGuide", "divChartVerticalGuide", 
     "divChartSelectFunnel"
 ],
  funnelChartTotalDivArray =
 [
        "divChartPortfolio", "divConnectionStringType", "divChartTitle", "divFilterAssociation2", "divChartQuery", "divTargetLabels",
        "divChartConnectionStringType", "divChartAdvancedQuery", "divChartResultOrder_DD", "DivChartSliceColor",
        "divChartServiceAccount", "divChartInsertSampleQuery", "divChartLegendIndex", "divKeyMetricIndex",
        "DivChartDrillDownURL", "DivChartDrillDownType"
 ]
    , eleDataIntervalDD
    , eleDataTypeDD
    , eleDataConnection_DD
    , eleChartConnection_DD
    , eleListConnection_DD
    , eleGridConnection_DD
    , eleColorPicker
    , eleIconPicker
    , eleDataDrilldownURL = []
	, eleDataExecutionOrder = []
    , eleSupportingQuery = []
    , eleSQExecutionOrder = []
    , eleSessionName = []
    , eleDataDisplayTextArr = []
    , eleRunWithElevatedPrivilages
    , eleRunWithElevatedPrivilageAccount
    , eleDataDDLink = []
    , eleDataQueryArr = []
    , eleTileDataFormat_DDArr = []
    , eleDataColorPickerArr = []
    , eleDataColorQueryArr = []
    , eleDataTrendChkArr = []
    , eleDataStopLightArray = []
    , eleDataTrendQueryArr = []
    , eleDataIconChkArr = []
    , eleDataIconPickerArr = []
    , eleTileChartType_DD
    , eleTileChartOrientation_DD
    , eleChartConnection_DD
    , eleDataPortfolio_DD
    , eleDataConnectionString_DD
    , eleNavConnectionString_DD
    , eleNavPortfolio_DD
    , eleListPortfolio_DD
    , eleListConnectionString_DD
    , eleGridPortfolio_DD
    , eleGridConnectionString_DD
    , eleChartTitle
    , eleChartDDLink
    , eleChartDataLabl
    , eleChartLineCount
    , eleChartSubTitle
    , eleChartColorPicker
    , eleChartDataFormat_DD
    , eleChartValueFormat_DD
    , eleChartLegendPos_DD
    , eleChartLegend_DD
    , eleChartRowLabels
    , eleColumnTitle
    , eleTopLabels
    , eleTopLabelIndex
    , eleTopLabelFormat
    , eleChartBottomLabels
    , eleBottomLabels
    , eleBottomLabelIndex
    , eleBottomLabelFormat
    , eleChartTargetLabels
    , eledataTilePosition
    , elechartTilePosition
    , eleChartTargetLabelIndex
    , eleChartTargetLabelFormat
    , eleKeyMetricIndex
    , eleLegendIndex
    , eleDividerIndex
    , eleChartLegends
    // Funnel Chart
    , eleChartSelectFunnelChart
    , eleChartFunnelCount_DD
	// Funnel Chart ends

     //PC: Added New Guide Feature
    , eleChartIsStacked
    , eleChartHasTarget
    , eleChartHorizontalGuide
    , eleChartVerticalGuide

    , eleChartDataMapping
    , eleChartResultOrder_DD
    , eleChartRemainingDataMapping
    , eleChartTargetDataMapping
    , eleChartXLabelMapping
    , eleChartSliceColor
    , eleTileChartAspect_DD
    , elePortfolio_DD
    , eleDataPortfolio_DD
    , eleListPortfolio_DD
    , eleChartPortfolio_DD
    , eleGridPortfolio_DD
    , eleConnectionStringType_DD
    , eleChartScaleXLabel
    , eleChartScaleYLabel
    , eleChartScaleXLFont
    , eleChartScaleXIFont
    , eleChartScaleXIAngle
    , eleChartScaleYLFont
    , eleChartScaleYIFont
    , eleChartDrilldownURL
    , eleChartDrillDownType
    , eleChartGrandTotalMapping
    , eleChartBackgroundColor
    , eleListTitle
    , eleListDDLink
    , eleListConnection_DD
    , eleListPortfolio_DD
    , eleListConnectionString_DD
    , eleListQuery
    , eleListDrillUrl
    , eleListHeaderTitle = []
    , eleListMappingId = []
    , eleListFormat_DD = []
    , aParamsMapTemp
    , paramObj
    , eleFreeTextTitle
    , eleFreeTextDDLink
    , eleFreeTextColorPicker
    , eleFreeTextContent
    , eleTitleMeasureDataMapping
    , eleTitleLabelDataFormat

    /* Grid Elements */
    , totalGridColumns = []
    , eleGridCount_DD
        // Funnel Chart
	, totalChartFunnelColumns = []
    , eleChartFunnelCount_DD
    , eleChartFunnelTitle = []
	, eleChartFunnelPortfolio = []
    , eleChartFunnelConnection = []
    , eleChartFunnelQuery = []
    , eleChartFunnelAdvancedQuery = []
    , eleChartFunnelLegends = []
    , eleChartFunnelLegendsVisibility = []
    , eleChartFunnelSeriesColor = []
    , eleChartFunnelSeriesPattern = []
    , eleChartFunnelRowLabels = []
    , eleChartFunnelDrillDownURL = []
    , eleChartFunnelStartingYPos = []
    , eleChartFunnelDirection = []
    , eleChartFunnelConnector = []
    , eleChartFunnelDDL = []
    , eleChartFunnelColorPicker = []
    , eleChartFunnelDrillDownType = []
	// Funnel Chart ends
, eleGridTitle = []
    , eleGridConnection = []
    , eleGridPortfolio = []
    , eleGridRunWithElivateCheckbox = []
    , eleGridRunWithElivatedDD = []
    , eleGridQuery = []
    , eleGridPaging = []
    , eleMultiValueGridFilter = []

    /* PC: Select Fields Visibility */
    , eleGridSelectVisibility = []

    , eleGridDisplayState
    , eleGridTilePosition = ''
    , eleGridHeaderTitle = []
    , eleGridHeaderTooltip = []
    , eleGridPivotExcelChk = []
    , eleGridPivotExcelURL = []
    , eleChartValueQuery
    , eleGridMappingID = []
    , eleGridFormat = []
    , eleGridWidth = []
    , eleGridTotalChk = []
    , eleGridFilterChk = []
    , eleGridVisibleChk = []
    , eleGridHyperlinkChk = []
    , eleGridColType = []
    , eleGridDrillUrl = []
    , eleGridPercNum = []
    , eleGridPercDen = []
    , eleGridUrlMapping = [], eleGridCondFormattingType = []
    , eleGridCondFormattingMapping = []
    , eleChartColorQuery = ''
    , eleChartTooltipFormat
    , eleChartLabelFormat
    , eleChartValueBox
    , eleStopLightRulesArray = []
    , eleStopLightColorsArray = []
    , eleStopLightIconsArray = []
    , elestopLightRuleCounter = []
    , eleDataTrendFlatArr = []
    , eleDataTrendDownIconArr = []
    , eleDataTrendUpIconArr = []
    , eledefaultColor = []
    , eleListTextColor
    , eleListBgColor
    , eleListTypeDD
    , helpIconDetails = ["Zing Chart", "Pie Chart", "Inner Ring Chart", "Inner Ring Pie Chart", "Horizontal Bar Chart", "Vertical Bar Chart"]

//: New Metadata feature Added
, eleChartLabelMetaDataProvidedFlag = false
, eleChartLabelMetaDataCountPerItem
// TO DO: Configure to get this from SharePoint List
, connectionStringValues = {
    "0": "------ Select ------"
},
    // Added for custom connection
    connectionTypeValues = {
        "0": "------ Select ------"
    },
    arrAllConnection = [],
    errorCustomConnection =
    [
        "Custom connection name cannot be empty",
        "Custom connection name cannot contain special characters",
        "The entered custom connection already exists. Kindly provide a different name",
        "Field can contain only characters, digits and _,$,%,),(,&,/,\,-,+,=,,:,#,;,.,!,@,{,},|,?,<,>,-,[,],;,\"",
        "Field can contain only characters, digits and _,$,%,),(,&,/,-",
        "Portfolio name cannot be empty",
        "Custom connection type cannot be empty"
    ]
    , eleListConnectionType_DD
    , eleChartConnectionType_DD
    , eleGridConnectionType_DD
    , eleCustomConnectionStatus
    , bCustomConnectionStatus = false
    , bCustomConnectionValidation = false
    , gridCustomConnectionCount = 0
    , gridCustomConnectionSuccessCount = 0
    , gridCustomConnectionCallBackCount = 0
    , gridElementCustomConnectionCheck = []
    // End of custom connection

, portfolioValues = {
    "0": "------ Select ------"
};

// Code to fetch nice name of ConnectionStrings from SharePoint list
function getConnectionStringValues(sWebServicePath, commonList) {
    var oRequest = new RequestBuilder_filter();
    var requestParam = {};
    requestParam["spListName"] = commonList,
    requestParam["keyName"] = "ConnectionStringID",
    requestParam["keyValue"] = "8",
    requestParam["paramColumn"] = "Value";
    data = JSON.parse(dicMiscItems["PopupConnections"]);
    connectionStringValues = $.extend({}, connectionStringValues, data);
    portfolioValues = $.extend({}, portfolioValues, data);
    // oRequest.postRequest(sWebServicePath + "GetQueryParam", setConnectionStringValues, JSON.stringify(requestParam), "");
}

function setConnectionStringValues(response) {
    if (response.result !== "") {
        var data = JSON.parse(response.result);
        if (data["XMLConfig"] !== "" && data["XMLConfig"] !== "undefined") {
            data = JSON.parse(unescape(data["XMLConfig"]));
            connectionStringValues = $.extend({}, connectionStringValues, data);
        }
    }
}
function edit(obj) {
    if (true) {
        var partId = $(obj).attr('id');
        var nodes = $(obj);//$(obj).parents().filter(function () { return $(this).attr('class') === 'LayoutZone'; });
        if (nodes.length != 0) {
            // targetID = $(nodes).attr('id') + '_' + partId; // Initialize the Target ID of a selected div 
            targetID = nodes.attr("id");
            var IdList = targetID.split("_");
            var zone_ID = IdList[0];

            var SectionID = IdList[1].replace("section", "");

            //            sectionZoneID = SectionID + "_" + zone_ID; // Initialize the Section ID of a selected div
            sectionZoneID = "Pages_SelfService_866339697" + "_" + "Zone1"; // Initialize the Section ID of a selected div
            editTile(obj); // call the editTile function to load the configuration editor
        }
    }

}

function editTile(obj) {
    //reportingTemplateSectionID = $(obj).parent().parent().attr("id");
    loadConfigHTML($(obj).attr("id"));  //Create and append the HTML structure to the maindiv
    initializeDataToControls(); // Initializes the data into the dropdowns
    // AJAX call to get the data from the SharePoint list and update all the controls 
    if (!obj || $(obj).attr("id").indexOf("addTile") >= 0) {
        if (event && event.target) {
            targetID = event.target.Id;
        } else {
            targetID = null;
        }
        if (obj) {
            reportingTemplateSectionID = $(obj).parent().parent().attr("id");
        }
        $("#Save_Btn").attr("targetId", "");
        $("#gridSave_Btn").attr("targetId", "");
        $("#Delete_Btn").hide();
        $("#TileDelete_Btn").hide();
        $("#FooterDiv").css('margin-left', '170px');
        isEditTile = false;
    } else {
        $("#Save_Btn").attr("targetId", $(obj).attr("id"));
        $("#gridSave_Btn").attr("targetId", $(obj).attr("id"));
        $("#Delete_Btn").show();
        $("#TileDelete_Btn").show();
        $("#FooterDiv").css('margin-left', '90px');
        isEditTile = true;

    }

    //siteName = getsiteName(), reportName = getreportName(), configurationMode = "";


    $('.multiValueFilterAssocation').multipleSelect();   // For Multi DropDown Filter Association
    setZoneConfigArray();
    var overlayXMLConfig = "";
    for (var i = 0; i < oTiles.length; i++) {
        if (oTiles[i].TileHandle === targetID) {
            overlayXMLConfig = oTiles[i].XMLConfiguration;
            break;
        }

    }
    if (targetID === null) {
        var maxTileFlowOrder = 0;
        var SectionTileCount = 0;
        maxTileFlowOrder = oTiles[0] ? parseInt(oTiles[0].TileFlowOrder) : 0;
        for (i = 0; i < oTiles.length; i++) {
            if (reportingTemplateSectionID === oTiles[i].SectionHandle) {
                SectionTileCount++;
                if (maxTileFlowOrder < parseInt(oTiles[i].TileFlowOrder)) {
                    maxTileFlowOrder = parseInt(oTiles[i].TileFlowOrder);
                }
            }
        }
        var TilePositionElements = $(".divTilePosition");
        $.each(TilePositionElements, function () {
            this.value = Math.max(maxTileFlowOrder + 1, SectionTileCount);
        });
    }
    if (overlayXMLConfig !== "" && $($.parseXML(unescape(unescape(overlayXMLConfig)))).find('Grid').length > 0) {
        var curTile = { "TileHandle": targetID, "LayoutSize": "8by2", "TileType": "Grid", "TileFlowOrder": 0, "SectionHandle": "section1", "XMLConfiguration": overlayXMLConfig, "fTileLiveStatus": true, "gridLayoutColumnValue": "1", "gridLayoutRowValue": "3", "addTile": { "row": 5, "column": 3 } }
        var curGrid = new Grid();
        curGrid.WebPartId = targetID;
        curGrid.Init(curTile, false, "EditedConfiguration");
    }
}

function clearConfigurationData() {
    loadConfigHTML();  // Create and append the HTML structure to the maindiv
    initializeDataToControls(); // Initializes the data into the dropdowns 
    $('.multiValueFilterAssocation').multipleSelect();   // For Multi DropDown Filter Association
    if (isEditTile) {
        $("#Delete_Btn").show();
        $("#TileDelete_Btn").show();
        $("#FooterDiv").css('margin-left', '90px');
    }
    else {
        $("#Delete_Btn").hide();
        $("#TileDelete_Btn").hide();
        $("#FooterDiv").css('margin-left', '170px')
    }
}
function renderLayoutSelector() {

    var layoutSelector = $("<select>", { id: "combinedSelector" });
    var labelSelector = $("<label>", { id: "labelCombinedSelector" }).text("Layout: ");
    var customRowLabelSelector = $("<label>", { id: "labelRowSelector" }).text("Width: ");
    var customColumnLabelSelector = $("<label>", { id: "labelColumnSelector" }).text("Height: ");
    $("<option>", { value: "1by1" }).text("1 X 1").appendTo(layoutSelector);
    $("<option>", { value: "2by1" }).text("2 X 1").appendTo(layoutSelector);
    $("<option>", { value: "2by2" }).text("2 X 2").appendTo(layoutSelector);
    $("<option>", { value: "4by2" }).text("4 X 2").appendTo(layoutSelector);
    $("<option>", { value: "8by2" }).text("8 X 2").appendTo(layoutSelector);
    $("<option>", { value: "custom" }).text("Custom").appendTo(layoutSelector);


    var rowSelector = $("<select>", { id: "rowSelector" });
    var rowElements = [1, 2, 3, 4, 5, 6, 7, 8];
    $.each(rowElements, function () {
        $("<option>", { value: this }).text(this).appendTo(rowSelector);
    });


    var columnSelector = $("<select>", { id: "columnSelector" });
    var columnElements = [1, 2];
    $.each(columnElements, function () {
        $("<option>", { value: this }).text(this).appendTo(columnSelector);
    });

    layoutSelector.on("change", function () {
        if ($(this).val() === "custom") {
            //$("#PopupLayoutSelector").empty();

            $("#PopupLayoutSelector").append(customRowLabelSelector);
            $("#PopupLayoutSelector").append(rowSelector);
            $("#PopupLayoutSelector").append(customColumnLabelSelector);
            $("#PopupLayoutSelector").append(columnSelector);

        } else {
            $("#PopupLayoutSelector").children().not("#PopupLayoutSelector #combinedSelector, #PopupLayoutSelector #labelCombinedSelector").remove();
        }
    });

    labelSelector.appendTo("#PopupLayoutSelector");
    layoutSelector.appendTo("#PopupLayoutSelector");
}
function getLayoutSelection() {
    //if ($("#PopupLayoutSelector #combinedSelector").length > 0) {
    if ($("#PopupLayoutSelector #combinedSelector").val() != 'custom') {
        //Get Data from Combined Selector
        return $("#PopupLayoutSelector #combinedSelector").val();

    } else {
        //Get Data from Individual Selector
        return $("#PopupLayoutSelector #rowSelector").val() + "by" + $("#PopupLayoutSelector #columnSelector").val();
    }
}
// We get Layout value of the selected tab
function setLayoutSelection(selectedTileTypeValue) {
    if (selectedTileTypeValue == dataTileValue) {
        return $("#dataLayoutSelector").val();
    } else if (selectedTileTypeValue == chartTileValue) {
        return $("#chartLayoutSelector").val();
    } else if (selectedTileTypeValue == listTileValue) {
        return $("#listLayoutSelector").val();
    } else if (selectedTileTypeValue == freeTextTileValue) {
        return $("#freeTextLayoutSelector").val();
    }
}


function setTilePosition(selectedTileTypeValue) {
    if (selectedTileTypeValue == dataTileValue) {
        return $("#dataTilePosition").val();
    } else if (selectedTileTypeValue == chartTileValue) {
        return $("#chartTilePosition").val();
    } else if (selectedTileTypeValue == listTileValue) {
        return $("#listTilePosition").val();
    } else if (selectedTileTypeValue == freeTextTileValue) {
        return $("#freeTextTilePosition").val();
    }
}

//This functions update Layout Selector with possible Layouts based on chart selected
function updateLayoutSelector(chartType) {
    if (tileLayoutsSupport[chartType] !== undefined) {

        function name(layout) {
            var dimensions = layout.split("by");
            return dimensions[0] + " X " + dimensions[1];
        };

        //var layoutSelector = $("#combinedSelector");
        var layoutSelector = $("#chartLayoutSelector ");

        layoutSelector.empty();

        $.each(tileLayoutsSupport[chartType], function () {
            $("<option>", { value: this }).text(name(this)).appendTo(layoutSelector);
        });
    }
}
function resetLayoutSelector() {
    $("#PopupLayoutSelector").empty();
    renderLayoutSelector();
}
// Reset the Layout when click on the tab
function resetAllLayoutSelector(selectedTileTypeValue) {

    if (selectedTileTypeValue == dataTileValue) {
        $("#dataLayoutSelector option:eq(0)").prop("s`elected", true);
    } else if (selectedTileTypeValue == chartTileValue) {
        $("#chartLayoutSelector option:eq(0)").prop("selected", true);
    } else if (selectedTileTypeValue == listTileValue) {
        $("#listLayoutSelector option:eq(0)").prop("selected", true);
    } else if (selectedTileTypeValue == freeTextTileValue) {
        $("#freeTextLayoutSelector option:eq(0)").prop("selected", true);
    }
}

function loadConfigHTML(tileID) {
    // Array for initializing the HTML content of configuration popup
    var configDivHTML = [
     '<div id="ColorPickerPopup"></div>',
     '<div id="PatternPickerPopup"></div>',
     '<div id="IconPickerPopup"></div>',

     '<div class="close"><img src="' + webAPIurl + '@LayoutPath/Images/Cancel_Black.png" class="btn_close" title="Close Window" alt="Close" /></div>',
     '<div id="HeaderDiv">',
     '<div class="Headers_On selectedPivotTab" id="DataHeader" onclick="tileTypeClicked(\'Data\'); displayConfigPopup(); titleTypePivotClicked(this);" title="Switch to Data View" >Data</div>',
     '<div class="Headers_Off" id="ChartHeader" onclick="tileTypeClicked(\'Chart\'); displayConfigPopup();  titleTypePivotClicked(this)" title="Switch to Chart View">Chart</div>',
     '<div class="Headers_Off" id="ListHeader" onclick="tileTypeClicked(\'List\'); displayConfigPopup();  titleTypePivotClicked(this)" title="Switch to List View">List</div>',
     '<div class="Headers_Off" id="FreeTextHeader" onclick="tileTypeClicked(\'FreeText\'); displayConfigPopup();  titleTypePivotClicked(this)" title="Switch to Text View">HTML</div>',
     '<div class="Headers_Off" id="GridTextHeader" onclick="tileTypeClicked(\'Grid\'); displayGridConfigPopup();  titleTypePivotClicked(this)" title="Switch to Grid View">GRID</div>',
     '</div>',
     '<div class="clear"></div>',
     '<hr class="seperator"></hr>',
     //'<div id="PopupLayoutSelector"></div>',     
     '<div class="ConfigDivMain" id="ConfigDivMain">',
     '<div class="SlidingDiv" id="SlidingDiv">',

     '<div class="SelectedShowDiv" id="DataDiv">',
     '<div class="divTable">',
     '<div class="divRow" id="divRow_DataType">',
     '<div class="divCellLeft">Type</div>',
     '<div  class="divCellRight">',
     '<select class="DivDropdownMini" id="DataTypeDD" onChange="dataType_DD_Changed();">',
     '</select>',
     '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id="IntervalLbl">Interval</label>&nbsp;&nbsp;&nbsp;',
     '<select class="DivDropdownMini" id="DataIntervalDD" onchange="validateDropdown(this);">',
     '</select>',
	 '</div>',
     '</div>',


     '</div>',
     '<div id="SlidingIconsDiv">',
     '<div class="Swap_Left"><img src="' + webAPIurl + '@LayoutPath/Images/Swap_Left_Black.png" class="btn_Swap_Left" title="Previous Tile Configuration" alt="Previous" /></div>',
     '<div id="CurrentTileStatus">Tile-1 Configuration</div>',
     '<div class="Swap_Left"><img src="' + webAPIurl + '@LayoutPath/Images/Swap_Right_Black.png" class="btn_Swap_Right" title="Next Tile Configuration" alt="Next" /></div>',
     '</div>',
     '<div class="SelectedTileShowDiv" id="SelectedTileShowDiv">',
     '<div class="TileSlidingDiv" id="TileSlidingDiv">',

	 '<div class="divRow">',
	 '<div class="divCellLeft">Layout</div>',
	 '<div  class="divCellRight">',
	 '<div class="layoutSelector_Image">',
	 '<select class="layoutSelector" id="dataLayoutSelector">',
	 '<option name="Data" value="1by1">1 X 1</option>',
	 '<option name="Data" value="2by1">2 X 1</option>',
	 '<option name="Data" value="2by2">2 X 2</option>',
	 '<option name="Data" value="4by2">4 X 2</option>',
	 '<option name="Data" value="8by2">8 X 2</option>',
	 '</select>',
	 '</div>',
	 '</div>',
	 '</div>',

      '<div class="divRow">',
     '<div class="divCellLeft">Position </div>',
     '<div  class="divCellRight">',
     "<input class='divTilePosition' type='text' id='dataTilePosition'onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

      '<div class="divRow" id="divPortfolio">',
     '<div class="divCellLeft">Portfolio</div>',
     '<div  class="divCellRight">',
     '<div class = "DivDropdown_Image">',
     "<select class='DivDropdown' id='DataPortfolio_DD' onChange='changeConnectionStringsVisibility(this);validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

	 '<div class="divRow" id="divConnectionStringType">',
     '<div class="divCellLeft">Data Connection</div>',
     '<div  class="divCellRight">',
     '<div class = "DivDropdown_Image">',
     "<select class='DivDropdown' id='DataConnectionStringType_DD' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     //Added for custom connection feature
     '<div class="hide" id="CustomConnectionConfiguration_Data">',
         '<div class="divRow">',
            '<div class="divCellLeft">Connection Type</div>',
            '<div class="divCellRight">',
	             '<div class = "DivDropdown_Image">',
	                '<select class="DivDropdown" id="ConnectionType_DD_Data" onchange="validateConnectionTypeDropdown(this);">',
	                '</select>',
				'</div>',
	     	'</div>',
     	'</div>',
         '<div class="divRow">',
            '<div class="divCellLeft">New Connection Name</div>',
            '<div class="divCellRight">',
                '<input class="DivTextBox" id="CustomConnectionConfig_Data" type="text" onkeyup="validateCustomConnectionFriendlyName(this)">',
            '</div>',
         '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft">New Connection String</div>',
            '<div class="divCellRight">',
                "<input class='DivTextBox' id='CustomConnectionNameConfig_Data' type='text' onkeyup='validateCustomConnectionParameter(this,\"ConnectionType_DD_Data\")'>",
            '</div>',
         '</div>',
         '<div class="divRow hide" id="CustomConnectionStatusSection_Data">',
            '<div class="divCellLeft"></div>',
            '<div class="divCellRight">',
                '<div id="CustomConnectionStatus_Data" class="divRow hide"></div>',
            '</div>',
         '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft"></div>',
            '<div class="divCellRight">',
                "<div class='rt-congigPopup-btn' id='BtnValidateCustomConnection_Data' onclick='validateCustomConnection(this,\"ConnectionType_DD_Data\",\"CustomConnectionConfig_Data\",\"CustomConnectionNameConfig_Data\",\"No\");'>Validate </div>",
            '</div>',
         '</div>',
     '</div>',
     //End of custom connection feature

     //'<div class="divRow">',
     //'<div class="divCellLeft">Connection</div>',
     //'<div  class="divCellRight">',
     //'<select class="DivDropdown" id="DataConnection_DD" onchange="validateDropdown(this);">',
     //'</select>',
     //'</div>',
     //'</div>',

     '<div class="divTable" id="DataTileConfiguration1">',

     //Display Text 1
     '<div class="divRow">',
     '<div class="divCellLeft">Display Text</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='DataDisplayText1' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',



     '<div class="divRow"  id="divDataDDLink1" >',
     '<div class="divCellLeft">Data Dictionary Link</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='DataDDLink1' value='' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow"  id="divFilterAssociation1">',
     '<div class="divCellLeft">Filter Association</div>',
     '<div  class="divCellRight">',
     '<select  class="multiValueFilterAssocation" id="multiValueDataFilter" multiple="multiple">',
     '<option value="Demand Type">Demand Type</option>',
     '<option value="Product">Product</option>',
	 '<option value="Geography">Geography</option>',
	 '<option value="Sales Person">Sales Person</option>',
	 '<option value="Organization">Organization</option>',
     '<option value="Product Ownership">Product Ownership</option>',
	 '<option value="Area">Area</option>',
	 '<option value="Profile">Profile</option>',
	 '</select>',
     '</div>',
     '</div>',

     '<div class="divRow">',
    '<div class="divCellLeft">Advanced Query</div>',
   ' <div class="divCellRight">',
        '<input type="checkbox" class="DivTextArea switch" name="AdvancedDataQuery1" id="AdvancedDataQuery1"  />    ',
        '<label for="AdvancedDataQuery1">OFF</label>   ',
    '</div>',
    '</div>',


     '<div class="divRow">',
     '<div class="divCellLeft">Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='DataQuery1' onkeyup='validateQuery(this,\"DataConnectionStringType_DD\");' ></textarea>",
     '</div>',
     '</div>',

    '<div class="divRow">',
    '<div class="divCellLeft"></div>',
    ' <div class="divCellRight">',
          '<div class="rt-congigPopup-btn insertSampleQuery" id="insertSampleDataQuery1">Insert Sample Query</div>',
     '</div>',
    '</div>',


	'<div class="divRow hide">',
     '<div class="divCellLeft">Run with Elevated Privileges</div>',
    '<div class="divCellRight"><input class="DivCheckBox RunWithElevatedCheckbox" id="RunWithElevatedDataCheckbox" onclick="openRunWithElevatedPopup(this, 1,0)" type="checkbox" value="IsRunWithElevated">Yes</div>',
     '</div>',
	'<div class="divRow hide">',
	    '<div class="divCellLeft">Service Account</div>',
	    '<div class="divCellRight"><div class="DivDropdown_Image"><select class="DivDropdown DisableInputControls" id="RunWithElevatedData" disabled="disabled" onchange="checkUserAccess(this);validateDropdown(this);"></select></div></div>',
	'</div>',


     '<div id="rt-report-runWithElevatedPopup-overlay" class="hide">',
        '<div class="rt-navigation-configPopup-row">',
            '<div class="rt-runWithElevated-configPopup-label">Opting "Run with Elevated Privileges" uses system account to execute the queries which has access to confidential data. Continue?</div>',
            '</div>',

        '<div class="rt-RunWithElevated-btn" id="rt-report-configPopup-ovarlay-ok" onclick="runWithElevatedOKClick()">OK</div>',
        '<div class="rt-RunWithElevated-btn" id="rt-report-configPopup-ovarlay-cancel" onclick="cancelRunWithElevatedPopup()">Cancel</div>',
    '</div>',

 //    '<div class="divRow"  id="divNavigationAssociation1">',
//     '<div class="divCellLeft">Navigation Association</div>',
//     '<div  class="divCellRight">',
//     "<input class='DivTextBox' type='text' id='DataNALink1' value='' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");'/>",
//     '</div>',
//     '</div>',



     '<div class="divRow">',
     '<div class="divCellLeft">Suffix</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBox' id='DataSuffix1' />",
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Is Suffix Dynamic</div>',
     '<div  class="divCellRight">',
     '<input class="DivCheckBox" id="DynamicSuffix1" onclick="enableSuffixFields(this, 1)" type="checkbox" value="IsSuffixDynamic">Yes',
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Data Index</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBox DisableInputControls' disabled='disabled' id='DataIndex1' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Suffix Index</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBox DisableInputControls' disabled='disabled' id='SuffixIndex1' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Data Format</div>',
     '<div  class="divCellRight">',
    '<div class="DivDropdown_Image">',
     '<select class="DivDropdown" id="TileDataFormat_DD1" onChange="validateDropdown(this);">',
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Background Color</div>',
     '<div  class="divCellRight">',
     '<div style="float:left; display:none;">',
     '<div class="radioButtonclass"><input type="radio" name="DataColorRbtn1" value="DefaultColor" onchange="dataColorTypeChoosen(1)" /></div> <div class="radioButtonLabelclass"> Pick a color</div>',
     '</div>',
     //'<div style="float:left;margin-left:5px;">',
     //'<div class="radioButtonclass"><input type="radio" name="DataColorRbtn1" value="CustomColor"  onchange="dataColorTypeChoosen(1)"/></div> <div class="radioButtonLabelclass"> Define a rule</div><br />',
     // '</div>',
     //'<div style="float:left;margin-left:5px;" id="divTrendSelector1">',
     //'<div class="radioButtonclass"><input type="radio" name="DataColorRbtn1" value="TrendPattern"  onchange="dataColorTypeChoosen(1)"/></div> <div class="radioButtonLabelclass"> Trend</div><br />',
     //'</div>',
           '<input type="text" class="DivTextBoxSmall" id="DataColorPicker1" readonly=true />',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"DataColorPicker1\");'/></div>",
     '</div>',
     '</div>',

    //'<div class="divRow" id="DivDataColorPicker1">',
    //'<div class="divCellLeft">Color Picker</div>',
    //'<div  class="divCellRight">',
    //'<input type="text" class="DivTextBoxSmall" id="DataColorPicker1" readonly=true />',
    //"<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"DataColorPicker1\");'/></div>",
    //'</div>',
    //'</div>',

    // '<div id="divTrendContainer1">',
    // '<div class="divRow">',
    // '<div class="divCellLeft">Trend Query</div>',
    // '<div  class="divCellRight">',
    // "<textarea class='DivTextArea' id='DataTrendQuery1' onkeyup='validateQuery(this,\"DataConnectionStringType_DD\");'></textarea>",
    // '</div>',
    // '</div>',



    // '<div class="divRow">',
    // '<div class="divCellLeft">Increase</div>',
    // '<div  class="divCellRight">',
    // '<input type="text" class="DivTextBoxSmall" id="DataTrendUp1" readonly=true />',
    // "<div class='PickerIconsDiv'><img src='@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataTrendUp1\",\"true\");' /></div>",
    // '</div>',
    // '</div>',

    // '<div class="divRow">',
    // '<div class="divCellLeft">Decrease</div>',
    // '<div  class="divCellRight">',
    //  '<input type="text" class="DivTextBoxSmall" id="DataTrendDown1" readonly=true />',
    // "<div class='PickerIconsDiv'><img src='@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataTrendDown1\",\"true\");' /></div>",
    //'</div>',
    // '</div>',

    // '<div class="divRow">',
    // '<div class="divCellLeft">Equal</div>',
    // '<div  class="divCellRight">',
    // '<input type="text" class="DivTextBoxSmall" id="DataTrendFlat1" readonly=true />',
    // "<div class='PickerIconsDiv'><img src='@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataTrendFlat1\",\"true\");' /></div>",
    // '</div>',
    // '</div>',

    // '</div>',



    // '<div id="stopLightBody1">',//begining row


    // '<div class="divRow">',
    // '<div  class="divCellRight">',
    // '<img  style="margin-left:380px;cursor:pointer;"  src="@LayoutPath/Images/Add_Black.png" onClick="AddStopLightRule(1)"/>',
    // '<img style="margin-left:5px;cursor:pointer;display:none;" id="RemoveStopLightRule1" src="@LayoutPath/Images/Minus_Black.png" onClick="RemoveStopLightRule(1)"/>',
    // '</div>',
    // '</div>',
    // '<div class="divRow">',
    // '<div class="divCellLeft">Default Color</div>',
    // '<div  class="divCellRight">',
    // '<input type="text" class="DivTextBoxSmall" id="defaultColor1" readonly=true />',
    //  "<div class='PickerIconsDiv'><img src='@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"defaultColor1\");'/></div>",
    // '</div>',
    // '</div>',
    // '<input id="stopLightRuleCounter1" type="text" style="display:none;" value="1"/>',
    // '<div id="stopLightRuleBody1">',//nested rule body begins

    //  '@StopLightRule1',


    // '</div>',//ending row
    // '</div>',

    //  '<div class="divRow" id="IconDiv1">',
    // '<div class="divCellLeft">Icon</div>',
    // '<div  class="divCellRight">',
    // '<input type="checkbox" id="DataIconChk1" value="IconValue" class="DivCheckBox" onclick="iconChkBoxClicked(1);"/>Enable<br /><input type="text" class="DivTextBoxSmall" id="DataIconPicker1" readonly=true onkeyup="validateText(this);"/>',
    // "<div class='PickerIconsDiv'><img src='@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataIconPicker1\",\"DataIconChk1\");' /></div>",
    // '</div>',
    // '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Drill Down URL</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='DataDrilldownURL1' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");' />",
     '</div>',
     '</div>',


     '<div class="divRow hide">',
     '<div class="divCellLeft">Execution Order</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBox' id='DataExecutionOrder1' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"-1\");' value='999' />",
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Support Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='DataSupportingQuery' onkeyup='validateQuery(this,\"DataConnectionStringType_DD\");' ></textarea>",
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Support Query Execution Order</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBox' id='DataSQExecutionOrder' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Session Object Name</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBox' id='DataObjectName'/>",
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Is 2x1 Tile</div>',
     '<div  class="divCellRight">',
     '<input class="DivCheckBox" id="TwoTilesCheck" onclick="enableTiles(this)" type="checkbox" value="Is2x1Tile">Yes',
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Execution Order</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBox DisableInputControls' disabled='disabled' id='DataExecutionOrder4' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"-1\");' value='999' />",
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Second Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea DisableInputControls' id='DataQuery4' disabled='disabled' onkeyup='validateQuery(this,\"DataConnectionStringType_DD\");' ></textarea>",
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Data Format</div>',
     '<div  class="divCellRight">',
      '<div class="DivDropdown_Image">',
     '<select class="DivDropdown DisableInputControls" id="TileDataFormat_DD4" disabled="disabled" onChange="validateDropdown(this);">',
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Suffix</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBox DisableInputControls' disabled='disabled' id='DataSuffix4' />",
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Is Suffix Dynamic</div>',
     '<div  class="divCellRight">',
     '<input class="DivCheckBox DisableInputControls" disabled="disabled" id="DynamicSuffix4" onclick="enableSuffixFields(this, 4)" type="checkbox" value="IsSuffixDynamic">Yes',
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Data Index</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBox DisableInputControls' disabled='disabled' id='DataIndex4' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Suffix Index</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBox DisableInputControls' disabled='disabled' id='SuffixIndex4' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"-1\");' />",
     '</div>',
     '</div>',


'<div class="divRow hide">',
     '<div class="divCellLeft">Enable Overlay</div>',
    '<div class="divCellRight"><input class="DivCheckBox OverlayChkbx" onclick="toggleOverlay(this, 1,0)" type="checkbox" value="toggleOverlay">Yes</div>',
     '</div>',

     '</div>',


     '<div class="divTable" id="DataTileConfiguration2">',


     '<div class="divRow">',
     '<div class="divCellLeft">Display Text</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='DataDisplayText2' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',


     '<div class="divRow"  id="divDataDDLink2">',
     '<div class="divCellLeft">Data Dictionary Link</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='DataDDLink2' value='' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='DataQuery2' onkeyup='validateQuery(this,\"DataConnectionStringType_DD\");' ></textarea>",
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Data Format</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     '<select class="DivDropdown" id="TileDataFormat_DD2" onChange="validateDropdown(this);">',
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Background Color</div>',
     '<div  class="divCellRight">',
     '<div style="float:left">',
     '<input type="radio" name="DataColorRbtn2" value="DefaultColor" onchange="dataColorTypeChoosen(2)"/> Pick a color',
      '</div>',
     //'<div style="float:left;margin-left:5px;">',
     //'<input type="radio" name="DataColorRbtn2" value="CustomColor" onchange="dataColorTypeChoosen(2)"/> Define a rule<br />',
     //'</div>',
     //'<div style="float:left;margin-left:5px;" id="divTrendSelector2">',
     //'<input type="radio" name="DataColorRbtn2" value="TrendPattern" onchange="dataColorTypeChoosen(2)"/> Trend<br />',
     //'</div>',
     '</div>',
     '</div>',

      '<div class="divRow hide" id="DivDataColorQuery2">',
     '<div class="divCellLeft"></div>',
     '<div  class="divCellRight">',
     '</div>',
     '</div>',

     '<div class="divRow hide" id="DivDataColorPicker2">',
     '<div class="divCellLeft">Color Picker</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="DataColorPicker2" readonly=true/>',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"DataColorPicker2\");'/></div>",
     '</div>',
     '</div>',

     '<div id="divTrendContainer2">',
     '<div class="divRow hide" >',
     '<div class="divCellLeft">Trend Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='DataTrendQuery2' onkeyup='validateQuery(this,\"DataConnectionStringType_DD\");'></textarea>",
     '</div>',
     '</div>',

      '<div class="divRow hide">',
     '<div class="divCellLeft">Increase</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="DataTrendUp2" readonly=true />',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataTrendUp2\",\"true\");' /></div>",
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Decrease</div>',
     '<div  class="divCellRight">',
      '<input type="text" class="DivTextBoxSmall" id="DataTrendDown2" readonly=true />',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataTrendDown2\",\"true\");' /></div>",
    '</div>',
     '</div>',

     '<div class="divRow hide" >',
     '<div class="divCellLeft">Equal</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="DataTrendFlat2" readonly=true />',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataTrendFlat2\",\"true\");' /></div>",
     '</div>',
     '</div>',
     '</div>',



     '<div class="divRow">',
     '<div class="divCellLeft"></div>',
     '<div  class="divCellRight">',
     '</div>',
     '</div>',


     '<div id="stopLightBody2">',//begining row
     '<div class="divRow">',
     '<img  style="margin-left:380px;cursor:pointer;"  src="' + webAPIurl + '@LayoutPath/Images/Add_Black.png" onClick="AddStopLightRule(2)"/>',
     '<img style="margin-left:5px;cursor:pointer;" id="RemoveStopLightRule2" src="' + webAPIurl + '@LayoutPath/Images/Minus_Black.png" onClick="RemoveStopLightRule(2)"/>',
     '</div>',
      '<div class="divRow">',
     '<div class="divCellLeft">Default Color</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="defaultColor2" readonly=true />',
      "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"defaultColor2\");'/></div>",
     '</div>',
     '</div>',
     '<input id="stopLightRuleCounter2" type="text" style="display:none;" value="1"/>',
     '<div id="stopLightRuleBody2">',//nested rule body begins



      '@StopLightRule2',
     '</div>',//ending row
     '</div>',


      '<div class="divRow" id="IconDiv2">',
     '<div class="divCellLeft">Icon</div>',
     '<div  class="divCellRight">',
     '<input type="checkbox" id="DataIconChk2" value="IconValue" class="DivCheckBox" onclick="iconChkBoxClicked(2);"/>Enable<br /><input type="text" class="DivTextBoxSmall" id="DataIconPicker2" readonly=true/>',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataIconPicker2\",\"DataIconChk2\");' /></div>",
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Drill Down URL</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='DataDrilldownURL2' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");' />",
     '</div>',
     '</div>',

     '</div>',

     '<div class="divTable" id="DataTileConfiguration3">',

      '<div class="divRow">',
     '<div class="divCellLeft">Configuration</div>',
     '<div  class="divCellRight">',
     '<input type="checkbox" id="TileConfigEnableChk" value="IconValue" class="DivCheckBox" onclick="enableControls_Changed(3);"/>Enable',
     '</div>',
     '</div>',



     '<div class="divRow">',
     '<div class="divCellLeft">Display Text</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='DataDisplayText3' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',


     '<div class="divRow"  id="divDataDDLink3">',
     '<div class="divCellLeft">Data Dictionary Link</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='DataDDLink3' value='' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',


     '<div class="divRow">',
     '<div class="divCellLeft">Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='DataQuery3' onkeyup='validateQuery(this,\"DataConnectionStringType_DD\");' ></textarea>",
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Data Format</div>',
     '<div  class="divCellRight">',
    '<div class="DivDropdown_Image">',
     '<select class="DivDropdown" id="TileDataFormat_DD3" onChange="validateDropdown(this);">',
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Background Color</div>',
     '<div  class="divCellRight">',
     '<div style="float:left">',
     '<input type="radio" name="DataColorRbtn3" value="DefaultColor" onchange="dataColorTypeChoosen(3)"/> Pick a color',
      '</div>',
     '<div style="float:left;margin-left:5px;">',
     '<input type="radio" name="DataColorRbtn3" value="CustomColor" onchange="dataColorTypeChoosen(3)"/> Define a rule<br />',
     '</div>',
     '<div style="float:left;margin-left:5px;" id="divTrendSelector3">',
     '<input type="radio" name="DataColorRbtn3" value="TrendPattern" onchange="dataColorTypeChoosen(3)"/> Trend<br />',
     '</div>',
     '</div>',
     '</div>',

      '<div class="divRow hide" id="DivDataColorQuery3">',
     '<div class="divCellLeft"></div>',
     '<div  class="divCellRight">',
     '</div>',
     '</div>',

     '<div class="divRow" id="DivDataColorPicker3">',
     '<div class="divCellLeft">Color Picker</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="DataColorPicker3" readonly=true/>',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"DataColorPicker3\");'/></div>",
     '</div>',
     '</div>',

     '<div id="divTrendContainer3" class="hide">',
     '<div class="divRow" >',
     '<div class="divCellLeft">Trend Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='DataTrendQuery3' onkeyup='validateQuery(this,\"DataConnectionStringType_DD\");'></textarea>",
     '</div>',
     '</div>',

      '<div class="divRow hide">',
     '<div class="divCellLeft">Increase</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="DataTrendUp3" readonly=true />',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataTrendUp3\",\"true\");' /></div>",
     '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Decrease</div>',
     '<div  class="divCellRight">',
      '<input type="text" class="DivTextBoxSmall" id="DataTrendDown3" readonly=true />',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataTrendDown3\",\"true\");' /></div>",
    '</div>',
     '</div>',

     '<div class="divRow hide">',
     '<div class="divCellLeft">Equal</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="DataTrendFlat3" readonly=true />',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataTrendFlat3\",\"true\");' /></div>",
     '</div>',
     '</div>',
     '</div>',



     '<div class="divRow">',
     '<div class="divCellLeft"></div>',
     '<div  class="divCellRight">',
     '</div>',
     '</div>',


     '<div id="stopLightBody3" class="hide">',//begining row
       '<div class="divRow">',
     '<img  style="margin-left:380px;cursor:pointer;"  src="' + webAPIurl + '@LayoutPath/Images/Add_Black.png" onClick="AddStopLightRule(3)"/>',
     '<img style="margin-left:5px;cursor:pointer;" id="RemoveStopLightRule3" src="' + webAPIurl + '@LayoutPath/Images/Minus_Black.png" onClick="RemoveStopLightRule(3)"/>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Default Color</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="defaultColor3" readonly=true />',
      "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"defaultColor3\");'/></div>",
     '</div>',
     '</div>',
     '<input id="stopLightRuleCounter3" type="text" style="display:none;" value="1"/>',
     '<div id="stopLightRuleBody3">',//nested rule body begins

      '@StopLightRule3',
     '</div>',//ending row
     '</div>',



      '<div class="divRow hide" id="IconDiv3" >',
     '<div class="divCellLeft">Icon</div>',
     '<div  class="divCellRight">',
     '<input type="checkbox" id="DataIconChk3" value="IconValue" class="DivCheckBox" onclick="iconChkBoxClicked(3);"/>Enable<br /><input type="text" class="DivTextBoxSmall" id="DataIconPicker3" readonly=true/>',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataIconPicker3\",\"DataIconChk3\");' /></div>",
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Drill Down URL</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='DataDrilldownURL3' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");' />",
     '</div>',
     '</div>',

     '</div>',

       '</div>',
       '</div>',

     '</div>',





     '<div class="SelectedShowDiv" id="ChartDiv">',
     '<div class="divTable" id="ChartTileConfiguration">',

     '<div class="divRow hide" id="divTileChartAspect">',
     '<div class="divCellLeft">Chart Type</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='TileChartAspect_DD' onChange='changeChartElementsVisibility(\"aspect\");validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

	 '<div class="divRow" id="divTileChartType">',
     '<div class="divCellLeft">Chart</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='TileChartType_DD' onChange='changeChartElementsVisibility(\"type\");validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow">',
	 '<div class="divCellLeft">Layout</div>',
     '<div  class="divCellRight">',
	 '<div class="layoutSelector_Image">',
	 '<select class="layoutSelector" id="chartLayoutSelector" name="Chart" >',
	 '<option value="1by1">1 X 1</option>',
	 '<option value="2by2">2 X 2</option>',
	 '<option value="3by2">3 X 2</option>',
	 '<option value="4by2">4 X 2</option>',
	 '<option value="8by2">8 X 2</option>',
	 '</select>',
	 '</div>',
	 '</div>',
	 '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Position </div>',
     '<div  class="divCellRight">',
     "<input class='divTilePosition' type='text' id='chartTilePosition'onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',


     '<div class="divRow hide" id="divTileChartOrientation">',
     '<div class="divCellLeft">Orientation</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='TileChartOrientation_DD' onChange='changeChartElementsVisibility(\"type\");validateDropdown(this);'>",
     '<option value="horizontal">Horizontal</option>',
	 '<option value="vertical">Vertical</option>',
     '</select>',
     '</div>',
     '</div>',
     '</div>',


     '<div class="divRow" id="divChartPortfolio">',
     '<div class="divCellLeft">Portfolio</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ChartPortfolio_DD' onChange='changeConnectionStringsVisibility(\"aspect\");validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

	 '<div class="divRow" id="divChartConnectionStringType">',
     '<div class="divCellLeft">Data Connection</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ChartConnectionStringType_DD' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     //Added for custom connection feature
     '<div class="hide hide" id="CustomConnectionConfiguration_Chart">',
         '<div class="divRow">',
            '<div class="divCellLeft">Connection Type</div>',
            '<div class="divCellRight">',
	            '<div class = "DivDropdown_Image">',
	                '<select class="DivDropdown" id="ConnectionType_DD_Chart" onchange="validateConnectionTypeDropdown(this);">',
	                '</select>',
				'</div>',
		     '</div>',
	     '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft">New Connection Name</div>',
            '<div class="divCellRight">',
                '<input class="DivTextBox" id="CustomConnectionConfig_Chart" type="text" onkeyup="validateCustomConnectionFriendlyName(this)">',
            '</div>',
         '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft">New Connection String</div>',
            '<div class="divCellRight">',
                "<input class='DivTextBox' id='CustomConnectionNameConfig_Chart' type='text' onkeyup='validateCustomConnectionParameter(this,\"ConnectionType_DD_Chart\")'>",
            '</div>',
         '</div>',
         '<div class="divRow hide" id="CustomConnectionStatusSection_Chart">',
            '<div class="divCellLeft"></div>',
            '<div class="divCellRight">',
                '<div id="CustomConnectionStatus_Chart" class="divRow hide"></div>',
            '</div>',
         '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft"></div>',
            '<div class="divCellRight">',
                "<div class='rt-congigPopup-btn' id='BtnValidateCustomConnection_Chart' onclick='validateCustomConnection(this,\"ConnectionType_DD_Chart\",\"CustomConnectionConfig_Chart\",\"CustomConnectionNameConfig_Chart\",\"No\");'>Validate </div>",
            '</div>',
         '</div>',
     '</div>',
     //End of custom connection feature



     //'<div class="divRow" id="divChartConnection_DD">',
     //'<div class="divCellLeft">Connection</div>',
     //'<div  class="divCellRight">',
     //"<select class='DivDropdown' id='ChartConnection_DD' onChange='validateDropdown(this);'>",
     //'</select>',
     //'</div>',
     //'</div>',

     '<div class="divRow"  id="divChartTitle">',
     '<div class="divCellLeft">Chart Title</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartTitle' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',


     '<div class="divRow"  id="divChartLineCount">',
     '<div class="divCellLeft">Line Count</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartLineCount' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',




     '<div class="divRow hide"  id="divMetricText" >',
     '<div class="divCellLeft">Metric Text</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='MetricText'/>",
     '</div>',
     '</div>',

     '<div class="divRow"  id="divChartDDLink">',
     '<div class="divCellLeft">Data Dictionary Link</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartDDLink' value='' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartSubTitle">',
     '<div class="divCellLeft">Sub Title</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartSubTitle' onkeyup='validateText(this, \"TitleText\", false, \"-1\", \"-1\")'/>",
     '</div>',
     '</div>',

      '<div class="divRow"  id="divFilterAssociation2">',
     '<div class="divCellLeft">Filter Association</div>',
     '<div  class="divCellRight">',
     '<select  class="multiValueFilterAssocation" id="multiValueChartFilter" multiple="multiple">',
     '<option value="Demand Type">Demand Type</option>',
     '<option value="Product">Product</option>',
	 '<option value="Geography">Geography</option>',
	 '<option value="Sales Person">Sales Person</option>',
	 '<option value="Organization">Organization</option>',
     '<option value="Product Ownership">Product Ownership</option>',
	 '<option value="Area">Area</option>',
	 '<option value="Profile">Profile</option>',
	 '</select>',
     '</div>',
     '</div>',

  '<div class="divRow" id="divChartAdvancedQuery">',
    '<div class="divCellLeft">Advanced Query</div>',
     ' <div class="divCellRight">',
     '<input type="checkbox" class="DivTextArea switch" name="AdvancedChartQuery" id="AdvancedChartQuery" /> ',
     '<label for="AdvancedChartQuery">OFF</label>',
     '</div>',
     '</div>',
     '<div class="divRow"  id="divChartQuery">',
     '<div class="divCellLeft">Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='ChartQuery' onChange='validateQuery(this,\"ChartConnectionStringType_DD\");'></textarea>",
     '</div>',
     '</div>',

       '<div class="divRow" id="divChartInsertSampleQuery">',
    '<div class="divCellLeft"></div>',
    ' <div class="divCellRight">',
          '<div class="rt-congigPopup-btn insertSampleQuery" id="insertSampleChartQuery">Insert Sample Query</div>',
     '</div>',
    '</div>',


    '<div class="divRow hide" id="divChartRunWIthElevatedPrivileges" >',
     '<div class="divCellLeft">Run with Elevated Privileges</div>',
    '<div class="divCellRight"><input class="DivCheckBox RunWithElevatedCheckbox" id="RunWithElevatedChartCheckbox" onclick="openRunWithElevatedPopup(this, 2,0)" type="checkbox" value="IsRunWithElevated">Yes</div>',
     '</div>',
	'<div class="divRow hide" id="divChartServiceAccount">',
	    '<div class="divCellLeft hide">Service Account</div>',
	    '<div class="divCellRight hide"><div class="DivDropdown_Image"><select class="DivDropdown DisableInputControls" id="RunWithElevatedCharts" disabled="disabled" onchange="checkUserAccess(this);validateDropdown(this);"></select></div> </div>',
     '</div>',





     '<div class="divRow"  id="divChartDataFormat_DD">',
     '<div class="divCellLeft">Data Format</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ChartDataFormat_DD' onChange='changeTooltipMode(this);validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     //: New Metadata feature Added
      '<div class="divRow"  id="divChartLabelMetaDataProvidedFlag">',
        '<div class="divCellLeft">Label Metadata Provided in Query</div>',
        '<div  class="divCellRight">',
            '<input type="checkbox" id="ChartLabelMetaDataProvidedFlag" onclick="labelMetaDataProvidedCheckBoxEnabled(this);" />',
        '</div>',
     '</div>',

     '<div class="divRow" id="divChartLabelMetaDataCountPerDataItem">',
        '<div class="divCellLeft">Number of Labels Per Data Item</div>',
        '<div class="divCellRight">',
            '<input type="text" id="ChartLabelMetaDataCountPerDataItem" onkeyup="validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");" />',
        '</div>',
     '</div>',

     '<div class="divRow"  id="divChartValueQuery">',
     '<div class="divCellLeft">Value Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='ChartValueQuery' onChange='validateQuery(this,\"ChartConnectionStringType_DD\");'></textarea>",
     '</div>',
     '</div>',

     '<div class="divRow"  id="divChartValueFormat_DD">',
     '<div class="divCellLeft">Value Format</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ChartValueFormat_DD' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow"  id="divChartTooltipFormat">',
     '<div class="divCellLeft">Show on hover</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ChartTooltipFormat' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
	 '</div>',

     '<div class="divRow"  id="divChartLabelFormat">',
     '<div class="divCellLeft">Show on Label</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ChartLabelFormat' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',


	 '<div class="divRow" id="DivChartBackColorPicker">',
     '<div class="divCellLeft">Background Color</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="ChartColorPicker" readonly=true/>',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"ChartColorPicker\");'/></div>",
     '</div>',
     '</div>',


     '<div class="divRow" id="DivChartFontColorPicker">',
     '<div class="divCellLeft">Font Color</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="FontChartColorPicker" readonly=true/>',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"FontChartColorPicker\");'/></div>",
     '</div>',
     '</div>',

     '<div id="divChartBGColorPanel">',
     '<div class="divRow">',
     '<div class="divCellLeft">Background Color</div>',
     '<div  class="divCellRightRadioButton">',
     '<div class="radioButtondivclassleft">',
     '<div class="radioButtonclass"><input type="radio" name="ChartColorRbtn" value="DefaultColor" id="PickColor" onchange="chartColorTypeChoosen()" /></div> <div class="radioButtonLabelclass">Pick a color</div>',
     '</div>',
      '<div class="radioButtondivclassright">',
     '<div class="radioButtonclass"><input type="radio" name="ChartColorRbtn" value="CustomColor" id="RuleColor"  onchange="chartColorTypeChoosen()"/></div> <div class="radioButtonLabelclass">Define a rule</div><br />',
     '</div>',
     '</div>',
     '</div>',



     '<div class="divRow" id="divPortfolio">',
     '<div class="divCellLeft">Portfolio</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='DataPortfolio_DD' onChange='changeConnectionStringsVisibility(this);validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

	 '<div class="divRow" id="divConnectionStringType">',
     '<div class="divCellLeft">Data Connection</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='DataConnectionStringType_DD' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',


     '<div class="divRow" id="DivChartColorQuery">',
     '<div class="divCellLeft">Rule</div>',
     '<div  class="divCellRight">',
    "<textarea class='DivTextArea' id='ChartColorQuery' onkeyup='validateQuery(this,\"DataConnectionStringType_DD\");'></textarea>",
     '<div class="HelpIconsDiv"><img src="' + webAPIurl + '@LayoutPath/Images/ColorPicker_Black.png" class="HelpIcons" title="Color Picker" alt="Color Picker Help" onclick="loadColorPicker(this,null);"/></div>',
     '</div>',
     '</div>',

	 '<div class="divRow" id="DivChartColorPicker">',
      '<div class="divCellLeft">Color Picker</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="ChartColorPicker" readonly=true/>',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"ChartColorPicker\");'/></div>",
     '</div>',
     '</div>',
     '</div>',

      '<div class="divRow"  id="divChartDataLabl">',
     '<div class="divCellLeft">Data Label</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartDataLabl' onkeyup='validateText(this, \"TitleText\", false, \"-1\", \"-1\")'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartLegend_DD">',
     '<div class="divCellLeft">Legend Status</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ChartLegend_DD' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartLegendPos_DD">',
     '<div class="divCellLeft">Legend Position</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ChartLegendPos_DD' >",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

        //PC: Added New Guide Feature
     '<div class="divRow hide"  id="divChartIsStacked">',
     '<div class="divCellLeft">Stacked</div>',
     '<div  class="divCellRight">',
     '<input type="checkbox" id="ChartIsStacked" value="IsStacked" class="DivCheckBox" onclick=""/>Enable',
     '</select>',
     '</div>',
     '</div>',

     '<div class="divRow hide" id="divChartHasTarget">',
     '<div class="divCellLeft">Has Target</div>',
     '<div  class="divCellRight">',
     '<input type="checkbox" id="ChartHasTarget" value="HasTarget" class="DivCheckBox" onclick=""/>Enable',
     '</select>',
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartHorizontalGuide">',
     '<div class="divCellLeft">Vertical Guide</div>',
     '<div  class="divCellRight">',
     '<input type="checkbox" id="ChartHorizontalGuide" value="IconValue" class="DivCheckBox" onclick=""/>Enable',
     '</select>',
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartVerticalGuide">',
     '<div class="divCellLeft">Horizontal Guide</div>',
     '<div  class="divCellRight">',
     '<input type="checkbox" id="ChartVerticalGuide" value="IconValue" class="DivCheckBox" onclick=""/>Enable',
     '</select>',
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartValueBox">',
     '<div class="divCellLeft">Static Value Display</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ChartValueBox' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartResultOrder_DD">',
     '<div class="divCellLeft">Result Order</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ChartResultOrder_DD' onChange='chartResultOrderDDChanged(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartXLabelMapping">',
     '<div class="divCellLeft">Label Mapping</div>',
     '<div  class="divCellRight">',

     "<input class='DivTextBox' type='text' id='ChartXLabelMapping' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',


     '<div class="divRow hide"  id="divChartDataMapping">',
     '<div class="divCellLeft">Data Mapping</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartDataMapping' onkeyup='validateText(this, \"NumbersandComma\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartRemainingDataMapping">',
     '<div class="divCellLeft">Remaining Data</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartRemainingDataMapping' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartTargetDataMapping">',
     '<div class="divCellLeft">Target Data</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartTargetDataMapping' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartGrandTotalMapping">',
     '<div class="divCellLeft">Grand Total Columns</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartGrandTotalMapping' onkeyup='validateText(this, \"NumbersandComma\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartScaleXLabel">',
     '<div class="divCellLeft">Scale-X Label</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartScaleXLabel' onkeyup='validateText(this, \"TitleText\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartScaleXLabelInfo">',
     '<div class="divCellLeft">Label Font</div>',
     '<div  class="divCellRight">',
     '<div>',
     "<input class='DivTextBoxVSmall' type='text' id='ChartScaleXLFont' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"2\");'/>",
     '<div class="LabelPropDiv">Series Font</div>',
     "<input class='DivTextBoxVSmall' type='text' id='ChartScaleXIFont' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"2\");'/>",
     '<div class="LabelPropDiv">Series Angle</div>',
     "<input class='DivTextBoxVSmall' type='text' id='ChartScaleXIAngle' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"2\");'/>",
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartScaleYLabel">',
     '<div class="divCellLeft">Scale-Y Label</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartScaleYLabel' onkeyup='validateText(this, \"TitleText\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divChartScaleYLabelInfo">',
     '<div class="divCellLeft">Label Font</div>',
     '<div  class="divCellRight">',
     '<div>',
     "<input class='DivTextBoxVSmall' type='text' id='ChartScaleYLFont' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"2\");'/>",
     '<div class="LabelPropDiv">Series Font</div>',
     "<input class='DivTextBoxVSmall' type='text' id='ChartScaleYIFont' onkeyup='validateText(this, \"OnlyNumbers\", false, \"-1\", \"2\");'/>",
     '</div>',
     '</div>',
     '</div>',


     '<div class="divRow hide" id="DivChartSliceColor">',
     '<div class="divCellLeft">Slice Color</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBoxSmall' id='ChartSliceColor' onkeyup='validateText(this, \"NumbersandComma\", true, \"-1\", \"-1\");'/>",
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,null);'/></div>",
     '</div>',
     '</div>',

     '<div class="divRow" id="DivChartSlicePattern">',
     '<div class="divCellLeft">Slice Pattern</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBoxSmall' id='ChartSlicePattern' onkeyup='validateText(this, \"NumbersandComma\", true, \"-1\", \"-1\");'/>",
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Pattern Picker' alt='Pattern Picker' onclick='loadPatternPicker(this,null);'/></div>",
     '</div>',
     '</div>',

     // Funnel Chart
	 '<div class="divRow hide"  id="divChartSelectFunnel">',
     '<div class="divCellLeft">Funnel Chart Count</div>',
     '<div  class="divCellRight">',
     "<select class='DivDropdown' id='ChartFunnelCount_DD' onChange='funnelChartCount_DD_Changed(this);'>",
     '</select>',
     '</div>',
     '</div>',

	 // Column Chart
	 // Row Labels
	 '<div class="divRow hide"  id="divRowLabels">',
     '<div class="divCellLeft">Row Labels</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='RowLabelDataMapping' onkeyup='validateText(this, \"CommaText\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',
	//Column Label
	'<div class="divRow hide"  id="divColumnTitle">',
     '<div class="divCellLeft">Column Title</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtColumnTitle' onkeyup='validateText(this, \"CommaText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

	//Top Label
	'<div class="divRow hide"  id="divTopLabel">',
     '<div class="divCellLeft">Top Labels</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtTopLabel' onkeyup='validateText(this, \"CustomText\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divTopLabelIndex">',
     '<div class="divCellLeft">Top Label Data Index </div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtTopLabelIndex' onkeyup='validateText(this, \"NumbersandComma\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divTopLabelFormat">',
     '<div class="divCellLeft">Top Label Data Format </div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtTopLabelFormat' onkeyup='validateText(this, \"DataFormat\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',


      // Bottom Labels
	 '<div class="divRow hide"  id="divBottomLabels">',
     '<div class="divCellLeft">Bottom Labels</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='BottomLabelDataMapping' onkeyup='validateText(this, \"CommaText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

	// Bottom Label Data Index
	 '<div class="divRow hide"  id="divBottomLabelIndex">',
     '<div class="divCellLeft">Bottom Label Data Index</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtBottomLabelIndex' onkeyup='validateText(this, \"NumbersandComma\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divBottomLabelFormat">',
     '<div class="divCellLeft">Bottom Label Data Format</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtBottomLabelFormat' onkeyup='validateText(this, \"DataFormat\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

	// Target Label
	 '<div class="divRow hide"  id="divTargetLabels">',
     '<div class="divCellLeft">Target Labels</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='TargetLabelDataMapping' onkeyup='validateText(this, \"TitleText\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

	// Target Label Data Index
	'<div class="divRow hide"  id="divTargetLabelIndex">',
     '<div class="divCellLeft">Target Label Data Index</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtTargetLabelIndex' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow hide"  id="divTargetLabelFormat">',
     '<div class="divCellLeft">Target Label Data Format</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtTargetLabelFormat' onkeyup='validateText(this, \"DataFormat\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

	// Key Metric Index
	'<div class="divRow hide"  id="divKeyMetricIndex">',
     '<div class="divCellLeft">Key Metric Index</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtKeyMetricIndex' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',
     // Chart Legend Index
     '<div class="divRow hide"  id="divChartLegendIndex">',
     '<div class="divCellLeft">Legend Index</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtLegendIndex' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

	// Divider Index
	'<div class="divRow hide"  id="divDividerIndex">',
     '<div class="divCellLeft">Divider Index</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='txtDividerIndex' onkeyup='validateText(this, \"NumbersandComma\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

	// Legends
	 '<div class="divRow hide"  id="divLegends">',
     '<div class="divCellLeft">Legends</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='LegendDataMapping' onkeyup='validateText(this, \"CommaText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

	 /****************RT*************************/
	 '<div class="divRow hide" id="DivTitleBackgroundColor">',
     '<div class="divCellLeft">Title Background Color</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBoxSmall' id='TitleBackgroundColor' onkeyup='validateText(this, \"NumbersandComma\", true, \"-1\", \"-1\");'/>",
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,null);'/></div>",
     '</div>',
     '</div>',

	 '<div class="divRow hide"  id="divTitleMeasureDataMapping">',
     '<div class="divCellLeft">Title Column Mapping</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='TitleMeasureDataMapping' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

	 '<div class="divRow hide"  id="divTitleLabelDataFormat">',
     '<div class="divCellLeft">Title Data Format</div>',
     '<div  class="divCellRight">',
    '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='TitleLabelDataFormat' >",//onChange='validateDropdown(this);'
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     /****************RT*************************/
     '<div class="divRow" id="DivChartDrillDownURL">',
     '<div class="divCellLeft">Drill Down URL</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='ChartDrilldownURL' onkeyup='validateText(this, \"UrlCombo\", false, \"-1\", \"-1\");'></textarea>",
     '</div>',
     '</div>',

     '<div class="divRow" id="DivChartDrillDownType">',
     '<div class="divCellLeft">Drill Down Type</div>',
     '<div  class="divCellRight">',
      '<div class="DivDropdown_Image">',
      '<select class="DivDropdown" id="ChartDrilldownType" >',
     '</select>',
     '</div>',
     '</div>',
     '</div>',

	'<div class="divRow hide">',
     '<div class="divCellLeft">Enable Overlay</div>',
    '<div class="divCellRight"><input class="DivCheckBox OverlayChkbx" onclick="toggleOverlay(this, 1,0)" type="checkbox" value="toggleOverlay">Yes</div>',
     '</div>',
     // Todo: Sudhir
      '<div id="FunnelChartDiv">',
     '<div id="ChartTitleSlidingDiv">',
     '<div class="SwapChart_Left"><img src="' + webAPIurl + '@LayoutPath/Images/Swap_Left_Black.png" class="btn_Chart_Swap_Left" title="Previous Grid Configuration" alt="Previous" /></div>',
     '<div id="CurrentChartStatus">Part - 1 Configuration</div>',
     '<div class="SwapChart_Right"><img src="' + webAPIurl + '@LayoutPath/Images/Swap_Right_Black.png" class="btn_Chart_Swap_Right" title="Next Grid Configuration" alt="Next" /></div>',
     '</div>',
     '<div id="FixedChartVisualizer">',
	 '<div id="ChartFunnelSlidingDiv"></div></div></div>',

     '</div>',
     '</div>',

     /*********List Div**************/
     '<div class="SelectedShowDiv" id="ListDiv">',
     '<div class="divTable" id="ListTileConfiguration">',

     '<div class="divRow">',
	 '<div class="divCellLeft">Layout</div>',
	 '<div  class="divCellRight">',
	 '<div class="layoutSelector_Image">',
	 '<select class="layoutSelector" id="listLayoutSelector" name="List" >',
	 '<option value="1by1">1 X 1</option>',
	 '<option value="2by1">2 X 1</option>',
	 '<option value="2by2">2 X 2</option>',
	 '<option value="4by2">4 X 2</option>',
	 '<option value="8by2">8 X 2</option>',
     '</select>',
	 '</div>',
	 '</div>',
	 '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Position </div>',
     '<div  class="divCellRight">',
     "<input class='divTilePosition' type='text' id='listTilePosition'onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',


     '<div class="divRow hide" id="divRow_ListType">',
     '<div class="divCellLeft">Type</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_List_Image">',
     '<select class="DivDropdownMini" id="ListTypeDD" onChange="ListType_DD_Changed();">',
     '</select>',
     '</div>',
     '</div>',
     '</div>',

      '<div class="divRow" id="divPortfolio">',
     '<div class="divCellLeft">Portfolio</div>',
     '<div  class="divCellRight">',
    '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ListPortfolio_DD' onChange='changeConnectionStringsVisibility(this);validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

	 '<div class="divRow" id="divConnectionStringType">',
     '<div class="divCellLeft">Data Connection</div>',
     '<div  class="divCellRight">',
    '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ListConnectionStringType_DD' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     //Added for custom connection feature
     '<div class="hide" id="CustomConnectionConfiguration_List">',
         '<div class="divRow">',
            '<div class="divCellLeft">Connection Type</div>',
            '<div class="divCellRight">',
             '<div class = "DivDropdown_Image">',
                '<div class = "DivDropdown_Image">',
                    '<select class="DivDropdown" id="ConnectionType_DD_List" onchange="validateConnectionTypeDropdown(this);">',
                    '</select>',
                '</div>',
             '</div>',
             '</div>',
     '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft">New Connection Name</div>',
            '<div class="divCellRight">',
                '<input class="DivTextBox" id="CustomConnectionConfig_List" type="text" onkeyup="validateCustomConnectionFriendlyName(this)">',
            '</div>',
         '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft">New Connection String</div>',
            '<div class="divCellRight">',
                "<input class='DivTextBox' id='CustomConnectionNameConfig_List' type='text' onkeyup='validateCustomConnectionParameter(this,\"ConnectionType_DD_List\")'>",
            '</div>',
         '</div>',
         '<div class="divRow hide" id="CustomConnectionStatusSection_List">',
            '<div class="divCellLeft"></div>',
            '<div class="divCellRight">',
                '<div id="CustomConnectionStatus_List" class="divRow hide"></div>',
            '</div>',
         '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft"></div>',
            '<div class="divCellRight">',
                "<div class='rt-congigPopup-btn' id='BtnValidateCustomConnection_List' onclick='validateCustomConnection(this,\"ConnectionType_DD_List\",\"CustomConnectionConfig_List\",\"CustomConnectionNameConfig_List\",\"No\");'>Validate </div>",
            '</div>',
         '</div>',
     '</div>',
     //End of custom connection feature

     '<div class="divRow"  id="divListTitle">',
     '<div class="divCellLeft">List Title</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ListTitle' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow"  id="divListDDLink">',
     '<div class="divCellLeft">Data Dictionary Link</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ListDDLink' value='' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow" id="DivListBgColorPicker">',
     '<div class="divCellLeft">Background Color</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="ListBgColor" readonly=true onkeyup="validateText(this, \"TitleText\", true, \"-1\", \"-1\");"/>',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"ListBgColor\");'/></div>",
     '</div>',
     '</div>',

     '<div class="divRow hide" id="DivListTextColorPicker">',
     '<div class="divCellLeft">Text Color</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="ListTextColor" readonly=true onkeyup="validateText(this, \"TitleText\", true, \"-1\", \"-1\");"/>',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"ListTextColor\");'/></div>",
     '</div>',
     '</div>',





     //'<div class="divRow" id="divListConnection_DD">',
     //'<div class="divCellLeft">Connection</div>',
     //'<div  class="divCellRight">',
     //"<select class='DivDropdown' id='ListConnection_DD' onChange='validateDropdown(this);'>",
     //'</select>',
     //'</div>',
     //'</div>',

     '<div class="divRow"  id="divFilterAssociation1">',
     '<div class="divCellLeft">Filter Association</div>',
     '<div  class="divCellRight">',
     //"<input class='DivTextBox' type='text' id='DataFALink1' value='' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");'/>",
     '<select  class="multiValueFilterAssocation" id="multiValueListFilter" multiple="multiple">',
     '<option value="Demand Type">Demand Type</option>',
     '<option value="Product">Product</option>',
	 '<option value="Geography">Geography</option>',
	 '<option value="Sales Person">Sales Person</option>',
	 '<option value="Organization">Organization</option>',
     '<option value="Product Ownership">Product Ownership</option>',
	 '<option value="Area">Area</option>',
	 '<option value="Profile">Profile</option>',
	 '</select>',
     '</div>',
     '</div>',

        '<div class="divRow">',
    '<div class="divCellLeft">Advanced Query</div>',
    ' <div class="divCellRight">',
        '<input type="checkbox" class="DivTextArea switch" name="AdvancedListQuery" id="AdvancedListQuery" /> ',
        '<label for="AdvancedListQuery">OFF</label>',
     '</div>',
    '</div>',

     '<div class="divRow"  id="divListQuery">',
     '<div class="divCellLeft">Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='ListQuery' onChange='validateQuery(this,\"ListConnectionStringType_DD\");'></textarea>",
     '</div>',
     '</div>',

    '<div class="divRow">',
    '<div class="divCellLeft"></div>',
    ' <div class="divCellRight">',
          '<div class="rt-congigPopup-btn insertSampleQuery" id="insertSampleListQuery">Insert Sample Query</div>',
     '</div>',
    '</div>',

    '<div class="divRow hide">',
     '<div class="divCellLeft">Enable Overlay</div>',
    '<div class="divCellRight"><input class="DivCheckBox OverlayChkbx" onclick="toggleOverlay(this, 1,0)" type="checkbox" value="toggleOverlay">Yes</div>',
     '</div>',

	'<div class="divRow hide">',
     '<div class="divCellLeft">Run with Elevated Privileges</div>',
	    '<div class="divCellRight"><input class="DivCheckBox RunWithElevatedCheckbox" id="RunWithElevatedListCheckbox" onclick="openRunWithElevatedPopup(this, 3,0)" type="checkbox" value="IsRunWithElevated">Yes</div>',
     '</div>',

	'<div class="divRow hide">',
		    '<div class="divCellLeft hide">Service Account</div>',
		    '<div class="divCellRight hide"><div class="DivDropdown_Image"><select class="DivDropdown DisableInputControls" id="RunWithElevatedList" disabled="disabled" onchange="checkUserAccess(this);validateDropdown(this);"></select></div></div>',
     '</div>',






     '<div class="divRow"  id="divListDrillURL">',
     '<div class="divCellLeft">Drill Down URL</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ListDrillUrl' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

    '<div class="ListColumnConfig" id="ListColumnMapping">',
    '<div class="ListColumnSlidingDiv" id="ListColumnSlidingDiv">',
    '</div>',
    '</div>',

    '<div id="AddRemoveButtonsDiv">',
     '<div class="Headers_On" id="AddListColumn"  title="Add column"><img src="' + webAPIurl + '@LayoutPath/Images/Add_Black.png"/></div>',
     '<div class="Headers_On" id="RemoveListColumn" title="Remove column"><img src="' + webAPIurl + '@LayoutPath/Images/Minus_Black.png"/></div></div>',
     '<div class="clear"></div>',

     '</div>',
     '</div>',

	/* Free Text */
	 '<div class="SelectedShowDiv" id="FreeTextDiv">',
     '<div class="divTable" id="FreeTextTileConfiguration">',

     '<div class="divRow">',
	 '<div class="divCellLeft">Layout</div>',
	 '<div  class="divCellRight">',
	 '<div class="layoutSelector_Image">',
	 '<select class="layoutSelector" id="freeTextLayoutSelector" name="FreeText" >',
     '<option value="1by1">1 X 1</option>',
     '<option value="2by1">2 X 1</option>',
     '<option value="2by2">2 X 2</option>',
     '<option value="4by2">4 X 2</option>',
     '<option value="8by2">8 X 2</option>',
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divRow">',
     '<div class="divCellLeft">Position </div>',
     '<div  class="divCellRight">',
     "<input class='divTilePosition' type='text' id='freeTextTilePosition'onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow"  id="divFreeTextTitle">',
     '<div class="divCellLeft">Title</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='FreeTextTitle' onkeyup='validateText(this, \"TitleText\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow"  id="divFreeTextDDLink">',
     '<div class="divCellLeft">Data Dictionary Link</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='FreeTextDDLink' value='' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divRow" id="DivFreeTextColorPicker">',
     '<div class="divCellLeft">Background Color</div>',
     '<div  class="divCellRight">',
     '<input type="text" class="DivTextBoxSmall" id="FreeTextColorPicker" readonly=true/>',
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"FreeTextColorPicker\");'/></div>",
     '</div>',
     '</div>',


     '<div class="divRow"  id="divFreeTextContent">',
     '<div class="divCellLeft">HTML Content</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivHtmlTextArea' id='FreeTextContent'></textarea>",
     '</div>',
     '</div>',

     '</div>',
     '</div>',


	/* Grid Layout */


	 '<div class="SelectedShowDiv" id="GridDiv">',
	 '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">No of Grids</div>',
     '<div  class="divGridCommonRight">',
     '<div class="DivDropdown_Mini_Grid_Image">',
     '<select class="DivGridDropdownMini" id="GridCount_DD" onChange="gridCount_DD_Changed(this)">',
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Grid Display State</div>',
     '<div  class="divGridCommonRight">',
     '<div class="DivDropdown_Mini_Grid_Image">',
     '<select class="DivGridDropdownMini" id="GridDisplayState" onchange="validateDropdown(this)">',
     '</select>',
     '</div>',
     '</div>',
     '</div>',

   '<div class="divRow">',
     '<div class="divCellLeft">Position </div>',
     '<div  class="divCellRight">',
     "<input class='divTilePosition' type='text' id='gridTilePosition'onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',


     '<div class="clear"></div>',
     '<hr class="seperator"></hr>',

     '<div id="GridTitleSlidingDiv">',
     '<div class="SwapGrid_Left"><img src="' + webAPIurl + '@LayoutPath/Images/Swap_Left_Black.png" class="btn_Grid_Swap_Left" title="Previous Grid Configuration" alt="Previous" /></div>',
     '<div id="CurrentGridStatus">Grid - 1 Configuration</div>',
     '<div class="SwapGrid_Right"><img src="' + webAPIurl + '@LayoutPath/Images/Swap_Right_Black.png" class="btn_Grid_Swap_Right" title="Next Grid Configuration" alt="Next" /></div>',
     '</div>',


     '<div id="FixedGridVisualizer">',
     '<div id="GridSlidingDiv"></div></div>',
     '<hr class="seperator"></hr>',
   // '<div class="Headers_On" id="gridSave_Btn"  title="Save Configuration"><img src="@LayoutPath/Images/Save_Black.png"/></div>',
   // '<div class="Headers_On" id="gridReset_Btn"  title="Reset Configuration"><img src="@LayoutPath/Images/Reset_Black.png"/></div></div>',
     '</div>',

	 '</div>',


     '</div>',
      '</div>',
     '<hr class="seperator"></hr>',
     '<div id="FooterDiv">',
     '<input type="button" value="Save" class="Headers_On UIButton ApplyButton" id="Save_Btn" onclick="checkConnection();" title="Save Configuration" />',
     '<input type="button" value="Reset" class="Headers_On UIButton CancelButton" id="Reset_Btn" onclick="clearConfigurationData();" title="Reset Configuration" />',
     '<input type="button" value="Save" class="Headers_On UIButton ApplyButton" id="gridSave_Btn" title="Save Configuration" />',
     '<input type="button" value="Reset" class="Headers_On UIButton CancelButton" id="gridReset_Btn" onclick="clearConfigurationData();" title="Reset Configuration"/>',
     '<input type="button" value="Delete" class="Headers_On UIButton DeleteButton" id="TileDelete_Btn" style="display:none;" onclick="deleteTileFromConfig(' + "'" + tileID + "'" + ');" title="Delete Tile" />',
'</div>',
    ];


    //Bind entire HTML content to the ConfigDiv element
    var configDiv = $('#Config-box');
    configDiv.empty();
    var Html = createNewRule(11, '', '', '', LayoutPath, 1)
        , Index = configDivHTML.indexOf('@StopLightRule1');
    configDivHTML[Index] = Html;
    Html = createNewRule(21, '', '', '', LayoutPath, 1);
    Index = configDivHTML.indexOf('@StopLightRule2');
    configDivHTML[Index] = Html;
    Html = createNewRule(31, '', '', '', LayoutPath, 1);
    Index = configDivHTML.indexOf('@StopLightRule3');
    configDivHTML[Index] = Html;
    $(configDivHTML.join('').split('@LayoutPath').join(LayoutPath)).appendTo(configDiv);
    selectedTileTypeValue = "Data";

    //Render Layout Selector
    renderLayoutSelector();

    //Fade in the Popup
    configDiv.fadeIn(300);

    //Set the center alignment padding + border see css style
    var popMargTop = (configDiv.height() + 24) / 2;
    var popMargLeft = (configDiv.width() + 24) / 2;
    configDiv.css({
        'margin-top': -popMargTop,
        'margin-left': -popMargLeft
    });

    // Add mask to body of webpage and display the Configuration Editor
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
    //configDiv.show();

    // Bind click event for closing the configuration editor and removing mask
    $('.close').click(function () {
        $('#mask , .Config-popup').fadeOut(300, function () {
            $('#mask').remove();
        });
    });

    // Bind click event for the adding column for list elements 
    $('#AddListColumn').click(function () {
        totalListColumns++;   // increment the total columns variable
        addListColumns(totalListColumns); // call the addListColumns() for adding the list column 
        updateListElements();  // call the updateListElements() to update the element list array
        bindDropdown(eleListFormat_DD[totalListColumns], gridColumnFormatValues);
        $('#RemoveListColumn').show();
    });

    // Bind click event for the removing column for list elements 
    $('#RemoveListColumn').click(function () {
        if (totalListColumns === 1) { // check for the last column in the list
            $('#RemoveListColumn').hide(); // hide the remove button 
        }
        $('#ListColumn-C' + totalListColumns).remove();  // remove the last column in the list
        totalListColumns--; // decrement the totalListColumns variable
    });

    $('#gridSave_Btn').click(function () {
        //if (!curGrid) {
        //var splitURL = window.location.pathname.split("/");
        //reportName = splitURL[splitURL.length - 1].split(".")[0];
        //var i;
        //siteName = '';
        //for (i = 2; i < (splitURL.length - 3) ; i++) {
        //    siteName += splitURL[i];
        //    siteName += '/'
        //}
        //siteName += splitURL[i];
        var numberOfTilesInSection = $("#" + reportingTemplateSectionID + " .tile").length + $("#" + reportingTemplateSectionID + " .GridContainer").length;
        var presentTileID = ++numberOfTilesInSection, tileObject = {};
        targetID = $("#gridSave_Btn").attr("targetId");
        if (targetID === "") {
            targetID = reportName + "_" + reportingTemplateSectionID + "_" + "tile" + presentTileID;
        }
        bGridInEditMode = false;

        var curGrid = { "WebPartId": targetID }
        //}


        // Changes for custom connection. Requests for custom connection string validation, if user has selected option to create new connection
        // Updated existing flow
        // Iterate all grid and check if that has custom connection. If yes, validate them
        gridElementCustomConnectionCheck.length = 0;
        gridCustomConnectionCount = 0;
        gridCustomConnectionSuccessCount = 0;
        gridCustomConnectionCallBackCount = 0;

        for (var counter = 0; counter <= totalGridCount; counter++) {
            var oDataConnection = $("#GridConnectionStringType_DD" + counter);
            if (oDataConnection.length) {
                var sSelectedDataConnection = oDataConnection.val();
                if ("NewConnectionRequest" === sSelectedDataConnection) {
                    gridCustomConnectionCount++;
                    var sValidator = "BtnValidateCustomConnection_Grid" + counter;
                    gridElementCustomConnectionCheck.push(sValidator);
                }
            }
        }

        if (0 === gridCustomConnectionCount) {
            bCustomConnectionValidation = false;
            validateGridConfigForm();
            if (isFormValid) {
                saveGridConfigurationData(curGrid);
            }
        }
        else {
            // Request for validation
            bCustomConnectionValidation = true;
            // validate the configuration form
            validateGridConfigForm();
        }
        //var oDataConnection = $("#GridConnectionStringType_DD" + currentGridDisplayed);
        //if (oDataConnection.length) {
        //    var sSelectedDataConnection = oDataConnection.val();
        //    if ("NewConnectionRequest" === sSelectedDataConnection) {
        //        var sValidator = "BtnValidateCustomConnection_" + selectedTileTypeValue + currentGridDisplayed;
        //        if ($('#' + sValidator).length) {
        //            bCustomConnectionValidation = true;
        //            var updatedOnClickAttribute = $('#' + sValidator).attr('onclick').replace("No", "Yes");
        //            $('#' + sValidator).attr('onclick', updatedOnClickAttribute).click();
        //        }
        //    }
        //    else {
        //        saveGridConfigurationData(curGrid);
        //    }
        //}
        // End of custom connection changes
        var editDiv = document.createElement("div");
        editDiv.className = "bg_GridEdit";
        editDiv.setAttribute("onclick", "editGrid($(this))");
        $("#" + curGrid.WebPartId).prepend($(editDiv));
        //saveGridConfigurationData(curGrid ? curGrid : null);
        //Implementing focusing logic 
        focusOnDeselectedItem();
    });

    // $('#gridReset_Btn').click(function () {
    //    clearGridConfigurationData(curGrid);
    //});


    //initializeGridConfigElements();
    //addGridConfiguration("_GridConfig_1");
}

function bindSwitchClick() {
    var filterDropDownID = "";
    $(".switch").each(function () {
        $(this).unbind("click");
        $(this).click(function () {
            if ($(this).val() === "ON") {
                $(this).val("OFF");
                $(this).siblings("label").html("OFF");
                filterDropDownID = $(this).attr("id");
                enableDisableFilterAssociation("OFF", filterDropDownID);
            } else {
                var element = $(this).parent().parent().prev();
                element.find(".ms-drop").find("[name='selectItem']").each(function () {
                    this.checked = false;
                });
                element.find(".ms-drop .ms-select").click();
                $(this).val("ON");
                $(this).siblings("label").html("ON");
                filterDropDownID = $(this).attr("id");
                enableDisableFilterAssociation("ON", filterDropDownID);
            }
        });
        $(this).val("OFF");
    });
}
function bindElevatedPrivilegesClick() {
    $(".RunWithElevatedCheckbox").each(function () {
        $(this).unbind("change");
        $(this).change(function () {
            if (!($(this).prop("checked"))) {
                $(".securityWarningMessage").remove();
            }
        });
    });
}
function bindInsertSampleQueryClick() {
    $(".insertSampleQuery").unbind("click");
    $(".insertSampleQuery").each(function () {
        $(this).click(function () {
            insertSampleQuery($(this));
        });
    });

}
function enableDisableFilterAssociation(sAdvancedQueryOption, filterDropDown) {
    var isEnabled = (sAdvancedQueryOption.toLowerCase() === "on") ? true : false
    , aInputs;
    if (filterDropDown === "AdvancedDataQueryNav") {
        selectedTileTypeValue = "Data";
    }
    switch (selectedTileTypeValue) {
        case "Data": {
            if (filterDropDown === "AdvancedDataQueryNav") {
                aInputs = $("#rt-nav-config-filterAssociation").siblings(".ms-parent").find("input");
            } else {
                aInputs = $("#multiValueDataFilter").siblings(".multiValueFilterAssocation").find("input");
            }
            break;
        }
        case "Chart": {
            aInputs = $("#multiValueChartFilter").siblings(".multiValueFilterAssocation").find("input");
            break;
        }
        case "List": {
            aInputs = $("#multiValueListFilter").siblings(".multiValueFilterAssocation").find("input");
            break;
        }
        case "Grid": {
            aInputs = $("#" + filterDropDown).parent().parent().siblings(".gridFilterAssociation").children().children(".multiValueFilterAssocation").find("input");
            break;
        }
    }
    if (aInputs.length > 0) {
        aInputs.each(function () {
            $(this).attr("disabled", isEnabled)
        });
    }
}
function insertSampleQuery(oInsertSampleQuery) {
    var QueryTypeId = oInsertSampleQuery.attr("id").substr(12)
    , sAdvancedQuerySwitchVal = $("#Advanced" + QueryTypeId).val().toUpperCase()
    , sSelectedConnection
    , sSampleQueryType = sAdvancedQuerySwitchVal
    , sSampleQueryTile
    , isValid;
    switch (selectedTileTypeValue) {
        case 'Grid':
            {
                isValid = validateDropdown($("#" + QueryTypeId.replace("Query-G", "ConnectionStringType_DD")));
                sSelectedConnection = $("#" + QueryTypeId.replace("Query-G", "ConnectionStringType_DD")).val();
                sSampleQueryTile = "GridTile";
                break;
            }
        case 'Data': {
            isValid = validateDropdown($("#DataConnectionStringType_DD"));
            sSelectedConnection = $("#DataConnectionStringType_DD").val();
            sSampleQueryTile = "DataTile";
            break;
        }
        case 'Chart': {
            isValid = validateDropdown($("#ChartConnectionStringType_DD"));
            if (isValid) {
                isValid = validateDropdown($("#TileChartType_DD"));
            }
            sSelectedConnection = $("#ChartConnectionStringType_DD").val();
            sSampleQueryTile = $("#TileChartType_DD").val();
            break;
        }
        case 'List': {
            isValid = ($("#ListConnectionStringType_DD"));
            sSelectedConnection = $("#ListConnectionStringType_DD").val();
            sSampleQueryTile = "ListTile"
            break;
        }
        default: console.log("Invalid Sample Query Request");
            break;
    }
    if (isValid) {
        if (sSelectedConnection.toLowerCase().indexOf("cube") >= 0) {
            sSampleQueryType += "CUBE";
        } else {
            sSampleQueryType += "DB";
        }
        $("#" + QueryTypeId).val(oDicSampleQuery[sSampleQueryTile][sSampleQueryType]);
    }
}
// Function to hide/show tile when 2x1 tile is enabled or disabled
function enableTiles(element) {
    if (element.checked) {
        $("#DataQuery4").removeAttr("disabled").removeClass("DisableInputControls");
        $("#DataExecutionOrder4").removeAttr("disabled").removeClass("DisableInputControls");
        $("#TileDataFormat_DD4").removeAttr("disabled").removeClass("DisableInputControls");
        $("#DataSuffix4").removeAttr("disabled").removeClass("DisableInputControls");
        $("#DynamicSuffix4").removeAttr("disabled").removeClass("DisableInputControls");
        $("#dataLayoutSelector").val("2by1");
    }
    else {
        $("#DataQuery4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "").removeClass("invalidElement");
        $("#DataExecutionOrder4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
        $("#TileDataFormat_DD4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "").removeClass("invalidElement");;
        $("#DataSuffix4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
        $("#DynamicSuffix4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
    }
}

// Function to hide/show tile when 2x1 navigation tile is enabled or disabled
function enableNavTiles(element) {
    if (element.checked) {
        $("#rt-navigation-configPopup-DataQuery4").removeAttr("disabled").removeClass("DisableInputControls");
        $("#rt-navigation-configPopup-DataExecutionOrder4").removeAttr("disabled").removeClass("DisableInputControls");
        $("#rt-navigation-configPopup-TileDataFormat_DD4").removeAttr("disabled").removeClass("DisableInputControls");
        $("#rt-navigation-configPopup-DataSuffix4").removeAttr("disabled").removeClass("DisableInputControls");
        $("#rt-navigation-configPopup-DynamicSuffix4").removeAttr("disabled").removeClass("DisableInputControls");
        $("#rt-navigation-configPopup-dataLayoutSelector").val("2by1");
    }
    else {
        $("#rt-navigation-configPopup-DataQuery4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "").removeClass("invalidElement");
        $("#rt-navigation-configPopup-DataExecutionOrder4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
        $("#rt-navigation-configPopup-TileDataFormat_DD4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
        $("#rt-navigation-configPopup-DataSuffix4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
        $("#rt-navigation-configPopup-DynamicSuffix4").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
    }
}

// report configuration pop-up 
function openRunWithElevatedPopup(element, runWithElevatedCheckbox, flagEditMode) {
    // flagEditMode indicates coming the object as this or Jquery object 
    var runWithSelectorID = "";
    var isCheckedStatus = false;
    if (flagEditMode === 0) {
        isCheckedStatus = element.checked;
    }
    else {
        isCheckedStatus = element.is(":checked");
    }

    switch (runWithElevatedCheckbox) {
        case 1:
            runWithSelectorID = "#RunWithElevatedData";
            break;

        case 2:
            runWithSelectorID = "#RunWithElevatedCharts";
            break;

        case 3:
            runWithSelectorID = "#RunWithElevatedList";
            break;

        case 4:
            var gridIndex = "";
            if (flagEditMode === 0) {
                gridIndex = element.id.substr(element.id.indexOf('-G') + 2)
            }
            else {
                gridIndex = element.selector.substr(element.selector.indexOf('-G') + 2);
            }
            runWithSelectorID = "#RunWithElevatedGrid-G" + gridIndex;
            break;
    }


    $(runWithSelectorID).empty();
    if (isCheckedStatus) {
        // $("#rt-report-runWithElevatedPopup-overlay").show();

        $(runWithSelectorID).removeAttr("disabled").removeClass("DisableInputControls");

        $(runWithSelectorID).append('<option value="0">------ Select ------</option>');
        var serviceAccounts = JSON.parse(dicMiscItems.ServiceAccounts);
        for (var iServiceIndex = 0; iServiceIndex < serviceAccounts.length; iServiceIndex++) {
            if (serviceAccounts[iServiceIndex] === "redmond\\esrfssys") {// && isPresentGroup) {
                var indexofServiceAccount = serviceAccounts[iServiceIndex].indexOf("\\");
                var valueOfServiceAccount = serviceAccounts[iServiceIndex];
                var serviceAccountValues = serviceAccounts[iServiceIndex].substring(indexofServiceAccount + 1).trim();
                $(runWithSelectorID).append('<option value="Redmond\\ReportingTemplateElevatedAppPool">' + serviceAccountValues + '</option>');
            } else if (serviceAccounts[iServiceIndex] === "redmond\\esrfssys") {

                var indexofServiceAccount = serviceAccounts[iServiceIndex].indexOf("\\");
                var valueOfServiceAccount = serviceAccounts[iServiceIndex];
                var serviceAccountValues = serviceAccounts[iServiceIndex].substring(indexofServiceAccount + 1).trim();
                $(runWithSelectorID).append('<option value="Redmond\\ReportingTemplateElevatedRead">' + serviceAccountValues + '</option>');
            }
        }
    }

    else {
        $(runWithSelectorID).attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
        //toggleSecurityWarning("", element, true);
        $(element).parent().parent().next().next('.securityWarningMessage').hide();
    }
}


function openNavRunWithElevatedPopup(element) {

    var runWithSelectorID = $(element).parent().parent().next().children(".rt-navigation-configPopup-input").children("select")[0].id;
    $("#" + runWithSelectorID).empty();
    if (element.checked) {
        // $("#rt-report-runWithElevatedPopup-overlay").show();

        $("#" + runWithSelectorID).removeAttr("disabled").removeClass("DisableInputControls");

        $("#" + runWithSelectorID).append('<option value="0">------ Select ------</option>');
        var serviceAccounts = JSON.parse(dicMiscItems.ServiceAccounts);
        for (var iServiceIndex = 0; iServiceIndex < serviceAccounts.length; iServiceIndex++) {
            if (serviceAccounts[iServiceIndex] === "redmond\\esrfssys") {// && isPresentGroup) {
                var indexofServiceAccount = serviceAccounts[iServiceIndex].indexOf("\\");
                var valueOfServiceAccount = serviceAccounts[iServiceIndex];
                var serviceAccountValues = serviceAccounts[iServiceIndex].substring(indexofServiceAccount + 1).trim();
                $("#" + runWithSelectorID).append('<option value="Redmond\\ReportingTemplateElevatedAppPool">' + serviceAccountValues + '</option>');
            } else if (serviceAccounts[iServiceIndex] === "redmond\\esrfssys") {

                var indexofServiceAccount = serviceAccounts[iServiceIndex].indexOf("\\");
                var valueOfServiceAccount = serviceAccounts[iServiceIndex];
                var serviceAccountValues = serviceAccounts[iServiceIndex].substring(indexofServiceAccount + 1).trim();
                $("#" + runWithSelectorID).append('<option value="Redmond\\ReportingTemplateElevatedRead">' + serviceAccountValues + '</option>');
            }
        }
    }
    else {
        $("#" + runWithSelectorID).attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
        $(element).parent().parent().next().next('.securityWarningMessage').hide();
    }
}
function runWithElevatedOKClick() {
    $("#RunWithElevated").removeAttr("disabled").removeClass("DisableInputControls");
    $("#rt-report-runWithElevatedPopup-overlay").hide();
}
function cancelRunWithElevatedPopup() {
    $("#DynamicRunWithElevated1")[0].checked = false;
    $("#rt-report-runWithElevatedPopup-overlay").hide();
    $("#RunWithElevated").attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
}

function enableSuffixFields(element, id) {
    if (element.checked) {
        $("#SuffixIndex" + id).removeAttr("disabled").removeClass("DisableInputControls");
        $("#DataIndex" + id).removeAttr("disabled").removeClass("DisableInputControls");
    }
    else {
        $("#SuffixIndex" + id).attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
        $("#DataIndex" + id).attr("disabled", "disabled").addClass("DisableInputControls").css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF').attr("Title", "");
    }
}

function initializeDataToControls() {

    // Initialize the global variables to defaults
    selectedTileTypeValue = "Data";
    dataTileSliderStatus = 1;
    showHideSlidingIcons();

    // Popout all the pushed elements before pushing data into the arrays
    for (var i = 1 ; i <= 3; i++) {
        eleDataDisplayTextArr.pop();
        eleDataDDLink.pop();
        eleDataQueryArr.pop();
        eleTileDataFormat_DDArr.pop();
        eleDataColorPickerArr.pop();
        eleDataColorQueryArr.pop();
        eleDataTrendChkArr.pop();
        eleDataStopLightArray.pop();
        eledefaultColor.pop();
        eleDataTrendQueryArr.pop();
        eleDataTrendUpIconArr.pop();
        eleDataTrendDownIconArr.pop();
        eleDataTrendFlatArr.pop();
        eleDataIconChkArr.pop();
        eleDataIconPickerArr.pop();
        eleDataDrilldownURL.pop();
        eleDataExecutionOrder.pop();
        eleSupportingQuery.pop();
        eleSQExecutionOrder.pop();
        eleSessionName.pop();


    }
    eleStopLightRulesArray = [];

    eleStopLightColorsArray = [];
    eleStopLightIconsArray = [];
    elestopLightRuleCounter = [];


    // Initialize the element variables of data tiles by parsing the DOM structure
    eleDataTypeDD = $('#DataTypeDD');
    eleDataIntervalDD = $('#DataIntervalDD');
    eleDataConnection_DD = $('#DataConnectionStringType_DD');
    eleChartConnection_DD = $('#ChartConnectionStringType_DD');
    eleListConnection_DD = $('#ListConnectionStringType_DD');
    eleGridConnection_DD = $('#GridConnectionStringType_DD');
    eleColorPicker = $('#ColorPickerPopup');
    eleIconPicker = $('#IconPickerPopup');

    //: New Metadata feature Added
    try {
        eleChartLabelMetaDataProvidedFlag = $("#ChartLabelMetaDataProvidedFlag");
        eleChartLabelMetaDataCountPerItem = $("#ChartLabelMetaDataCountPerDataItem");
    }
    catch (e) {
        //Error while getting chart label metadata information
        log(e);
    }

    for (var i = 1 ; i <= 3; i++) {
        eleDataDisplayTextArr.push($('#DataDisplayText' + i));
        elestopLightRuleCounter.push($('#stopLightRuleCounter' + i));
        eleDataDDLink.push($('#DataDDLink' + i));
        eleDataQueryArr.push($('#DataQuery' + i));
        eleTileDataFormat_DDArr.push($('#TileDataFormat_DD' + i));
        eleDataColorPickerArr.push($('#DataColorPicker' + i));
        eleDataColorQueryArr.push($('#DataColorQuery' + i));
        eleDataTrendChkArr.push($('#DataTrendChk' + i));
        eleDataStopLightArray.push($('#DataStopLight' + i));
        eledefaultColor.push($('#defaultColor' + i));
        eleDataTrendQueryArr.push($('#DataTrendQuery' + i));
        eleDataTrendUpIconArr.push($('#DataTrendUp' + i));
        eleDataTrendDownIconArr.push($('#DataTrendDown' + i));
        eleDataTrendFlatArr.push($('#DataTrendFlat' + i));
        eleDataIconChkArr.push($('#DataIconChk' + i));
        eleDataIconPickerArr.push($('#DataIconPicker' + i));
        eleDataDrilldownURL.push($('#DataDrilldownURL' + i));
        eleDataExecutionOrder.push($('#DataExecutionOrder' + i));

    }
    for (var TileNo = 1 ; TileNo <= 3; TileNo++) {
        eleStopLightRulesArray.push($('#DataStopLightRule' + TileNo + '1'));
        eleStopLightColorsArray.push($('#DataStopLightColor' + TileNo + '1'));
        eleStopLightIconsArray.push($('#DataStopLightIcon' + TileNo + '1'));
    }

    eleRunWithElevatedPrivilages = $("#DynamicRunWithElevated1");
    eleRunWithElevatedPrivilageAccount = $("#RunWithElevated");

    // Initialize the element variables of charts by parsing the DOM structure
    eleChartColorQuery = $("#ChartColorQuery");
    eleTileChartType_DD = $('#TileChartType_DD');
    // eleChartConnection_DD = $('#ChartConnection_DD');
    eleChartPortfolio_DD = $('#ChartPortfolio_DD');
    eleChartConnectionString_DD = $('#ChartConnectionStringType_DD');
    eleDataPortfolio_DD = $('#DataPortfolio_DD');
    eleDataConnectionString_DD = $('#DataConnectionString_DD');
    eleListPortfolio_DD = $('#ListPortfolio_DD');
    eleListConnectionString_DD = $('#ChartConnectionStringType_DD');
    eleGridPortfolio_DD = $('#GridPortfolio_DD');
    eleGridMultiValueDataFilter_DD = $('#multiValueGridFilter');
    eleGridConnectionString_DD = $('#GridConnectionString_DD');
    eleNavConnectionString_DD = $('#rt-nav-config-dataSource');
    eleNavPortfolio_DD = $('#rt-nav-config-portfolio');
    eleChartTitle = $('#ChartTitle');
    eleChartDDLink = $('#ChartDDLink');
    eleChartDataLabl = $('#ChartDataLabl');
    eleChartLineCount = $('#ChartLineCount');
    eleChartSubTitle = $('#ChartSubTitle');
    eleChartColorPicker = $('#ChartColorPicker');
    eleChartPatternPicker = $('#ChartSlicePattern');
    eleChartQuery = $('#ChartQuery');
    eleChartValueQuery = $("#ChartValueQuery");
    eleChartDataFormat_DD = $('#ChartDataFormat_DD');
    eleChartValueFormat_DD = $('#ChartValueFormat_DD');

    eleChartTooltipFormat = $('#ChartTooltipFormat');

    eleChartLabelFormat = $('#ChartLabelFormat');



    eleChartLegend_DD = $('#ChartLegend_DD');
    eleChartLegendPos_DD = $('#ChartLegendPos_DD');
    // Manual Change by sudhir
    eleChartRowLabels = $('#RowLabelDataMapping');

    eleColumnTitle = $('#txtColumnTitle');
    eleTopLabels = $('#txtTopLabel');
    eleTopLabelIndex = $('#txtTopLabelIndex');
    eleTopLabelFormat = $('#txtTopLabelFormat');
    eleBottomLabelIndex = $('#txtBottomLabelIndex');
    eleBottomLabelFormat = $('#txtBottomLabelFormat');
    eleChartTargetLabelIndex = $('#txtTargetLabelIndex');
    eleChartTargetLabelFormat = $('#txtTargetLabelFormat');
    eleKeyMetricIndex = $('#txtKeyMetricIndex');
    eleLegendIndex = $("#txtLegendIndex");
    eleDividerIndex = $('#txtDividerIndex');

    // Funnel Chart
    eleChartFunnelCount_DD = $('#ChartFunnelCount_DD');
    // Funnel Chart ends
    eleChartBottomLabels = $('#BottomLabelDataMapping');
    eleChartTargetLabels = $('#TargetLabelDataMapping');
    eleChartLegends = $('#LegendDataMapping');

    eleChartValueBox = $('#ChartValueBox');


    //PC: Added New Guide Feature
    eleTileChartOrientation_DD = $('#TileChartOrientation_DD');
    eleChartIsStacked = $('#ChartIsStacked');
    eleChartHasTarget = $('#ChartHasTarget');
    eleChartHorizontalGuide = $('#ChartHorizontalGuide');
    eleChartVerticalGuide = $('#ChartVerticalGuide');

    eleChartDataMapping = $('#ChartDataMapping');
    eleChartResultOrder_DD = $('#ChartResultOrder_DD');
    eleChartRemainingDataMapping = $('#ChartRemainingDataMapping');
    eleChartTargetDataMapping = $('#ChartTargetDataMapping');
    eleChartXLabelMapping = $('#ChartXLabelMapping');
    eleChartSliceColor = $('#ChartSliceColor');
    eledataTilePosition = $('#dataTilePosition');
    eleChartSlicePattern = $('#ChartSlicePattern');
    eleTileChartAspect_DD = $('#TileChartAspect_DD');
    elePortfolio_DD = $('#Portfolio_DD');
    eleConnectionStringType_DD = $('#ConnectionStringType_DD');
    eleDataPortfolio_DD = $('#DataPortfolio_DD');
    eleDataConnectionStringType_DD = $('#DataConnectionStringType_DD');
    eleChartPortfolio_DD = $('#ChartPortfolio_DD');
    eleChartConnectionStringType_DD = $('#ChartConnectionStringType_DD');
    eleListPortfolio_DD = $('#ListPortfolio_DD');
    eleListConnectionStringType_DD = $('#ListConnectionStringType_DD');
    eleGridPortfolio_DD = $('#GridPortfolio_DD');
    eleGridConnectionStringType_DD = $('#GridConnectionStringType_DD');
    eleChartScaleXLabel = $('#ChartScaleXLabel');
    eleChartScaleYLabel = $('#ChartScaleYLabel');
    eleChartScaleXLFont = $('#ChartScaleXLFont');
    eleChartScaleXIFont = $('#ChartScaleXIFont');
    eleChartScaleXIAngle = $('#ChartScaleXIAngle');
    eleChartScaleYLFont = $('#ChartScaleYLFont');
    eleChartScaleYIFont = $('#ChartScaleYIFont');
    eleChartDrilldownURL = $('#ChartDrilldownURL');
    eleChartGrandTotalMapping = $('#ChartGrandTotalMapping');
    /*******************RT***********************/
    eleChartTitleBackgroundColor = $('#TitleBackgroundColor');
    eleChartDrillDownType = $('#ChartDrilldownType');
    // Funnel Chart
    eleChartSelectFunnelChart = $('#ChartSelectFunnelChart');
    // Funnel Chart ends
    eleTitleMeasureDataMapping = $('#TitleMeasureDataMapping');
    eleTitleLabelDataFormat = $('#TitleLabelDataFormat');
    /*******************RT***********************/

    // Initialize the element variables of list by parsing the DOM structure
    eleListTitle = $('#ListTitle');
    eleListTypeDD = $("#ListTypeDD");
    eleListTextColor = $('#ListTextColor');
    eleListBgColor = $('#ListBgColor');

    enableDisableElements(eleListTextColor, false);
    eleListDDLink = $("#ListDDLink");
    //eleListConnection_DD = $('#ListConnection_DD');
    eleListPortfolio_DD = $('#ListPortfolio_DD');
    eleListConnectionString_DD = $('#ListConnectionStringType_DD');
    eleDataPortfolio_DD = $('#DataPortfolio_DD');
    eleDataConnectionString_DD = $('#DataConnectionStringType_DD');
    eleChartPortfolio_DD = $('#ChartPortfolio_DD');
    elechartTilePosition = $('#chartTileposition');
    eleChartConnectionString_DD = $('#ChartConnectionStringType_DD');
    eleGridPortfolio_DD = $('#GridPortfolio_DD');
    eleGridConnectionString_DD = $('#GridConnectionStringType_DD');
    eleListQuery = $('#ListQuery');
    eleListDrillUrl = $('#ListDrillUrl');


    // Initialize the element variables of FreeText by parsing the DOM Structure
    eleFreeTextTitle = $('#FreeTextTitle');
    eleFreeTextDDLink = $("#FreeTextDDLink");
    eleFreeTextColorPicker = $('#FreeTextColorPicker');
    eleFreeTextContent = $('#FreeTextContent');

    // Added for custom connection
    eleConnectionType_DD = $('#ConnectionType_DD_Data');
    eleChartConnectionType_DD = $('#ConnectionType_DD_Chart');
    eleListConnectionType_DD = $('#ConnectionType_DD_List');
    eleGridConnectionType_DD = $('#ConnectionType_DD_Grid');
    // End of custom connection

    //bindDropdown(eleListConnection_DD, connectionStringValues); // Bind the dropdown eleListConnection_DD with the array

    bindPortfoliosDropdown(eleDataPortfolio_DD, portfolioValues);
    bindPortfoliosDropdown(eleChartPortfolio_DD, portfolioValues);
    bindPortfoliosDropdown(eleListPortfolio_DD, portfolioValues);
    bindPortfoliosDropdown(eleGridPortfolio_DD, portfolioValues);

    bindConnectionStringsDropdown(eleDataConnectionString_DD, connectionStringValues);
    bindConnectionStringsDropdown(eleChartConnectionString_DD, connectionStringValues);
    bindConnectionStringsDropdown(eleListConnectionString_DD, connectionStringValues);
    bindConnectionStringsDropdown(eleGridConnectionString_DD, connectionStringValues);

    initializeGridConfigElements();
    // Funnel Chart
    initializeChartConfigElements();
    // Funnel Chart ends
    bindSwitchClick();
    bindElevatedPrivilegesClick();
    bindInsertSampleQueryClick();
    //populateColumnControls('FirstLoad', '_GridConfig_1');

    //bindDropdown(eleListConnection_DD, connectionStringValues); // Bind the dropdown eleListConnection_DD with the array

    // Added for custom connection. This will populate the connection type dropdown
    bindDropdown(eleConnectionType_DD, connectionTypeValues); // Bind the dropdown eleConnectionType_DD with the array for data section
    bindDropdown(eleChartConnectionType_DD, connectionTypeValues); // Bind the dropdown eleConnectionType_DD with the array for data section
    bindDropdown(eleListConnectionType_DD, connectionTypeValues); // Bind the dropdown eleConnectionType_DD with the array for data section
    //bindDropdown(eleGridConnectionType_DD, connectionTypeValues); // Bind the dropdown eleConnectionType_DD with the array for data section

    // End of custom connection

    for (var i = 0; i <= defaultListColumns; i++) {// Add the default number of columns by calling the addListColumns()
        addListColumns(i);
    }
    totalListColumns = defaultListColumns; // Initializing the default value of column count to the totalListColumns variable
    updateListElements();
    for (var i = 0; i <= defaultListColumns; i++) {// Bind the totoal list elements with theire respective value arrays
        bindDropdown(eleListFormat_DD[i], gridColumnFormatValues);
    }

    // Hiding Live tile elements on intial load of form
    $('#SlidingIconsDiv').hide();
    $('#IntervalLbl').hide();
    eleDataIntervalDD.hide();

    // Slide tile to the Left on click of left navigation button
    $('.btn_Swap_Left').click(function () {
        $('#TileSlidingDiv').animate({
            left: '+=' + tileSlidingWidth
        }, animateSpeed, function () {
            // Animation complete.
        });
        // Decrement slider status counter and hide the navigation icons
        dataTileSliderStatus--;
        showHideSlidingIcons();
    });

    // Slide tile to the right on click of right navigation button
    $('.btn_Swap_Right').click(function () {
        $('#TileSlidingDiv').animate({
            left: '-=' + tileSlidingWidth
        }, animateSpeed, function () {
            // Animation complete.
        });

        // Increment slider status and hide the navigation icons
        dataTileSliderStatus++;
        showHideSlidingIcons();
    });

    // Function explicitly used to control the unwanted events while closing the colour and icon pickers
    $(document).click(function (e) {
        // Check the status for the colour picker and close if it is already open
        if (eleColorPicker.css('display') == 'block' || eleIconPicker.css('display') == 'block') {
            eleColorPicker.hide();
            eleIconPicker.hide();
            // Stops propagation of the unwanted calls raised by click events
            event.cancelBubble = true;
            if (event.stopPropagation) {
                event.stopPropagation();
            }
        }
        if (typeof elePatternPicker !== "undefined" && elePatternPicker.css('display') == 'block') {
            elePatternPicker.hide();
            // Stops propagation of the unwanted calls raised by click events
            event.cancelBubble = true;
            if (event.stopPropagation) {
                event.stopPropagation();
            }

        }
    });

    // Disable selected HTML controls for all tiles on default load 
    for (var TileNumber = 1; TileNumber <= 3; TileNumber++) {
        // Disable selected HTML controls for all tiles on default load 
        enableDisableElements(eleDataIconPickerArr[TileNumber - 1], false);
        enableDisableElements(eleDataTrendQueryArr[TileNumber - 1], false);
        enableDisableElements(eleDataTrendUpIconArr[TileNumber - 1], false);
        enableDisableElements(eleDataTrendDownIconArr[TileNumber - 1], false);
        enableDisableElements(eleDataTrendFlatArr[TileNumber - 1], false);
        // Disable all Third tile HTML controls on default load 
        if (TileNumber == 3) {
            enableDisableElements(eleDataDisplayTextArr[TileNumber - 1], false);
            enableDisableElements(eleDataDDLink[TileNumber - 1], false);
            enableDisableElements(eleDataQueryArr[TileNumber - 1], false);
            enableDisableElements(eleTileDataFormat_DDArr[TileNumber - 1], false);
            enableDisableElements(eleDataColorPickerArr[TileNumber - 1], false);
            enableDisableElements(eleDataColorQueryArr[TileNumber - 1], false);
            enableDisableElements(eleDataTrendChkArr[TileNumber - 1], false);
            enableDisableElements(eleDataStopLightArray[TileNumber - 1], false);
            enableDisableElements(eleDataIconChkArr[TileNumber - 1], false);


            enableDisableElements(eleStopLightRulesArray[TileNumber - 1], false);
            enableDisableElements(eleStopLightColorsArray[TileNumber - 1], false);
            enableDisableElements(eleStopLightIconsArray[TileNumber - 1], false);
            enableDisableElements(eleDataDrilldownURL[TileNumber - 1], false);
            enableDisableElements(eleDataExecutionOrder[TileNumber - 1], false);
        }
    }

    $('input:radio[name=ChartColorRbtn]')[0].checked = true;
    $('#DivChartColorQuery').hide();
    $('#DivChartColorPicker').show();

    // Binding all the chart dropdowns
    for (i = 1; i <= 3; i++) {
        //Bind the Data to the TileDataFormat Dropdown
        bindDropdown(eleTileDataFormat_DDArr[i - 1], tileDataFormatValues);

        // Check the Color radio button to default and hide the query textArea
        if (typeof ($('input:radio[name=DataColorRbtn' + i + ']')[0]) !== "undefined") {
            $('input:radio[name=DataColorRbtn' + i + ']')[0].checked = true;
        }
        $('#DivDataColorQuery' + i).hide();
    }
    bindDropdown($("#TileDataFormat_DD4"), tileDataFormatValues);
    bindDropdown(eleDataTypeDD, dataTypeValues); //Bind the Data to the DatatType Dropdown eg. {static and Live}
    bindDropdown(eleDataIntervalDD, dataTileIntervalValues);  //Bind the Data to the Interval Dropdown
    //bindDropdown(eleDataConnection_DD, connectionStringValues); //Bind the Data to the DataConnection Dropdown


    // Binding all the chart dropdowns
    eleTileChartType_DD.empty();
    //$.each(tileChartTileValues, function (key, value) {
    $.each(tileChartNonTileValues, function (key, value) {
        if (value.lastIndexOf('----------') > 0) { // Condition used to disable some options so that this act as a separator between existing values

            // Disable the options which doesn't require selection
            eleTileChartType_DD.append($("<option disabled=''></option>")
            .attr("value", "<b>" + key + "</b>")
            .text(value));
        }
        else {
            // Enable and append the options to the dropdown for selection
            eleTileChartType_DD.append($("<option></option>")
           .attr("value", key)
           .text(value));
        }
    });
    //bindDropdown(eleChartConnection_DD, connectionStringValues); //Bind the Data to the ChartConnection Dropdown
    bindDropdown(eleChartDataFormat_DD, tileDataFormatValues); //Bind the Data to the ChartFormat Dropdown
    bindDropdown(eleChartValueFormat_DD, chartValueFormatValues); //Bind the Data to the ChartFormat Dropdown
    bindDropdown(eleChartTooltipFormat, chartShowLabelOptionValues);
    bindDropdown(eleChartLabelFormat, chartShowLabelOptionValues);
    bindDropdown(eleChartLegend_DD, chartLegendValues); //Bind the Data to the ChartLegend Dropdown
    bindDropdown(eleChartDrillDownType, tileChartDrillDownType); //Bind data to the DrillDownType dropdown
    bindDropdown(eleChartValueBox, chartLegendValues); //Bind the Data to the ChartLegend Dropdown
    bindDropdown(eleChartLegendPos_DD, tileChartLegendPosValues); //Bind the Data to the ChartLegend Dropdown
    bindDropdown(eleChartResultOrder_DD, chartResultOrderValues); //Bind the Data to the ChartResultOrder Dropdown
    bindDropdown(eleTileChartAspect_DD, tileChartTypeAspectValues); //Bind the Data to the ChartTypeAspec Dropdown
    bindDropdown(eleTitleLabelDataFormat, tileDataFormatValues);
    bindDropdown(eleListTypeDD, dataTypeValues);
    changeChartElementsVisibility("type");
    var eleMultiValueDataFilter = $("#multiValueDataFilter");
    var eleMultiValueChartFilter = $("#multiValueChartFilter");
    var eleMultiValueListFilter = $("#multiValueListFilter");
    //var eleMultiValueGridFilter = $("#multiValueGridFilter");

    bindFilterDropdown(eleMultiValueDataFilter, Filterslistids);
    bindFilterDropdown(eleMultiValueChartFilter, Filterslistids);
    bindFilterDropdown(eleMultiValueListFilter, Filterslistids);
    //bindFilterDropdown(eleMultiValueGridFilter, Filterslistids);


}
function addListColumns(ColumnID) {

    // Prepare and initialize HTML form array for the individual columns of list
    var configListColumnHTML = [
     '<div class="ListIndividualColumn" id="ListColumn-C@ColumnID">',
     '<fieldset>',
     '<legend>Column - @ColCalc</legend>',
     '<div class="divRow">',

     //'<div class="divListCellLeft">Header Title</div>',
     //'<div  class="divListCellRight">',
     //"<input class='DivTextBox' type='text' id='ListHeaderTitle-C@ColumnID' onkeyup='validateText(this, \"TitleText\", false, \"-1\", \"-1\");'/>",
     //'</div>',
	 //'</div>',

     '<div class="divRow">',
     '<div class="divListCellLeft DivLeftLabel">Mapping ID</div>',
     '<div  class="divListCellRight">',
     "<input class='DivTextBox' type='text' id='ListMappingId-C@ColumnID' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
	 '</div>',

     '<div class="divRow" >',
     '<div class="divListCellLeft DivLeftLabel">Format</div>',
     '<div  class="divListCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='ListFormat_DD-C@ColumnID' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '</fieldset></div>'
    ];

    var ColCalc = ColumnID + 1; // Incrementing the ColumnID index so that the actual value resembles on the div element
    var ListDiv = $('#ListColumnSlidingDiv'); // Intitalize the div element to a variable
    $(configListColumnHTML.join('').split('@ColumnID').join(ColumnID).split('@ColCalc').join(ColCalc)).appendTo(ListDiv); // Replacing @Parameters with the actual values
    getIconPickerValues();
}

function updateListElements() {
    for (var col = 0; col <= totalListColumns; col++) { // Iterating the columns from 0 to totalListColumns for updating the each individual column element array 
        //  eleListHeaderTitle[col] = $('#ListHeaderTitle-C' + col); // Initializing the column Header array
        eleListMappingId[col] = $('#ListMappingId-C' + col); // Initializing the column mapping array
        eleListFormat_DD[col] = $('#ListFormat_DD-C' + col);// Initializing the column format array
    }
}

function showHideSlidingIcons() {
    // Checks the current status of the slide and manages the display properties
    if (dataTileSliderStatus == 1) { // Hide left nav icon and show right nav icon
        $('.btn_Swap_Left').hide();
        $('.btn_Swap_Right').show();
    } else if (dataTileSliderStatus == 2) { // Show left nav icon and show right nav icon
        $('.btn_Swap_Left').show();
        $('.btn_Swap_Right').show();
    } else {  // Show left nav icon and show right nav icon
        $('.btn_Swap_Left').show();
        $('.btn_Swap_Right').hide();
    }

    // Initializes the status of the title dynamically based on the tilesliderstatus
    var TileText = "Tile -" + dataTileSliderStatus + " Configuration";
    $('#CurrentTileStatus').text(TileText);
}

/*This function is used for selecting a particular pop up in the config pop up*/
function tileTypeClicked(ClickedItem) {
    // $("#PopupLayoutSelector").attr("visibility", "visible");
    //Reset the layout selector on change of tabs
    //resetLayoutSelector();    
    //resetAllLayoutSelector(ClickedItem);

    if (ClickedItem === "Grid") {
        $("#PopupLayoutSelector").attr("visibility", "hidden");
    }

    //if(ClickedItem === )
    // Check whether the selected div is clicked again
    if (selectedTileTypeValue != ClickedItem) {
        // Apply Headers_Off class on all navigation elements
        $('#DataHeader').removeClass("Headers_On").addClass("Headers_Off").removeClass("selectedPivotTab");
        $('#ChartHeader').removeClass("Headers_On").addClass("Headers_Off").removeClass("selectedPivotTab");
        $('#ListHeader').removeClass("Headers_On").addClass("Headers_Off").removeClass("selectedPivotTab");
        $('#FreeTextHeader').removeClass("Headers_On").addClass("Headers_Off").removeClass("selectedPivotTab");
        $('#GridTextHeader').removeClass("Headers_On").addClass("Headers_Off").removeClass("selectedPivotTab");

        var slidingValue; // Used for saving the total pixels to be slided
        var clickedIndex; // Used to initialize the current clicked index value
        var prevIndex; // Used to initialize the current displying index

        // Check for the index of current selected division
        switch (selectedTileTypeValue) {
            case dataTileValue: prevIndex = 1; // Data
                break;
            case chartTileValue: prevIndex = 2; // Chart
                break;
            case listTileValue: prevIndex = 3; // List
                break;
            case freeTextTileValue: prevIndex = 4; // HTML
                break;
            case gridTextTileValue: prevIndex = 5; // HTML
                break;
        }

        // Check for the index of current clicked division and add the class Headers_On
        $("#Config-box").css("width", "600px");
        switch (ClickedItem) {

            case dataTileValue: clickedIndex = 1; // Data
                enableTiles("TwoTilesCheck");
                $('#DataHeader').removeClass("Headers_Off").addClass("Headers_On").addClass("selectedPivotTab");
                break;
            case chartTileValue: clickedIndex = 2; // Chart
                $('#ChartHeader').removeClass("Headers_Off").addClass("Headers_On").addClass("selectedPivotTab");
                break;
            case listTileValue: clickedIndex = 3; // List
                $('#ListHeader').removeClass("Headers_Off").addClass("Headers_On").addClass("selectedPivotTab");
                break;
            case freeTextTileValue: clickedIndex = 4;
                $('#FreeTextHeader').removeClass("Headers_Off").addClass("Headers_On").addClass("selectedPivotTab");
                break;
            case gridTextTileValue: clickedIndex = 5;
                $('#GridTextHeader').removeClass("Headers_Off").addClass("Headers_On").addClass("selectedPivotTab");

                break;
        }

        // Compare the clickedIndex, prevIndex and calculate the entire path and direction to be traversed
        if (clickedIndex > prevIndex) {
            slidingValue = "-=" + ((clickedIndex - prevIndex) * slidingPixels); // Initialize the direction and the totalPixels to be traversed
        } else if (clickedIndex < prevIndex) {
            slidingValue = "+=" + ((prevIndex - clickedIndex) * slidingPixels); // Initialize the direction and the totalPixels to be traversed
        }

        // Animate the sliding div as per the sliding value 
        $('#SlidingDiv').animate({
            left: slidingValue
        }, animateSpeed, function () {
            // Animation complete.
        });
        selectedTileTypeValue = ClickedItem; // Initializing the selected tile with the clicke tile value
    }
}

// For Pivot Control	   
function titleTypePivotClicked(ClickedItem) {

    var objId;
    objId = $(ClickedItem).attr('id');

    if (objId == 'DataHeader' || objId == 'ChartHeader' || objId == 'ListHeader' || objId == 'FreeTextHeader' || objId == 'GridTextHeader') {
        $('#' + objId).addClass("selectedPivotTab");
        $('#' + objId).siblings().removeClass("selectedPivotTab");
    }
    focusOnDeselectedItem();
}
function ListType_DD_Changed() {

    if (eleListTypeDD.val() === "1") {
        enableDisableElements(eleListTextColor, false); //Disabling live list option when option selected is static
        enableDisableElements(eleListBgColor, false);
        $('#DivListTextColorPicker').hide();
        $('#DivListBgColorPicker').hide();
    }
    else if (eleListTypeDD.val() === "2") {
        enableDisableElements(eleListTextColor, true);
        enableDisableElements(eleListBgColor, true);
        $('#DivListTextColorPicker').show();
        $('#DivListBgColorPicker').show();
    }


}

//: New Metadata feature Added
function labelMetaDataProvidedCheckBoxEnabled(ele) {
    if (ele.checked) {
        enableDisableElements(eleChartLabelMetaDataCountPerItem, true);
    } else {
        enableDisableElements(eleChartLabelMetaDataCountPerItem, false);
    }
}

function dataType_DD_Changed() {
    // Check for the value in the datatype dropdown e.g. {Static, Live}
    if (eleDataTypeDD.val() == "1") {
        // Hide the sliding icons , interval and the label
        $('#SlidingIconsDiv').show();
        $('#IntervalLbl').hide();
        eleDataIntervalDD.hide();

        // Check for the position of the data slider and animate to its initial position 
        var variance = dataTileSliderStatus - 1;
        for (i = variance; i >= 1; i--) {
            $('.btn_Swap_Left').click();
        }
        showHideStaticTilesElements(false);
    } else if (eleDataTypeDD.val() == "2") {
        // Initialize and display the slider for navigating between the tile configurations
        dataTileSliderStatus = 1;
        $('#SlidingIconsDiv').show();
        $('#IntervalLbl').show();
        eleDataIntervalDD.show();
        showHideSlidingIcons();
        showHideStaticTilesElements(true);
    }
}

function showHideStaticTilesElements(bHide) {
    var elementsToHide = ['DataExecutionOrder1', 'DataExecutionOrder4', 'DataSuffix1', 'DataSuffix4', 'TwoTilesCheck', 'DynamicSuffix1', 'DynamicSuffix4', 'DataIndex1', 'DataIndex4', 'SuffixIndex1', 'SuffixIndex4', 'DataSupportingQuery', 'DataSQExecutionOrder', 'DataObjectName', 'TileDataFormat_DD4', 'DataQuery4'];
    var iCount = elementsToHide.length, i;
    if (bHide) {
        for (i = 0; i < iCount; i++) {
            $("#" + elementsToHide[i]).parent().parent().hide();
        }
    }
    else {
        for (i = 0; i < iCount; i++) {
            $("#" + elementsToHide[i]).parent().parent().show();
        }
    }
}

function dataColorTypeChoosen(tileConfigNumber) {
    // Check the color radiobutton status and enables the input elements accordingly
    if ($('input:radio[name=DataColorRbtn' + tileConfigNumber + ']:checked').val() === dataColorDefaultValue) {
        // Display the color picker and hide the query textbox
        $('#stopLightBody' + tileConfigNumber).hide();
        $('#DivDataColorPicker' + tileConfigNumber).show();
        $('#divTrendContainer' + tileConfigNumber).hide();
        $('#IconDiv' + tileConfigNumber).show();
        enableDisableElements(eleDataTrendQueryArr[tileConfigNumber - 1], false);
        enableDisableElements(eleDataTrendUpIconArr[tileConfigNumber - 1], false);
        enableDisableElements(eleDataTrendDownIconArr[tileConfigNumber - 1], false);
        enableDisableElements(eleDataTrendFlatArr[tileConfigNumber - 1], false);
        enableDisableElements(eleDataColorPickerArr[tileConfigNumber - 1], true);
    } else if ($('input:radio[name=DataColorRbtn' + tileConfigNumber + ']:checked').val() === TrendPattern) {
        $('#divTrendContainer' + tileConfigNumber).show();
        $('#DivDataColorPicker' + tileConfigNumber).show();
        $('#IconDiv' + tileConfigNumber).hide();
        $('#stopLightBody' + tileConfigNumber).hide();
        enableDisableElements(eleDataTrendQueryArr[tileConfigNumber - 1], true);
        enableDisableElements(eleDataTrendUpIconArr[tileConfigNumber - 1], true);
        enableDisableElements(eleDataTrendDownIconArr[tileConfigNumber - 1], true);
        enableDisableElements(eleDataTrendFlatArr[tileConfigNumber - 1], true);
        enableDisableElements(eleDataColorPickerArr[tileConfigNumber - 1], true);
    } else { // Display the query query textbox and hide the color picker
        $('#stopLightBody' + tileConfigNumber).show();
        $('#IconDiv' + tileConfigNumber).hide();
        $('#DivDataColorPicker' + tileConfigNumber).hide();
        $('#divTrendContainer' + tileConfigNumber).hide();
        enableDisableElements(eleDataTrendQueryArr[tileConfigNumber - 1], false);
        enableDisableElements(eleDataTrendUpIconArr[tileConfigNumber - 1], false);
        enableDisableElements(eleDataTrendDownIconArr[tileConfigNumber - 1], false);
        enableDisableElements(eleDataTrendFlatArr[tileConfigNumber - 1], false);
        enableDisableElements(eleDataColorPickerArr[tileConfigNumber - 1], false);
    }
}

function chartColorTypeChoosen() {
    // Check the color radiobutton status and enables the input elements accordingly
    if ($('input:radio[name=ChartColorRbtn]:checked').val() === dataColorDefaultValue) {
        // Display the color picker and hide the query textbox
        $('#DivChartColorQuery').hide();
        $('#DivChartColorPicker').show();
    }
    else { // Display the query query textbox and hide the color picker
        $('#DivChartColorQuery').show();
        $('#DivChartColorPicker').hide();
    }
}

function stoplightChkBoxClicked(tileNumber) {
    // Check the TrendEnable checkbox is enabled or not
    if ($('input:radio[name=DataColorRbtn' + tileConfigNumber + ']:checked').val() === dataColorCustomValue) {
        //if (eleDataStopLightArray[tileNumber - 1].is(':checked')) {
        // Enable the TrendQuery textbox and apply css styles
        $('#stopLightBody' + tileNumber).show();
    }
    else {
        // Disable the TrendQuery textbox and apply css styles
        $('#stopLightBody' + tileNumber).hide();
    }
}

function iconChkBoxClicked(tileNumber) {
    // Check the IconPicker checkbox is enabled or not
    if (eleDataIconChkArr[tileNumber - 1].is(':checked')) {
        // Enable the IconPicker textbox and apply css styles
        enableDisableElements(eleDataIconPickerArr[tileNumber - 1], true);
    }
    else {
        // Disable the IconPicker textbox and apply css styles
        enableDisableElements(eleDataIconPickerArr[tileNumber - 1], false);
    }
}

function enableControls_Changed(TileNumber) {
    // Check the status of the TileConfigEnable checkbox
    if ($('#TileConfigEnableChk').is(':checked')) {

        // Enable all the elements associated with the checkbox
        enableDisableElements(eleDataDisplayTextArr[TileNumber - 1], true);
        enableDisableElements(eleDataDDLink[TileNumber - 1], true);
        enableDisableElements(eleDataQueryArr[TileNumber - 1], true);
        enableDisableElements(eleTileDataFormat_DDArr[TileNumber - 1], true);
        enableDisableElements(eleDataDrilldownURL[TileNumber - 1], true);
        enableDisableElements(eleDataColorPickerArr[TileNumber - 1], true);
        enableDisableElements(eleDataColorQueryArr[TileNumber - 1], true);
        enableDisableElements(eleDataTrendChkArr[TileNumber - 1], true);
        enableDisableElements(eleDataStopLightArray[TileNumber - 1], true);
        enableDisableElements(eleDataIconChkArr[TileNumber - 1], true);
        enableDisableElements(eleStopLightRulesArray[TileNumber - 1], true);
        enableDisableElements(eleStopLightColorsArray[TileNumber - 1], true);
        enableDisableElements(eleStopLightIconsArray[TileNumber - 1], true);
        enableDisableElements(eleDataExecutionOrder[TileNumber - 1], true);

    } else {
        // Disable all the elements associated with the checkbox
        enableDisableElements(eleDataDisplayTextArr[TileNumber - 1], false);
        enableDisableElements(eleDataDDLink[TileNumber - 1], false);
        enableDisableElements(eleDataQueryArr[TileNumber - 1], false);
        enableDisableElements(eleTileDataFormat_DDArr[TileNumber - 1], false);
        enableDisableElements(eleDataDrilldownURL[TileNumber - 1], false);
        enableDisableElements(eleDataColorPickerArr[TileNumber - 1], false);
        enableDisableElements(eleDataColorQueryArr[TileNumber - 1], false);
        enableDisableElements(eleDataTrendChkArr[TileNumber - 1], false);
        enableDisableElements(eleDataStopLightArray[TileNumber - 1], false);
        enableDisableElements(eleDataTrendQueryArr[TileNumber - 1], false);
        enableDisableElements(eleDataIconChkArr[TileNumber - 1], false);
        enableDisableElements(eleDataIconPickerArr[TileNumber - 1], false);


        enableDisableElements(eleStopLightRulesArray[TileNumber - 1], false);
        enableDisableElements(eleStopLightColorsArray[TileNumber - 1], false);
        enableDisableElements(eleStopLightIconsArray[TileNumber - 1], false);
        enableDisableElements(eleDataExecutionOrder[TileNumber - 1], false);
    }
}
function getIconPickerValues() {
    //$.ajax({
    //    type: "POST",
    //    url: sWebServicePath + 'GetAllFileNames',
    //    data: '{"DirPath":"' + webAPIurl + LayoutPath + 'Images/Icons/","Pattern":".png"}',
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (xmlResponse) {
    //        var Files = xmlResponse.d;
    //        iconPickerNames = [];
    //        iconPickerValues = [];
    //        if (undefined !== Files && Files !== '') {
    //            var TotalImages = Files.split(',');
    //            iconPickerValues = TotalImages;
    //            iconPickerNames = TotalImages;
    //        }
    //    },
    //    error: function (xmlResponse) {


    //    }
    //});

    var oReq = '{"DirPath":"' + webAPIurl + LayoutPath + 'Images/Icons/","Pattern":".png"}';

    var oAjaxRequest = {
        url: sWebServicePath + 'GetAllFileNames',
        oRequest: oReq,
        fonSuccess: getIconPickerValuesSuccess,
        sExtraParam: null
    }
    MAQ.oTileDataAjaxQueue.push(oAjaxRequest);

}

function getIconPickerValuesSuccess(xmlResponse) {
    var Files = xmlResponse.d;
    iconPickerNames = [];
    iconPickerValues = [];
    if (undefined !== Files && Files !== '') {
        var TotalImages = Files.split(',');
        iconPickerValues = TotalImages;
        iconPickerNames = TotalImages;
    }
}

/*Used on tile tab*/
function loadIconPicker(objId, targetId, checkId) {
    checkObjId = $('#' + checkId); // Used to verify the icon checkbox enable status

    // Check display status of the icon picker
    if (eleIconPicker.css('display') == 'none') {

        // Check if the  corresponding checkbox is enabled or not
        if (checkObjId.is(':checked') || checkId === 'true') {
            eleIconPicker.show().empty();
            eleIconPicker.css({
                'top': (event.clientY) + "px",
                'left': (event.clientX) + "px",
                'position': 'fixed',
                'margin-top': '0px',
                'margin-left': '0px'
            });

            // Display the popup and adjust its position
            for (i = 0; i < iconPickerValues.length; i++) {
                var IconPickerDiv = document.getElementById("IconPickerPopup"); // Initialize the element 
                var IconDiv = document.createElement('div'), addMargin = ''; // Create a small div to accomodate the image into it
                IconDiv.className = "IconSmallDiv";
                IconDiv.setAttribute('title', iconPickerNames[i]); // Appending the title attribute to the icon div
                if (iconPickerNames[i].toLowerCase().indexOf('small') === 0) {
                    addMargin = 'style="margin-top:25%"';
                }
                IconDiv.setAttribute('onclick', 'saveIconSelected(' + i + ',"' + targetId + '")') // Adding onclick event for the Icons selection
                IconDiv.innerHTML = '<img ' + addMargin + ' src="' + webAPIurl + LayoutPath + '/Images/Icons/' + iconPickerNames[i] + '.png"/>'; // Appending the image into the div
                IconPickerDiv.appendChild(IconDiv); // Appending the individual icons to the main div element
            }
        }
    }
    else {
        // Hide the  icon picker div if already open
        eleIconPicker.hide();
    }
    // Prevent anonymous calls to the library
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }
}

function saveIconSelected(iconSelected, targetId) {
    targetObjId = $('#' + targetId); // Used to identify the Textbox to be updated based on the icon selection
    changeElementColour(targetObjId, true); // Clear title apppended and also apply the required css
    targetObjId.val(iconPickerValues[iconSelected]); // Update the selected icon value into the Textbox
    eleIconPicker.hide(); // Hide the icon picker div
}

/*This function is called when the pattern picker icon is clicked*/
function loadPatternPicker(objId, targetId) {
    elePatternPicker = $('#PatternPickerPopup');
    if (targetId == "NavTileColorPicker") {
        eleColorPicker = $('#NavColorPickerPopup');

        // Function explicitly used to control the unwanted events while closing the colour and icon pickers
        $(document).click(function (e) {
            if (targetId == "NavTileColorPicker") {
                eleColorPicker = $('#NavColorPickerPopup');
            }

            // Check the status for the colour picker and close if it is already open
            if ((eleColorPicker && eleColorPicker.css('display') == 'block') || (eleIconPicker && eleIconPicker.css('display') == 'block')) {
                eleColorPicker.hide();

                // Stops propagation of the unwanted calls raised by click events
                event.cancelBubble = true;
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
            }
        });
    } else {
        elePatternPicker = $('#PatternPickerPopup');
    }
    // Check display status of the color picker
    if (elePatternPicker.css('display') == 'none') {
        //elePatternPicker.show();
    }

    if (elePatternPicker.css('display') == 'none') {


        elePatternPicker.show().empty();
        if (targetId == "NavTileColorPicker") {
            eleColorPicker.css({
                'margin-top': (objId.offsetTop - 140) + "px",
                'margin-left': (objId.offsetLeft + 33) + "px"
            }); // Display the popup and adjust its position

        } else {
            //var topOffset = ($(objId).offset().top > 640 ? 640 : $(objId).offset().top) - 240;
            elePatternPicker.css({
                //'top': (topOffset > 0 ? topOffset : 0) + "px",
                'top': (event.clientY) + "px",
                //'left': ($(objId).offset().left - 230) + "px",
                'left': (event.clientX) + "px",
                'position': 'fixed',
                'margin-top': '0px',
                'margin-left': '0px'
            });
        }

        for (i = 0; i < $('.svgContainer svg defs pattern').length ; i++) {
            var patternPickerDiv;
            if (targetId == "NavTileColorPicker") {
                patternPickerDiv = document.getElementById("NavColorPickerPopup");
            } else {
                patternPickerDiv = document.getElementById("PatternPickerPopup");
            }
            var patternDiv = document.createElement('div'); // Create a small div to display the colors in it
            patternDiv.className = "ColourSmallDiv";
            //patternDiv.setAttribute('title', $('.svgContainer svg defs pattern')[i].id;
            patternDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" version="1.1" xlink="http://www.w3.org/1999/xlink" cls="zc-svg" z-index="100"></svg>';
            $(patternDiv).find("svg").append("<rect width='25' height='25'  style='fill:url(#" + $('.svgContainer svg defs pattern')[i].id + ");'></rect><text xmlns='http://www.w3.org/2000/svg' style='font-family: Segoe UI; font-size: 10px; fill: #000000;' x='0' y='-5.11' dx='10' dy='20'>" + (i + 1) + "</text>");
            //$(patternDiv).find("svg").find("rect")[0].style.fill='url(#'+ $('.svgContainer svg defs pattern')[i].id + ');';
            // Check for the targetId 
            //if (targetId === null) {
            //    patternDiv.innerText = i;  // Update the innerHTML of the small color divs
            //}(#
            //else {
            //    patternDiv.setAttribute('onclick', 'savePatternSelected(' + i + ',\'' + targetId + '\' )') // Adding onclick event for the color div
            //}
            patternPickerDiv.appendChild(patternDiv); // Appending the individual color div's to the main div element
        }
    } else {
        elePatternPicker.hide();
    }

    // Prevent anonymous calls to the library
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }

    $(patternPickerDiv).html($(patternPickerDiv).html());
}

function savePatternSelected(PatternSelected, targetId) {
    targetObjId = $('#' + targetId); // Used to identify the Textbox to be updated based on the color selection
    changeElementColour(targetObjId, true); //clear title apppended and also apply the required css
    targetObjId.val(patternPickerValues[colourSelected]);  // Update the selected color value into the Textbox
    elePatternPicker.hide();// hide the color picker div
}
/*This function is called when the image picker icon is clicked*/
function loadColorPicker(objId, targetId) {
    eleColorPicker = $('#ColorPickerPopup');
    if (targetId == "NavTileColorPicker") {
        eleColorPicker = $('#NavColorPickerPopup');

        // Function explicitly used to control the unwanted events while closing the colour and icon pickers
        $(document).click(function (e) {
            if (targetId == "NavTileColorPicker") {
                eleColorPicker = $('#NavColorPickerPopup');
            }

            // Check the status for the colour picker and close if it is already open
            if ((eleColorPicker && eleColorPicker.css('display') == 'block') || (eleIconPicker && eleIconPicker.css('display') == 'block')) {
                eleColorPicker.hide();

                // Stops propagation of the unwanted calls raised by click events
                event.cancelBubble = true;
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
            }
        });
    } else {
        eleColorPicker = $('#ColorPickerPopup');
    }
    // Check display status of the color picker
    if (eleColorPicker.css('display') == 'none') {

        eleColorPicker.show().empty();
        if (targetId == "NavTileColorPicker") {
            eleColorPicker.css({
                'margin-top': (objId.offsetTop - 140) + "px",
                'margin-left': (objId.offsetLeft + 33) + "px"
            }); // Display the popup and adjust its position

        } else {
            //var topOffset = ($(objId).offset().top > 640 ? 640 : $(objId).offset().top) - 240;
            eleColorPicker.css({
                //'top': (topOffset > 0 ? topOffset : 0) + "px",
                'top': (event.clientY) + "px",
                //'left': ($(objId).offset().left - 230) + "px",
                'left': (event.clientX) + "px",
                'position': 'fixed',
                'margin-top': '0px',
                'margin-left': '0px'
            });
        }

        for (i = 0; i < colourPickerValues.length; i++) {
            var ColorPickerDiv;
            if (targetId == "NavTileColorPicker") {
                ColorPickerDiv = document.getElementById("NavColorPickerPopup");
            } else {
                ColorPickerDiv = document.getElementById("ColorPickerPopup");
            }
            var ColorDiv = document.createElement('div'); // Create a small div to display the colors in it
            ColorDiv.className = "ColourSmallDiv";
            ColorDiv.setAttribute('title', colourPickerName[i]);

            ColorDiv.style.backgroundColor = '#' + colourPickerValues[i];
            // Check for the targetId 
            if (targetId === null) {
                ColorDiv.innerText = i;  // Update the innerHTML of the small color divs
            }
            else {
                ColorDiv.setAttribute('onclick', 'saveColourSelected(' + i + ',\'' + targetId + '\' )') // Adding onclick event for the color div
            }
            ColorPickerDiv.appendChild(ColorDiv); // Appending the individual color div's to the main div element
        }
    }
    else {
        // Hide the color picker div if already open
        eleColorPicker.hide();
    }

    if (typeof (SelectedTileShowDiv) !== "undefined" && SelectedTileShowDiv !== null) {
        $(SelectedTileShowDiv).scroll(function () {
            $('#ColorPickerPopup').hide();
        });
    }
    if (typeof (ListDiv) !== "undefined" && ListDiv !== null) {

        $(ListDiv).scroll(function () {
            $('#ColorPickerPopup').hide();
        });
    }
    if (typeof (ChartDiv) !== "undefined" && ChartDiv !== null) {
        $(ChartDiv).scroll(function () {
            $('#ColorPickerPopup').hide();
        });
    }

    // Prevent anonymous calls to the library
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }
}

function saveColourSelected(colourSelected, targetId) {
    targetObjId = $('#' + targetId); // Used to identify the Textbox to be updated based on the color selection
    changeElementColour(targetObjId, true); //clear title apppended and also apply the required css
    targetObjId.val(colourPickerValues[colourSelected]);  // Update the selected color value into the Textbox
    eleColorPicker.hide();// hide the color picker div
}
function getSelectedFiltersIDS(tiletype) {
    var selectValue = [];
    $('input:checkbox[name=selectItem]:checked').each(function () {
        selectValue.push($(this).val())
    })
    return selectValue;
}

function GetFilterAssociatedQuery(query, connectiontype, filterQueryReplace) {
    //TODO(ESBI): Verify filter association
    if (connectiontype === 'Database') {
        for (var i = 0; i < filterQueryReplace.length; i++) {
            if (i === 0) {
                query += " WHERE [" + filterQueryReplace[i].Name + "] IN( " + filterQueryReplace[i].publishtag.toUpperCase() + ")";
            }
            else {
                query += " AND [" + filterQueryReplace[i].Name + "] IN( " + filterQueryReplace[i].publishtag.toUpperCase() + ")";
            }
        }
    }
    else {
        for (var i = 0; i < filterQueryReplace.length; i++) {
            if (i === 0) {
                query += " WHERE ({" + filterQueryReplace[i].publishtag.toUpperCase() + "}";
            }
            else {
                query += " , {" + filterQueryReplace[i].publishtag.toUpperCase() + "}";
            }
        }
        if (i > 0) {
            query += " )";
        }
    }
    return query;
}
// For getting filterQueryReplace object which contains filter name along with their publish tab
function getreplacequeryobject(filterslist) {
    var filterQueryReplace = [];
    var filtercount = 0;
    for (var a in filterslist) {
        for (var b in oFilterProperties) {
            if (filterslist[a] === oFilterProperties[b]["filterId"]) {
                var displayname = oFilterProperties[b]["displayName"];
                var publishtag = oFilterProperties[b]["publishTag"];
                filterQueryReplace[filtercount] = {};
                filterQueryReplace[filtercount].Name = displayname;
                filterQueryReplace[filtercount].publishtag = "@" + publishtag;
                filtercount++;
            }
        }
    }
    return filterQueryReplace;
}
function saveConfigurationData() {
    var isTileInSection = false;
    var TilePosition = '';

    if ($("#Save_Btn").attr("targetId") !== "") {
        targetID = $("#Save_Btn").attr("targetId");
        isEditTile = true;

    } else {
        for (var sectionIndex = 0; sectionIndex < oSections.length; sectionIndex++) {
            if (oSections[sectionIndex].SectionHandle === reportingTemplateSectionID) {
                presentTileID = Number(oSections[sectionIndex].LastTileIndex) + 1;
                oSections[sectionIndex].LastTileIndex = presentTileID;
                isTileInSection = true;
                break;
            }
        }
        if (!isTileInSection) {
            if (presentTileID === null || typeof (presentTileID) === "undefined") {
                presentTileID = 0;
            } else {
                presentTileID = presentTileID + 1;
            }
        }
        //var splitURL = window.location.pathname.split("/");
        //reportName = splitURL[splitURL.length - 1].split(".")[0];
        //var i;
        //siteName = '';
        //for (i = 2; i < (splitURL.length - 3) ; i++) {
        //    siteName += splitURL[i];
        //    siteName += '/'
        //}
        //siteName += splitURL[i];
        var numberOfTilesInSection = $("#" + reportingTemplateSectionID + " .tile").length + $("#" + reportingTemplateSectionID + " .GridContainer").length;
        // var presentTileID = numberOfTilesInSection++, tileObject = {};
        targetID = reportName + "_" + reportingTemplateSectionID + "_" + "tile" + presentTileID;
    }
    if ($(".OverlayChkbx:checked").length > 0) {
        validateGridConfigForm();
        if (overlayParentTile !== "") {
            selectedTileTypeValue = overlayParentTile;
            if (selectedTileTypeValue === "GRID") {
                selectedTileTypeValue = "Grid";
            }
        }
    }
    //// Check the selected tile and call its corresponding validation function to validate the form
    //if (selectedTileTypeValue == dataTileValue) {
    //    validateDataConfigForm(); // Function for validating the data form
    //} else if (selectedTileTypeValue == chartTileValue) {
    //    validateChartConfigForm(); // Function for validating the chart form
    //} else if (selectedTileTypeValue == listTileValue) {
    //    validateListConfigForm(); // Function for validating the list form
    //} else if (selectedTileTypeValue == freeTextTileValue) {
    //    validateFreeTextConfigForm(); // Function for validating the list form
    //} else if (selectedTileTypeValue == gridTextTileValue) {
    //    validateGridConfigForm(); // Function for validating the list form
    //}

    // Added for custom connection. This will clear the flag which helps in identifying if user is trying to save the config or is just validating the custom connection
    var sValidator;
    if (bCustomConnectionValidation && bCustomConnectionStatus && isFormValid) {
        var oRequest = new tilesPostRequest();
        oRequest.postRequest(sWebServicePath + 'GetDicMiscitems', loadConnectionString, '', '');
    }
    bCustomConnectionValidation = false;
    bCustomConnectionStatus = false;
    if (gridTextTileValue === selectedTileTypeValue) {
        sValidator = "BtnValidateCustomConnection_" + selectedTileTypeValue + currentGridDisplayed;
    }
    else {
        sValidator = "BtnValidateCustomConnection_" + selectedTileTypeValue;
    }

    if ($('#' + sValidator).length) {
        var updatedOnClickAttribute = $('#' + sValidator).attr('onclick').replace("Yes", "No");
        $('#' + sValidator).attr('onclick', updatedOnClickAttribute);
    }
    // End of custom connection
    //selectedLayout = getLayoutSelection();
    selectedLayout = setLayoutSelection(selectedTileTypeValue);
    TilePosition = setTilePosition(selectedTileTypeValue);
    if (isFormValid) { // Check for valid status of the form


        // Get Account to support user context
        if (selectedTileTypeValue == dataTileValue) {
            RunWithElevateAccount = $("#RunWithElevatedData").val(); // Function for validating the data form               
            RunWithElevatedCheckboxStatus = $("#RunWithElevatedDataCheckbox").is(':checked');

        } else if (selectedTileTypeValue == chartTileValue) {
            RunWithElevateAccount = $("#RunWithElevatedCharts").val(); // Function for validating the chart form
            RunWithElevatedCheckboxStatus = $("#RunWithElevatedChartCheckbox").is(':checked');

        } else if (selectedTileTypeValue == listTileValue) {
            RunWithElevateAccount = $("#RunWithElevatedList").val();// Function for validating the list form
            RunWithElevatedCheckboxStatus = $("#RunWithElevatedListCheckbox").is(':checked');

        } else if (selectedTileTypeValue == gridTextTileValue) {
            RunWithElevateAccount = $("#RunWithElevatedGrid").val(); // Function for validating the list form
            RunWithElevatedCheckboxStatus = $("#RunWithElevatedGridCheckbox").is(':checked');
        }

        var curGrid = { "WebPartId": $("#gridSave_Btn").attr("targetId") };
        var overlayXML;
        if ($(".OverlayChkbx:checked").length > 0) {
            overlayXML = getGridConfigurationData(curGrid);
        }
        // XML configuration structure of data tile
        var tileDataStructure = '<Tile TargetId="@targetID">';
        //var tileDataStructure = '<Tile>';
        tileDataStructure = tileDataStructure + '<Type>@Type</Type>';
        tileDataStructure = tileDataStructure + '<DataTile>';
        tileDataStructure = tileDataStructure + '<TileType>@TileType</TileType>';
        tileDataStructure = tileDataStructure + '<Interval>@Interval</Interval>';
        tileDataStructure = tileDataStructure + '<TileCount>@TileCount</TileCount>';
        tileDataStructure = tileDataStructure + '<Portfolio>@Portfolio</Portfolio>';
        tileDataStructure = tileDataStructure + '<TilePosition>@TilePosition</TilePosition>';
        tileDataStructure = tileDataStructure + '<ConnectionType>@ConnectionType</ConnectionType>';
        tileDataStructure = tileDataStructure + '<ConnectionString>@ConnectionString</ConnectionString>';
        tileDataStructure = tileDataStructure + '<BackgroundQuery>@BackgroundQuery</BackgroundQuery>';
        tileDataStructure = tileDataStructure + '<BackgroundColor>@BackgroundColor</BackgroundColor>';
        tileDataStructure = tileDataStructure + '<AdvancedQuery>@AdvancedQuery</AdvancedQuery>';
        tileDataStructure = tileDataStructure + '<FilterAssociation>@FilterAssociation</FilterAssociation>';
        tileDataStructure = tileDataStructure + '<DefaultColor>@DefaultColor</DefaultColor>';
        tileDataStructure = tileDataStructure + '<StopLightRules>@StopLightRules</StopLightRules>';
        tileDataStructure = tileDataStructure + '<StopLightColors>@StopLightColors</StopLightColors>';
        tileDataStructure = tileDataStructure + '<StopLightIcons>@StopLightIcons</StopLightIcons>';
        tileDataStructure = tileDataStructure + '<SelectedLayout>@SelectedLayout</SelectedLayout>';
        tileDataStructure = tileDataStructure + '<Title>@Title</Title>';
        tileDataStructure = tileDataStructure + '<DDLink>@DDLink</DDLink>';
        tileDataStructure = tileDataStructure + '<Query>@Query</Query>';
        if ($(".OverlayChkbx:checked").length > 0) {
            tileDataStructure = tileDataStructure + '<EnableOverlay>@EnableOverlay</EnableOverlay>';
            tileDataStructure = tileDataStructure + '<Overlay>@Overlay</Overlay>';
        }
        tileDataStructure = tileDataStructure + '<RunWithElevatedPrivilages enabled="@RunWithElevatedPrivilages">@RunWithElevatedPrivilageAccount</RunWithElevatedPrivilages>'
        tileDataStructure = tileDataStructure + '<MultipleData Type="Horizontal">@Data</MultipleData>';
        tileDataStructure = tileDataStructure + '<Format>@Format</Format>';
        tileDataStructure = tileDataStructure + '<ImageList>NA</ImageList>';
        tileDataStructure = tileDataStructure + '<Icons>@Icons</Icons> ';
        tileDataStructure = tileDataStructure + '<TrendQuery>@TrendQuery</TrendQuery>';
        tileDataStructure = tileDataStructure + '<TrendUpIcon>@TrendUpIcon</TrendUpIcon>';
        tileDataStructure = tileDataStructure + '<TrendDownIcon>@TrendDownIcon</TrendDownIcon>';
        tileDataStructure = tileDataStructure + '<TrendFlatIcon>@TrendFlatIcon</TrendFlatIcon>';
        tileDataStructure = tileDataStructure + '<DrillUrl>@DrillUrl</DrillUrl>';
        tileDataStructure = tileDataStructure + '<ExecutionOrder>@ExecutionOrder</ExecutionOrder>';
        tileDataStructure = tileDataStructure + '<SupportingQuery>@SupportingQuery</SupportingQuery>';
        tileDataStructure = tileDataStructure + '<RunWithElevateAccount>@RunWithElevateAccount</RunWithElevateAccount>';
        tileDataStructure = tileDataStructure + '<RunWithElevatedCheckboxStatus>@RunWithElevatedCheckboxStatus</RunWithElevatedCheckboxStatus>';


        tileDataStructure = tileDataStructure + '</DataTile>';
        tileDataStructure = tileDataStructure + '</Tile> ';

        /*XML configuration for chart section*/
        // XML configuration structure of chart tile
        var tileChartStructure = '<Tile TargetId="@targetID">';
        tileChartStructure = tileChartStructure + '<Chart>';
        tileChartStructure = tileChartStructure + '<Type>@Type</Type>';
        tileChartStructure = tileChartStructure + '<ChartType>@ChartType</ChartType>';
        tileChartStructure = tileChartStructure + '<SelectedLayout>@SelectedLayout</SelectedLayout>';
        tileChartStructure = tileChartStructure + '<Title>@Title</Title>';
        tileChartStructure = tileChartStructure + '<TilePosition>@TilePosition</TilePosition>';
        tileChartStructure = tileChartStructure + '<ChartDDLink>@ChartDDLink</ChartDDLink>';
        tileChartStructure = tileChartStructure + '<ChartDataLabl>@ChartDataLabl</ChartDataLabl>';
        tileChartStructure = tileChartStructure + '<SubTitle>@SubTitle</SubTitle>';
        tileChartStructure = tileChartStructure + '<Background>@Background</Background>';
        tileChartStructure = tileChartStructure + '<AdvancedQuery>@AdvancedQuery</AdvancedQuery>';
        tileChartStructure = tileChartStructure + '<FilterAssociation>@FilterAssociation</FilterAssociation>';
        tileChartStructure = tileChartStructure + '<BackgroundQuery>@BackgroundQuery</BackgroundQuery>';
        tileChartStructure = tileChartStructure + '<Portfolio>@Portfolio</Portfolio>';
        tileChartStructure = tileChartStructure + '<ConnectionString>@ConnectionString</ConnectionString>';
        tileChartStructure = tileChartStructure + '<ConnectionType>@ConnectionType</ConnectionType>';
        tileChartStructure = tileChartStructure + '<Query>@Query</Query>';
        if ($(".OverlayChkbx:checked").length > 0) {
            tileChartStructure = tileChartStructure + '<EnableOverlay>@EnableOverlay</EnableOverlay>';
            tileChartStructure = tileChartStructure + '<Overlay>@Overlay</Overlay>';
        }
        tileChartStructure = tileChartStructure + '<FontColor>@FontColor</FontColor>';
        tileChartStructure = tileChartStructure + '<MetricText>@MetricText</MetricText>';

        //: New Metadata feature Added
        tileChartStructure = tileChartStructure + '<LabelMetaDataProvided>@LabelMetaDataProvided</LabelMetaDataProvided>';
        tileChartStructure = tileChartStructure + '<LabelMetaDataCountPerDataItem>@LabelMetaDataCountPerDataItem</LabelMetaDataCountPerDataItem>';
        tileChartStructure = tileChartStructure + '<LineCount>@LineCount</LineCount>';
        tileChartStructure = tileChartStructure + '<ValueQuery>@ValueQuery</ValueQuery>';
        tileChartStructure = tileChartStructure + '<ValueBox>@ValueBox</ValueBox>';
        tileChartStructure = tileChartStructure + '<Format>@Format</Format>';
        tileChartStructure = tileChartStructure + '<ValueFormat>@ValueFormat</ValueFormat>';
        tileChartStructure = tileChartStructure + '<ShowOnTooltip>@ShowOnTooltip</ShowOnTooltip>';
        tileChartStructure = tileChartStructure + '<ShowOnLabel>@ShowOnLabel</ShowOnLabel>';
        tileChartStructure = tileChartStructure + '<ResultOrder>@ResultOrder</ResultOrder>';
        tileChartStructure = tileChartStructure + '<Scale-X> ';
        tileChartStructure = tileChartStructure + '<QueryColumn>@XLabelMapping</QueryColumn>';
        tileChartStructure = tileChartStructure + '<Label>@XLabel</Label>';
        tileChartStructure = tileChartStructure + '<LabelFont>@XLabelFont</LabelFont>';
        tileChartStructure = tileChartStructure + '<ItemFont>@XItemFont</ItemFont>';
        tileChartStructure = tileChartStructure + '<ItemAngle>@XItemAngle</ItemAngle>';
        tileChartStructure = tileChartStructure + '</Scale-X>';
        tileChartStructure = tileChartStructure + '<Scale-Y> ';
        tileChartStructure = tileChartStructure + '<Label>@YLabel</Label>';
        tileChartStructure = tileChartStructure + '<LabelFont>@YLabelFont</LabelFont>';
        tileChartStructure = tileChartStructure + '<ItemFont>@YItemFont</ItemFont>';
        tileChartStructure = tileChartStructure + '<ItemAngle>NA</ItemAngle>';
        tileChartStructure = tileChartStructure + '</Scale-Y>';
        tileChartStructure = tileChartStructure + '<Legend>@Legend</Legend>';
        tileChartStructure = tileChartStructure + '<LegendPosition>@LegendPosition</LegendPosition>';

        tileChartStructure = tileChartStructure + '<RunWithElevateAccount>@RunWithElevateAccount</RunWithElevateAccount>';
        tileChartStructure = tileChartStructure + '<RunWithElevatedCheckboxStatus>@RunWithElevatedCheckboxStatus</RunWithElevatedCheckboxStatus>';

        //PC: Added new guide feature
        tileChartStructure = tileChartStructure + '<HorizontalGuide>@HorizontalGuide</HorizontalGuide>';
        tileChartStructure = tileChartStructure + '<VerticalGuide>@VerticalGuide</VerticalGuide>';
        tileChartStructure = tileChartStructure + '<ChartOrientation>@ChartOrientation</ChartOrientation>';
        tileChartStructure = tileChartStructure + '<ChartIsStacked>@ChartIsStacked</ChartIsStacked>';
        tileChartStructure = tileChartStructure + '<ChartHasTarget>@ChartHasTarget</ChartHasTarget>';


        tileChartStructure = tileChartStructure + '<GrandTotalColumns>@GrandTotalColumns</GrandTotalColumns>';
        /*******************RT*******************************/
        tileChartStructure = tileChartStructure + '<TitleBackgroundColor>@TitleBackgroundColor</TitleBackgroundColor>';
        //tileChartStructure = tileChartStructure + '<TitleMeasureDataMapping>@TitleMeasureDataMapping</TitleMeasureDataMapping>';
        tileChartStructure = tileChartStructure + '<TitleLabelDataFormat>@TitleLabelDataFormat</TitleLabelDataFormat>';
        /*******************RT*******************************/
        tileChartStructure = tileChartStructure + '<Series>';
        tileChartStructure = tileChartStructure + '<Color>@ColorSeries</Color>';
        tileChartStructure = tileChartStructure + '<Pattern>@PatternSeries</Pattern>';
        tileChartStructure = tileChartStructure + '<QueryColumn>@QueryColumn</QueryColumn>';
        tileChartStructure = tileChartStructure + '<QueryColumn>@RemainingData</QueryColumn>';
        tileChartStructure = tileChartStructure + '<QueryColumn>@TargetData</QueryColumn>';
        tileChartStructure = tileChartStructure + '<DrillThrough>@DrillThrough</DrillThrough>';
        tileChartStructure = tileChartStructure + '<DrillThroughType>@DrillThroughType</DrillThroughType>';
        tileChartStructure = tileChartStructure + '<RowLabels>@RowLabels</RowLabels>';
        tileChartStructure = tileChartStructure + '<ColumnTitle>@ColumnTitle</ColumnTitle>';

        tileChartStructure = tileChartStructure + '<TopLabels>@TopLabels</TopLabels>';
        tileChartStructure = tileChartStructure + '<TopLabelIndex>@TopLabelIndex</TopLabelIndex>';
        tileChartStructure = tileChartStructure + '<TopLabelDataFormat>@TopLabelDataFormat</TopLabelDataFormat>';
        //BottomLabelIndex
        tileChartStructure = tileChartStructure + '<BottomLabels>@BottomLabels</BottomLabels>';
        tileChartStructure = tileChartStructure + '<BottomLabelIndex>@BottomLabelIndex</BottomLabelIndex>';
        tileChartStructure = tileChartStructure + '<BottomLabelDataFormat>@BottomLabelDataFormat</BottomLabelDataFormat>';
        //tileChartStructure = tileChartStructure + '<Legends>@Legends</Legends>';
        tileChartStructure = tileChartStructure + '<TargetLabels>@TargetLabels</TargetLabels>';
        tileChartStructure = tileChartStructure + '<TargetLabelIndex>@TargetLabelIndex</TargetLabelIndex>';
        tileChartStructure = tileChartStructure + '<TargetLabelFormat>@TargetLabelFormat</TargetLabelFormat>';
        tileChartStructure = tileChartStructure + '<KeyMetricIndex>@KeyMetricIndex</KeyMetricIndex>';
        tileChartStructure = tileChartStructure + '<LegendIndex>@LegendIndex</LegendIndex>';
        tileChartStructure = tileChartStructure + '<DividerIndex>@DividerIndex</DividerIndex>';
        //KeyMetricIndex

        tileChartStructure = tileChartStructure + '</Series>';
        tileChartStructure = tileChartStructure + '</Chart>';
        tileChartStructure = tileChartStructure + '</Tile>';

        // XML configuration structure of list tile
        var tileListStructure = '<Tile TargetId="@targetID">';
        tileListStructure = tileListStructure + '<List>';
        tileListStructure = tileListStructure + '<Type>@Type</Type>';
        tileListStructure = tileListStructure + '<TileType>@ListTileType</TileType>';
        tileListStructure = tileListStructure + '<Title>@ListTitle</Title>';
        tileListStructure = tileListStructure + '<DDLink>@ListDDLink</DDLink>';
        tileListStructure = tileListStructure + '<TilePosition>@TilePosition</TilePosition>';
        tileListStructure = tileListStructure + '<BackgroundColor>@listBgColor</BackgroundColor>';
        tileListStructure = tileListStructure + '<AdvancedQuery>@AdvancedQuery</AdvancedQuery>';
        tileListStructure = tileListStructure + '<FilterAssociation>@FilterAssociation</FilterAssociation>';
        tileListStructure = tileListStructure + '<TextColor>@listTextColor</TextColor>';
        tileListStructure = tileListStructure + '<SelectedLayout>@SelectedLayout</SelectedLayout>';


        tileListStructure = tileListStructure + '<Query>@ListQuery</Query>';
        tileListStructure = tileListStructure + '<ConnectionType>@ConnectionType</ConnectionType>';
        tileListStructure = tileListStructure + '<Portfolio>@Portfolio</Portfolio>';
        tileListStructure = tileListStructure + '<ConnectionString>@ConnectionString</ConnectionString>';
        tileListStructure = tileListStructure + '<Header>@HeaderTitle</Header>';
        tileListStructure = tileListStructure + '<Format>@ListFormat</Format>';
        tileListStructure = tileListStructure + '<Mapping>@Mapping</Mapping>';
        tileListStructure = tileListStructure + '<DrillUrl>@DrillUrl</DrillUrl>';
        tileListStructure = tileListStructure + '<SelectedLayout>@SelectedLayout</SelectedLayout>';
        tileListStructure = tileListStructure + '<RunWithElevateAccount>@RunWithElevateAccount</RunWithElevateAccount>';
        tileListStructure = tileListStructure + '<RunWithElevatedCheckboxStatus>@RunWithElevatedCheckboxStatus</RunWithElevatedCheckboxStatus>';
        tileListStructure = tileListStructure + '</List></Tile>';
        // XML Configuration For Funnel Chart Structure
        // Funnel Chart
        var tileFunnelChartStructure = '<FunnelChart>';
        //tileFunnelChartStructure = tileFunnelChartStructure + '<Type>@Type</Type>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<ChartType>@ChartType</ChartType>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<Title>@Title</Title>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<ChartDDLink>@ChartDDLink</ChartDDLink>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<Portfolio>@Portfolio</Portfolio>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<ConnectionString>@ConnectionString</ConnectionString>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<ConnectionType>@ConnectionType</ConnectionType>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<Query>@Query</Query>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<AdvancedQuery>@AdvancedQuery</AdvancedQuery>';
        //tileFunnelChartStructure = tileFunnelChartStructure + '<FontColor>@FontColor</FontColor>';
        //: New Metadata feature Added
        //tileFunnelChartStructure = tileFunnelChartStructure + '<SelectedLayout>@SelectedLayout</SelectedLayout>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<DrillThrough>@DrillThrough</DrillThrough>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<DrillThroughType>@DrillThroughType</DrillThroughType>';
        // Todo: Sudhir
        tileFunnelChartStructure = tileFunnelChartStructure + '<RowLabels>@RowLabels</RowLabels>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<StartingYPos>@StartingYPos</StartingYPos>';
        //tileFunnelChartStructure = tileFunnelChartStructure + '<Legends>@Legends</Legends>';
        //tileFunnelChartStructure = tileFunnelChartStructure + '<TargetLabels>@TargetLabels</TargetLabels>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<Direction>@Direction</Direction>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<Connector>@Connector</Connector>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<Legends>@Legends</Legends>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<FunnelIndex>@FunnelIndex</FunnelIndex>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<LegendsVisibility>@LegendsVisibility</LegendsVisibility>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<SeriesColor>@SeriesColor</SeriesColor>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<SeriesPattern>@SeriesPattern</SeriesPattern>';
        tileFunnelChartStructure = tileFunnelChartStructure + '<ConvertedSeriesColor>@ConvertedSeriesColor</ConvertedSeriesColor>';
        tileFunnelChartStructure = tileFunnelChartStructure + '</FunnelChart>';
        // Funnel Chart ends


        // XML configuration structure of FreeText tile
        var tileFreeTextStructure = '<Tile TargetId="@targetID">';
        // var tileFreeTextStructure = '<Tile>';
        tileFreeTextStructure = tileFreeTextStructure + '<FreeText>';
        tileFreeTextStructure = tileFreeTextStructure + '<Type>@Type</Type>';
        tileFreeTextStructure = tileFreeTextStructure + '<Title>@FreeTextTitle</Title>';
        tileFreeTextStructure = tileFreeTextStructure + '<TilePosition>@TilePosition</TilePosition>';
        tileFreeTextStructure = tileFreeTextStructure + '<DDLink>@FreeTextDDLink</DDLink>';
        tileFreeTextStructure = tileFreeTextStructure + '<Background>@Background</Background>';
        tileFreeTextStructure = tileFreeTextStructure + '<HtmlContent>@HtmlContent</HtmlContent>';
        tileFreeTextStructure = tileFreeTextStructure + '<SelectedLayout>@SelectedLayout</SelectedLayout>';
        tileFreeTextStructure = tileFreeTextStructure + '</FreeText></Tile>';
        var filterslist = getSelectedFiltersIDS(dataTileType);
        var filterQueryReplace = [];
        filterQueryReplace = getreplacequeryobject(filterslist);


        // check the type of tile selected e.g. {Chart, Data, List}
        if (selectedTileTypeValue == dataTileValue) {
            // Variables for static and live tile properties
            var dataConnectionString = '';
            var dataPortfolio = '';
            var TilePosition = '';
            var dataConnectionType = '';
            var dataBackgroundQuery = '';
            var dataBackgroundColor = '', dataAdvancedQuery = '', dataFilterAssociation = [];
            var dataTitle = '';
            var dataDDLink = '';
            var dataQuery = '';
            var dataTrendQuery = '';
            var dataFormat = '';
            var dataTrendQuery = '';
            var dataIconName = '';
            var dataIconQuery = '';
            var dataInterval = '';
            var internalCounter;  // Used to maintain the status of the total number of tiles chosen
            var dataTileCount;  // Used to set the total tiles to be included into the configuration
            var dataTileDrillUrl = '',
                stopLightRules = '',
                stopLightColors = '',
                stopLightIcons = '',
                dataTrendUpIcon = '',
                dataTrendDownIcon = '',
                dataTrendFlatIcon = '',
                defaultColor = '',
                dataExecutionOrder = '';
            dataSupportQuery = '';
            dataSupportQueryExecutionOrder = 0,
            dataSessionObject = '',
            dataQueryTwo = '',
            dataFormatTwo = '';
            dataExecutionOrderTwo = ''
            , RunWithElevatedPrivilages = ''
            , RunWithElevatedPrivilageAccount = ''
            , enableOverlay = false



            TilePosition = $("#dataTilePosition").val();
            var dataTileType = $('#DataTypeDD>option:selected').text(); // Read the value selected in the datetype selected dropdown
            dataAdvancedQuery = $("#AdvancedDataQuery1").val();
            var filterOptionsSelected = $("#multiValueDataFilter option:selected");
            if (filterOptionsSelected.length > 0) {
                var i = 0;
                filterOptionsSelected.each(function () {
                    dataFilterAssociation[i++] = $(this).val(); //this is one of the selected values
                });
                dataFilterAssociation = dataFilterAssociation.join();
            }
            //Check for the datatype selected in dropdown
            if (dataTileType == staticTileValue) { // Logic for the static tile
                internalCounter = 1;
                dataInterval = noDataAvailable;
                dataTileCount = 1;
            }
            else { // Logic for the Live tile
                internalCounter = 3;
                dataInterval = eleDataIntervalDD.val();
                //Check for selection of the last tile configuration enable status
                if ($('#TileConfigEnableChk').is(':checked')) {
                    dataTileCount = 3; // All the three tiles configuration to be included
                }
                else {
                    dataTileCount = 2; // only first two tiles configuration to be included as the corresponding checkbox is not checked
                }
            }

            if (eleRunWithElevatedPrivilages.prop("checked")) {
                RunWithElevatedPrivilages = eleRunWithElevatedPrivilages.prop("checked");
                RunWithElevatedPrivilageAccount = eleRunWithElevatedPrivilageAccount.val();
            }
            if ($(".OverlayChkbx:checked").length > 0) {
                enableOverlay = true;
            }

            dataConnectionString = eleDataConnection_DD.val();
            // Custom Connection. Logic to use new custom data connection key and push the same in global array to prevent use of same key. (to avoid postback)
            if ("NewConnectionRequest" === dataConnectionString) {
                // Get the new connection string key name
                var sCustomConnectionKey = $("#CustomConnectionConfig_Data").val();
                dataConnectionString = sCustomConnectionKey;
                // Adding new key in global array. This will prevent user from creating new connection with same key
                if (-1 === $.inArray(sCustomConnectionKey, arrAllConnection)) {
                    arrAllConnection.push(sCustomConnectionKey);
                }
            }
            // End of custom connection
            dataPortfolio = eleDataPortfolio_DD.val();
            // Check for the type connection e.g. {Cube , Database} based on the connection string selected
            if (dataConnectionString.toLowerCase().indexOf("cube") >= 0) {
                dataConnectionType = "Cube";
            }
            else {
                dataConnectionType = "Database";
            }


            for (i = 1; i <= dataTileCount; i++) {

                dataBackgroundQuery = dataBackgroundQuery + noDataAvailable;
                //Code segment for threshold form fields
                if ($('input:radio[name=DataColorRbtn' + i + ']:checked').val() === dataColorCustomValue) {
                    dataBackgroundColor = dataBackgroundColor + noDataAvailable;
                    dataTrendQuery = dataTrendQuery + noDataAvailable;
                    dataTrendUpIcon = dataTrendUpIcon + noDataAvailable;
                    dataTrendDownIcon = dataTrendDownIcon + noDataAvailable;
                    dataTrendFlatIcon = dataTrendFlatIcon + noDataAvailable;
                    var ruleCounter = parseInt(elestopLightRuleCounter[i - 1].val());
                    defaultColor = defaultColor + $('#defaultColor' + i).val();
                    for (Counter = 1; Counter <= ruleCounter; Counter++) {
                        stopLightRules = stopLightRules + $('#DataStopLightRule' + i + '' + Counter).val();
                        stopLightColors = stopLightColors + $('#DataStopLightColor' + i + '' + Counter).val();
                        stopLightIcons = stopLightIcons + $('#DataStopLightIcon' + i + '' + Counter).val();
                        if (Counter < ruleCounter) {
                            stopLightRules = stopLightRules + '$.$';
                            stopLightColors = stopLightColors + '$.$';
                            stopLightIcons = stopLightIcons + '$.$';
                        }
                    }
                    dataIconName = dataIconName + noDataAvailable;
                } else {
                    stopLightRules = stopLightRules + noDataAvailable;
                    defaultColor = defaultColor + noDataAvailable;
                    stopLightColors = stopLightColors + noDataAvailable;
                    stopLightIcons = stopLightIcons + noDataAvailable
                    dataBackgroundColor = dataBackgroundColor + eleDataColorPickerArr[i - 1].val();
                    if ($('input:radio[name=DataColorRbtn' + i + ']:checked').val() === dataColorDefaultValue) { // Code for default value
                        dataTrendQuery = dataTrendQuery + noDataAvailable;
                        dataTrendUpIcon = dataTrendUpIcon + noDataAvailable;
                        dataTrendDownIcon = dataTrendDownIcon + noDataAvailable;
                        dataTrendFlatIcon = dataTrendFlatIcon + noDataAvailable;
                        //Check for "checked" status of checkbox input control
                        if (eleDataIconChkArr[i - 1].is(':checked')) {
                            dataIconName = dataIconName + eleDataIconPickerArr[i - 1].val(); // Append the data entered into the input control
                        }
                        else {
                            dataIconName = dataIconName + noDataAvailable; // Append "NA" if input control is not checked
                        }
                    } else {
                        dataTrendQuery = dataTrendQuery + eleDataTrendQueryArr[i - 1].val(); // Append the data entered into the input control
                        dataTrendUpIcon = dataTrendUpIcon + eleDataTrendUpIconArr[i - 1].val();
                        dataTrendDownIcon = dataTrendDownIcon + eleDataTrendDownIconArr[i - 1].val();
                        dataTrendFlatIcon = dataTrendFlatIcon + eleDataTrendFlatArr[i - 1].val();
                        dataIconName = dataIconName + noDataAvailable;
                    }
                }

                // Read the tile title and update to the dataTitlevariable
                dataTitle = dataTitle + eleDataDisplayTextArr[i - 1].val();//
                if (eleDataDDLink[i - 1].val() === '') {
                    dataDDLink = dataDDLink + noDataAvailable;
                }
                else {
                    dataDDLink = dataDDLink + eleDataDDLink[i - 1].val();
                }
                //Check for empty string in the input control
                if (eleDataQueryArr[i - 1].val() == '') {
                    dataQuery = dataQuery + noDataAvailable; // Append "NA" if nothing is entered into the input control
                } else {
                    dataQuery = dataQuery + eleDataQueryArr[i - 1].val(); // Append the data entered into the input control
                }

                //Check for empty string in the input control
                if (eleTileDataFormat_DDArr[i - 1].val() == 0) {
                    dataFormat = dataFormat + noDataAvailable; // Append "NA" if nothing is entered into the input control
                } else {
                    dataFormat = dataFormat + $('#TileDataFormat_DD' + i + '>option:selected').text(); // Append the data entered into the input control
                }

                if (eleDataDrilldownURL[i - 1].val() == '') {
                    dataTileDrillUrl = dataTileDrillUrl + noDataAvailable; // Append "NA" if nothing is entered into the input control
                } else {
                    dataTileDrillUrl = dataTileDrillUrl + eleDataDrilldownURL[i - 1].val(); // Append the data entered into the input control
                }
                if (eleDataExecutionOrder[i - 1].val() == '') {
                    dataExecutionOrder = dataExecutionOrder + '999'; // Append "0" if nothing is entered into the input control
                } else {
                    dataExecutionOrder = dataExecutionOrder + eleDataExecutionOrder[i - 1].val(); // Append the data entered into the input control
                }

                var oSupportObject = $("#DataSupportingQuery").text(), dataSupportChunk;
                if (undefined != oSupportObject && "" !== oSupportObject) {
                    dataSupportQuery = oSupportObject;
                    dataSupportQueryExecutionOrder = parseInt($("#DataSQExecutionOrder").val());
                    dataSessionObject = $("#DataObjectName").val();
                    dataSupportChunk = "<Data><DataQuery>" + dataSupportQuery + "</DataQuery><ExecutionOrder>" + dataSupportQueryExecutionOrder + "</ExecutionOrder><ObjectName>" + dataSessionObject + "</ObjectName></Data> ";
                }

                var oDataObject = '', oDataFormat = '', oDataPrefex = '', oDataQuery = '', oDataValue = '', oDataValue = '', oDataSuffix = '', oExecutionOrder = '', dataChunk = '';
                if ("Live" !== dataTileType) {
                    for (var j = 1; j <= 4; j = j + 3) {
                        oDataFormat = $("#TileDataFormat_DD" + j + " option:selected").text();
                        oDataQuery = $("#DataQuery" + j).text();
                        var updatedquery = "", sAdvancedQuerySelection = $("#AdvancedDataQuery1").val();
                        if (oDataQuery.indexOf("WHERE") !== -1 && sAdvancedQuerySelection === "OFF") {
                            oDataQuery = oDataQuery.slice(0, oDataQuery.indexOf("WHERE")).trim();
                        }
                        if (filterQueryReplace.length > 0) {
                            updatedquery = GetFilterAssociatedQuery(oDataQuery, dataConnectionType, filterQueryReplace);
                        }
                        else {
                            updatedquery = oDataQuery;
                        }
                        oDataQuery = updatedquery;
                        oExecutionOrder = $("#DataExecutionOrder" + j).val();
                        oDataSuffix = $("#DataSuffix" + j).val();

                        if ($("#TwoTilesCheck")[0].checked || 1 === j) {
                            oDataObject += "<Data><DataFormat";
                            if (oDataFormat) {
                                oDataObject += ">" + oDataFormat + "</DataFormat>";
                            }
                            else {
                                oDataObject += " />";
                            }

                            if (oDataPrefex) {
                                oDataObject += "<DataPrefix>" + oDataPrefex + "</DataPrefix>";
                            }
                            else {
                                oDataObject += "<DataPrefix />";
                            }

                            if (oDataQuery) {
                                oDataObject += "<DataQuery";
                                if (true == $("#DynamicSuffix" + j)[0].checked) {
                                    var oDataIndex, oSuffixIndex;
                                    oDataIndex = $("#DataIndex" + j).val();
                                    oSuffixIndex = $("#SuffixIndex" + j).val();
                                    if (oDataIndex && oSuffixIndex) {
                                        oDataObject += ' customQuery="yes" suffixIndex="' + oSuffixIndex + '" dataIndex="' + oDataIndex + '"';
                                    }
                                }

                                oDataQuery = oDataQuery.split('<').join('lt;');
                                oDataQuery = oDataQuery.split('>').join('gt;');
                                oDataObject += ">" + oDataQuery + "</DataQuery>";
                            }
                            else {
                                oDataObject += "<DataQuery />";
                            }

                            if (oDataValue) {
                                oDataObject += "<DataValue>" + oDataValue + "</DataValue>";
                            }
                            else {
                                oDataObject += "<DataValue />";
                            }

                            if (oDataSuffix) {
                                oDataObject += "<DataSuffix>" + oDataSuffix + "</DataSuffix>";
                            } else {
                                oDataObject += "<DataSuffix />";
                            }

                            if (oExecutionOrder) {
                                oDataObject += "<ExecutionOrder>" + oExecutionOrder + "</ExecutionOrder>";
                            } else {
                                oDataObject += "<ExecutionOrder />";
                            }
                            oDataObject += "</Data>";
                        }
                    }
                    if ('' === oDataObject) {
                        oDataObject = 'NA';
                    }
                    dataChunk = oDataObject;
                }

                // Append seperator for the each variable till the last run of the loop
                if (i != dataTileCount) {
                    dataBackgroundQuery = dataBackgroundQuery + seperator;
                    dataBackgroundColor = dataBackgroundColor + seperator;
                    dataTitle = dataTitle + seperator;
                    dataDDLink = dataDDLink + seperator;
                    dataQuery = dataQuery + seperator;
                    dataFormat = dataFormat + seperator;
                    dataTrendQuery = dataTrendQuery + seperator;
                    dataTrendUpIcon = dataTrendUpIcon + seperator;
                    dataTrendDownIcon = dataTrendDownIcon + seperator;
                    dataTrendFlatIcon = dataTrendFlatIcon + seperator;
                    dataIconName = dataIconName + seperator;
                    dataIconQuery = dataIconQuery + seperator;
                    stopLightRules = stopLightRules + seperator;
                    defaultColor = defaultColor + seperator;
                    stopLightColors = stopLightColors + seperator;
                    stopLightIcons = stopLightIcons + seperator;
                    dataTileDrillUrl = dataTileDrillUrl + seperator;
                    dataExecutionOrder = dataExecutionOrder + seperator;
                    dataSupportChunk = dataSupportChunk + seperator;
                    dataChunk = dataChunk + seperator;
                }

                // Check condition for the live tile and add DrillUrl property for the static tile
                //if (dataTileCount === 1) {
                //    dataTileDrillUrl = eleDataDrilldownURL.val().trim();  // initialize the drilldown URL to the variable
                //    if (dataTileDrillUrl == '') {
                //        dataTileDrillUrl = noDataAvailable; //initialize 'NA' as no data is inserted into the input element
                //    }
                //}
                //else {
                //    dataTileDrillUrl = noDataAvailable; // initialize 'NA' as this is a live tile
                //}
            }
            // Check for the last run of the loop and append "NA" for the Live tiles if the last configuration is disabled
            if (dataTileCount != internalCounter) {
                dataBackgroundQuery = dataBackgroundQuery + seperator + noDataAvailable;
                dataBackgroundColor = dataBackgroundColor + seperator + noDataAvailable;
                dataTitle = dataTitle + seperator + noDataAvailable;
                dataDDLink = dataDDLink + seperator + noDataAvailable;
                dataQuery = dataQuery + seperator + noDataAvailable;
                dataFormat = dataFormat + seperator + noDataAvailable;
                dataTrendQuery = dataTrendQuery + seperator + noDataAvailable;
                dataTrendUpIcon = dataTrendUpIcon + seperator + noDataAvailable;
                dataTrendDownIcon = dataTrendDownIcon + seperator + noDataAvailable;
                dataTrendFlatIcon = dataTrendFlatIcon + seperator + noDataAvailable;
                dataIconName = dataIconName + seperator + noDataAvailable;
                dataIconQuery = dataIconQuery + seperator + noDataAvailable;
                dataTileDrillUrl = dataTileDrillUrl + seperator + noDataAvailable;
                dataExecutionOrder = dataExecutionOrder + seperator + noDataAvailable;
                dataSupportChunk = dataSupportChunk + seperator + noDataAvailable;
                dataChunk = dataChunk + seperator + noDataAvailable;
            }

            //Explicitly handling '<' , '>' symbols that will be a part of query used as comparision operators
            dataQuery = dataQuery.split('<').join('lt;');
            dataQuery = dataQuery.split('>').join('gt;');
            dataTrendQuery = dataTrendQuery.split('<').join('lt;');
            dataTrendQuery = dataTrendQuery.split('>').join('gt;');
            dataBackgroundQuery = dataBackgroundQuery.split('<').join('lt;');
            dataBackgroundQuery = dataBackgroundQuery.split('>').join('gt;');

            tileConfigurationXML = tileDataStructure; // Initializing the entire data tile structure to a variable
            var updatedquery = "", sAdvancedQuerySelection = $("#AdvancedDataQuery1").val();
            if (oDataQuery.indexOf("WHERE") !== -1 && sAdvancedQuerySelection === "OFF") {
                dataQuery = dataQuery.slice(0, dataQuery.indexOf("WHERE")).trim();
            }
            if (filterQueryReplace.length > 0) {
                updatedquery = GetFilterAssociatedQuery(dataQuery, dataConnectionType, filterQueryReplace);
            }
            else {
                updatedquery = dataQuery;
            }
            // Replacing all place holders of  data tile config structure  with actual values from the form
            tileConfigurationXML = tileConfigurationXML.replace("@targetID", targetID);
            tileConfigurationXML = tileConfigurationXML.replace("@Type", selectedTileTypeValue);
            tileConfigurationXML = tileConfigurationXML.replace("@TileType", dataTileType);
            tileConfigurationXML = tileConfigurationXML.replace("@TileCount", dataTileCount);
            tileConfigurationXML = tileConfigurationXML.replace("@TilePosition", TilePosition);
            tileConfigurationXML = tileConfigurationXML.replace("@Interval", dataInterval);
            tileConfigurationXML = tileConfigurationXML.replace("@ConnectionString", dataConnectionString);
            tileConfigurationXML = tileConfigurationXML.replace("@Portfolio", dataPortfolio);
            tileConfigurationXML = tileConfigurationXML.replace("@RunWithElevatedPrivilages", RunWithElevatedPrivilages);
            tileConfigurationXML = tileConfigurationXML.replace("@RunWithElevatedPrivilageAccount", RunWithElevatedPrivilageAccount);
            tileConfigurationXML = tileConfigurationXML.replace("@ConnectionType", dataConnectionType);
            tileConfigurationXML = tileConfigurationXML.replace("@StopLightRules", stopLightRules);
            tileConfigurationXML = tileConfigurationXML.replace("@DefaultColor", defaultColor);
            tileConfigurationXML = tileConfigurationXML.replace("@StopLightColors", stopLightColors);
            tileConfigurationXML = tileConfigurationXML.replace("@StopLightIcons", stopLightIcons);
            tileConfigurationXML = tileConfigurationXML.replace("@BackgroundQuery", dataBackgroundQuery);
            tileConfigurationXML = tileConfigurationXML.replace("@BackgroundColor", dataBackgroundColor);

            tileConfigurationXML = tileConfigurationXML.replace("@Title", dataTitle);
            tileConfigurationXML = tileConfigurationXML.replace("@DDLink", dataDDLink);
            tileConfigurationXML = tileConfigurationXML.replace("@Format", dataFormat);
            tileConfigurationXML = tileConfigurationXML.replace("@TrendQuery", dataTrendQuery);
            tileConfigurationXML = tileConfigurationXML.replace("@AdvancedQuery", dataAdvancedQuery);
            tileConfigurationXML = tileConfigurationXML.replace("@FilterAssociation", dataFilterAssociation);

            tileConfigurationXML = tileConfigurationXML.replace("@TrendUpIcon", dataTrendUpIcon);
            tileConfigurationXML = tileConfigurationXML.replace("@TrendDownIcon", dataTrendDownIcon);
            tileConfigurationXML = tileConfigurationXML.replace("@TrendFlatIcon", dataTrendFlatIcon);


            tileConfigurationXML = tileConfigurationXML.replace("@DrillUrl", dataTileDrillUrl);
            tileConfigurationXML = tileConfigurationXML.replace("@Icons", dataIconName);
            tileConfigurationXML = tileConfigurationXML.replace("@SelectedLayout", selectedLayout);
            if ($(".OverlayChkbx:checked").length > 0) {
                tileConfigurationXML = tileConfigurationXML.replace("@EnableOverlay", true);
                tileConfigurationXML = tileConfigurationXML.replace("@Overlay", overlayXML);
            }
            tileConfigurationXML = tileConfigurationXML.replace("@RunWithElevateAccount", RunWithElevateAccount);
            tileConfigurationXML = tileConfigurationXML.replace("@RunWithElevatedCheckboxStatus", RunWithElevatedCheckboxStatus);
            if ("Live" !== dataTileType) {
                tileConfigurationXML = tileConfigurationXML.replace("@ExecutionOrder", dataExecutionOrder);
                tileConfigurationXML = tileConfigurationXML.replace("@SupportingQuery", dataSupportChunk);
                tileConfigurationXML = tileConfigurationXML.replace("@Data", dataChunk);
            }
            else {
                tileConfigurationXML = tileConfigurationXML.replace("<ExecutionOrder>@ExecutionOrder</ExecutionOrder>", "");
                tileConfigurationXML = tileConfigurationXML.replace("<SupportingQuery>@SupportingQuery</SupportingQuery>", "");
                tileConfigurationXML = tileConfigurationXML.replace("<MultipleData Type=\"Horizontal\">@Data</MultipleData>", "");
            }

            tileConfigurationXML = tileConfigurationXML.replace("@Query", updatedquery);
            tileConfigurationXML = tileConfigurationXML.split('&').join('&amp;');
        }/***********************RT************************************/
        else if (selectedTileTypeValue == chartTileValue) { // Check for SelectedTileType with 'Chart'
            //Processing chart options
            // Variables for chart properties
            var chartType = '';
            var chartTitle = '';
            var ChartDDLink = '';
            var ChartDataLabel = '';
            var TilePosition = '';
            var chartSubTitle = '';
            var chartBackgroundColor = '';
            var chartFontColor = '';
            var chartBackgroundQuery = '', chartAdvancedQuery = '', chartFilterAssociation = [];
            var chartConnectionString = '';
            var chartPortfolio = '';
            // Funnel Chart						
            var chartFunnelCount = '';
            // Funnel Chart ends
            var chartConnectionType = '';
            var chartQuery = '';

            var chartFormat = '';
            var chartLegend = '';
            var chartRowLabels = '';
            var chartColumnTitle = '';
            var chartTopLabels = '';
            var chartTopLabelIndex = '';
            var chartTopLabelDataFormat = '';
            var chartTargetLabels = '';
            var chartTargetLabelIndex = '';
            var chartTargetLabelDataFormat = '';
            var chartBottomLabels = '';
            var chartBottomLabelIndex = '';
            var chartBottomLabelDataFormat = '';
            var chartDividerIndex = '';
            var chartKeyMetricIndex = '';
            var chartLegendIndex = '';
            var chartLegends = '';
            var chartLegendPos = '';
            var chartMetricText = '';
            var chartLineCount = '';

            //PC: Added new guide feature
            var chartHorizontalGuide = '';
            var chartVerticalGuide = '';

            var chartResultOrder = '';
            var chartQueryColumn = '';
            var chartRemainingColumn = '';
            var chartTargetColumn = '';
            var chartXLabelMapping = '';
            var chartSliceColor = '';
            var chartSlicePattern = '';
            var chartSliceColorCode = '';
            var chartSlicePatternCode = '';
            var chartScaleXLabel = '';
            var chartScaleYLabel = '';
            var chartGrandTotalMappings = '';
            var chartScaleXLFont = '';
            var chartScaleXIFont = '';
            var chartScaleXIAngle = '';
            var chartScaleYLFont = '';
            var chartScaleYIFont = '';
            /************RT************/
            var chartTitleBackgroundColor = '';
            var chartTitleMeasureDataMapping = '';
            var TitleLabelDataFormat = '';
            /************RT************/
            var chartDrillUrl = '';
            var chartDrillUrlType = '';
            var tobeChecked = 0;
            var chartValueFormat = '', chartValueQuery = '', chartTooltipFormat = '', chartLabelFormat = '', chartValueBox = '';

            TilePosition = $("#chartTilePosition").val();
            chartType = eleTileChartType_DD.val(); // Initialize with the data selected into the input dropdown
            chartAdvancedQuery = $("#AdvancedChartQuery").val();
            var filterOptionsSelected = $("#multiValueChartFilter option:selected");
            if (filterOptionsSelected.length > 0) {
                var i = 0;
                filterOptionsSelected.each(function () {
                    chartFilterAssociation[i++] = $(this).val(); //this is one of the selected values
                });
                chartFilterAssociation = chartFilterAssociation.join();
            }
            if ('zinghfunnel' === chartType || 'MAQhFunnelChart' === chartType || 'maqhfunnelchart' === chartType) {
                // Save settings for Funnel Chart 
                tileConfigurationXML = tileFunnelChartStructure;
                tileConfigurationXML = SaveFunnelChartConfigurationData(tileFunnelChartStructure);
            }
            else {
                chartTitle = eleChartTitle.val();

                ChartDDLink = eleChartDDLink.val();
                if (ChartDDLink == '' || eleChartDDLink.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    ChartDDLink = noDataAvailable;
                }

                chartLineCount = eleChartLineCount.val();
                if (chartLineCount == '' || eleChartLineCount.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartLineCount = noDataAvailable;
                }

                ChartDataLabel = eleChartDataLabl.val();
                if (ChartDataLabel == '' || eleChartDataLabl.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    ChartDataLabel = noDataAvailable;
                }



                chartSubTitle = eleChartSubTitle.val().trim(); // Initialize with the data entered into the input control
                if (chartSubTitle == '' || eleChartSubTitle.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartSubTitle = noDataAvailable;
                }

                chartBackgroundColor = noDataAvailable;
                chartBackgroundQuery = noDataAvailable;
                if (chartBackgroundColor !== '' && !eleChartColorPicker.is(':disabled')) {                    // Check if no data is entered into the input textbox or if it is in disabled state
                    if ($('input:radio[name=ChartColorRbtn]:checked').val() == dataColorDefaultValue) {
                        chartBackgroundColor = eleChartColorPicker.val().trim();
                        chartBackgroundQuery = noDataAvailable;
                        tobeChecked = 0;
                    }
                    else {
                        chartBackgroundQuery = eleChartColorQuery.val().trim();
                        chartBackgroundQuery = chartBackgroundQuery.split('\n').join(' ');
                        chartBackgroundQuery = chartBackgroundQuery.split('<').join('lt;');
                        chartBackgroundQuery = chartBackgroundQuery.split('>').join('gt;');
                        chartBackgroundColor = noDataAvailable;
                        tobeChecked = 1;
                    }
                }
                // Check for the type connection e.g. {Cube , Database} based on the connection string selected
                chartOrientation = eleTileChartOrientation_DD.val();
                chartConnectionString = eleChartConnection_DD.val();
                // Logic to new custom data connection
                if ("NewConnectionRequest" === chartConnectionString) {
                    // Get the new connection string key name
                    var sCustomConnectionKey = $("#CustomConnectionConfig_Chart").val();
                    chartConnectionString = sCustomConnectionKey;

                    // Adding new key in global array. This will prevent user from creating new connection with same key
                    if (-1 === $.inArray(sCustomConnectionKey, arrAllConnection)) {
                        arrAllConnection.push(sCustomConnectionKey);
                    }
                }
                chartPortfolio = eleChartPortfolio_DD.val();
                if (chartConnectionString.toLowerCase().indexOf("cube") >= 0) {
                    chartConnectionType = "Cube";
                }
                else {
                    chartConnectionType = "Database";
                }

                chartQuery = eleChartQuery.val().trim();

                chartValueQuery = eleChartValueQuery.val().trim();
                chartFormat = $('#ChartDataFormat_DD >option:selected').text().trim();
                if (chartFormat == '0' || eleChartDataFormat_DD.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartFormat = noDataAvailable;
                }

                chartValueFormat = $('#ChartValueFormat_DD >option:selected').text().trim();
                if (chartValueFormat == '0' || eleChartValueFormat_DD.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartValueFormat = noDataAvailable;
                }


                chartTooltipFormat = $('#ChartTooltipFormat >option:selected').text().trim();
                if (chartTooltipFormat == '0' || eleChartTooltipFormat.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartTooltipFormat = noDataAvailable;
                }

                chartLabelFormat = $('#ChartLabelFormat >option:selected').text().trim();
                if (chartLabelFormat == '0' || eleChartTooltipFormat.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartLabelFormat = noDataAvailable;
                }

                chartLegend = eleChartLegend_DD.val();  // Initialize with the data entered into the input control
                if (chartLegend == '0' || eleChartLegend_DD.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartLegend = noDataAvailable;
                }

                chartLegends = eleChartLegends.val();  // Initialize with the data entered into the input control
                if (chartLegends == '' || eleChartLegends.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartLegends = noDataAvailable;
                }


                chartRowLabels = eleChartRowLabels.val();  // Initialize with the data entered into the input control
                if (chartRowLabels == '' || eleChartRowLabels.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartRowLabels = noDataAvailable;
                }

                chartColumnTitle = eleColumnTitle.val();
                if (chartColumnTitle == '' || eleColumnTitle.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartColumnTitle = noDataAvailable;
                }

                chartTopLabels = eleTopLabels.val();
                if (chartTopLabels == '' || eleTopLabels.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartTopLabels = noDataAvailable;
                }
                chartKeyMetricIndex = eleKeyMetricIndex.val();
                if (chartKeyMetricIndex == '' || eleKeyMetricIndex.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartKeyMetricIndex = noDataAvailable;
                }

                chartLegendIndex = eleLegendIndex.val();
                if (chartLegendIndex == '' || eleLegendIndex.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartLegendIndex = noDataAvailable;
                }
                chartTopLabelIndex = eleTopLabelIndex.val();
                if (chartTopLabelIndex == '' || eleTopLabelIndex.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartTopLabelIndex = noDataAvailable;
                }

                chartTopLabelDataFormat = eleTopLabelFormat.val();
                if (chartTopLabelDataFormat == '' || eleTopLabelFormat.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartTopLabelDataFormat = noDataAvailable;
                }



                chartTargetLabels = eleChartTargetLabels.val();  // Initialize with the data entered into the input control
                if (chartTargetLabels == '' || eleChartTargetLabels.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartTargetLabels = noDataAvailable;
                }

                chartTargetLabelIndex = eleChartTargetLabelIndex.val();
                if (chartTargetLabelIndex == '' || eleChartTargetLabelIndex.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartTargetLabelIndex = noDataAvailable;
                }

                chartTargetLabelDataFormat = eleChartTargetLabelFormat.val();
                if (chartTargetLabelDataFormat == '' || eleChartTargetLabelFormat.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartTargetLabelDataFormat = noDataAvailable;
                }

                chartBottomLabels = eleChartBottomLabels.val();  // Initialize with the data entered into the input control
                if (chartBottomLabels == '' || eleChartBottomLabels.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartBottomLabels = noDataAvailable;
                }

                chartBottomLabelIndex = eleBottomLabelIndex.val();
                if (chartBottomLabelIndex == '' || eleBottomLabelIndex.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartBottomLabelIndex = noDataAvailable;
                }

                chartBottomLabelDataFormat = eleBottomLabelFormat.val();
                if (chartBottomLabelDataFormat == '' || eleBottomLabelFormat.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartBottomLabelDataFormat = noDataAvailable;
                }

                chartKeyMetricIndex = eleKeyMetricIndex.val();
                if (chartKeyMetricIndex == '' || eleKeyMetricIndex.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartKeyMetricIndex = noDataAvailable;
                }

                chartDividerIndex = eleDividerIndex.val();
                if (chartDividerIndex == '' || eleDividerIndex.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartDividerIndex = noDataAvailable;
                }

                //PC: Added new guide feature
                chartIsStacked = eleChartIsStacked[0].checked;
                chartHasTarget = eleChartHasTarget[0].checked;
                chartHorizontalGuide = eleChartHorizontalGuide[0].checked;

                if (chartHorizontalGuide == '0' || eleChartHorizontalGuide.is(':disabled')) {
                    chartHorizontalGuide = noDataAvailable;
                }

                chartVerticalGuide = eleChartVerticalGuide[0].checked;
                log(chartVerticalGuide);

                if (chartVerticalGuide == '0' || eleChartVerticalGuide.is(':disabled')) {
                    chartVerticalGuide = noDataAvailable;
                }

                chartValueBox = eleChartValueBox.val();
                if (chartValueBox == '0' || eleChartValueBox.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartValueBox = noDataAvailable;
                }

                chartLegendPos = eleChartLegendPos_DD.val();  // Initialize with the data entered into the input control
                if (chartLegendPos == '0' || eleChartLegendPos_DD.is(':disabled')) {// Check if no data is entered into the input textbox or if it is in disabled state
                    chartLegendPos = noDataAvailable;
                }

                chartQueryColumn = eleChartDataMapping.val().trim();  // Initialize with the data entered into the input control
                if (chartQueryColumn == '' || eleChartDataMapping.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartQueryColumn = noDataAvailable;
                }
                chartRemainingColumn = eleChartRemainingDataMapping.val().trim();  // Initialize with the data entered into the input control
                if (chartRemainingColumn == '' || eleChartRemainingDataMapping.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartRemainingColumn = noDataAvailable;
                }

                chartTargetColumn = eleChartTargetDataMapping.val().trim();  // Initialize with the data entered into the input control
                if (chartTargetColumn == '' || eleChartTargetDataMapping.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartTargetColumn = noDataAvailable;
                }

                chartResultOrder = eleChartResultOrder_DD.val();  // Initialize with the data entered into the input control
                if (chartResultOrder == '0' || eleChartResultOrder_DD.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartResultOrder = noDataAvailable;
                }

                chartXLabelMapping = eleChartXLabelMapping.val().trim();  // Initialize with the data entered into the input control
                if (chartXLabelMapping == '' || eleChartXLabelMapping.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartXLabelMapping = noDataAvailable;
                }

                chartScaleXLabel = eleChartScaleXLabel.val().trim();  // Initialize with the data entered into the input control
                if (chartScaleXLabel == '' || eleChartScaleXLabel.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartScaleXLabel = noDataAvailable;
                }

                chartScaleYLabel = eleChartScaleYLabel.val().trim();  // Initialize with the data entered into the input control
                if (chartScaleYLabel == '' || eleChartScaleYLabel.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartScaleYLabel = noDataAvailable;
                }

                chartScaleXLFont = eleChartScaleXLFont.val().trim();  // Initialize with the data entered into the input control
                if (chartScaleXLFont == '' || eleChartScaleXLFont.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartScaleXLFont = noDataAvailable;
                }

                chartScaleXIFont = eleChartScaleXIFont.val().trim();  // Initialize with the data entered into the input control
                if (chartScaleXIFont == '' || eleChartScaleXIFont.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartScaleXIFont = noDataAvailable;
                }

                chartScaleXIAngle = eleChartScaleXIAngle.val().trim();  // Initialize with the data entered into the input control
                if (chartScaleXIAngle == '' || eleChartScaleXIAngle.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartScaleXIAngle = noDataAvailable;
                }

                chartScaleYLFont = eleChartScaleYLFont.val().trim();  // Initialize with the data entered into the input control
                if (chartScaleYLFont == '' || eleChartScaleYLFont.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartScaleYLFont = noDataAvailable;
                }

                chartScaleYIFont = eleChartScaleYIFont.val().trim();  // Initialize with the data entered into the input control
                if (chartScaleYIFont == '' || eleChartScaleYIFont.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartScaleYIFont = noDataAvailable;
                }

                chartSliceColor = eleChartSliceColor.val().trim().split(',');  // Initialize with the data entered into the input control by splitting the string
                for (var j = 0; j < chartSliceColor.length; j++) {

                    chartSliceColor[j] = chartSliceColor[j].trim();
                }
                if (chartSliceColor == '' || eleChartSliceColor.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartSliceColor = noDataAvailable;
                } else {
                    // Loop for reading the color ids and find their respective color codes 
                    for (var i = 0; i < chartSliceColor.length; i++) {
                        chartSliceColorCode = chartSliceColorCode + colourPickerValues[chartSliceColor[i]]; // Read color HEX Code from array and append to chartSliceColorCode 
                        if (i != (chartSliceColor.length - 1)) {
                            chartSliceColorCode = chartSliceColorCode + ",";
                        }
                    }
                }
                var patternPickerValues = [];

                $('.svgContainer svg defs pattern').each(function () {
                    patternPickerValues.push($(this).attr("id"));
                });
                chartSlicePattern = eleChartSlicePattern.val().trim().split(',');  // Initialize with the data entered into the input control by splitting the string
                for (var j = 0; j < chartSlicePattern.length; j++) {
                    chartSlicePattern[j] = chartSlicePattern[j].trim();
                }
                chartSlicePattern;
                if (chartSlicePattern == '' || eleChartSlicePattern.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    chartSlicePattern = noDataAvailable;
                }
                else {
                    // Loop for reading the color ids and find their respective color codes 
                    for (var i = 0; i < chartSlicePattern.length; i++) {
                        chartSlicePatternCode = chartSlicePatternCode + patternPickerValues[chartSlicePattern[i] - 1]; // Read color HEX Code from array and append to chartSliceColorCode 
                        if (i != (chartSlicePattern.length - 1)) {
                            chartSlicePatternCode = chartSlicePatternCode + ",";
                        }
                    }
                }

                chartGrandTotalMappings = eleChartGrandTotalMapping.val().trim();
                if (chartGrandTotalMappings == '' || eleChartGrandTotalMapping.is(':disabled')) { //Initialize with the data entered into the input control by splitting the string if it is enabled
                    chartGrandTotalMappings = noDataAvailable;
                }

                //: New Metadata feature Added
                try {
                    var chartLabelMetaDataProvidedFlag = eleChartLabelMetaDataProvidedFlag.is(":checked") ? "1" : "0";
                    var chartLabelMetaDataCountPerDataItem = eleChartLabelMetaDataCountPerItem.val().trim();
                }
                catch (e) {
                    log("Error getting values from config popup form: " + e.message);
                }

                /*******RT********/
                chartTitleBackgroundColor = eleChartTitleBackgroundColor.val().trim();
                if (chartTitleBackgroundColor == '' || eleChartTitleBackgroundColor.is(':disabled')) {
                    chartTitleBackgroundColor = noDataAvailable;

                }

                chartTitleMeasureDataMapping = eleTitleMeasureDataMapping.val().trim();
                if (chartTitleMeasureDataMapping == '' || eleTitleMeasureDataMapping.is(':disabled')) {
                    chartTitleMeasureDataMapping = noDataAvailable;

                }

                TitleLabelDataFormat = $('#TitleLabelDataFormat >option:selected').index();
                if (TitleLabelDataFormat <= 0 || eleTitleLabelDataFormat.is(':disabled')) { // Check if no data is entered into the input textbox or if it is in disabled state
                    TitleLabelDataFormat = noDataAvailable;
                }
                else {
                    TitleLabelDataFormat = $('#TitleLabelDataFormat >option:selected').text().trim();
                }

                /*******RT********/
                chartDrillUrl = eleChartDrilldownURL.val().trim(); // Initialize with the data entered into the input control
                if (chartDrillUrl == '') { // Check if no data is entered into the input textbox
                    chartDrillUrl = noDataAvailable;
                }

                //RT: Validation Fix
                eleChartDrillDownType.val() ? chartDrillUrlType = eleChartDrillDownType.val().trim() : "0";
                if (chartDrillUrlType == '0') { // Assigning NA to default values
                    chartDrillUrlType = noDataAvailable;
                }
                var oBackgroundColor = noDataAvailable, oFontColor = noDataAvailable, oMetricText = noDataAvailable;

                if ('zinginnerring' === chartType || 'zingpiewithmetric' === chartType) {
                    oBackgroundColor = $("#ChartColorPicker").val();
                    if (("undefined" !== oBackgroundColor) && "" !== oBackgroundColor) {
                        chartBackgroundColor = oBackgroundColor;
                    }
                    oFontColor = $("#FontChartColorPicker").val();
                    if (("undefined" === oFontColor) && "" === oFontColor) {
                        oFontColor = noDataAvailable;
                    }
                    if ('zingpiewithmetric' === chartType) {
                        oMetricText = $("#MetricText").val();
                        if (("undefined" === oMetricText) && "" === oMetricText) {
                            oFontColor = oMetricText;
                        }
                    }
                }

                if ('zingtop5bar' === chartType) {
                    chartBackgroundColor = $("#ChartColorPicker").val();
                }


                //Explicitly handling '<' , '>' symbols that will be a part of query used as comparision operators
                chartQuery = chartQuery.split('<').join('lt;');
                chartQuery = chartQuery.split('>').join('gt;');



                //Explicitly handling '<' , '>' symbols that will be a part of query used as comparision operators
                chartValueQuery = chartValueQuery.split('<').join('lt;');
                chartValueQuery = chartValueQuery.split('>').join('gt;');


                var updatedquery = "", sAdvancedQuerySelection = $("#AdvancedChartQuery").val();
                if (chartQuery.indexOf("WHERE") !== -1 && sAdvancedQuerySelection === "OFF") {
                    chartQuery = chartQuery.slice(0, chartQuery.indexOf("WHERE")).trim();
                }
                if (filterQueryReplace.length > 0) {
                    updatedquery = GetFilterAssociatedQuery(chartQuery, chartConnectionType, filterQueryReplace);
                }
                else {
                    updatedquery = chartQuery;
                }


                chartQuery = updatedquery;

                tileConfigurationXML = tileChartStructure;// Initializing the entire chart tile structure to a variable
                // Replacing all place holders of  chart tile config structure  with actual values from the form
                tileConfigurationXML = tileConfigurationXML.replace("@targetID", targetID);
                tileConfigurationXML = tileConfigurationXML.replace("@Type", selectedTileTypeValue);

                //Get latest chart version for the chart
                var chartlist = Object.keys(dicMiscItems).filter(function (key) {
                    return key.indexOf(chartType) === 0;
                }).join(";");
                var chartversions = chartlist.split(";");
                var versionselector = chartversions.length - 1;
                chartType = chartType + '_' + chartversions[versionselector].split('_')[1];

                tileConfigurationXML = tileConfigurationXML.replace("@ChartType", chartType);
                tileConfigurationXML = tileConfigurationXML.replace("@Title", chartTitle);
                tileConfigurationXML = tileConfigurationXML.replace("@ChartDDLink", ChartDDLink);
                tileConfigurationXML = tileConfigurationXML.replace("@ChartDataLabl", ChartDataLabel);
                tileConfigurationXML = tileConfigurationXML.replace("@SubTitle", chartSubTitle);
                tileConfigurationXML = tileConfigurationXML.replace("@Background", chartBackgroundColor);
                tileConfigurationXML = tileConfigurationXML.replace("@FontColor", oFontColor);
                tileConfigurationXML = tileConfigurationXML.replace("@MetricText", oMetricText);
                tileConfigurationXML = tileConfigurationXML.replace("@LineCount", chartLineCount);
                tileConfigurationXML = tileConfigurationXML.replace("@TilePosition", TilePosition);
                tileConfigurationXML = tileConfigurationXML.replace("@BackgroundQuery", chartBackgroundQuery);
                tileConfigurationXML = tileConfigurationXML.replace("@AdvancedQuery", chartAdvancedQuery);
                tileConfigurationXML = tileConfigurationXML.replace("@FilterAssociation", chartFilterAssociation);
                tileConfigurationXML = tileConfigurationXML.replace("@KeyMetricIndex", chartKeyMetricIndex);
                tileConfigurationXML = tileConfigurationXML.replace("@LegendIndex", chartLegendIndex);
                tileConfigurationXML = tileConfigurationXML.replace("@ConnectionString", chartConnectionString);
                tileConfigurationXML = tileConfigurationXML.replace("@Portfolio", chartPortfolio);
                tileConfigurationXML = tileConfigurationXML.replace("@ConnectionType", chartConnectionType);
                tileConfigurationXML = tileConfigurationXML.replace("@Query", updatedquery);

                //: New Metadata feature Added
                try {
                    //"ConfigPopup : LabelMetaDataProvided " + chartLabelMetaDataProvidedFlag.toString());
                    tileConfigurationXML = tileConfigurationXML.replace("@LabelMetaDataProvided", chartLabelMetaDataProvidedFlag);
                    //"ConfigPopup : LabelMetaDataProvided " + chartLabelMetaDataCountPerDataItem.toString());
                    tileConfigurationXML = tileConfigurationXML.replace("@LabelMetaDataCountPerDataItem", chartLabelMetaDataCountPerDataItem);
                }
                catch (e) {
                    log("Error replacing placeholder label metadata configurations with actual values: " + e.message);
                }

                tileConfigurationXML = tileConfigurationXML.replace("@ValueQuery", chartValueQuery);
                tileConfigurationXML = tileConfigurationXML.replace("@ValueBox", chartValueBox);
                tileConfigurationXML = tileConfigurationXML.replace("@Format", chartFormat);
                tileConfigurationXML = tileConfigurationXML.replace("@ValueFormat", chartValueFormat);
                tileConfigurationXML = tileConfigurationXML.replace("@ShowOnTooltip", chartTooltipFormat);
                tileConfigurationXML = tileConfigurationXML.replace("@ShowOnLabel", chartLabelFormat);
                tileConfigurationXML = tileConfigurationXML.replace("@Legend", chartLegend);
                tileConfigurationXML = tileConfigurationXML.replace("@LegendPosition", chartLegendPos);

                //PC: Added new guide feature
                tileConfigurationXML = tileConfigurationXML.replace("@ChartOrientation", chartOrientation);
                tileConfigurationXML = tileConfigurationXML.replace("@ChartIsStacked", chartIsStacked);
                tileConfigurationXML = tileConfigurationXML.replace("@ChartHasTarget", chartHasTarget);
                tileConfigurationXML = tileConfigurationXML.replace("@HorizontalGuide", chartHorizontalGuide);
                tileConfigurationXML = tileConfigurationXML.replace("@VerticalGuide", chartVerticalGuide);

                tileConfigurationXML = tileConfigurationXML.replace("@GrandTotalColumns", chartGrandTotalMappings);
                tileConfigurationXML = tileConfigurationXML.replace("@QueryColumn", chartQueryColumn);
                tileConfigurationXML = tileConfigurationXML.replace("@ResultOrder", chartResultOrder);
                tileConfigurationXML = tileConfigurationXML.replace("@RemainingData", chartRemainingColumn);
                tileConfigurationXML = tileConfigurationXML.replace("@TargetData", chartTargetColumn);
                tileConfigurationXML = tileConfigurationXML.replace("@XLabelMapping", chartXLabelMapping);
                tileConfigurationXML = tileConfigurationXML.replace("@ColorSeries", chartSliceColorCode);
                tileConfigurationXML = tileConfigurationXML.replace("@PatternSeries", chartSlicePatternCode);
                tileConfigurationXML = tileConfigurationXML.replace("@XLabel", chartScaleXLabel);
                tileConfigurationXML = tileConfigurationXML.replace("@YLabel", chartScaleYLabel);
                tileConfigurationXML = tileConfigurationXML.replace("@XLabelFont", chartScaleXLFont);
                tileConfigurationXML = tileConfigurationXML.replace("@XItemFont", chartScaleXIFont);
                tileConfigurationXML = tileConfigurationXML.replace("@XItemAngle", chartScaleXIAngle);
                tileConfigurationXML = tileConfigurationXML.replace("@YLabelFont", chartScaleYLFont);
                tileConfigurationXML = tileConfigurationXML.replace("@YItemFont", chartScaleYIFont);
                tileConfigurationXML = tileConfigurationXML.replace("@DrillThrough", chartDrillUrl);
                tileConfigurationXML = tileConfigurationXML.replace("@DrillThroughType", chartDrillUrlType);

                tileConfigurationXML = tileConfigurationXML.replace("@RowLabels", chartRowLabels);
                tileConfigurationXML = tileConfigurationXML.replace("@BottomLabels", chartBottomLabels);

                tileConfigurationXML = tileConfigurationXML.replace("@Legends", chartLegends);
                tileConfigurationXML = tileConfigurationXML.replace("@TargetLabels", chartTargetLabels);
                tileConfigurationXML = tileConfigurationXML.replace("@TopLabels", chartTopLabels);
                tileConfigurationXML = tileConfigurationXML.replace("@ColumnTitle", chartColumnTitle);
                tileConfigurationXML = tileConfigurationXML.replace("@TopLabelIndex", chartTopLabelIndex);
                tileConfigurationXML = tileConfigurationXML.replace("@TopLabelDataFormat", chartTopLabelDataFormat);
                tileConfigurationXML = tileConfigurationXML.replace("@BottomLabelIndex", chartBottomLabelIndex);
                tileConfigurationXML = tileConfigurationXML.replace("@BottomLabelDataFormat", chartBottomLabelDataFormat);
                tileConfigurationXML = tileConfigurationXML.replace("@TargetLabelIndex", chartTargetLabelIndex);
                tileConfigurationXML = tileConfigurationXML.replace("@TargetLabelFormat", chartTargetLabelDataFormat);
                tileConfigurationXML = tileConfigurationXML.replace("@KeyMetricIndex", chartKeyMetricIndex);
                tileConfigurationXML = tileConfigurationXML.replace("@LegendIndex", chartLegendIndex);
                tileConfigurationXML = tileConfigurationXML.replace("@DividerIndex", chartDividerIndex);

                /*******RT*********/
                tileConfigurationXML = tileConfigurationXML.replace("@TitleBackgroundColor", chartTitleBackgroundColor);
                tileConfigurationXML = tileConfigurationXML.replace("@TitleLabelDataFormat", TitleLabelDataFormat);
                tileConfigurationXML = tileConfigurationXML.replace("@SelectedLayout", selectedLayout);
                if ($(".OverlayChkbx:checked").length > 0) {
                    tileConfigurationXML = tileConfigurationXML.replace("@EnableOverlay", true);
                    tileConfigurationXML = tileConfigurationXML.replace("@Overlay", overlayXML);
                }
                tileConfigurationXML = tileConfigurationXML.replace("@RunWithElevateAccount", RunWithElevateAccount);
                tileConfigurationXML = tileConfigurationXML.replace("@RunWithElevatedCheckboxStatus", RunWithElevatedCheckboxStatus);

                tileConfigurationXML = tileConfigurationXML.split('&').join('&amp;');
            }
            /**********************RT*****************************/
        } else if (selectedTileTypeValue == listTileValue) { // Check for SelectedTileType with 'List'

            var listType = '', listTitle = '', listQuery = '', ListDrillUrl = '', ListExecutionOrder = 0, TilePosition = '', connectionType = '', connectionString = '', portfolio = '', headerTitle = '', listFormat = '', listMapping = '', listDDLink = ''
                , listBgColor = '', listTextColor = '', listTileType = '', listAdvancedQuery = '', listFilterAssociation = [];

            listType = listTileValue;

            listTileType = $('#ListTypeDD>option:selected').text(); // Read the value selected in the datetype selected dropdown
            TilePosition = $("#listTilePosition").val();
            listAdvancedQuery = $("#AdvancedListQuery").val();
            var filterOptionsSelected = $("#multiValueListFilter option:selected");
            if (filterOptionsSelected.length > 0) {
                var i = 0;
                filterOptionsSelected.each(function () {
                    listFilterAssociation[i++] = $(this).val(); //this is one of the selected values
                });
                listFilterAssociation = listFilterAssociation.join();
            }
            if (eleListTitle.val().trim() == '') {
                listTitle = listTitle + noDataAvailable;
            }
            else {
                listTitle = listTitle + eleListTitle.val().trim();
            }
            if (eleListDDLink.val().trim() === '') {
                listDDLink = listDDLink + noDataAvailable;
            }
            else {
                listDDLink = listDDLink + eleListDDLink.val().trim();
            }
            listQuery = eleListQuery.val();

            //Explicitly handling '<' , '>' symbols that will be a part of query used as comparison operators
            listQuery = listQuery.split('<').join('lt;');
            listQuery = listQuery.split('>').join('gt;');


            if (eleListBgColor.is(":disabled") || eleListBgColor.val().trim() === '') {
                listBgColor = noDataAvailable;
            }
            else {
                listBgColor = eleListBgColor.val();
            }

            if (eleListTextColor.is(":disabled") || eleListTextColor.val().trim() === '') {
                listTextColor = noDataAvailable;
            }
            else {
                listTextColor = eleListTextColor.val();
            }


            if (eleListDrillUrl.val().trim() == '') {
                ListDrillUrl = ListDrillUrl + noDataAvailable;
            }
            else {
                ListDrillUrl = ListDrillUrl + eleListDrillUrl.val().trim();
            }

            /*if (eleDataExecutionOrder.val().trim() == '') {
                ListExecutionOrder = ListExecutionOrder;
            }
            else {
                ListExecutionOrder = eleDataExecutionOrder.val().trim();
            }
            */
            // Check for the type connection e.g. {Cube , Database} based on the connection string selected
            connectionString = eleListConnection_DD.val();
            // Logic to new custom data connection
            if ("NewConnectionRequest" === connectionString) {
                // Get the new connection string key name
                var sCustomConnectionKey = $("#CustomConnectionConfig_List").val();
                connectionString = sCustomConnectionKey;
                // Adding new key in global array. This will prevent user from creating new connection with same key
                if (-1 === $.inArray(sCustomConnectionKey, arrAllConnection)) {
                    arrAllConnection.push(sCustomConnectionKey);
                }
            }
            portfolio = eleListPortfolio_DD.val();
            if (connectionString.toLowerCase().indexOf("cube") >= 0) {
                connectionType = "Cube";
            }
            else {
                connectionType = "Database";
            }

            // Iterating each and every element till total number of columns displayed currently
            for (var col = 0; col <= totalListColumns; col++) {
                headerTitle = headerTitle + noDataAvailable; // Appending Header title to 'NA' as currently field is not used
                listFormat = listFormat + eleListFormat_DD[col].val(); //  Appending the format of the column selected
                listMapping = listMapping + eleListMappingId[col].val(); // Appending the mapping ids of the column selected

                // Add separator in between
                if (col < totalListColumns) {
                    headerTitle = headerTitle + seperator;
                    listFormat = listFormat + seperator;
                    listMapping = listMapping + seperator;
                }
            }
            var updatedquery = "", sAdvancedQuerySelection = $("#AdvancedListQuery").val();
            if (listQuery.indexOf("WHERE") !== -1 && sAdvancedQuerySelection === "OFF") {
                listQuery = listQuery.slice(0, listQuery.indexOf("WHERE")).trim();
            }
            if (filterQueryReplace.length > 0) {
                updatedquery = GetFilterAssociatedQuery(listQuery, connectionType, filterQueryReplace);
            }
            else {
                updatedquery = listQuery;
            }


            tileConfigurationXML = tileListStructure; // Initializing the entire List tile structure to a variable
            // Replacing all place holders of  List tile config structure  with actual values from the form
            tileConfigurationXML = tileConfigurationXML.replace("@targetID", targetID);
            tileConfigurationXML = tileConfigurationXML.replace("@Type", selectedTileTypeValue);
            tileConfigurationXML = tileConfigurationXML.replace("@TilePosition", TilePosition);
            tileConfigurationXML = tileConfigurationXML.replace("@ListTileType", listTileType);
            tileConfigurationXML = tileConfigurationXML.replace("@ListTitle", listTitle);
            tileConfigurationXML = tileConfigurationXML.replace("@ListDDLink", listDDLink);
            tileConfigurationXML = tileConfigurationXML.replace("@ListQuery", updatedquery);
            tileConfigurationXML = tileConfigurationXML.replace("@AdvancedQuery", listAdvancedQuery);
            tileConfigurationXML = tileConfigurationXML.replace("@FilterAssociation", listFilterAssociation);
            tileConfigurationXML = tileConfigurationXML.replace("@ConnectionType", connectionType);
            tileConfigurationXML = tileConfigurationXML.replace("@ConnectionString", connectionString);
            tileConfigurationXML = tileConfigurationXML.replace("@Portfolio", portfolio);
            tileConfigurationXML = tileConfigurationXML.replace("@HeaderTitle", headerTitle);
            tileConfigurationXML = tileConfigurationXML.replace("@ListFormat", listFormat);
            tileConfigurationXML = tileConfigurationXML.replace("@Mapping", listMapping);
            tileConfigurationXML = tileConfigurationXML.replace("@DrillUrl", ListDrillUrl);
            tileConfigurationXML = tileConfigurationXML.replace("@ExecutionOrder", ListExecutionOrder);
            tileConfigurationXML = tileConfigurationXML.replace("@SelectedLayout", selectedLayout);
            if ($(".OverlayChkbx:checked").length > 0) {
                tileConfigurationXML = tileConfigurationXML.replace("@EnableOverlay", true);
                tileConfigurationXML = tileConfigurationXML.replace("@Overlay", overlayXML);
            }
            tileConfigurationXML = tileConfigurationXML.replace("@RunWithElevateAccount", RunWithElevateAccount);
            tileConfigurationXML = tileConfigurationXML.replace("@RunWithElevatedCheckboxStatus", RunWithElevatedCheckboxStatus);

            tileConfigurationXML = tileConfigurationXML.replace("@listTextColor", listTextColor);
            tileConfigurationXML = tileConfigurationXML.replace("@listBgColor", listBgColor);
            tileConfigurationXML = tileConfigurationXML.split('&').join('&amp;');
        } else if (selectedTileTypeValue == freeTextTileValue) { // Check for SelectedTileType with 'FreeTextTile'
            var freeTextTitle, freeTextBackground, freeTextHtmlContent, freeTextDDLink, TilePosition = '';

            TilePosition = $("#freeTextTilePosition").val();
            if (eleFreeTextTitle.val().trim() == '') {
                freeTextTitle = noDataAvailable;
            }
            else {
                freeTextTitle = eleFreeTextTitle.val().trim();
            }
            if (eleFreeTextDDLink.val().trim() === '') {
                freeTextDDLink = noDataAvailable;
            }
            else {
                freeTextDDLink = eleFreeTextDDLink.val().trim();
            }
            freeTextBackground = eleFreeTextColorPicker.val();
            freeTextHtmlContent = eleFreeTextContent.val();
            freeTextHtmlContent = freeTextHtmlContent.split('<').join('lt;').split('>').join('gt;');

            tileConfigurationXML = tileFreeTextStructure; // Initializing the entire List tile structure to a variable
            // Replacing all place holders of  List tile config structure  with actual values from the form
            tileConfigurationXML = tileConfigurationXML.replace("@targetID", targetID);
            tileConfigurationXML = tileConfigurationXML.replace("@Type", freeTextTileValue);
            tileConfigurationXML = tileConfigurationXML.replace("@FreeTextTitle", freeTextTitle);
            tileConfigurationXML = tileConfigurationXML.replace("@TilePosition", TilePosition);
            tileConfigurationXML = tileConfigurationXML.replace("@Background", freeTextBackground);
            tileConfigurationXML = tileConfigurationXML.replace("@HtmlContent", freeTextHtmlContent);
            tileConfigurationXML = tileConfigurationXML.replace("@FreeTextDDLink", freeTextDDLink);
            tileConfigurationXML = tileConfigurationXML.replace("@SelectedLayout", selectedLayout);
            tileConfigurationXML = tileConfigurationXML.split('&').join('&amp;');

        }
        var FinalConfigXML = tileConfigurationXML.toString();
        FinalConfigXML = escape(FinalConfigXML);

        FinalConfigXML = FinalConfigXML.replace(/[+]/g, "%2B");
        FinalConfigXML = FinalConfigXML.replace(/[*]/g, "%2A");
        FinalConfigXML = FinalConfigXML.replace(/[\/]/g, "%2F");
        //var presentTileID = numberOfTilesInSection++

        var numberOfTilesInSection = $("#" + reportingTemplateSectionID + " .tile").length + $("#" + reportingTemplateSectionID + " .GridContainer").length, isTilePresent = false;
        tileObject = {};
        tileObject.LayoutSize = selectedLayout;
        tileObject.TileFlowOrder = TilePosition;
        tileObject.fTileLiveStatus = true;
        if (isEditTile) {
            tileObject.TileHandle = targetID;
            tileObject.SectionHandle = targetID.split("_")[1];
        } else {
            tileObject.TileHandle = reportName + "_" + reportingTemplateSectionID + "_" + "tile" + presentTileID;
            tileObject.SectionHandle = reportingTemplateSectionID;
        }
        tileObject.TileType = selectedTileTypeValue;
        tileObject.XMLConfiguration = FinalConfigXML;
        for (var tileIndex = 0; tileIndex < oTiles.length; tileIndex++) {
            if (oTiles[tileIndex].TileHandle === tileObject.TileHandle) {
                oTiles[tileIndex] = tileObject;
                isTilePresent = true;
                break;
            }
        }
        if (!isTilePresent) {
            oTiles.push(tileObject);
        }

        sortTilesBasedOnTileFlowOrder(oTiles);
        for (var sectionIndex = 0; sectionIndex < oSections.length; sectionIndex++) {
            oSections[sectionIndex]["addTilePosition"] = updateTileOrderForSection(oSections[sectionIndex].SectionHandle, oTiles);
        }
        var sectionObject = {};
        for (var sectionIndex = 0; sectionIndex < oSections.length; sectionIndex++) {
            if (oSections[sectionIndex].SectionHandle === tileObject.SectionHandle) {
                sectionObject = oSections[sectionIndex];
                break;
            }
        }
        //assignDefaultGridPositions(sectionObject);
        sectionObject["addTilePosition"] = updateTileOrderForSection(sectionObject.SectionHandle, oTiles);
        if (isEditTile) {


            $("#" + tileObject.SectionHandle + " .tile").remove();
            $("#" + tileObject.SectionHandle + " .GridContainer").parent().remove();
            $('#' + tileObject.SectionHandle + ' div[id^="dimensionDiv_"]').remove();

            for (var tileIndex = 0; tileIndex < oTiles.length; tileIndex++) {
                if (oTiles[tileIndex].SectionHandle === tileObject.SectionHandle && oTiles[tileIndex].fTileLiveStatus === true) {
                    createTile(oTiles[tileIndex]);
                }
            }
        }
        else {
            createTile(tileObject);
        }
    }
}

function sortTilesBasedOnTileFlowOrder(oTiles) {
    var minTileFlowOrder = 0;
    var minTileFlowOrderTileIndex = 0;
    for (i = 0; i < oTiles.length - 1; i++) {
        minTileFlowOrderTileIndex = i;
        minTileFlowOrder = parseInt(oTiles[i].TileFlowOrder);
        for (j = i + 1; j < oTiles.length; j++) {
            if (parseInt(oTiles[j].TileFlowOrder) < minTileFlowOrder) {
                minTileFlowOrder = parseInt(oTiles[j].TileFlowOrder);
                minTileFlowOrderTileIndex = j;
            }
        }
        var temp = oTiles[i];
        oTiles[i] = oTiles[minTileFlowOrderTileIndex];
        oTiles[minTileFlowOrderTileIndex] = temp;
    }
}

function SaveFunnelChartConfigurationData(tileFunnelChartStructure) {
    var finalConfigurationXML = '',
    chartFunnelConnection,
        chartFunnelPortfolio,
    chartFunnelTitle,
    chartFunnelDDL,
    chartFunnelQuery,
    chartFunnelAdvancedQuery,
    chartFunnelColorPicker,
    chartFunnelLegends,
        chartFunnelLegendsVisiblity,
    chartFunnelDirection,
    chartFunnelConnector,
    chartFunnelDrillDownURL,
    chartFunnelDrillDownType,
    chartFunnelConnectionType,
    chartFunnelStartingYPos,
    chartFunnelRowLabels,
    chartFunnelSeriesPattern


    var filterslist = getSelectedFiltersIDS("Grid");
    var filterQueryReplace = [];
    filterQueryReplace = getreplacequeryobject(filterslist);
    // JavaScript source code
    for (var grid = 0; grid <= totalChartFunnelCount; grid++) {
        tileConfigurationXML = tileFunnelChartStructure;
        chartFunnelTitle = eleChartFunnelTitle[grid].val();
        //gridPaging = eleGridPaging[grid].val();

        /* PC: Select Fields Visibility */
        //gridSelectVisibility = eleGridSelectVisibility[grid][0].checked;
        chartFunnelConnection = eleChartFunnelConnection[grid].val();
        chartFunnelPortfolio = eleChartFunnelPortfolio[grid].val();
        //Check for the type connection e.g. {Cube , Database} based on the connection string selected
        if (chartFunnelConnection.toLowerCase().indexOf("cube") >= 0) {
            chartFunnelConnectionType = "Cube";
        }
        else {
            chartFunnelConnectionType = "Database";
        }
        //gridSelectedLayout = "8by2";
        chartFunnelQuery = eleChartFunnelQuery[grid].val();
        chartFunnelAdvancedQuery = eleChartFunnelAdvancedQuery[grid].val();
        chartFunnelDDL = eleChartFunnelDDL[grid].val();
        chartFunnelColorPicker = eleChartFunnelColorPicker[grid].val();
        chartFunnelLegends = eleChartFunnelLegends[grid].val();
        chartFunnelLegendsVisiblity = eleChartFunnelLegendsVisibility[grid].prop("checked");
        chartFunnelSeriesPattern = eleChartFunnelSeriesPattern[grid].val();
        chartFunnelSeriesColor = eleChartFunnelSeriesColor[grid].val();
        chartFunnelSeriesPattern = eleChartFunnelSeriesPattern[grid].val();
        chartFunnelDirection = eleChartFunnelDirection[grid].prop("checked");
        chartFunnelConnector = eleChartFunnelConnector[grid].prop("checked");
        chartFunnelDrillDownURL = eleChartFunnelDrillDownURL[grid].val();
        chartFunnelDrillDownType = eleChartFunnelDrillDownType[grid].val();
        //eleChartFunnelConnection[grid].val();
        chartFunnelStartingYPos = eleChartFunnelStartingYPos[grid].val();
        chartFunnelRowLabels = eleChartFunnelRowLabels[grid].val();
        // Getting IsFullReport flag and PivotExcelURL from config popup
        //gridIsFullReport = eleGridPivotExcelChk[grid].is(":checked");
        //gridPivotExcelURL = eleGridPivotExcelURL[grid].val();

        tempGridDataStructure = tileFunnelChartStructure;

        chartFunnelQuery = chartFunnelQuery.split('<').join('lt;');
        chartFunnelQuery = chartFunnelQuery.split('>').join('gt;');

        //tempGridDataStructure = tempGridDataStructure.replace("@Title", gridTitle);
        //tempGridDataStructure = tempGridDataStructure.replace("@Paging", gridPaging);
        //Get latest chart version for the chart
        /*var chartlist = Object.keys(dicMiscItems).filter(function (key) {
            return key.indexOf(chartType) === 0;
        }).join(";");
        var chartversions = chartlist.split(";");
        var versionselector = chartversions.length - 1;
        chartType = chartType + '_' + chartversions[versionselector].split('_')[1];
        */
        tileConfigurationXML = tileConfigurationXML.replace("@ChartType", eleTileChartType_DD.val());
        tileConfigurationXML = tileConfigurationXML.replace("@Title", chartFunnelTitle);
        tileConfigurationXML = tileConfigurationXML.replace("@ChartDDLink", chartFunnelDDL);
        //tileConfigurationXML = tileConfigurationXML.replace("@FontColor", oFontColor);
        tileConfigurationXML = tileConfigurationXML.replace("@ConnectionString", chartFunnelConnection);
        tileConfigurationXML = tileConfigurationXML.replace("@Portfolio", chartFunnelPortfolio);
        tileConfigurationXML = tileConfigurationXML.replace("@ConnectionType", chartFunnelConnectionType);



        var updatedquery = "", sAdvancedQuerySelection = chartFunnelAdvancedQuery;
        if (chartFunnelQuery.indexOf("WHERE") !== -1 && sAdvancedQuerySelection === "OFF") {
            chartFunnelQuery = chartFunnelQuery.slice(0, chartFunnelQuery.indexOf("WHERE")).trim();
        }
        if (filterQueryReplace.length > 0) {
            updatedquery = GetFilterAssociatedQuery(chartFunnelQuery, chartFunnelConnectionType, filterQueryReplace);
        }
        else {
            updatedquery = chartFunnelQuery;
        }

        tileConfigurationXML = tileConfigurationXML.replace("@Query", updatedquery);

        /* PC: Select Fields Visibility */
        //tempGridDataStructure = tempGridDataStructure.replace("@SelectedLayout", gridSelectedLayout);
        tileConfigurationXML = tileConfigurationXML.replace("@ConnectionType", chartFunnelConnectionType);
        tileConfigurationXML = tileConfigurationXML.replace("@ConnectionString", chartFunnelConnection);
        tileConfigurationXML = tileConfigurationXML.replace("@AdvancedQuery", chartFunnelAdvancedQuery);
        tileConfigurationXML = tileConfigurationXML.replace("@DrillThrough", chartFunnelDrillDownURL);
        tileConfigurationXML = tileConfigurationXML.replace("@DrillThroughType", chartFunnelDrillDownType);
        tileConfigurationXML = tileConfigurationXML.replace("@RowLabels", chartFunnelRowLabels);
        tileConfigurationXML = tileConfigurationXML.replace("@StartingYPos", chartFunnelStartingYPos);
        tileConfigurationXML = tileConfigurationXML.replace("@Direction", chartFunnelDirection);
        tileConfigurationXML = tileConfigurationXML.replace("@Connector", chartFunnelConnector);
        tileConfigurationXML = tileConfigurationXML.replace("@Legends", chartFunnelLegends);
        tileConfigurationXML = tileConfigurationXML.replace("@LegendsVisibility", chartFunnelLegendsVisiblity);
        tileConfigurationXML = tileConfigurationXML.replace("@SeriesColor", chartFunnelSeriesColor);
        tileConfigurationXML = tileConfigurationXML.replace("@SeriesPattern", chartFunnelSeriesPattern);
        var tempSeriesColor = chartFunnelSeriesColor.split(',');
        var chartSliceColorCode = "";
        var chartSlicePatternCode = "";
        for (var i = 0; i < tempSeriesColor.length; i++) {
            chartSliceColorCode = chartSliceColorCode + colourPickerValues[tempSeriesColor[i]]; // Read color HEX Code from array and append to chartSliceColorCode 
            if (i != (tempSeriesColor.length - 1)) {
                chartSliceColorCode = chartSliceColorCode + ",";
            }
        }
        tileConfigurationXML = tileConfigurationXML.replace("@ConvertedSeriesColor", chartSliceColorCode);

        tileConfigurationXML = tileConfigurationXML.replace("@FunnelIndex", grid);
        //  tempGridDataStructure = tempGridDataStructure.replace("@ToolTipColumns", gridToolTipColumnStructire);
        finalConfigurationXML = finalConfigurationXML + tileConfigurationXML;
    }

    // Grid Implementation
    //var sTabName = $("#GridContainer_" + curGrid["WebPartId"] + " .grid_btn_hide input[id=Tab_Name]").val();
    //var sTabId = $("#GridContainer_" + curGrid["WebPartId"] + " .grid_btn_hide input[id=Tab_Id]").val();
    //var sTabGroupId = $("#GridContainer_" + curGrid["WebPartId"] + " .grid_btn_hide input[id=Group_Id]").val();
    //finalConfigurationXML = '<FunnelCharts TabName="' + '">' + finalConfigurationXML + '</FunnelCharts>';
    finalConfigurationXML = '<Tile TargetId="' + targetID + '"><Type>' + "Chart" + '</Type><Chart><SelectedLayout>' + selectedLayout + '</SelectedLayout>' + finalConfigurationXML + '</Chart></Tile>';

    //gridConfigurationXML = gridConfigurationXML.replace("@Tabs", gridDisplayStyle);

    finalConfigurationXML = finalConfigurationXML.split('&').join('&amp;');


    //var finalGridConfigurationXML = escape(finalConfigurationXML);
    return finalConfigurationXML;

}

//Function to Hide Settings button if user is not part of admin group
function getLoggedInUserName() {
    try {
        var clientContext = new SP.ClientContext();
        var groupCollection = clientContext.get_site().get_rootWeb().get_siteGroups();

        user = clientContext.get_web().get_currentUser();
        clientContext.load(user);
        clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    }
    catch (e) { }
}

// Function to execute on success of above function
function onQuerySucceeded() {
    loggedInUser = user.get_loginName().split("\\")[1] + "@microsoft.com";

}
getLoggedInUserName();
function closeConfigPopUp(response) {
    $('#mask , .Config-popup').fadeOut(300, function () { // Removing mask and hiding the Config-popup div
        $('#mask').remove();
    });
    fetchAllTilesData();
}

/* Create a tile with tile properties */
function createTile(tile, bFake) {

    $('#mask , .Config-popup').fadeOut(300, function () { // Removing mask and hiding the Config-popup div
        $('#mask').remove();
    });

    if (tile != "error" && tile != "") {
        if (tile.TileType === "Grid") {
            updateGridConfiguration(tile);
            //document.getElementById('GridContainer')
            //$('#HtmlContainer_' + curGrid.WebPartId + ' div[id=GridContainer]').empty();
            //$('#HtmlContainer_' + curGrid.WebPartId + ' div[id=tabsContainer]').empty();

            //curGrid.Init(true, "GroupConfiguration");
            var oCurGrid = new Grid();
            oCurGrid.WebPartId = tile.TileHandle;

            //TODO(ESBI): Check if is still required 
            $("#GridMainDiv_" + tile.TileHandle).remove()
            tile.addTile = getAddTilePositions(tile.SectionHandle);
            oCurGrid.Init(tile, true, "EditedConfiguration");
        } else {
            var Config = tile;
            reportID = siteName + "_" + reportName;
            sectionID = Config.SectionHandle;
            tileID = Config.TileHandle;
            var XMLConfig = Config.XMLConfiguration;
            XMLConfig = unescape(XMLConfig);
            XMLConfig = XMLConfig.replace(/\\/g, "\\\\");

            // Now load an xml document using jquery 
            var XMLDoc = $.parseXML(XMLConfig);
            var oXMLDoc = $(XMLDoc); //wrap xml in jquery object to make it available call jquery functions
            oXMLDoc.find("Tile").each(function () {
                var id = $(this).attr('TargetId');
                if (id == targetID) { // Compare the targetID to be saved with the existing XML and remove the node if matched
                    $(this).remove();
                }
            });

            Config.XMLConfig = Config.XMLConfiguration;
            TileConfig = MAQ.RT.TileMapper(Config);
            if (undefined != TileConfig) {
                var tilelength = TileConfig.length, index;
                if (tilelength > 0) {
                    //$('#' + contianerID + ' div[id*=' + zone + '').find('.partDivision').removeClass('white').html('');
                    for (index = 0; index < tilelength; index++) {
                        var Tile = TileConfig[index];
                        if ("Data" !== Tile.Type) {
                            TileLoadStart("#" + tileID);
                        }


                        eval("var Tile" + index + " = Tile");
                        /*Calling GetData for each Tile , Here we have used eval because there is no way to do dynamic naming of variables for referencing different objects */
                        //MAQ.iTileConfigCount++;
                        var tileObject = eval("Tile" + index);
                        if (tile.gridLayoutColumnValue === undefined) {
                            tile.gridLayoutColumnValue = Config.gridLayoutColumnValue;
                        }
                        if (tile.gridLayoutRowValue === undefined) {
                            tile.gridLayoutRowValue = Config.gridLayoutRowValue;
                        }

                        tileObject.gridLayoutColumnValue = tile.gridLayoutColumnValue;
                        tileObject.gridLayoutRowValue = tile.gridLayoutRowValue;
                        tileObject.columnSpan = tileObject.SelectedLayout.charAt(0);
                        tileObject.rowSpan = tileObject.SelectedLayout.charAt(3);
                        if (tileObject.BackgroundColor == "NA" || tileObject.BackgroundColor == "") {
                            tileObject.BackgroundColor = "ffffff";
                        }
                        if (sectionID !== navigationSectionHandle) {
                            if (tileObject.BackgroundColor === "NA" || tileObject.BackgroundColor.toString().toLowerCase() === "ffffff") {
                                tileObject.addTile = getAddTilePositions(sectionID);
                                $("#" + sectionID + " .rt-report-section")
                            .append(
	                            $("<div id='" + tileID + "_loading'>")
	                            .css({
	                                "-ms-grid-column": tileObject.gridLayoutColumnValue,
	                                "-ms-grid-row": tileObject.gridLayoutRowValue,
	                                "-ms-grid-column-span": tileObject.columnSpan,
	                                "-ms-grid-row-span": tile.rowSpan,
	                                "background": "#" + tileObject.BackgroundColor + " url('" + webAPIurl + "/SiteAssets/PlatformComponentReportingTemplate/images/loading.gif') no-repeat 50% 50%",
	                                "height": LayoutSelector.getHeight(tileObject.SelectedLayout),
	                                "width": LayoutSelector.getWidth(tileObject.SelectedLayout)
	                            })
                            );
                            }
                            else {
                                tileObject.addTile = getAddTilePositions(sectionID);
                                $("#" + sectionID + " .rt-report-section")
	                            .append(
	                            $("<div id='" + tileID + "_loading'>")
		                            .css({
		                                "-ms-grid-column": tileObject.gridLayoutColumnValue,
		                                "-ms-grid-row": tileObject.gridLayoutRowValue,
		                                "-ms-grid-column-span": tileObject.columnSpan,
		                                "-ms-grid-row-span": tile.rowSpan,
		                                "background": "#" + tileObject.BackgroundColor + " url('" + webAPIurl + "/SiteAssets/PlatformComponentReportingTemplate/images/loading_indeterminate_bar_invert.gif') no-repeat 50% 50%",
		                                "height": LayoutSelector.getHeight(tileObject.SelectedLayout),
		                                "width": LayoutSelector.getWidth(tileObject.SelectedLayout)
		                            })
	                            );
                            }
                        }
                        if (typeof (Tile.iExecutionOrder) === 'undefined' || !(Tile.iExecutionOrder)) {
                            if (Tile.ChartType === "zinghfunnel") {
                                var tile = tileObject;
                                if (null !== tile.FunnelCharts && undefined !== tile.FunnelCharts) {
                                    for (var iIndex = 0; iIndex < tile.FunnelCharts.length; iIndex++) {
                                        if (null !== tile.FunnelCharts[iIndex] && undefined !== tile.FunnelCharts[iIndex]) {
                                            // Toso: Sudhir
                                            // Add the rquired tile properties to Funnel Chart tile
                                            tile.FunnelCharts[iIndex].gridLayoutColumnValue = tile.gridLayoutColumnValue;
                                            tile.FunnelCharts[iIndex].gridLayoutRowValue = tile.gridLayoutRowValue;
                                            tile.FunnelCharts[iIndex].rowSpan = tile.rowSpan;
                                            tile.FunnelCharts[iIndex].columnSpan = tile.columnSpan;
                                            tile.FunnelCharts[iIndex].addTile = tile.addTile;
                                            tile.FunnelCharts[iIndex].SelectedLayout = tile.SelectedLayout;
                                            // Todo: Remove Hardcoding
                                            tile.FunnelCharts[iIndex].DisplayTitle = false;
                                            GetData(tile.FunnelCharts[iIndex], reportID, sectionID, tileID, 999, bFake ? bFake : true);
                                        }
                                    }
                                }
                            }
                            else {
                                GetData(tileObject, reportID, sectionID, tileID, 999, bFake ? bFake : true);
                            }
                        }
                        else {
                            if (Tile.ChartType === "zinghfunnel" || Tile.ChartType === "MAQhFunnelChart" || Tile.ChartType === "maqhfunnelchart") {
                                var tile = tileObject;
                                if (null !== tile.FunnelCharts && undefined !== tile.FunnelCharts) {
                                    for (var iIndex = 0; iIndex < tile.FunnelCharts.length; iIndex++) {
                                        if (null !== tile.FunnelCharts[iIndex] && undefined !== tile.FunnelCharts[iIndex]) {
                                            tile.FunnelCharts[iIndex].gridLayoutColumnValue = tile.gridLayoutColumnValue;
                                            tile.FunnelCharts[iIndex].gridLayoutRowValue = tile.gridLayoutRowValue;
                                            tile.FunnelCharts[iIndex].rowSpan = tile.rowSpan;
                                            tile.FunnelCharts[iIndex].columnSpan = tile.columnSpan;
                                            tile.FunnelCharts[iIndex].addTile = tile.addTile;
                                            tile.FunnelCharts[iIndex].SelectedLayout = tile.SelectedLayout;
                                            // Todo: Remove Hardcoding
                                            tile.FunnelCharts[iIndex].DisplayTitle = false;
                                            GetData(tile.FunnelCharts[iIndex], reportID, sectionID, tileID, Tile.iExecutionOrder, bFake ? bFake : true);
                                        }
                                    }
                                }

                            }
                            else {
                                GetData(tileObject, reportID, sectionID, tileID, Tile.iExecutionOrder, bFake ? bFake : true);
                            }
                        }
                        // MAQ.iTileConfigCount--;
                    }
                }
                else {
                    $('#' + sectionID + ' div[id*=' + tileID + '').find('.partDivision').removeClass('white').html('');
                }

            } else {
                $('#' + sectionID + ' div[id*=' + tileID + '').find('.partDivision').removeClass('white').html('');
            }
            if (oXMLDoc.find("Overlay").length > 0) {
                $('#' + sectionID + ' div[id*=' + tileID + '').append('<div class="overlayIcon" style="top: 5px; right: 5px; position: absolute;" onclick="showGridOverlay()"><img src="' + webAPIurl + '/SiteAssets/PlatformComponentReportingTemplate/images/view_data_white.png"></div>');
            }
        }
    } else {
        $('#' + contianerID + ' div[id*=' + tileID + '').find('.partDivision').removeClass('white').html('');
    }
    if (bFake === true) {
        //createTile(tile, false);
    }
    fetchAllTilesData();
}

function updateTileConfiguration(response) {
    if (response.result != "error") {
        var requestData = $.parseJSON(response.query), contianerID;
        var Config = $.parseJSON(response.result);
        if (undefined != requestData) {
            reportID = requestData.reportID;
            //            asectionID = requestData.sectionID.split('_');
            asectionID = "";
            //zone = asectionID.pop();
            //asectionID.pop();
            // sectionID = asectionID.join('_');
            sectionID = reportingTemplateSectionID;
            contianerID = 'Container_' + sectionID;
        }
        var ConfigData;
        if (undefined != Config && Config.XMLConfig != "undefined") {
            //Config.XMLConfiguration = Config.Tiles[0].XMLConfiguration;
            XMLConfig = Config.Tiles[0].XMLConfiguration;
            // Now unescape data to make it valid XML
            XMLConfig = unescape(XMLConfig);
            XMLConfig = XMLConfig.replace(/\\/g, "\\\\"); // Now load an xml document using jquery 
            var XMLDoc = $.parseXML(XMLConfig);
            var oXMLDoc = $(XMLDoc); //wrap xml in jquery object to make it available call jquery functions
            oXMLDoc.find("Tile").each(function () {
                var id = $(this).attr('TargetId');
                if (id == targetID) { // Compare the targetID to be saved with the existing XML and remove the node if matched
                    $(this).remove();
                }
            });

            FinalConfigXML = new XMLSerializer().serializeToString(oXMLDoc[0]); // Serializing the entire XML Object to the string

            // Condition for checking the empty tile list with no elements
            if (FinalConfigXML === "<TileList />" || FinalConfigXML === "<TileList />") {
                // Prepare the new configuration root node and attach the tile configuration as sub node
                FinalConfigXML = "";
                FinalConfigXML = FinalConfigXML + tileConfigurationXML.toString();
            }
            else {
                FinalConfigXML = FinalConfigXML.replace("</TileList>", tileConfigurationXML.toString()); // Replace the close tag of the root element with the tile configuration XML
                FinalConfigXML = FinalConfigXML + "</TileList>"; // Append the close tag for the root element
            }
        }
        else {
            // Prepare the new configuration root node and attach the tile configuration as sub node
            FinalConfigXML = "<TileList>";
            FinalConfigXML = FinalConfigXML + tileConfigurationXML.toString();
            FinalConfigXML = FinalConfigXML + "</TileList>";
        }
        FinalConfigXML = escape(FinalConfigXML); // Now escape the entire configuration XML String in order to 
        var RequestBuilder = new RequestBuilder_filter(); // Create request builder object
        var request = '{"spListName":"' + sListReportConfigurations + '","ReportkeyName":"ReportID","ReportkeyValue":"' + reportID + '","SectionKeyName":"SectionID","SectionKeyValue":"' + sectionZoneID + '","layoutColumn":"EditedConfiguration","xmlToWrite":"' + FinalConfigXML + '"}';
        // Post an AJAX call to update the Final configuration string to the SP List
        // RequestBuilder.postRequest(sWebServicePath + 'UpdateRTData', createTiles, request, '');
    }
}

function afterSave(response) {
    // Call the function in order to reload the tiles with the newly configures data
    CallTileConfiguration(sListReportConfigurations, reportID, sectionZoneID, "EditedConfiguration");
    $('#mask , .Config-popup').fadeOut(300, function () { // Removing mask and hiding the Config-popup div
        $('#mask').remove();
    });
}

function setZoneConfigArray(response) {
    var Config = {};
    var selectedLayout;
    Config.Tiles = oTiles;
    for (var tileIndex = 0; tileIndex < Config.Tiles.length; tileIndex++) {
        Config.XMLConfig = unescape(Config.Tiles[tileIndex].XMLConfiguration);

        fetchAllTilesData();
        // Check the valid status of JSON returned
        if (Config.XMLConfig != undefined && Config.XMLConfig != "undefined") {
            zoneConfigArray = MAQ.RT.TileMapper(Config); // Initialize the entire configuration of the tiles in the form of mapped array
            for (var index = 0; index < zoneConfigArray.length; index++) {
                var tile = zoneConfigArray[index];
                // Check for the targetId of tile to be updated is available in the mapped array element

                if (tile.Container == targetID) {
                    selectedLayout = tile.SelectedLayout;
                    //$("#combinedSelector").val(tile.SelectedLayout);
                    if (tile.Type === dataTileValue) {   // Data tile code
                        var internalCounter; // Used to keep track of the total number of tile configurations to be updated                        
                        $("#dataLayoutSelector").val(tile.SelectedLayout);
                        $("#dataTilePosition").val(tile.TileFlowOrder);
                        var $RunWithElevatedDataObject = $("#RunWithElevatedDataCheckbox");


                        if (tile.RunWithElevatedCheckboxStatus == "true") {
                            $RunWithElevatedDataObject.prop("checked", true);
                        }
                        else {
                            $RunWithElevatedDataObject.prop("checked", false);
                        }

                        openRunWithElevatedPopup($RunWithElevatedDataObject, 1, 1)

                        if (tile.RunWithElevateAccount !== null && tile.RunWithElevateAccount !== "") {
                            $("#RunWithElevatedData").val(tile.RunWithElevateAccount.replace("\\\\", "\\"));

                        } else {
                            $("#RunWithElevatedData").val(0);
                        }

                        if (tile.IsStacked == "true") {
                            eleChartIsStacked.prop("checked", true);
                        }
                        else {
                            eleChartIsStacked.prop("checked", false);
                        }

                        if (tile.HasTarget == "true") {
                            eleChartHasTarget.prop("checked", true);
                        }
                        else {
                            eleChartHasTarget.prop("checked", false);
                        }


                        if ($(".OverlayChkbx").length > 0) {
                            $(".OverlayChkbx").prop("checked", tile.EnableOverlay);
                            overlayParentTile = tile.Type;
                        }

                        if (tile.TileType == staticTileValue) {
                            internalCounter = 1; // Only one tile configuration to be updated for the static tile
                        } else {
                            internalCounter = tile.TileCount; // Initialize the total number of tiles to be updated for the live tiles
                            $("#DataTypeDD option:contains(" + liveTileValue + ")").attr('selected', 'selected'); // update the selection of datatype dropdown
                            $("#DataIntervalDD option:contains(" + tile.Interval + ")").attr('selected', 'selected'); // update the selection of data interval dropdown

                            // Show the live tile configuration and navigation bars
                            $('#SlidingIconsDiv').show();
                            $('#IntervalLbl').show();
                            eleDataIntervalDD.show();
                            dataTileSliderStatus = 1; // Initialize the tile slider status to 1 as on initial load
                            showHideSlidingIcons();
                            showHideStaticTilesElements(true);
                        }

                        if (internalCounter === "3") {
                            $('#TileConfigEnableChk').attr("checked", true);
                            enableControls_Changed(3);
                        }

                        eleDataPortfolio_DD.val(tile.Portfolio);
                        bindConnectionStringsDropdown(eleDataConnection_DD, connectionStringValues, tile.Portfolio);
                        eleDataConnection_DD.val(tile.Connection); // Select the form dropdown value to saved selection from the callback object

                        for (i = 1; i <= internalCounter; i++) { // Loop for iterating and filling the values for the live tiles
                            eleDataDisplayTextArr[i - 1].val(tile.Text[i - 1]); // Dump the input textbox value to saved data from the callback object



                            if (tile.DDLink[i - 1] === noDataAvailable) {
                                eleDataDDLink[i - 1].val("");
                            }
                            else {
                                eleDataDDLink[i - 1].val(tile.DDLink[i - 1]);
                            }


                            if (tile.Query[i - 1] == noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                                eleDataQueryArr[i - 1].val("");
                            } else {
                                var TempQuery = tile.Query[i - 1]; // Dump the input textArea value to saved data from the callback object
                                // Explicitly replacing  '<' and '>' from the Query with special characters
                                TempQuery = TempQuery.split('lt;').join('<');
                                TempQuery = TempQuery.split('gt;').join('>');
                                eleDataQueryArr[i - 1].val(TempQuery);
                            }
                            eleTileDataFormat_DDArr[i - 1].val(tile.Format[i - 1]);

                            var tobechecked = 0; // Temporary variable used to compare the radio button status '0' - Colorpicker , '1' - ColorQuery

                            $('#divTrendContainer' + i).hide();
                            $('#IconDiv' + i).hide();
                            if (tile.BackgroundColor[i - 1] === noDataAvailable) {

                                // Check for 'NA' and insert empty string to the input element
                                eleDataColorPickerArr[i - 1].val(" ");
                                eleDataTrendQueryArr[i - 1].val("");
                                eleDataTrendUpIconArr[i - 1].val("");
                                eleDataTrendDownIconArr[i - 1].val("");
                                eleDataTrendFlatArr[i - 1].val("");
                                tobechecked = 1;
                                var TileStopLightRules = tile.TileStopLightRules[i - 1], TileStopLightColors = tile.TileStopLightColors[i - 1], TileStopLightIcons = tile.TileStopLightIcons[i - 1];
                                if (undefined === TileStopLightRules || TileStopLightRules[0] === '' || TileStopLightRules[0] === noDataAvailable) {
                                    eleStopLightRulesArray[i - 1].val('');
                                    eleStopLightColorsArray[i - 1].val('');
                                    eleStopLightIconsArray[i - 1].val('');
                                    eledefaultColor[i - 1].val('');
                                }
                                else {
                                    eleStopLightRulesArray[i - 1].val(TileStopLightRules[0]);
                                    eleStopLightColorsArray[i - 1].val(TileStopLightColors[0]);
                                    eleStopLightIconsArray[i - 1].val(TileStopLightIcons[0]);
                                    eledefaultColor[i - 1].val(tile.DefaultColor[i - 1]);
                                    //eleDataStopLightArray[i - 1].attr("checked", true);                                
                                    $('#stopLightBody' + i).show();
                                    $('#RemoveStopLightRule' + i).hide();
                                    BuildStopLightTextBoxes(i, TileStopLightRules, TileStopLightColors, TileStopLightIcons);
                                }
                                enableDisableElements(eleDataTrendQueryArr[i - 1], false);
                                enableDisableElements(eleDataColorPickerArr[i - 1], false);
                                enableDisableElements(eleDataTrendUpIconArr[i - 1], false);
                                enableDisableElements(eleDataTrendDownIconArr[i - 1], false);
                                enableDisableElements(eleDataTrendFlatArr[i - 1], false);
                            } else {
                                tobechecked = 0; // Set status of radio button to 0
                                if (tile.TrendQuery[i - 1] == noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                                    eleDataTrendQueryArr[i - 1].val("");
                                    eleDataTrendUpIconArr[i - 1].val("");
                                    eleDataTrendDownIconArr[i - 1].val("");
                                    eleDataTrendFlatArr[i - 1].val("");

                                    enableDisableElements(eleDataTrendQueryArr[i - 1], false);
                                    enableDisableElements(eleDataTrendUpIconArr[i - 1], false);
                                    enableDisableElements(eleDataTrendDownIconArr[i - 1], false);
                                    enableDisableElements(eleDataTrendFlatArr[i - 1], false);
                                    $('#IconDiv' + i).show();
                                } else {
                                    tobechecked = 2;
                                    var TempQuery = tile.TrendQuery[i - 1];// Dump the input textArea value to saved data from the callback object
                                    // Explictly replacing  '<' and '>' from the Query with special characters
                                    TempQuery = TempQuery.split('lt;').join('<');
                                    TempQuery = TempQuery.split('gt;').join('>');
                                    eleDataTrendQueryArr[i - 1].val(TempQuery); // Dump the input textArea value to saved data from the callback object
                                    enableDisableElements(eleDataTrendQueryArr[i - 1], true);

                                    var TrendUp = tile.TrendUpIcon[i - 1], TrendDown = tile.TrendDownIcon[i - 1], TrendFlat = tile.TrendFlatIcon[i - 1];
                                    TrendUp = ((undefined === TrendUp) || (TrendUp === noDataAvailable)) ? '' : TrendUp;
                                    TrendDown = ((undefined === TrendDown) || (TrendDown === noDataAvailable)) ? '' : TrendDown;
                                    TrendFlat = ((undefined === TrendFlat) || (TrendFlat === noDataAvailable)) ? '' : TrendFlat;
                                    eleDataTrendUpIconArr[i - 1].val(TrendUp);
                                    eleDataTrendDownIconArr[i - 1].val(TrendDown);
                                    eleDataTrendFlatArr[i - 1].val(TrendFlat);
                                    enableDisableElements(eleDataTrendUpIconArr[i - 1], true);
                                    enableDisableElements(eleDataTrendDownIconArr[i - 1], true);
                                    enableDisableElements(eleDataTrendFlatArr[i - 1], true);
                                    $('#divTrendContainer' + i).show();
                                }
                                eleDataColorPickerArr[i - 1].val(tile.BackgroundColor[i - 1]); // Dump the input textArea value to saved data from the callback object
                                enableDisableElements(eleDataColorPickerArr[i - 1], true);

                            }


                            // Selecting the radio button  based on tobechecked flag 
                            $('input:radio[name=DataColorRbtn' + i + ']')[tobechecked].checked = true;
                            if (tobechecked == 1) { // Check for the 'tobechecked' status and hide color picker if query mode was selected
                                $('#DivDataColorQuery' + i).show();
                                $('#DivDataColorPicker' + i).hide();
                            }



                            if (tile.Icons[i - 1] == noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                                eleDataIconPickerArr[i - 1].val(" ");
                            }
                            else {
                                eleDataIconPickerArr[i - 1].val(tile.Icons[i - 1]); // Dump the input textArea value to saved data from the callback object
                                eleDataIconChkArr[i - 1].attr("checked", true); // Check the DataIcon Checkbox if the data is available
                                enableDisableElements(eleDataIconPickerArr[i - 1], true);
                            }

                            if (tile.AllDrillUrls[i - 1] === noDataAvailable) {
                                eleDataDrilldownURL[i - 1].val("");
                            }
                            else {
                                eleDataDrilldownURL[i - 1].val(tile.AllDrillUrls[i - 1]);
                            }

                            if (!tile.iExecutionOrder) {
                                eleDataExecutionOrder[i - 1].val("999");
                            }
                            else {
                                eleDataExecutionOrder[i - 1].val(tile.iExecutionOrder);
                            }

                            var iCount = 1;
                            if (tile.MultipleData) {
                                bindDropdown($("#TileDataFormat_DD1"), tileDataFormatValues);
                                bindDropdown($("#TileDataFormat_DD4"), tileDataFormatValues);

                                for (var j = 0; j < tile.MultipleData.length; j++) {
                                    $("#DataQuery" + iCount).text(tile.MultipleData[j].query);
                                    $("#DataSuffix" + iCount).val(tile.MultipleData[j].suffix);
                                    $("#DataExecutionOrder" + iCount).val(tile.MultipleData[j].executionorder);
                                    $("#TileDataFormat_DD" + iCount).val(tile.MultipleData[j].format);
                                    if ("yes" === tile.MultipleData[j].customQuery) {
                                        $("#DynamicSuffix" + iCount)[0].checked = true;
                                        $("#DataIndex" + iCount).val("" + tile.MultipleData[j].dataIndex);
                                        $("#SuffixIndex" + iCount).val("" + tile.MultipleData[j].suffixIndex);
                                        $("#DataIndex" + iCount).removeAttr("disabled").removeClass("DisableInputControls");
                                        $("#SuffixIndex" + iCount).removeAttr("disabled").removeClass("DisableInputControls");
                                    }
                                    iCount = iCount + 3;
                                }

                                if (7 === iCount) {
                                    $("#TwoTilesCheck")[0].checked = true;
                                    $("#DataQuery4").removeAttr("disabled").removeClass("DisableInputControls");
                                    $("#DataExecutionOrder4").removeAttr("disabled").removeClass("DisableInputControls");
                                    $("#TileDataFormat_DD4").removeAttr("disabled").removeClass("DisableInputControls");
                                    $("#DataSuffix4").removeAttr("disabled").removeClass("DisableInputControls");
                                    $("#DynamicSuffix4").removeAttr("disabled").removeClass("DisableInputControls");

                                }
                            }

                            if (tile.oSupportingQueryData) {
                                if (tile.oSupportingQueryData[0]) {
                                    $("#DataSQExecutionOrder").val(tile.oSupportingQueryData[0].iExecutionOrder);
                                    $("#DataObjectName").val(tile.oSupportingQueryData[0].objectName);
                                    $("#DataSupportingQuery").val(tile.oSupportingQueryData[0].query);
                                }
                            }

                        }
                        $('#' + tile.Type + "Header").addClass("selectedPivotTab");
                        $('#' + tile.Type + "Header").siblings().removeClass("selectedPivotTab");
                        if (tile.AdvancedQuery != $("#AdvancedDataQuery1").val()) {
                            $("#AdvancedDataQuery1").click();
                        }
                        if (tile.FilterAssociation) {
                            tile.FilterAssociation.map(function (index) {
                                $("#multiValueDataFilter").parent().children().find($("input[value='" + index + "']")).attr("checked", "checked")
                            });
                            $("#multiValueDataFilter").parent().children().find(".ms-select").click()
                        }

                    } else if (tile.Type === chartTileValue) { // Chart tile code
                        $("#chartTilePosition").val(tile.TileFlowOrder);

                        tileTypeClicked("Chart"); // call function tileTypeClicked() to navigate the div to the chart view
                        var tileChartTypeValue = tile.PopupChartType.split('_')[0]; // Initialize the global variable 'tileChartTypeValue' to chart;
                        if (tileChartTypeValue.toLowerCase() === "zinghfunnel" || tileChartTypeValue.toLowerCase() === "maqhfunnelchart") {
                            if (undefined !== tile.FunnelCharts) {
                                loadChartFunnelElementIDArray(tile.FunnelCharts[0].TotalCount);
                                //$("#ChartFunnelCount_DD").val(tile.FunnelCharts.length);
                                if (tile.FunnelCharts.length === 0) {
                                    eleChartFunnelCount_DD.val("");
                                }
                                else {
                                    eleChartFunnelCount_DD.val(tile.FunnelCharts.length); // Dump the input textArea value to saved data from the callback object
                                }
                                funnelChartCount_DD_Changed($("#ChartFunnelCount_DD"));
                                var totalCount = tile.FunnelCharts.length;
                                for (var iCount = 0; iCount < totalCount; iCount++) {

                                    if (tile.FunnelCharts[iCount].AdvancedQuery != $("#AdvancedFunnelChartQuery-C" + iCount).val()) {
                                        $("#AdvancedFunnelChartQuery-C" + iCount).click();
                                    }

                                    populateChartFunnelControls('FirstLoad', tile.FunnelCharts[iCount].FunnelIndex);
                                    eleChartFunnelTitle[iCount].val(tile.FunnelCharts[iCount].Title);
                                    eleChartFunnelConnection[iCount].val(tile.FunnelCharts[iCount].ConnectionString);
                                    eleChartFunnelPortfolio[iCount].val(tile.FunnelCharts[iCount].Portfolio);
                                    //eleChartFunnelLegends[iCount].val(tile.FunnelCharts[iCount].Legend);
                                    eleChartFunnelRowLabels[iCount].val(tile.FunnelCharts[iCount].RowLabels);
                                    eleChartFunnelDrillDownURL[iCount].val(tile.FunnelCharts[iCount].DrillThrough);
                                    //eleChartFunnelStartingYPos[iCount].val(tile.FunnelCharts[iCount].);

                                    if (tile.FunnelCharts[iCount].Direction === "true") {
                                        eleChartFunnelDirection[iCount].prop("checked", true);
                                    }
                                    else {
                                        eleChartFunnelDirection[iCount].prop("checked", false);
                                    }
                                    if (tile.FunnelCharts[iCount].Connector === "true") {
                                        eleChartFunnelConnector[iCount].prop("checked", true);
                                    }
                                    else {
                                        eleChartFunnelConnector[iCount].prop("checked", false);
                                    }
                                    if (tile.FunnelCharts[iCount].LegendsVisibility === "true") {
                                        eleChartFunnelLegendsVisibility[iCount].prop("checked", true);
                                    }
                                    else {
                                        eleChartFunnelLegendsVisibility[iCount].prop("checked", false);
                                    }
                                    //eleChartFunnelDirection[iCount].val(tile.FunnelCharts[iCount].Direction);
                                    //eleChartFunnelConnector[iCount].val(tile.FunnelCharts[iCount].Connector);
                                    eleChartFunnelDDL[iCount].val(tile.FunnelCharts[iCount].ChartDDLink);
                                    //eleChartFunnelColorPicker[iCount].val(tile.FunnelCharts[iCount].Title);
                                    eleChartFunnelDrillDownType[iCount].val(tile.FunnelCharts[iCount].DrillThroughType);
                                    eleChartFunnelQuery[iCount].val(tile.FunnelCharts[iCount].Query);
                                    eleChartFunnelAdvancedQuery[iCount].val(tile.FunnelCharts[iCount].AdvancedQuery);
                                    eleChartFunnelLegends[iCount].val(tile.FunnelCharts[iCount].Legends);
                                    //eleChartFunnelLegendsVisibility[iCount].val(tile.FunnelCharts[iCount].LegendsVisibility);
                                    eleChartFunnelSeriesColor[iCount].val(tile.FunnelCharts[iCount].SeriesColor);
                                    eleChartFunnelSeriesPattern[iCount].val(tile.FunnelCharts[iCount].SeriesPattern);
                                    eleChartFunnelStartingYPos[iCount].val(tile.FunnelCharts[iCount].StartingYPos);
                                }
                            }
                        }

                        /* if (tileChartTypeValue.toLowerCase().indexOf("zing") >= 0 || tileChartTypeValue.toLowerCase().indexOf("treemap") >= 0 || tileChartTypeValue.toLowerCase().indexOf("high") >= 0 || tileChartTypeValue.toLowerCase().indexOf("maqcolumnchart") >= 0) {// Check for type of chart from the callback object
                             eleTileChartAspect_DD.val("zing"); // Select the dropdown value to "zing"
                         }
                         else {
                             eleTileChartAspect_DD.val("tile"); // Select the dropdown value to "tile"
                         }*/
                        eleTileChartAspect_DD.val("zing");
                        // Update the visibility property of the chart elements
                        changeChartElementsVisibility("aspect");
                        eleTileChartType_DD.val(tileChartTypeValue);
                        eleChartConnection_DD.val(tile.Orientation);
                        changeChartElementsVisibility("type");
                        eleChartPortfolio_DD.val(tile.Portfolio);
                        bindConnectionStringsDropdown(eleChartConnection_DD, connectionStringValues, tile.Portfolio);
                        eleChartConnection_DD.val(tile.Connection);
                        $("#RunWithElevatedCharts").val(tile.RunWithElevateAccount);


                        if (tile.Legend === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartLegend_DD.val("");
                        } else {
                            eleChartLegend_DD.val(tile.Legend); // Dump the input textArea value to saved data from the callback object
                        }
                        //$("#combinedSelector").val(tile.SelectedLayout);
                        $("#TileChartOrientation_DD").val(tile.Orientation);
                        $("#chartLayoutSelector").val(tile.SelectedLayout);

                        var $RunWithElevatedChartObject = $("#RunWithElevatedChartCheckbox");
                        if (tile.RunWithElevatedCheckboxStatus == "true") {
                            $RunWithElevatedChartObject.prop("checked", true);
                        }
                        else {
                            $RunWithElevatedChartObject.prop("checked", false);
                        }

                        if (tile.IsStacked == "true") {
                            eleChartIsStacked.prop("checked", true);
                        }
                        else {
                            eleChartIsStacked.prop("checked", false);
                        }

                        if (tile.HasTarget == "true") {
                            eleChartHasTarget.prop("checked", true);
                        }
                        else {
                            eleChartHasTarget.prop("checked", false);
                        }

                        if (tile.SeriesPattern == noDataAvailable) {
                            eleChartPatternPicker.val("");
                        }
                        else {
                            var patternPickerValues = [];
                            $('.svgContainer svg defs pattern').each(function () {
                                patternPickerValues.push($(this).attr("id"));
                            });
                            var sliceCode = tile.SeriesPattern;
                            var sliceCodeId = [], iPos = 0;

                            for (var i = 0; i < sliceCode.length; i++) { // Iterate loop for the individual elements and identify the color value of the corresponding HEX code                                
                                iPos = patternPickerValues.indexOf(sliceCode[i]);
                                if (iPos > -1) {
                                    sliceCodeId.push(iPos + 1);
                                }
                            }
                            eleChartPatternPicker.val(sliceCodeId.join()); // Dump the input textArea value with the calculated 'sliceCodeId' variable  
                        }



                        openRunWithElevatedPopup($RunWithElevatedChartObject, 2, 1);
                        if ($("#ChartTileConfiguration .OverlayChkbx").length > 0) {
                            $("#ChartTileConfiguration  .OverlayChkbx").prop("checked", tile.EnableOverlay);
                            overlayParentTile = tile.Type;
                        }


                        if (tile.RunWithElevateAccount !== null && tile.RunWithElevateAccount !== "") {
                            $("#RunWithElevatedCharts").val(tile.RunWithElevateAccount.replace("\\\\", "\\"));

                        } else {
                            $("#RunWithElevatedCharts").val(0);
                        }


                        //PC: Added new guide feature
                        if (tileChartTypeValue == 'maqcolumnchart') {
                            eleChartIsStacked[0].checked = Boolean.parse((tile.IsStacked === noDataAvailable) ? "" : tile.IsStacked);
                            eleChartHasTarget[0].checked = Boolean.parse((tile.HasTarget === noDataAvailable) ? "" : tile.HasTarget);
                        }

                        eleChartHorizontalGuide[0].checked = (tile.HorizontalGuide === noDataAvailable) ? "" : tile.HorizontalGuide;
                        eleChartVerticalGuide[0].checked = (tile.VerticalGuide === noDataAvailable) ? "" : tile.VerticalGuide;

                        // Code Change: TO DO: Change below all expression like this and reduce code 
                        eleChartLegend_DD.val((tile.Legend === noDataAvailable) ? "" : tile.Legend);

                        if (tile.ShowValueBox === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartValueBox.val("");
                        } else {
                            eleChartValueBox.val(tile.ShowValueBox); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.LegendPosition === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartLegendPos_DD.val("");
                        } else {
                            eleChartLegendPos_DD.val(tile.LegendPosition); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.ResultOrder === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartResultOrder_DD.val("");
                        } else {
                            eleChartResultOrder_DD.val(tile.ResultOrder); // Select the form dropdown value to saved selection from the callback object
                            chartResultOrderDDChanged(eleChartResultOrder_DD[0]);
                        }
                        if (tile.TopLabels === noDataAvailable) {
                            eleTopLabels.val("");
                        } else {
                            eleTopLabels.val(tile.TopLabels);
                        }
                        if (tile.TopLabelIndex === noDataAvailable) {
                            eleTopLabelIndex.val("");
                        } else {
                            eleTopLabelIndex.val(tile.TopLabelIndex);
                        }
                        if (tile.TopLabelDataFormat === noDataAvailable) {
                            eleTopLabelFormat.val("");
                        } else {
                            eleTopLabelFormat.val(tile.TopLabelDataFormat);
                        }
                        if (tile.DividerIndex === noDataAvailable) {
                            eleDividerIndex.val("");
                        } else {
                            eleDividerIndex.val(tile.DividerIndex);
                        }
                        if (tile.ColumnTitle === noDataAvailable) {
                            eleColumnTitle.val("");
                        } else {
                            eleColumnTitle.val(tile.ColumnTitle);
                        }
                        if (tile.BottomLabels === noDataAvailable) {
                            eleChartBottomLabels.val("");
                        } else {
                            eleChartBottomLabels.val(tile.BottomLabels);
                        }
                        if (tile.BottomLabelIndex === noDataAvailable) {
                            eleBottomLabelIndex.val("");
                        } else {
                            eleBottomLabelIndex.val(tile.BottomLabelIndex);
                        }
                        if (tile.BottomLabelDataFormat === noDataAvailable) {
                            eleBottomLabelFormat.val("");
                        } else {
                            eleBottomLabelFormat.val(tile.BottomLabelDataFormat);
                        }
                        if (tile.KeyMetricIndex === noDataAvailable) {
                            eleKeyMetricIndex.val("");
                        } else {
                            eleKeyMetricIndex.val(tile.KeyMetricIndex);
                        }
                        if (tile.LegendIndex === noDataAvailable) {
                            eleLegendIndex.val("");
                        } else {
                            eleLegendIndex.val(tile.LegendIndex);
                        }
                        //eleChartTargetLabels
                        //, eleChartTargetLabelIndex
                        //, eleChartTargetLabelFormat
                        //
                        //
                        if (tile.TargetLabels === noDataAvailable) {
                            eleChartTargetLabels.val("");
                        } else {
                            eleChartTargetLabels.val(tile.TargetLabels);
                        }
                        if (tile.TargetLabelIndex === noDataAvailable) {
                            eleChartTargetLabelIndex.val("");
                        } else {
                            eleChartTargetLabelIndex.val(tile.TargetLabelIndex);
                        }
                        if (tile.TargetLabelFormat === noDataAvailable) {
                            eleChartTargetLabelFormat.val("");
                        } else {
                            eleChartTargetLabelFormat.val(tile.TargetLabelFormat);
                        }

                        if (tile.PopupFormat === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartDataFormat_DD.val("");
                        }
                        else {
                            eleChartDataFormat_DD.val(tile.PopupFormat); // Select the form dropdown value to saved selection from the callback object
                        }

                        if (tile.PopupValueFormat === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartValueFormat_DD.val("");
                        }
                        else {
                            eleChartValueFormat_DD.val(tile.PopupValueFormat); // Select the form dropdown value to saved selection from the callback object
                        }

                        if (tile.ShowOnTooltip === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartTooltipFormat.val("");
                        }
                        else {
                            eleChartTooltipFormat.val(tile.ShowOnTooltip); // Select the form dropdown value to saved selection from the callback object
                        }

                        if (tile.ShowOnLabel === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartLabelFormat.val("");
                        }
                        else {
                            eleChartLabelFormat.val(tile.ShowOnLabel); // Select the form dropdown value to saved selection from the callback object
                        }


                        if (tile.Title === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartTitle.val("");
                        }
                        else {
                            eleChartTitle.val(tile.Title); // Dump the input textArea value to saved data from the callback object
                        }
                        if (tile.ChartDDLink === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartDDLink.val("");
                        }
                        else {
                            eleChartDDLink.val(tile.ChartDDLink); // Dump the input textArea value to saved data from the callback object
                        }
                        if (tile.ChartDataLabel === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartDataLabl.val("");
                        }
                        else {
                            eleChartDataLabl.val(tile.ChartDataLabel); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.RowLabels === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartRowLabels.val("");
                        }
                        else {
                            eleChartRowLabels.val(tile.RowLabels); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.TargetLabel === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartTargetLabels.val("");
                        }
                        else {
                            eleChartTargetLabels.val(tile.TargetLabel); // Dump the input textArea value to saved data from the callback object
                        }
                        if (tile.BottomLabels === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartBottomLabels.val("");
                        }
                        else {
                            eleChartBottomLabels.val(tile.BottomLabels); // Dump the input textArea value to saved data from the callback object
                        }
                        if (tile.Legend === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartLegends.val("");
                        }
                        else {
                            eleChartLegends.val(tile.Legend); // Dump the input textArea value to saved data from the callback object
                        }


                        if (tile.SubTitle === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartSubTitle.val("");
                        } else {
                            eleChartSubTitle.val(tile.SubTitle); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.Query === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartQuery.val("");
                        } else {
                            eleChartQuery.val(tile.Query[0]); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.FontColor === noDataAvailable || tile.FontColor === "") {
                            $("#FontChartColorPicker").val("");
                        }
                        else {
                            $("#FontChartColorPicker").val("" + tile.FontColor);
                        }

                        if (tile.MetricText === noDataAvailable || tile.MetricText === "") {
                            $("#MetricText").val("");
                        }
                        else {
                            $("#MetricText").val("" + tile.MetricText);
                        }

                        //: New Metadata feature Added
                        try {
                            //tile.bChartLabelMetaDataProvided);
                            eleChartLabelMetaDataProvidedFlag.attr("checked", tile.bChartLabelMetaDataProvided);

                            if (tile.bChartLabelMetaDataProvided) {
                                enableDisableElements(eleChartLabelMetaDataCountPerItem, true);
                            }
                            eleChartLabelMetaDataCountPerItem.val(tile.bChartLabelMetaDataCountPerDataItem || "");


                        }
                        catch (e) {
                            log("Error setting initial values for config popup form: " + e.message);
                        }

                        if (tile.ValueQuery === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartValueQuery.val("");
                        } else {
                            eleChartValueQuery.val(tile.ValueQuery); // Dump the input textArea value to saved data from the callback object
                        }

                        var tobechecked = 0;
                        if (tile.BackgroundColor === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            var TempQuery = tile.BackgroundQuery;// Dump the input textArea value to saved data from the callback object
                            // Explicitly replacing  '<' and '>' from the Query with special characters
                            if (TempQuery !== noDataAvailable) {
                                TempQuery = TempQuery.split('lt;').join('<');
                                TempQuery = TempQuery.split('gt;').join('>');
                                eleChartColorQuery.val(TempQuery);
                            }
                            else {
                                eleChartColorQuery.val("");
                            }
                            tobechecked = 1; // Set status of radio button to 1
                            eleChartColorPicker.val("");
                            $("#DivChartColorPicker").hide();
                            $("#DivChartColorQuery").show();
                        }
                        else {
                            eleChartColorQuery.val("");
                            $("#DivChartColorQuery").hide();
                            $("#DivChartColorPicker").show();
                            if (tile.BackgroundColor !== noDataAvailable) {
                                eleChartColorPicker.val(tile.BackgroundColor);
                            }
                            else {
                                eleChartColorPicker.val("");
                            }
                        }

                        // Selecting the radio button  based on tobechecked flag 
                        $('input:radio[name=ChartColorRbtn]')[tobechecked].checked = true;


                        if (tile.PopupLabelMapping === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartXLabelMapping.val("");
                        } else {
                            eleChartXLabelMapping.val(tile.PopupLabelMapping); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.PopupDataMapping === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartDataMapping.val("");
                        } else {
                            eleChartDataMapping.val(tile.PopupDataMapping); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.PopupRefrenceData[0] === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartRemainingDataMapping.val("");
                        } else {
                            eleChartRemainingDataMapping.val(tile.PopupRefrenceData[0]); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.PopupRefrenceData[1] === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartTargetDataMapping.val("");
                        } else {
                            eleChartTargetDataMapping.val(tile.PopupRefrenceData[1]);// Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.XLabel === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartScaleXLabel.val("");
                        } else {
                            eleChartScaleXLabel.val(tile.XLabel); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.YLabel === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartScaleYLabel.val("");
                        } else {
                            eleChartScaleYLabel.val(tile.YLabel); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.XLabelFont === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartScaleXLFont.val("");
                        } else {
                            eleChartScaleXLFont.val(tile.XLabelFont); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.XItemFont === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartScaleXIFont.val("");
                        } else {
                            eleChartScaleXIFont.val(tile.XItemFont); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.XItemAngle === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartScaleXIAngle.val("");
                        } else {
                            eleChartScaleXIAngle.val(tile.XItemAngle); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.YLabelFont === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartScaleYLFont.val("");
                        } else {
                            eleChartScaleYLFont.val(tile.YLabelFont); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.YItemFont === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartScaleYIFont.val("");
                        } else {
                            eleChartScaleYIFont.val(tile.YItemFont); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.GrandTotalColumns == noDataAvailable) {
                            eleChartGrandTotalMapping.val("");
                        }
                        else {
                            eleChartGrandTotalMapping.val(tile.GrandTotalColumns);
                        }
                        if (tile.PopupSliceColor === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartSliceColor.val("");
                        } else { // Find color id's of color HEX codes retrieved from the callback object
                            var sliceCode = tile.PopupSliceColor;

                            // Code Implementation: There was some different implementation here
                            var sliceCodeId = [], iPos = 0;
                            if (typeof sliceCode == "string")
                                sliceCode = sliceCode.split(',');
                            for (var i = 0; i < sliceCode.length; i++) { // Iterate loop for the individual elements and identify the color value of the corresponding HEX code                                
                                iPos = colourPickerValues.indexOf(sliceCode[i]);
                                if (iPos > -1) {
                                    sliceCodeId.push(iPos);
                                }
                            }

                            eleChartSliceColor.val(sliceCodeId.join()); // Dump the input textArea value with the calculated 'sliceCodeId' variable
                        }
                        if (tile.DrillDownUrl[0] === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartDrilldownURL.val("");
                        } else {
                            eleChartDrilldownURL.val(tile.DrillDownUrl.join('|')); // Dump the input textArea value to saved data from the callback object
                        }
                        if (tile.DrillDownType === noDataAvailable) {
                            eleChartDrillDownType.val('0');
                        }
                        else {
                            eleChartDrillDownType.val(tile.DrillDownType);
                        }

                        /***********RT**************/
                        if (tile.TitleBackgroundColor === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleChartTitleBackgroundColor.val("");
                        } else {
                            eleChartTitleBackgroundColor.val(tile.TitleBackgroundColor); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.TitleMeasureDataMapping === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleTitleMeasureDataMapping.val("");
                        } else {
                            eleTitleMeasureDataMapping.val(tile.TitleMeasureDataMapping); // Dump the input textArea value to saved data from the callback object
                        }

                        if (tile.TitleLabelDataFormat === noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleTitleLabelDataFormat.val("");
                        }
                        else {
                            eleTitleLabelDataFormat.val(tile.TitleLabelDataFormat); // Select the form dropdown value to saved selection from the callback object
                        }

                        if (tile.LineCount === noDataAvailable) {  // Check for 'NA' and insert empty string to the input element
                            eleChartLineCount.val("");
                        }
                        else {
                            eleChartLineCount.val(tile.LineCount);  //Dump the input textbox value to saved data from the callback object
                        }
                        /***********RT**************/
                        changeTooltipMode(eleChartDataFormat_DD);
                        $('#' + tile.Type + "Header").addClass("selectedPivotTab");
                        $('#' + tile.Type + "Header").siblings().removeClass("selectedPivotTab");
                        if (tile.AdvancedQuery != $("#AdvancedChartQuery").val()) {
                            $("#AdvancedChartQuery").click();
                        }
                        if (tile.FilterAssociation) {
                            tile.FilterAssociation.map(function (index) {
                                $("#multiValueChartFilter").parent().children().find($("input[value='" + index + "']")).attr("checked", "checked")
                            });
                            $("#multiValueChartFilter").parent().children().find(".ms-select").click()
                        }
                    }

                    else if (tile.Type === listTileValue) { // List tile code
                        tileTypeClicked("List");
                        //$("#combinedSelector").val(tile.SelectedLayout);
                        $("#listLayoutSelector").val(tile.SelectedLayout);
                        $("#listTilePosition").val(tile.TileFlowOrder);

                        var $RunWithElevatedListCheckbox = $("#RunWithElevatedListCheckbox");

                        if (tile.RunWithElevatedCheckboxStatus == "true") {
                            $RunWithElevatedListCheckbox.prop("checked", true);
                        }
                        else {
                            $RunWithElevatedListCheckbox.prop("checked", false);
                        }

                        openRunWithElevatedPopup($RunWithElevatedListCheckbox, 3, 1)


                        if (tile.RunWithElevateAccount !== null && tile.RunWithElevateAccount !== "") {
                            $("#RunWithElevatedList").val(tile.RunWithElevateAccount.replace("\\\\", "\\"));

                        } else {
                            $("#RunWithElevatedList").val(0);
                        }

                        if (tile.DDLink !== noDataAvailable) {
                            eleListDDLink.val(tile.DDLink);
                        }
                        $('#' + tile.Type + "Header").addClass("selectedPivotTab");
                        $('#' + tile.Type + "Header").siblings().removeClass("selectedPivotTab");

                        if (tile.TileType === liveTileValue) {
                            $("#ListTypeDD option:contains(" + liveTileValue + ")").attr('selected', 'selected'); // update the selection of datatype dropdown
                            if (tile.TextColor !== noDataAvailable) {
                                eleListTextColor.val(tile.TextColor);
                            }
                            if (tile.BackgroundColor !== noDataAvailable) {
                                eleListBgColor.val(tile.BackgroundColor);
                            }
                            enableDisableElements(eleListBgColor, true);
                            enableDisableElements(eleListTextColor, true);
                            $('#DivListTextColorPicker').show();
                            $('#DivListBgColorPicker').show();
                        }
                        else {
                            enableDisableElements(eleListTextColor, false);
                            $('#DivListTextColorPicker').hide();
                        }
                        if (tile.Title !== noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleListTitle.val(tile.Title);
                        }
                        if (tile.BackgroundColor !== noDataAvailable) {
                            eleListBgColor.val(tile.BackgroundColor);
                        }
                        eleListPortfolio_DD.val(tile.Portfolio);
                        bindConnectionStringsDropdown(eleListConnection_DD, connectionStringValues, tile.Portfolio);
                        eleListConnection_DD.val(tile.Connection); // Select the form dropdown value to saved selection from the callback object
                        eleListQuery.val(tile.Query); // Dump the input textArea value to saved data from the callback object
                        if (tile.DrillUrl !== noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleListDrillUrl.val(tile.DrillUrl);
                        }
                        /*                            if (tile.dataExecutionOrder !== '') {
                                                        eleDataExecutionOrder.val(tile.dataExecutionOrder);
                                                    }
                                                    */
                        var columnsCount = (tile.Format.length) - 1; // Temporary variable to keep the status of total number of columns

                        // Compare the current displayed columns count with the count returned from the Object 
                        if (columnsCount > totalListColumns) {
                            var diffColCount = columnsCount - totalListColumns; // Calculate the difference of columns count
                            for (var col = totalListColumns + 1; col <= columnsCount; col++) {
                                $('#AddListColumn').click(); // Click  'AddListColumn' button to add single column into the list form
                            }
                        }
                        else if (columnsCount < totalListColumns) {
                            var diffColCount = totalListColumns - columnsCount; // Calculate the difference of columns count
                        }
                        for (var col = 0; col <= columnsCount; col++) {
                            eleListMappingId[col].val(tile.MappingId[col]) //Fill the text box with the saved mapping ID
                            eleListFormat_DD[col].val(tile.Format[col]); // Select the form dropdown value to saved selection from the callback object

                        }
                        while (totalListColumns > columnsCount) {
                            $('#RemoveListColumn').click();
                            totalListColumns = totalListColumns - 1;
                        }
                        if (tile.AdvancedQuery != $("#AdvancedListQuery").val()) {
                            $("#AdvancedListQuery").click();
                        }
                        if (tile.FilterAssociation) {
                            tile.FilterAssociation.map(function (index) {
                                $("#multiValueListFilter").parent().children().find($("input[value='" + index + "']")).attr("checked", "checked")
                            });
                            $("#multiValueListFilter").parent().children().find(".ms-select").click()
                        }
                    }


                    else if (tile.Type === freeTextTileValue) // Free Text code
                    {
                        tileTypeClicked("FreeText");
                        //$("#combinedSelector").val(tile.SelectedLayout);
                        $("#freeTextLayoutSelector").val(tile.SelectedLayout);
                        $("#freeTextTilePosition").val(tile.TileFlowOrder);
                        if (tile.Title !== noDataAvailable) { // Check for 'NA' and insert empty string to the input element
                            eleFreeTextTitle.val(tile.Title);
                        }
                        if (tile.DDLink !== noDataAvailable) {
                            eleFreeTextDDLink.val(tile.DDLink);
                        }
                        eleFreeTextColorPicker.val(tile.BackgroundColor); // 

                        var TempContent = tile.Content;
                        TempContent = TempContent.split('lt;').join('<');
                        TempContent = TempContent.split('gt;').join('>');
                        eleFreeTextContent.val(TempContent);
                        $('#' + tile.Type + "Header").addClass("selectedPivotTab");
                        $('#' + tile.Type + "Header").siblings().removeClass("selectedPivotTab");
                    }

                }
            }
        }
    }
    /*$("#combinedSelector > option[selected]").removeAttr("selected");
    if (selectedLayout == "1by1" || selectedLayout == "2by1" || selectedLayout == "3by1" || selectedLayout == "4by1" || selectedLayout == "5by1" || selectedLayout == "6by1" || selectedLayout == "7by1" || selectedLayout == "8by1" || selectedLayout == "1by2" || selectedLayout == "2by2" || selectedLayout == "3by2" || selectedLayout == "4by2" || selectedLayout == "5by2" || selectedLayout == "6by2" || selectedLayout == "7by2" || selectedLayout == "8by2") {
        $('#combinedSelector option[value=' + selectedLayout + ']').attr("selected", "selected");
    }*/
}

/*This function is called when the tile/non- tile is selected or chart type */
function changeChartElementsVisibility(changedDdl) {

    var selectedChartType = 'zing';  // Initialize the selected chart Type
    var selectedChart = eleTileChartType_DD.val(); // Initialize the selected chart value
    selectedChart = selectedChart.split('_')[0];
    if (selectedChart !== "0") {
        updateLayoutSelector(selectedChart);
    }
    var values, tempDivArray, tempEleArray;
    if (changedDdl == 'type') { // Check for the chart aspect  i.e { Tile, Non-Tile}
    }
        // Check for the chart aspect  i.e { Tile, Non-Tile}
    else if (changedDdl == 'aspect') {
        // Check if nothing is selected in the ChartAspect Dropdown
        if (selectedChartType !== '0') {
            // Check for the type of tile selected in the Aspect dropdown
            if (selectedChartType == 'tile') { // Tile Chart
                values = tileChartTileValues;
            } else if (selectedChartType == 'zing') { // Non-Tile Chart
                values = tileChartNonTileValues;
            }

            eleTileChartType_DD.empty(); // Clear the tileType dropdown
            $.each(values, function (key, value) {
                if (value.lastIndexOf('----------') > 0) { // Condition used to disable some options so that this act as a separator between existing values
                    eleTileChartType_DD.append($("<option disabled=''></option>")
                    .attr("value", "<b>" + key + "</b>")
                    .text(value));
                }
                else {
                    eleTileChartType_DD.append($("<option></option>")
                   .attr("value", key)
                   .text(value));
                }
            });
        }
    }

    var selectedChart = eleTileChartType_DD.val().split('_')[0]; // Initialize the selected chart value
    // Added to hide chart default controls for Funnel Chart
    if (selectedChart === "zinghfunnel" || selectedChart === "MAQhFunnelChart") {
        showHideChartDivisions(funnelChartTotalDivArray, false);

    }
    else {
        showHideChartDivisions(funnelChartTotalDivArray, true);
    }
    //if (selectedChartType !== '0' && selectedChart !== '0') {
    if (selectedChart !== '0') {
        // Show all the input elements for chart
        showHideChartDivisions(totalDivArray, false);
        enableDisableElements(eleChartSubTitle, false);
        enableDisableElements(eleChartColorPicker, false);
        $("#divChartBGColorPanel").hide();
        enableDisableElements(eleChartDataFormat_DD, false);
        enableDisableElements(eleChartValueFormat_DD, false);
        enableDisableElements(eleChartTooltipFormat, false);
        enableDisableElements(eleChartLabelFormat, false);
        enableDisableElements(eleChartLegend_DD, false);
        enableDisableElements(eleChartValueBox, false);
        // enableDisableElements(eleChartResultOrder_DD, false);
        enableDisableElements(eleChartXLabelMapping, false);
        enableDisableElements(eleChartDataMapping, false);
        enableDisableElements(eleChartRemainingDataMapping, false);
        enableDisableElements(eleChartTargetDataMapping, false);
        //enableDisableElements(eleChartSliceColor, false);
        enableDisableElements(eleChartScaleXLabel, false);
        enableDisableElements(eleChartScaleYLabel, false);
        enableDisableElements(eleChartScaleXLFont, false);
        enableDisableElements(eleChartScaleXIFont, false);
        enableDisableElements(eleChartScaleXIAngle, false);
        enableDisableElements(eleChartScaleYLFont, false);
        enableDisableElements(eleChartScaleYIFont, false);
        enableDisableElements(eleChartGrandTotalMapping, false);
        enableDisableElements(eleChartDataLabl, false);
        enableDisableElements(eleChartIsStacked, false);
        enableDisableElements(eleChartHasTarget, false);
        enableDisableElements(eleTileChartOrientation_DD, false);
        enableDisableElements(eleChartColorQuery, false);
        enableDisableElements(eleChartPatternPicker, false);

        //Begining of code for Tooltip and label data mapping
        enableDisableElements(eleChartValueQuery, false);
        enableDisableElements(eleChartValueFormat_DD, false);
        enableDisableElements(eleChartTooltipFormat, false);
        enableDisableElements(eleChartLabelFormat, false);
        enableDisableElements(eleChartColorPicker, true);

        $("#divChartDataLabl").hide();
        //$("#divChartIsStacked").hide();
        //$("#divChartHasTarget").hide();
        $("#divTileChartOrientation").hide();
        $("#divChartLineCount").hide();
        $("#divRowLabels").hide();
        $("#divBottomLabels").hide();
        $("#divLegends").hide();
        $("#divTargetLabel").hide();
        $("#divChartDataLabl").hide();
        $("#DivChartSlicePattern").hide();
        //$("#divChartResultOrder_DD").hide();
        //$('#ChartIsStacked').hide();
        $('#divChartRunWIthElevatedPrivileges').hide();
        $('#divChartServiceAccount').hide();

        if (selectedChartType == 'tile') {
            $("#DivChartBackColorPicker").show();
            $("#DivChartFontColorPicker").hide();
            // Hide the unwanted input elements as per the selected bar value
            if (selectedChart == "hbar") {              //hbar
                tempDivArray = ["divChartValueBox", "divChartDataFormat_DD", "divChartLegend_DD", "divChartGrandTotalMapping", "divChartDataLabl"];
                $("#divChartDataLabl").show();
                //  $("#divChartBGColorPanel").show();
                $("#divChartBGColorPanel").hide();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                enableDisableElements(eleChartColorPicker, true);
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartDataLabl, true);
                enableDisableElements(eleChartValueBox, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
                enableDisableElements(eleChartValueFormat_DD, true);
                bindDropdown(eleChartValueFormat_DD, chartValueFormatValues);
                enableDisableElements(eleChartTooltipFormat, true);
                bindDropdown(eleChartTooltipFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartLabelFormat, true);
                bindDropdown(eleChartLabelFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartGrandTotalMapping, true);
            } else if (selectedChart == "bar") {        //bar
                tempDivArray = ["divChartValueBox", "divChartDataFormat_DD", "divChartLegend_DD", "divChartScaleXLabelInfo", "divChartGrandTotalMapping"];
                enableDisableElements(eleChartColorPicker, true);
                //$("#divChartBGColorPanel").show();
                $("#divChartBGColorPanel").hide();

                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartValueBox, true);
                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
                enableDisableElements(eleChartValueFormat_DD, true);
                bindDropdown(eleChartValueFormat_DD, chartValueFormatValues);
                enableDisableElements(eleChartTooltipFormat, true);
                bindDropdown(eleChartTooltipFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartLabelFormat, true);
                bindDropdown(eleChartLabelFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartScaleXIFont, true);
                enableDisableElements(eleChartScaleXIAngle, true);
                enableDisableElements(eleChartGrandTotalMapping, true);
            } else if (selectedChart == 'pie') {        //pie
                //$("#divChartBGColorPanel").show();
                $("#divChartBGColorPanel").hide();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();
                $("#divTargetLabels").hide();

                tempDivArray = ["divChartLegend_DD"];
                enableDisableElements(eleChartSubTitle, true);
                enableDisableElements(eleChartColorPicker, true);
                enableDisableElements(eleChartValueFormat_DD, true);
                bindDropdown(eleChartValueFormat_DD, chartValueFormatValues);
                enableDisableElements(eleChartTooltipFormat, true);
                bindDropdown(eleChartTooltipFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartLabelFormat, true);
                bindDropdown(eleChartLabelFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartResultOrder_DD, true);
            } else if (selectedChart == 'ppie') {       //ppie
                //$("#divChartBGColorPanel").show();
                $("#divChartBGColorPanel").hide();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                tempDivArray = ["divChartDataFormat_DD", "divChartDataMapping"];
                enableDisableElements(eleChartColorPicker, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartDataMapping, true);
                bindDropdown(eleChartDataFormat_DD, tileDataPercentageValues);
            } else if (selectedChart == 'ssbar') {      //ssbar
                //$("#divChartBGColorPanel").show();
                $("#divChartBGColorPanel").hide();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                tempDivArray = ["divChartValueBox", "divChartGrandTotalMapping"];
                enableDisableElements(eleChartColorPicker, true);
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartValueBox, true);
                enableDisableElements(eleChartValueFormat_DD, true);
                bindDropdown(eleChartValueFormat_DD, chartValueFormatValues);
                enableDisableElements(eleChartTooltipFormat, true);
                bindDropdown(eleChartTooltipFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartLabelFormat, true);
                bindDropdown(eleChartLabelFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartResultOrder_DD, true);
                enableDisableElements(eleChartGrandTotalMapping, true);
            } else if (selectedChart == 'pssbar') {     //pssbar
                //$("#divChartBGColorPanel").show();
                $("#divChartBGColorPanel").hide();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                tempDivArray = ["divChartDataFormat_DD", "divChartDataMapping", "divChartGrandTotalMapping"];
                enableDisableElements(eleChartColorPicker, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartDataMapping, true);
                bindDropdown(eleChartDataFormat_DD, tileDataPercentageValues);
                enableDisableElements(eleChartGrandTotalMapping, true);
            }
            showHideChartDivisions(tempDivArray, true);
            if ($('input:radio[name=ChartColorRbtn]:checked').val() == dataColorDefaultValue) {
                $("#divChartColorPicker").show();
                $("#divChartColorQuery").hide();
            }
            else {
                $("#divChartColorPicker").hide();
                $("#divChartColorQuery").show();
            }
            changeTooltipMode(null);
        } else if (selectedChartType == 'zing') {

            $("#DivChartBackColorPicker").hide();
            $("#DivChartFontColorPicker").hide();

            // Hide the unwanted input elements as per the selected bar value
            if (selectedChart == "zinghbar") {          //zinghbar
                tempDivArray = ["divChartValueBox", "divChartLegend_DD", "divChartDataFormat_DD", "DivChartSliceColor", "divChartGrandTotalMapping", "divChartDataLabl"];
                $("#divChartDataLabl").show();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();
                //$("#DivChartSliceColor").show();

                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartValueBox, true);
                enableDisableElements(eleChartDataLabl, true);
                enableDisableElements(eleChartSliceColor, true);
                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
                enableDisableElements(eleChartValueFormat_DD, true);
                bindDropdown(eleChartValueFormat_DD, chartValueFormatValues);
                enableDisableElements(eleChartTooltipFormat, true);
                bindDropdown(eleChartTooltipFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartLabelFormat, true);
                bindDropdown(eleChartLabelFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartGrandTotalMapping, true);
            } else if (selectedChart == "zingbar") {    //zingbar
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                tempDivArray = ["divChartValueBox", "divChartLegend_DD", "divChartDataFormat_DD", "DivChartSliceColor", "divChartScaleXLabelInfo", "divChartGrandTotalMapping"];
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartValueBox, true);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartScaleXIFont, true);
                enableDisableElements(eleChartScaleXIAngle, true);
                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
                enableDisableElements(eleChartValueFormat_DD, true);
                bindDropdown(eleChartValueFormat_DD, chartValueFormatValues);
                enableDisableElements(eleChartTooltipFormat, true);
                bindDropdown(eleChartTooltipFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartLabelFormat, true);
                bindDropdown(eleChartLabelFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartGrandTotalMapping, true);
            }
            else if (selectedChart == 'zingtop5bar') {
                tempDivArray = ["DivChartSliceColor", "divChartDataFormat_DD"];
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartSliceColor, true);
            }
            else if (selectedChart == 'zinggrouptop5bar') {
                tempDivArray = ["DivChartSliceColor", "divChartDataFormat_DD"];
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartSliceColor, true);
            }
            else if (selectedChart == 'zingline' || selectedChart == 'maqline') {
                tempDivArray = ["DivChartSliceColor", "divChartDataFormat_DD", "divChartLegend_DD", "divChartResultOrder_DD"];
                $("#DivChartSliceColor").show();
                enableDisableElements(eleChartLegendPos_DD, true);
                enableDisableElements(eleChartResultOrder_DD, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartSliceColor, true);

                // to do  // TEMPORARY CHANGES
                $("#divChartResultOrder_DD").hide();
                $("#divTargetLabels").hide();


            }
            else if ((selectedChart == 'maqdonut') || (selectedChart == 'mediumdonut') || (selectedChart == 'maqpiechart')) {    //zingpie
                tempDivArray = ["DivChartSliceColor", "divKeyMetricIndex", "divChartLegendIndex"];
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartSubTitle, true);
                enableDisableElements(eleChartResultOrder_DD, true);
                enableDisableElements(eleKeyMetricIndex, true);
                enableDisableElements(eleLegendIndex, true);
                enableDisableElements(eleChartValueFormat_DD, true);
                bindDropdown(eleChartValueFormat_DD, chartValueFormatValues);
                enableDisableElements(eleChartTooltipFormat, true);
                bindDropdown(eleChartTooltipFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartLabelFormat, true);
                bindDropdown(eleChartLabelFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartColorPicker, false);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartTargetLabels, false);
                // Temporary Changes
                //$("#divChartLegend_DD").hide();
                $("#divTargetLabels").hide();


                //bindDropdown(eleChartDataFormat_DD, tileDataPercentageValues);
                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
                $("#divMetricText").hide();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();
                //$('#divChartResultOrder_DD').hide();
            }
            else if (selectedChart == 'zingcolumn') {    //zingpie

                $("#divRowLabels").hide();
                $("#divBottomLabels").show();
                $("#divLegends").hide();
                $("#divTargetLabels").show();
                $("#divMetricText").hide();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();
                $("#divChartSelectFunnel").hide();
                $("#divColumnTitle").show();
                tempDivArray = [];
                enableDisableElements(eleChartResultOrder_DD, true);

            }
            else if (selectedChart == 'zinglinebarchart') {
                $("#divChartLineCount").show();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();
                $("#DivChartSliceColor").show();
                enableDisableElements(eleChartSliceColor, true);
            }
            else if (selectedChart == 'zingbubble') {
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();
                $("#divTargetLabels").hide();
            }
            else if (selectedChart == 'zinghfunnel') {
                tempDivArray = ["divChartSelectFunnel", "FunnelChartDiv"];
                showHideChartDivisions(totalDivArray, true);
            }


            else if (selectedChart == 'zingpie' || selectedChart == 'zinginnerring' || selectedChart == 'zingpiewithmetric') {    //zingpie
                tempDivArray = ["divChartLegend_DD"];
                enableDisableElements(eleChartSubTitle, true);
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartResultOrder_DD, true);
                enableDisableElements(eleChartValueFormat_DD, true);
                bindDropdown(eleChartValueFormat_DD, chartValueFormatValues);
                enableDisableElements(eleChartTooltipFormat, true);
                bindDropdown(eleChartTooltipFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartLabelFormat, true);
                bindDropdown(eleChartLabelFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartColorPicker, false);
                if (selectedChart == 'zingpie') {
                    $("#DivChartBackColorPicker").hide();
                    $("#DivChartFontColorPicker").hide();
                    $("#divMetricText").hide();
                    $("#divChartHorizontalGuide").hide();
                    $("#divChartVerticalGuide").hide();
                    $("#divTargetLabels").hide();
                    $('#ChartSliceColor').show();
                }
                else {
                    enableDisableElements(eleChartColorPicker, false);
                    $("#DivChartBackColorPicker").show();
                    $("#DivChartFontColorPicker").show();
                    $('input:radio[name=ChartColorRbtn]')[0].checked = false;
                    $('input:radio[name=ChartColorRbtn]')[1].checked = false;
                    $("#ChartColorPicker").removeAttr("disabled").removeClass("DisableInputControls");
                    if (selectedChart == 'zingpiewithmetric') {
                        $("#divMetricText").show();
                        enableDisableElements(eleChartSubTitle, true);
                    }
                    else {
                        $("#divMetricText").hide();
                        enableDisableElements(eleChartSubTitle, false);
                        enableDisableElements(eleChartLegend_DD, false);
                        enableDisableElements(eleChartResultOrder_DD, false);
                    }
                }
            } else if (selectedChart == 'zingppie') {   //zingppie
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                tempDivArray = ["divChartDataFormat_DD", "divChartDataMapping", "DivChartSliceColor"];
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartDataMapping, true);
                enableDisableElements(eleChartSliceColor, true);
                bindDropdown(eleChartDataFormat_DD, tileDataPercentageValues);

                //: Added New Chart Type
            } else if (selectedChart == 'zingdoughnut') {           // Doughnut
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                tempDivArray = ["DivChartSliceColor", "divChartResultOrder_DD"];
                enableDisableElements(eleChartDataFormat_DD, false);
                enableDisableElements(eleChartDataMapping, false);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartResultOrder_DD, true);
                bindDropdown(eleChartDataFormat_DD, tileDataPercentageValues);

            } else if (selectedChart == 'zingssbar') {  //zingssbar
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                tempDivArray = ["divChartValueBox", "divChartLegend_DD", "DivChartSliceColor", "divChartGrandTotalMapping"];
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartResultOrder_DD, true);
                enableDisableElements(eleChartValueBox, true);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartValueFormat_DD, true);
                bindDropdown(eleChartValueFormat_DD, chartValueFormatValues);
                enableDisableElements(eleChartTooltipFormat, true);
                bindDropdown(eleChartTooltipFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartLabelFormat, true);
                bindDropdown(eleChartLabelFormat, chartShowLabelOptionValues);
                enableDisableElements(eleChartGrandTotalMapping, true);
            } else if (selectedChart == 'zingpssbar') { //zingpssbar
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                tempDivArray = ["divChartDataFormat_DD", "divChartDataMapping", "DivChartSliceColor", "divChartGrandTotalMapping"];
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartDataMapping, true);
                enableDisableElements(eleChartSliceColor, true);
                bindDropdown(eleChartDataFormat_DD, tileDataPercentageValues);
                enableDisableElements(eleChartGrandTotalMapping, true);
            } else if (selectedChart == 'zingline' || selectedChart == 'maqline') {     //zingline
                //tempDivArray = ["divChartLegend_DD", "divChartLegendPos_DD", "divChartDataFormat_DD", "divChartScaleXLabel", "divChartScaleYLabel", "divChartScaleYLabelInfo", "divChartScaleXLabelInfo"];
                tempDivArray = ["divChartLegend_DD", "divChartLegendPos_DD", "divChartDataFormat_DD"];
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartLegendPos_DD, true);
                enableDisableElements(eleChartScaleXLabel, true);
                enableDisableElements(eleChartScaleYLabel, true);
                enableDisableElements(eleChartScaleXLFont, true);
                enableDisableElements(eleChartScaleXIFont, true);
                enableDisableElements(eleChartScaleXIAngle, true);
                enableDisableElements(eleChartScaleYLFont, true);
                enableDisableElements(eleChartScaleYIFont, true);
                enableDisableElements(eleChartTargetLabels, false);
                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
            } else if (selectedChart == 'zingscatter') {  //zingscatter
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                //tempDivArray = ["divChartLegend_DD", "divChartLegendPos_DD", "divChartDataFormat_DD", "divChartScaleXLabel", "divChartScaleYLabel", "divChartScaleYLabelInfo", "divChartScaleXLabelInfo"];
                tempDivArray = ["divChartLegendPos_DD"];
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartLegendPos_DD, true);
                enableDisableElements(eleChartScaleXLabel, true);
                enableDisableElements(eleChartScaleYLabel, true);
                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
                enableDisableElements(eleChartScaleXLFont, true);
                enableDisableElements(eleChartScaleXIFont, true);
                enableDisableElements(eleChartScaleXIAngle, true);
                enableDisableElements(eleChartScaleYLFont, true);
                enableDisableElements(eleChartScaleYIFont, true);
            }	/****************RT********************/
            else if (selectedChart == "zingschbar") {          //zinghbar
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();


                // Code Change Commented out lines related to TitleLableDataFormat
                tempDivArray = ["divChartDataFormat_DD"
                                , "DivChartSliceColor"
                                /*"divChartGrandTotalMapping",*/
                                , "DivChartSliceColor"
                                ,/*"DivTitleBackgroundColor","divTitleLabelDataFormat"*/];
                //enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
                enableDisableElements(eleChartSliceColor, true);
                //enableDisableElements(eleChartGrandTotalMapping, true);
                //enableDisableElements(eleChartTitleBackgroundColor,true);
                //enableDisableElements(eleTitleMeasureDataMapping,true);
                //enableDisableElements(eleTitleLabelDataFormat, true);

            } else if (selectedChart == "zingmchbar") {          //zinghbar
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                tempDivArray = ["divChartLegend_DD", "divChartDataFormat_DD", "DivChartSliceColor",/* "divChartGrandTotalMapping",*/"DivChartSliceColor"];
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
                enableDisableElements(eleChartSliceColor, true);
                // enableDisableElements(eleChartGrandTotalMapping, true);


                // Added MetaData Flags
                // Added New Chart Type ZingAPMCVBar
            }
            else if (selectedChart == 'zinglinebarchart') {
                $("#divChartLineCount").show();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();
                $("#DivChartSliceColor").show();
                enableDisableElements(eleChartSliceColor, true);
            }

            else if (selectedChart == 'zinggaugechart' || selectedChart == 'maqgaugechart') {
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();
                enableDisableElements(eleChartDataFormat_DD, true);
                bindDropdown(eleChartDataFormat_DD, chartValueFormatValues);
                // Slice color disabled for 3 color functionality
                $("#DivChartSliceColor").hide();
                enableDisableElements(eleChartSliceColor, false);

                // TO DO // Temporary Changes
                $("#divChartResultOrder_DD").hide();
                $("#divTargetLabels").hide();
            }

            else if (selectedChart == 'maqcolumnchart') {
                tempDivArray = ["divTileChartOrientation", "divChartIsStacked", "divChartHasTarget", "DivChartSliceColor", "divChartDataFormat_DD", "DivChartSlicePattern", "divChartResultOrder_DD", "divChartLegendPos_DD", "divChartLegend_DD"];
                enableDisableElements(eleTileChartOrientation_DD, true);
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartLegendPos_DD, true);
                enableDisableElements(eleChartResultOrder_DD, true);
                enableDisableElements(eleChartHasTarget, true);
                enableDisableElements(eleChartIsStacked, true);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartPatternPicker, true);
                enableDisableElements(eleChartTargetLabels, false);
                $("#ChartDataFormat_DD option:contains('Percentage')").remove();

                // TO DO // Temporary Changes
                $("#divChartResultOrder_DD").hide();
                $("#divTargetLabels").hide();

            }
            else if (selectedChart == 'maqcustomcolumn') {
                tempDivArray = ["DivChartSliceColor", "divChartDataFormat_DD", "DivChartSlicePattern", "divChartResultOrder_DD", "divTargetLabels", "divKeyMetricIndex", "divTopLabelIndex", "divBottomLabelIndex", "divTargetLabelIndex"];
                enableDisableElements(eleChartLegend_DD, false);
                enableDisableElements(eleChartLegendPos_DD, false);
                enableDisableElements(eleChartResultOrder_DD, true);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartPatternPicker, true);
                enableDisableElements(eleChartTargetLabels, true);
                enableDisableElements(eleChartTargetLabelIndex, true);
                enableDisableElements(eleKeyMetricIndex, true);
                enableDisableElements(eleTopLabelIndex, true);
                enableDisableElements(eleBottomLabelIndex, true);
                $("#ChartDataFormat_DD option:contains('Percentage')").remove();

                // Temporary changes // to be removed
                // Hiding Legend Status property explicitly
                $("#divChartLegend_DD").hide();
                $("#divChartLegendPos_DD").hide();
            }
            else if (selectedChart == 'maqlinebarchart') {
                tempDivArray = ["DivChartSliceColor", "divChartDataFormat_DD", "divChartLegendPos_DD", "divChartLegend_DD", "divChartResultOrder_DD"];
                $("#divChartLineCount").show();
                $("#divChartIsStacked").hide();
                $("#divChartHasTarget").hide();
                //$('#divChartResultOrder_DD').hide();
                $('#divTargetLabels').hide();
                $('#DivChartSlicePattern').hide();

                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartLegendPos_DD, true);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartResultOrder_DD, true);
                $("#ChartDataFormat_DD option:contains('Percentage')").remove();
            }

            else if (selectedChart == 'maqhighfunnel') {
                tempDivArray = ["DivChartSliceColor", "divChartDataFormat_DD", "divChartResultOrder_DD"];

                $("#divChartIsStacked").hide();
                $("#divChartHasTarget").hide();
                $('#divTargetLabels').hide();
                $('#DivChartSlicePattern').hide();
                $('#divChartLegend_DD').hide();
                $('#divChartLegendPos_DD').hide();
                $('.SwapChart_Left').css('display', 'block');
                $('.SwapChart_Right').css('display', 'block');
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartResultOrder_DD, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                $("#ChartDataFormat_DD option:contains('Percentage')").remove();
            }

            else if (selectedChart == 'MAQhFunnelChart' || selectedChart == 'maqhfunnelchart') {
                tempDivArray = ["divChartSelectFunnel", "FunnelChartDiv"];
                showHideChartDivisions(totalDivArray, true);
                $("#divChartIsStacked").hide();
                $("#divChartHasTarget").hide();
                $('#divTargetLabels').hide();
                $('#DivChartSlicePattern').hide();
                $('#divChartLegend_DD').hide();
                $('#divChartLegendPos_DD').hide();
                $('.SwapChart_Right').show();
                $('#divChartQuery').hide();
                $('#divChartSelectFunnel').show();
                //$('#divColumnTitle').show();

                $('#divFilterAssociation2').hide();
                $('#divChartAdvancedQuery').hide();
                $('#divChartInsertSampleQuery').hide();
                $('#divChartDataFormat_DD').hide();
                $('#divChartLabelMetaDataProvidedFlag').hide();
                $('#divChartLabelMetaDataCountPerDataItem').hide();
                $('#divChartDataFormat_DD').hide();
                $('#divChartLabelMetaDataCountPerDataItem').hide();
                $('#DivChartBackColorPicker').hide();
                $('#DivChartFontColorPicker').hide();
                $('#divChartResultOrder_DD').hide();
                $('#divKeyMetricIndex').hide();
                $('#divChartLegendIndex').hide();
                $('#divDividerIndex').hide();
                $('#DivChartDrillDownURL').hide();
                $('#DivChartDrillDownType').hide();
                $(".ChartFunnelWidth .ChartFunnelWidth .ChartFunnelWidth :contains('Direction')").hide();
                $(".ChartFunnelWidth .ChartFunnelWidth :contains('Legends')").hide();
                $('#divChartPortfolio').hide();
                $('#divChartConnectionStringType').hide();
                // $('#DivChartSliceColor').hide();
                /*
                   $('#divChartPortfolio').hide();
                   $('#divChartConnectionStringType').hide();
                   $('#divChartDDLink').hide();
                   $('#DivChartSliceColor').hide();
                   $('.ChartFunnelCommonConfig .DivChartSliceColor').show();
                   */

                //$('ChartFunnelWidth').hide();

                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartResultOrder_DD, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                $("#ChartDataFormat_DD option:contains('Percentage')").remove();
            }
            else if (selectedChart == "zingmcvbar" || selectedChart == "zingapmcvbar") {          //zinghbar
                tempDivArray = ["divChartValueBox",
                                "divChartLegend_DD",
                                "divChartDataFormat_DD",
                                "DivChartSliceColor",
                                "divChartLabelMetaDataProvidedFlag",
                                "divChartLabelMetaDataCountPerDataItem", /*"divChartGrandTotalMapping",*/
                                "DivChartSliceColor",
                                "divChartScaleXLabelInfo"];
                if (selectedChart == "zingapmcvbar") {
                    enableDisableElements(eleChartLegend_DD, false);
                }
                else {
                    enableDisableElements(eleChartLegend_DD, true);
                    $("#divChartLegendPos_DD").show();
                    enableDisableElements(eleChartLegendPos_DD, true);
                }
                enableDisableElements(eleChartValueBox, true);
                enableDisableElements(eleChartDataFormat_DD, true);
                enableDisableElements(eleChartLabelMetaDataProvidedFlag, true);
                enableDisableElements(eleChartLabelMetaDataCountPerItem, false);
                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartScaleXLFont, true);
                enableDisableElements(eleChartScaleXIFont, true);
                enableDisableElements(eleChartScaleXIAngle, true);

                //PC: Added new guide feature
                enableDisableElements(eleChartHorizontalGuide, true);
                enableDisableElements(eleChartVerticalGuide, true);

                // enableDisableElements(eleChartGrandTotalMapping, true);

            } else if (selectedChart == "zinglmcvbar") {          //zinghbar
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();

                tempDivArray = ["divChartValueBox", "divChartLegend_DD", "divChartDataFormat_DD", "DivChartSliceColor", "divChartLabelMetaDataProvidedFlag", "divChartLabelMetaDataCountPerDataItem",/*"divChartGrandTotalMapping",*/"DivChartSliceColor", "divChartScaleXLabelInfo"];
                enableDisableElements(eleChartLegend_DD, true);
                enableDisableElements(eleChartValueBox, true);
                enableDisableElements(eleChartDataFormat_DD, true);

                // Added MetaData Flags
                enableDisableElements(eleChartLabelMetaDataProvidedFlag, true);
                enableDisableElements(eleChartLabelMetaDataCountPerItem, false);

                bindDropdown(eleChartDataFormat_DD, tileDataLineFormatValues);
                enableDisableElements(eleChartSliceColor, true);
                enableDisableElements(eleChartScaleXLFont, true);
                enableDisableElements(eleChartScaleXIFont, true);
                enableDisableElements(eleChartScaleXIAngle, true);
                // enableDisableElements(eleChartGrandTotalMapping, true);


            }
            else if (selectedChart == 'zinglinebarchart') {
                $("#divChartLineCount").show();
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();
                $("#DivChartSliceColor").show();
                enableDisableElements(eleChartSliceColor, true);
            }
            else if (selectedChart == 'zingbubble') {
                $("#divChartHorizontalGuide").hide();
                $("#divChartVerticalGuide").hide();
                $("#divTargetLabels").hide();
            }

            /****************RT********************/
            showHideChartDivisions(tempDivArray, true);
            changeTooltipMode(null);
        }

    }
    else {
        showHideChartDivisions(totalDivArray, false);
        $('#divChartResultOrder_DD').show();
        //$('#DivChartSliceColor').show();
        $('ChartLegendPos_DD').show();
        $("#divChartBGColorPanel").hide();
        enableDisableElements(eleChartDataLabl, false);
        $("#divChartDataLabl").hide();

        $("#divRowLabels").hide();
        $("#divBottomLabels").hide();
        $("#divLegends").hide();
        $("#divTargetLabel").hide();

        enableDisableElements(eleChartSubTitle, false);
        enableDisableElements(eleChartColorPicker, false);
        enableDisableElements(eleChartDataFormat_DD, false);
        enableDisableElements(eleChartLegend_DD, false);
        enableDisableElements(eleChartResultOrder_DD, false);
        enableDisableElements(eleChartXLabelMapping, false);
        enableDisableElements(eleChartDataMapping, false);
        enableDisableElements(eleChartRemainingDataMapping, false);
        enableDisableElements(eleChartTargetDataMapping, false);
        //enableDisableElements(eleChartSliceColor, false);
        enableDisableElements(eleChartScaleXLabel, false);
        enableDisableElements(eleChartScaleYLabel, false);
        enableDisableElements(eleChartLegendPos_DD, false);
        enableDisableElements(eleChartScaleXLFont, false);
        enableDisableElements(eleChartScaleXIFont, false);
        enableDisableElements(eleChartScaleXIAngle, false);
        enableDisableElements(eleChartScaleYLFont, false);
        enableDisableElements(eleChartScaleYIFont, false);
        enableDisableElements(eleChartIsStacked, false);
        enableDisableElements(eleChartHasTarget, false);
        enableDisableElements(eleTileChartOrientation_DD, false);


        $("#DivChartBackColorPicker").show();		// To show the Back-ground color field
        $("#DivChartFontColorPicker").hide();		// To show the Font color field
    }
}
function changeFunnelChartConnectionStringsVisibility(changedDdl) {
    selectedConnectionType = $(changedDdl)[0].value;
    var connection = $(changedDdl).parent().parent().parent().find('select')[1];
    bindConnectionStringsDropdown($(connection), connectionStringValues, selectedConnectionType);
}
function changeConnectionStringsVisibility(changedDdl) {
    var tileID = $(changedDdl).attr("id"), selectedConnectionType;
    if (tileID === "rt-nav-config-portfolio") {
        selectedConnectionType = "Data";
        selectedTileTypeValue = "Data";
    }
    if (selectedTileTypeValue === "List") {
        selectedConnectionType = $(eleListPortfolio_DD).val();
        bindConnectionStringsDropdown(eleListConnectionString_DD, connectionStringValues, selectedConnectionType);
    } else if (selectedTileTypeValue === "Chart") {
        selectedConnectionType = $(eleChartPortfolio_DD).val();
        bindConnectionStringsDropdown(eleChartConnectionString_DD, connectionStringValues, selectedConnectionType);
    } else if (selectedTileTypeValue === "Data" || tileID === "rt-nav-config-portfolio") {
        tileID = $(changedDdl).attr("id");
        if (tileID === "rt-nav-config-portfolio") {
            selectedConnectionType = $('#rt-nav-config-portfolio').val();
            bindConnectionStringsDropdown($('#rt-nav-config-dataSource'), connectionStringValues, selectedConnectionType)
        } else {
            selectedConnectionType = $(eleDataPortfolio_DD).val();
            bindConnectionStringsDropdown(eleDataConnectionString_DD, connectionStringValues, selectedConnectionType);
        }
    } else if (selectedTileTypeValue === "Grid") {
        eleGridPortfolio_DD = $(changedDdl);
        selectedConnectionType = $(eleGridPortfolio_DD).val();
        bindConnectionStringsDropdown($("#" + $(changedDdl).attr("id").replace("Portfolio", "ConnectionStringType")), connectionStringValues, selectedConnectionType);
    }

    //var selectedChart = eleTileChartType_DD.val().split('_')[0]; // Initialize the selected chart value
}

function showHideChartDivisions(divArray, state) {
    if (divArray) {
        for (var count = 0; count < divArray.length; count++) {
            if (state) {
                if ($('#' + divArray[count]).hasClass("hide"))
                    $('#' + divArray[count]).removeClass("hide");
                if (!$('#' + divArray[count]).is(':visible'))
                    $('#' + divArray[count]).show();
            } else {
                $('#' + divArray[count]).addClass("hide");
            }
        }
    }
}

function editFunnelChart(obj) {
    edit(obj);
    return;
    var partId = $(obj).parent().attr("id"); //$(obj).attr('id');
    // code change
    bGridInEditMode = true;
    loadConfigHTML(partId);
    if (obj) {
        reportingTemplateSectionID = partId.split("_")[1];
    }
    /*
    $("#Save_Btn").attr("targetId", partId);
    $("#gridSave_Btn").attr("targetId", partId);
    targetID = partId;
    var curGrid = new Grid();
    curGrid.WebPartId = partId;
    var curTile;
    for (var iCounter = 0; iCounter < oTiles.length; iCounter++) {
        if (oTiles[iCounter].TileHandle === partId) {
            curTile = oTiles[iCounter];
}
}
    */
    tileTypeClicked("Chart");
    //displayGridConfigPopup();
    //initializeGridConfigElements();
    initializeChartConfigElements();
    bindSwitchClick();
    bindElevatedPrivilegesClick();
    bindInsertSampleQueryClick();
    curGrid.Init(curTile, false, "EditedConfiguration");
    $('.multiValueFilterAssocation').multipleSelect();   // For Multi DropDown Filter Association In Grid Panel
}
function editGrid(obj) {
    var partId = $(obj).parent().attr("id"); //$(obj).attr('id');
    // code change
    bGridInEditMode = true;
    loadConfigHTML(partId);
    if (obj) {
        reportingTemplateSectionID = partId.split("_")[1];
    }
    $("#Save_Btn").attr("targetId", partId);
    $("#gridSave_Btn").attr("targetId", partId);
    targetID = partId;
    var curGrid = new Grid();
    curGrid.WebPartId = partId;
    var curTile;
    for (var iCounter = 0; iCounter < oTiles.length; iCounter++) {
        if (oTiles[iCounter].TileHandle === partId) {
            curTile = oTiles[iCounter];
        }
    }
    tileTypeClicked("Grid");
    displayGridConfigPopup();
    initializeGridConfigElements();
    bindSwitchClick();
    bindElevatedPrivilegesClick();
    bindInsertSampleQueryClick();
    curGrid.Init(curTile, false, "EditedConfiguration");
    $("#FooterDiv").css('margin-left', '90px');
    $("#Delete_Btn").show();
    $("#TileDelete_Btn").show();
    $('.multiValueFilterAssocation').multipleSelect();   // For Multi DropDown Filter Association In Grid Panel
    if (curTile.AdvancedQuery != $("#AdvancedGridQuery-G0").val()) {
        $("#AdvancedGridQuery-G0").click();
    }
    if (curTile.FilterAssociation) {
        curTile.FilterAssociation.map(function (index) {
            $("#multiValueGridFilter-G0").parent().children().find($("input[value='" + index + "']")).attr("checked", "checked")
        });
        $("#multiValueGridFilter-G0").parent().children().find(".ms-select").click()
    }
}

function loadConfigHTMLGrid(curGrid) {
    // Array for initializing the HTML content of configuration popup
    var configDivHTML = [

  '<div class="close"><img src="' + webAPIurl + '@LayoutPath/Images/Cancel_Black.png" class="btn_close" title="Close Window" alt="Close" /></div>',

  '<hr class="seperator"></hr>',
  '<div class="GridCommonConfig">',
     '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">No of Grids</div>',
     '<div  class="divGridCommonRight">',
     '<select class="DivGridDropdownMini" id="GridCount_DD" onChange="gridCount_DD_Changed(this)">',
     '</select>',
     '</div>',
     '</div>',

     '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Grid Display State</div>',
     '<div  class="divGridCommonRight">',
     '<select class="DivGridDropdownMini" id="GridDisplayState" onchange="validateDropdown(this)">',
     '</select>',
     '</div>',
     '</div>',
   '</div>',
   '<div class="clear"></div>',
   '<hr class="seperator"></hr>',

    '<div id="GridTitleSlidingDiv">',
  '<div class="SwapGrid_Left"><img src="' + webAPIurl + '@LayoutPath/Images/Swap_Left_Black.png" class="btn_Grid_Swap_Left" title="Previous Grid Configuration" alt="Previous" /></div>',
  '<div id="CurrentGridStatus">Grid - 1 Configuration</div>',
  '<div class="SwapGrid_Right"><img src="' + webAPIurl + '@LayoutPath/Images/Swap_Right_Black.png" class="btn_Grid_Swap_Right" title="Next Grid Configuration" alt="Next" /></div>',
  '</div>',

   '<div id="FixedGridVisualizer">',
   '<div id="GridSlidingDiv"></div></div>',
   '<hr class="seperator"></hr>',
   '<div id="GridFooterDiv"><th>',
   '<div class="Headers_On" id="gridSave_Btn"  title="Save Configuration"><img src="' + webAPIurl + '@LayoutPath/Images/Save_Black.png"/></div>',
   '<div class="Headers_On" id="gridReset_Btn"  title="Reset Configuration"><img src="' + webAPIurl + '@LayoutPath/Images/Reset_Black.png"/></div></div>'

    ];

    //Bind entire HTML content to the ConfigDiv element
    var configDiv = $('#GridConfig-box');
    configDiv.empty();
    var ConfigHTML = configDivHTML.join('').split('@LayoutPath').join(LayoutPath);
    $(ConfigHTML).appendTo(configDiv);
    $('#gridSave_Btn').click(function () {
        saveGridConfigurationData(curGrid);
    });
    $('#gridReset_Btn').click(function () {
        clearGridConfigurationData(curGrid);
    });
    //Fade in the Popup
    configDiv.fadeIn(300);

    //Set the center alignment padding + border see css style
    var popMargTop = (configDiv.height() + 24) / 2;
    var popMargLeft = (configDiv.width() + 24) / 2;
    configDiv.css({
        'margin-top': -popMargTop,
        'margin-left': -popMargLeft
    });

    // Add mask to body of webpage and display the Configuration Editor
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
    //  configDiv.show();

    // Bind click event for closing the configuration editor and removing mask
    $('.close').click(function () {

        // Code Change
        bGridInEditMode = false;

        $('#mask , .GridConfig-popup').fadeOut(300, function () {
            $('#mask').remove();
        });
    });


    $('.SwapGrid_Left').click(function () {

        if (currentGridDisplayed !== 0) {
            $('#GridSlidingDiv').animate({
                left: -((currentGridDisplayed - 1) * 580)
            }, animateSpeed, function () {
                // Animation complete.
            });

            currentGridDisplayed--;

            var TileText = "Grid - " + (currentGridDisplayed + 1) + " Configuration";
            $('#CurrentGridStatus').text(TileText);
            setGridSlidingIconVisibility();
        }
    });
    $('.SwapGrid_Right').click(function () {
        if (currentGridDisplayed !== totalGridCount) {
            $('#GridSlidingDiv').animate({
                left: -((currentGridDisplayed + 1) * 580)
            }, animateSpeed, function () {
                // Animation complete.
            });
            CurrentGridStatus
            currentGridDisplayed++;
            var TileText = "Grid - " + (currentGridDisplayed + 1) + " Configuration";
            $('#CurrentGridStatus').text(TileText);
            setGridSlidingIconVisibility();
        }

    });

    setGridSlidingIconVisibility();
}

function clearGridConfigurationData() {
    loadConfigHTMLGrid();
    initializeGridConfigElements();
    $("#ColumnVisibilityMappingDiv").remove();
}

function setGridSlidingIconVisibility() {
    if (totalGridCount == 0) {
        $('.btn_Grid_Swap_Left').css('visibility', 'hidden');
        $('.btn_Grid_Swap_Right').css('visibility', 'hidden');
    } else {
        if (currentGridDisplayed == totalGridCount) {
            $('.btn_Grid_Swap_Right').css('visibility', 'hidden');
            $('.btn_Grid_Swap_Left').css('visibility', 'visible');
        } else if (currentGridDisplayed == 0) {
            $('.btn_Grid_Swap_Right').css('visibility', 'visible');
            $('.btn_Grid_Swap_Left').css('visibility', 'hidden');
        } else {
            $('.btn_Grid_Swap_Right').css('visibility', 'visible');
            $('.btn_Grid_Swap_Left').css('visibility', 'visible');
        }
    }
}
function setChartFunnelSlidingIconVisibility() {
    if (totalChartFunnelCount == 0) {
        $('.SwapChart_Left').hide();
        $('.SwapChart_Right').hide();
    } else {
        if (currentChartFunnelDisplayed == totalChartFunnelCount) {
            $('.SwapChart_Right').hide();
            $('.SwapChart_Left').show();
        } else if (currentChartFunnelDisplayed == 0) {
            $('.SwapChart_Right').show();
            $('.SwapChart_Left').hide();
        } else {
            $('.SwapChart_Right').show();
            $('.SwapChart_Left').show();
        }
    }
}


function addChartFunnelConfiguration(ChartFunnelID) {
    var configChartFunnelHTML = [
     '<div class="DisplayChartFunnel" id="DisplayChartFunnel-C@ChartFunnelID">',
     '<div class="ChartFunnelCommonConfig">',
        // ChartFunnel Portfolio
     '<div class="divRow">',
     '<div class="divCellLeft">Portfolio</div>',
     '<div  class="divCellRight">',
    '<select class="DivDropdown" id="ChartFunnelPortfolio-C@ChartFunnelID" onchange="changeFunnelChartConnectionStringsVisibility(this);validateDropdown(this);">',
     '</select>',
     '</div>',
     '</div>',
     // ChartFunnel Connection
     '<div class="divRow">',
     '<div class="divCellLeft">Connection</div>',
     '<div  class="divCellRight">',
    '<select class="DivDropdown" id="ChartFunnelConnection-C@ChartFunnelID" onchange="validateDropdown(this);">',
     '</select>',
     '</div>',
     '</div>',
      // ChartFunnel Title
	'<div class="ChartFunnelWidth">',
     '<div class="divRow">',
     '<div class="divCellLeft">Title</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartFunnelTitle-C@ChartFunnelID' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',
	 // Data Dictionary Link
	 '<div class="divRow">',
     '<div class="divCellLeft">Data Dictionary Link</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartFunnelDDL-C@ChartFunnelID' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     // Chart Advance Query
     '<div class="divRow">',
     '<div class="divCellLeft">Advanced Query</div>',
     ' <div class="divCellRight">',
     '<input type="checkbox" class="DivTextArea switch" name="AdvancedChartQuery" id="AdvancedFunnelChartQuery-C@ChartFunnelID" /> ',
     '<label for="AdvancedFunnelChartQuery-C@ChartFunnelID">OFF</label>',
     '</div>',
     '</div>',

     // ChartFunnel Query
     '<div class="divRow">',
     '<div class="divCellLeft">Query</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='ChartFunnelQuery-C@ChartFunnelID' onkeyup='validateQuery(this,\"ChartFunnelQuery-C@ChartFunnelID\");'></textarea>",
     '</div>',
     '</div>',
     '<div class="divRow" id="DivChartSliceColor">',
     '<div class="divCellLeft">Slice Color</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBoxSmall' id='ChartFunnelSeriesColor-C@ChartFunnelID' onkeyup='validateText(this, \"NumbersandComma\", true, \"-1\", \"-1\");'/>",
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,null);'/></div>",
     '</div>',
     '</div>',
     '<div class="divRow" id="DivChartSlicePattern">',
     '<div class="divCellLeft">Slice Pattern</div>',
     '<div  class="divCellRight">',
     "<input type='text' class='DivTextBoxSmall' id='ChartFunnelSeriesPattern-C@ChartFunnelID' onkeyup='validateText(this, \"NumbersandComma\", true, \"-1\", \"-1\");'/>",
     "<div class='PickerIconsDiv'><img src='" + webAPIurl + "@LayoutPath/Images/ColorPicker_Black.png' class='HelpIcons' title='Pattern Picker' alt='Pattern Picker' onclick='loadPatternPicker(this,null);'/></div>",
     '</div>',
     '</div>',
         // ChartFunnel Legends
	'<div class="ChartFunnelWidth">',
     '<div class="divRow">',
     '<div class="divCellLeft">Legends</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartFunnelLegends-C@ChartFunnelID' onkeyup='validateText(this, \"CommaText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',
         // ChartFunnel Row Labels
        '<div class="ChartFunnelWidth">',
         '<div class="divRow">',
         '<div class="divCellLeft">Row Labels</div>',
         '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartFunnelRowLabels-C@ChartFunnelID' onkeyup='validateText(this, \"CommaText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',
     '<div class="ChartFunnelWidth">',
     '<div class="divRow">',
     '<div class="divCellLeft">Starting Y Position</div>',
     '<div  class="divCellRight">',
     "<input class='DivTextBox' type='text' id='ChartFunnelStartingYPos-C@ChartFunnelID' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',
         /* PC: Direction */
     '<div class="divRow">',
     '<div class="divCellLeft">Direction</div>',
     '<div  class="divCellRight">',
     '<input type="checkbox" id="ChartFunnelDirection-C@ChartFunnelID"  class="DivCheckBox" onClick=""/>',
     '</select>',
     '</div>',
     '</div>',
         /* PC: Connector */
     '<div class="divRow">',
     '<div class="divCellLeft">Connector</div>',
     '<div  class="divCellRight">',
     '<input type="checkbox" id="ChartFunnelConnector-C@ChartFunnelID"  class="DivCheckBox" onClick=""/>',
     '</select>',
     '</div>',
     '</div>',
    /* PC: Connector */
     '<div class="divRow">',
     '<div class="divCellLeft">Legends</div>',
     '<div  class="divCellRight">',
     '<input type="checkbox" id="ChartFunnelLegendsVisibility-C@ChartFunnelID"  class="DivCheckBox" onClick=""/>',
     '</select>',
     '</div>',
     '</div>',
         /****************RT*************************/
     '<div class="divRow" id="DivChartDrillDownURL">',
     '<div class="divCellLeft">Drill Down URL</div>',
     '<div  class="divCellRight">',
     "<textarea class='DivTextArea' id='ChartFunnelDrillDownURL-C@ChartFunnelID' onkeyup='validateText(this, \"UrlCombo\", false, \"-1\", \"-1\");'></textarea>",
     '</div>',
     '</div>',
     '<div class="divRow" id="DivChartDrillDownType">',
     '<div class="divCellLeft">Drill Down Type</div>',
     '<div  class="divCellRight">',
      '<select class="DivDropdown" id="ChartFunnelDrillDownType-C@ChartFunnelID" >',
     '</select>',
     '</div>',
     '</div>',
      '<div class="clear"></div>',
     '</div>',
    '<div class="clear"></div>',
    '<hr class="seperator"></hr>',
    '<div class="ChartFunnelColumnConfig" id="ChartFunnelColumnMapping">',
    '<div class="ChartFunnelColumnSlidingDiv" id="ChartFunnelColumnSlidingDiv-G@ChartFunnelID">',
    '</div>',
    '</div>',
     '<div id="AddRemoveButtonsDiv"><th>',
	'</div>'
    ];
    var ChartFunnelDiv = $('#ChartFunnelSlidingDiv');
    $(configChartFunnelHTML.join('').split('@ChartFunnelID').join(ChartFunnelID).split('@LayoutPath').join(LayoutPath)).appendTo(ChartFunnelDiv);
    $('#AddChartFunnel' + ChartFunnelID).click(function () {
        //addColumnConfiguration(currentChartFunnelDisplayed, totalChartFunnelColumns[currentChartFunnelDisplayed] + 1)
        //totalChartFunnelColumns[currentChartFunnelDisplayed]++;
        updateChartFunnelElementIDArray();
        if (totalChartFunnelColumns[currentChartFunnelDisplayed] > 0) {
            $('#RemoveChartFunnelColumn' + ChartFunnelID).show();
        }
        //populateColumnControls('ColAdded');
    });
    $('#RemoveChartFunnel' + ChartFunnelID).click(function () {
        //$('#ChartFunnelColumn-C' + currentChartFunnelDisplayed + 'C' + totalChartFunnelColumns[currentGridDisplayed]).remove();
        totalChartFunnelColumns[currentChartFunnelDisplayed]--;
        updateChartFunnelElementIDArray();
        if (totalChartFunnelColumns[currentChartFunnelDisplayed] == 0) {
            $('#RemoveGridColumn' + GridID).hide();
        }
        // totalChartFunnelCount--;
    });
}
function addGridConfiguration(GridID) {

    var configGridHTML = [
     '<div class="DisplayGrid" id="DisplayGrid-G@GridID">',
     '<div class="GridCommonConfig">',
     '<div class="GridWidth">',
     '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Title</div>',
     '<div  class="divGridCommonRight">',
     "<input class='DivTextBox' type='text' id='GridTitle-G@GridID' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',


     '<div class="divRow" id="divPortfolio">',
     '<div class="divCellLeft">Portfolio</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='GridPortfolio_DD@GridID' onChange='changeConnectionStringsVisibility(this);validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

	 '<div class="divRow" id="divConnectionStringType">',
     '<div class="divCellLeft">Data Connection</div>',
     '<div  class="divCellRight">',
     '<div class="DivDropdown_Image">',
     "<select class='DivDropdown' id='GridConnectionStringType_DD@GridID' onChange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     //Added for custom connection feature
     '<div class="hide" id="CustomConnectionConfiguration_Grid@GridID">',
         '<div class="divRow">',
            '<div class="divCellLeft">Connection Type</div>',
            '<div class="divCellRight">',
             '<div class = "DivDropdown_Image">',
                '<select class="DivDropdown" id="ConnectionType_DD_Grid@GridID" onchange="validateConnectionTypeDropdown(this);">',
                '</select>',
                '</div>',
     '</div>',
     '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft">New Connection Name</div>',
            '<div class="divCellRight">',
                '<input class="DivTextBox" id="CustomConnectionConfig_Grid@GridID" type="text" onkeyup="validateCustomConnectionFriendlyName(this)">',
            '</div>',
         '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft">New Connection String</div>',
            '<div class="divCellRight">',
                "<input class='DivTextBox' id='CustomConnectionNameConfig_Grid@GridID' type='text' onkeyup='validateCustomConnectionParameter(this,\"ConnectionType_DD_Grid@GridID\")'>",
            '</div>',
         '</div>',
         '<div class="divRow hide" id="CustomConnectionStatusSection_Grid@GridID">',
            '<div class="divCellLeft"></div>',
            '<div class="divCellRight">',
                '<div id="CustomConnectionStatus_Grid@GridID" class="divRow hide"></div>',
            '</div>',
         '</div>',
         '<div class="divRow">',
            '<div class="divCellLeft"></div>',
            '<div class="divCellRight">',
                "<div class='rt-congigPopup-btn' id='BtnValidateCustomConnection_Grid@GridID' onclick='validateCustomConnection(this,\"ConnectionType_DD_Grid@GridID\",\"CustomConnectionConfig_Grid@GridID\",\"CustomConnectionNameConfig_Grid@GridID\",\"No\");'>Validate </div>",
            '</div>',
         '</div>',
     '</div>',
     //End of custom connection feature



     '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Paging</div>',
     '<div  class="divGridCommonRight">',
     '<div class="DivDropdown_Image">',
     '<select class="DivGridDropdown" id="GridPaging-G@GridID" onchange="validateDropdown(this);">',
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     /* PC: Select Fields Visibility */
     '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Select Fields Visibility</div>',
     '<div  class="divGridCommonRight">',
     '<input type="checkbox" id="GridSelectVisibility-G@GridID"  class="DivCheckBox" onClick=""/>',
     '</select>',
     '</div>',
     '</div>',

      '<div class="divGridCommonRow gridFilterAssociation"  id="divFilterAssociation1">',
     '<div class="divCellLeft">Filter Association</div>',
     '<div  class="divCellRight">',
     //"<input class='DivTextBox' type='text' id='DataFALink1' value='' onkeyup='validateText(this, \"Url\", false, \"-1\", \"-1\");'/>",
    '<select  class="multiValueFilterAssocation" id="multiValueGridFilter-G@GridID" multiple="multiple">',
     '<option value="Demand Type">Demand Type</option>',
     '<option value="Product">Product</option>',
	 '<option value="Geography">Geography</option>',
	 '<option value="Sales Person">Sales Person</option>',
	 '<option value="Organization">Organization</option>',
     '<option value="Product Ownership">Product Ownership</option>',
	 '<option value="Area">Area</option>',
	 '<option value="Profile">Profile</option>',
	 '</select>',
     '</div>',
     '</div>',

      '<div class="divGridCommonRow">',
    '<div class="divGridCommonLeft">Advanced Query</div>',
    '<div class="divGridCommonRight">',
         '<input type="checkbox" class="DivTextArea switch" name="AdvancedGridQuery-G@GridID" id="AdvancedGridQuery-G@GridID" /> ',
         '<label for="AdvancedGridQuery-G@GridID">OFF</label>',
        '</div>',
      '</div>',
       '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Query</div>',
     '<div  class="divGridCommonRight">',
     "<textarea class='DivGridTextArea' id='GridQuery-G@GridID' onkeyup='validateQuery(this,\"GridConnectionStringType_DD@GridID\");'></textarea>",
     '</div>',
     '</div>',

    '<div class="divGridCommonRow">',
    '<div class="divGridCommonLeft"></div>',
    '<div class="divGridCommonRight">',
         '<div class="rt-congigPopup-btn insertSampleQuery" id="insertSampleGridQuery-G@GridID">Insert Sample Query</div>',
        '</div>',
    '</div>',


	'<div class="divRow hide">',
     '<div class="divCellLeft" id="gridElevatedPrivilages">Run with Elevated Privileges</div>',
	    '<div class="divCellRight"><input class="DivCheckBox RunWithElevatedCheckbox" id="RunWithElevatedGridCheckbox-G@GridID" onclick="openRunWithElevatedPopup(this, 4,0)" type="checkbox" value="IsRunWithElevated">Yes</div>',
     '</div>',

	'<div class="divRow hide">',
		    '<div class="divCellLeft">Service Account</div>',
		    '<div class="divCellRight"><div class="DivDropdown_Image"><select class="DivDropdown DisableInputControls" id="RunWithElevatedGrid-G@GridID" disabled="disabled" onchange="checkUserAccess(this);validateDropdown(this);"></select></div></div>',
     '</div>',




     '<div class="divGridLeftadjustRow">',
     '<div class="GridWidth">',
     '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Is Full Report</div>',
     '<div  class="divGridCommonRight">',
     '<input type="checkbox" id="GridPivotExcelChk-G@GridID"  class="DivCheckBox" onClick="gridPivotExcelChk_clicked(this)"/>',
     '</div>',
     '</div>',

     '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Full Report (Pivot Table) Excel URL</div>',
     '<div  class="divGridCommonRight">',
     "<textarea class='DivGridTextArea' id='GridPivotExcelURL-G@GridID' onkeyup='validateText(this, \"Url\", true, \"-1\", \"-1\");'></textarea>",
     '</div>',
     '</div>',
     '</div>',
     '</div>',
     '</div>',

      '<div class="clear"></div>',
     '</div>',


    '<div class="clear"></div>',
    '<hr class="seperator"></hr>',
    '<div class="GridColumnConfig" id="GridColumnMapping">',
    '<div class="GridColumnSlidingDiv" id="GridColumnSlidingDiv-G@GridID">',

    '</div>',

    '</div>',
     '<div id="AddRemoveButtonsDiv"><th>',
     '<div class="Headers_On" id="AddGridColumn@GridID"  title="Add column"><img src="' + webAPIurl + '@LayoutPath/Images/Add_Black.png"/></div>',
     '<div class="Headers_On" id="RemoveGridColumn@GridID" title="Remove column"><img src="' + webAPIurl + '@LayoutPath/Images/Minus_Black.png"/></div></div>'
    ];


    var GridDiv = $('#GridSlidingDiv');
    $(configGridHTML.join('').split('@GridID').join(GridID).split('@LayoutPath').join(LayoutPath)).appendTo(GridDiv);



    for (var i = 0; i <= defaultColumnsDisplayed; i++) {
        addColumnConfiguration(GridID, i);
    }

    $('#AddGridColumn' + GridID).click(function () {
        addColumnConfiguration(currentGridDisplayed, totalGridColumns[currentGridDisplayed] + 1)
        totalGridColumns[currentGridDisplayed]++;
        updateElementIDArray();

        if (totalGridColumns[currentGridDisplayed] > 0) {
            $('#RemoveGridColumn' + GridID).show();
        }

        populateColumnControls('ColAdded');
    });
    $('#RemoveGridColumn' + GridID).click(function () {

        $('#GridColumn-G' + currentGridDisplayed + 'C' + totalGridColumns[currentGridDisplayed]).remove();

        totalGridColumns[currentGridDisplayed]--;
        updateElementIDArray();

        if (totalGridColumns[currentGridDisplayed] == 0) {
            $('#RemoveGridColumn' + GridID).hide();
        }

    });
}
function initializeChartConfigElements() {
    totalChartFunnelCount = 0;
    currentChartFunnelDisplayed = 0;
    eleChartFunnelCount_DD = $('#ChartFunnelCount_DD');
    addChartFunnelConfiguration(0);
    bindDropdown(eleChartFunnelCount_DD, chartFunnelNumberValues);
    updateChartFunnelElementIDArray();
    populateChartFunnelControls('FirstLoad', 0);
    // Sudhir: July 24, 2014
    $('.SwapChart_Left').click(function () {

        if (currentChartFunnelDisplayed !== 0) {
            $('#ChartFunnelSlidingDiv').animate({
                left: -((currentChartFunnelDisplayed - 1) * 580)
            }, animateSpeed, function () {
                // Animation complete.
            });

            currentChartFunnelDisplayed--;

            var TileText = "Part - " + (currentChartFunnelDisplayed + 1) + " Configuration";
            $('#CurrentChartStatus').text(TileText);
            setChartFunnelSlidingIconVisibility();
        }
    });
    $('.SwapChart_Right').click(function () {
        if (currentChartFunnelDisplayed !== totalChartFunnelCount) {
            $('#ChartFunnelSlidingDiv').animate({
                left: -((currentChartFunnelDisplayed + 1) * 580)
            }, animateSpeed, function () {
                // Animation complete.
            });

            currentChartFunnelDisplayed++;
            var TileText = "Part - " + (currentChartFunnelDisplayed + 1) + " Configuration";
            $('#CurrentChartStatus').text(TileText);
            setChartFunnelSlidingIconVisibility();
        }

    });
    setChartFunnelSlidingIconVisibility();
}
function populateChartFunnelControls(loadState, gridID) {
    if (loadState == 'FirstLoad' || loadState == 'GridAdded') {
        bindPortfoliosDropdown(eleChartFunnelPortfolio[gridID], portfolioValues);
        bindDropdown(eleChartFunnelConnection[gridID], connectionStringValues);
        bindDropdown(eleChartFunnelDrillDownType[gridID], tileChartDrillDownType);
    }
}
function addColumnConfiguration(GridID, ColumnID) {

    var configGridColumnHTML = [
     '<div class="GridIndividualColumn" id="GridColumn-G@GridIDC@ColumnID">',
     '<fieldset>',
     '<legend>Column - @ColCalc</legend>',

     '<div class="GridCommonConfig">',
     '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Header</div>',
     '<div  class="divGridColumnRight">',
     "<input class='DivGridTextBoxMini' type='text' id='GridHeaderTitle-G@GridIDC@ColumnID' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Data Mapping ID</div>',
     '<div  class="divGridColumnRight">',
     "<input class='DivGridTextBoxMini' type='text' id='GridMappingID-G@GridIDC@ColumnID' onkeyup='validateText(this, \"NumbersandComma\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

      '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Column Type</div>',
     '<div  class="divGridColumnRight">',
     '<div class="DivDropdown_Mini_Grid_Image">',
     "<select class='DivGridDropdownMini' id='GridColType-G@GridIDC@ColumnID' onchange='validateDropdown(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Format</div>',
     '<div  class="divGridColumnRight">',
     '<div class="DivDropdown_Mini_Grid_Image">',
     "<select class='DivGridDropdownMini' id='GridFormat-G@GridIDC@ColumnID' onchange='validateDropdown(this); enableDisablePercFormula(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Is Grand Total</div>',
     '<div  class="divGridColumnRight">',
     '<input type="checkbox" id="GridTotalChk-G@GridIDC@ColumnID" class="DivCheckBox" onclick="enableDisablePercFormula(this);"/>',
     '</div>',
     '</div>',

     '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Percentage Formula</div>',
     '<div  class="divGridColumnRight">',
     "<input class='DivGridTextBoxSmall' type='text' id='GridPercNum-G@GridIDC@ColumnID' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/> ",
     " / <input class='DivGridTextBoxSmall' type='text' id='GridPercDen-G@GridIDC@ColumnID' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Width</div>',
     '<div  class="divGridColumnRight">',
     "<input class='DivGridTextBoxMini' type='text' id='GridWidth-G@GridIDC@ColumnID' onkeyup='validateText(this, \"OnlyNumbers\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Is Filter</div>',
     '<div  class="divGridColumnRight">',
     '<input type="checkbox" id="GridFilterChk-G@GridIDC@ColumnID" class="DivCheckBox"/>',
     '</div>',
     '</div>',

     '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Is Visible</div>',
     '<div  class="divGridColumnRight">',
     '<input type="checkbox" id="GridVisibleChk-G@GridIDC@ColumnID"  class="DivCheckBox"/>',
     '</div>',
     '</div>',

     '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Conditional Formatter</div>',
     '<div  class="divGridColumnRight">',
     '<div class="DivDropdown_Mini_Grid_Image">',
     "<select class='DivGridDropdownMini' id='GridCondFormatType-G@GridIDC@ColumnID' onchange='validateDropdown(this); enableDisablecondMapping(this);'>",
     '</select>',
     '</div>',
     '</div>',
     '</div>',

     '<div class="divGridColumnRow">',
     '<div class="divGridCommonLeft">Formatter Data Mapping ID</div>',
     '<div  class="divGridColumnRight">',
     "<input class='DivGridTextBoxMini' type='text' id='GridCondMappingID-G@GridIDC@ColumnID' onkeyup='validateText(this, \"NumbersandComma\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Is Hyperlink</div>',
     '<div  class="divGridColumnRight">',
     '<input type="checkbox" id="GridHyperlinkChk-G@GridIDC@ColumnID"  class="DivCheckBox" onClick="gridHyperlinkChk_clicked(this)"/>',
     '</div>',
     '</div>',

     '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Drill Down URL:</div>',
     '<div  class="divGridColumnRight">',
     "<input class='DivGridTextBoxMini' type='text' id='GridDrillUrl-G@GridIDC@ColumnID' onkeyup='validateText(this, \"Url\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

      '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">URL Mapping</div>',
     '<div  class="divGridColumnRight">',
     "<input class='DivGridTextBoxMini' type='text' id='GridUrlMapping-G@GridIDC@ColumnID' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     //PC: TootlTip Implementation
      '<div class="divGridCommonRow">',
     '<div class="divGridCommonLeft">Header Tooltip</div>',
     '<div  class="divGridColumnRight">',
     "<input class='DivGridTextBoxMini' type='text' id='GridHeaderTooltip-G@GridIDC@ColumnID' onkeyup='validateText(this, \"TitleText\", true, \"-1\", \"-1\");'/>",
     '</div>',
     '</div>',

     '</div>',
     '</fieldset></div>',
    ];

    var GridDiv = $('#GridColumnSlidingDiv-G' + GridID);
    $(configGridColumnHTML.join('').split('@GridID').join(GridID).split('@ColumnID').join(ColumnID).split('@ColCalc').join(ColumnID + 1)).appendTo(GridDiv);



}
// Funnel Chart
function funnelChartCount_DD_Changed(objId) {
    var currentChartFunnelCount = totalChartFunnelCount;
    totalChartFunnelCount = parseInt(eleChartFunnelCount_DD.val()) - 1;
    var objId = $('#ChartFunnelSlidingDiv');
    var tempCount = totalChartFunnelCount;

    if (tempCount > currentChartFunnelCount) {
        for (var gid = currentChartFunnelCount + 1; gid <= tempCount; gid++) {
            addChartFunnelConfiguration(gid);
            updateChartFunnelElementIDArray();
            setChartFunnelSlidingIconVisibility();
            populateChartFunnelControls('GridAdded', gid);
            /*
            totalGridColumns.push(defaultColumnsDisplayed);
            updateElementIDArray();
            setGridSlidingIconVisibility();
            populateColumnControls('GridAdded', gid);
            */
        }
    }
    else if (tempCount < currentChartFunnelCount) {
        for (var gid = tempCount + 1; gid <= currentChartFunnelCount; gid++) {
            $('#DisplayChartFunnel-C' + gid).remove();
            updateChartFunnelElementIDArray();
            populateChartFunnelControls('GridAdded', gid);
            setChartFunnelSlidingIconVisibility();
            $('.SwapChart_Left').click();
            /*
            totalGridColumns.pop();
            updateElementIDArray();
            setGridSlidingIconVisibility();
            $('.SwapGrid_Left').click();
            setGridSlidingIconVisibility();
            */
        }
    }

    if (tempCount === -1) {
        $("#ChartTitleSlidingDiv").hide();
        $(objId).css('width', 600);
        return;
    }
    else {
        $("#ChartTitleSlidingDiv").show();
    }
    bindSwitchClick();
    bindInsertSampleQueryClick();
    $(objId).css('width', ((totalChartFunnelCount + 1) * 600));
}
// Funnel Chart ends

function initializeGridConfigElements() {
    totalGridCount = 0;
    currentGridDisplayed = 0;
    eleGridCount_DD = $('#GridCount_DD');
    eleGridDisplayState = $('#GridDisplayState');
    eleGridTilePosition = $('#gridTilePosition');
    addGridConfiguration(0);
    totalGridColumns.push(defaultColumnsDisplayed);

    bindDropdown(eleGridCount_DD, gridNumberValues);
    bindDropdown(eleGridDisplayState, gridDisplayStateValues);


    for (var count = 0; count <= defaultColumnsDisplayed; count++) {
        totalGridColumns[count] = defaultColumnsDisplayed;
    }
    updateElementIDArray();

    populateColumnControls('FirstLoad', 0);
    bindPortfoliosDropdown(eleGridPortfolio_DD, portfolioValues);
    //bindConnectionStringsDropdown(eleGridConnectionString_DD, connectionStringValues);
    //Adding for custom connection
    bindDropdown(eleGridConnectionType_DD, connectionTypeValues);

    $('.SwapGrid_Left').click(function () {
        if (currentGridDisplayed !== 0) {
            $('#GridSlidingDiv').animate({
                left: -((currentGridDisplayed - 1) * 580)
                //}, animateSpeed, function () {
                // Animation complete.
            });

            currentGridDisplayed--;

            var TileText = "Grid - " + (currentGridDisplayed + 1) + " Configuration";
            $('#CurrentGridStatus').text(TileText);
            setGridSlidingIconVisibility();
        }

        if ($('#multiValueGridFilter-G' + currentGridDisplayed).siblings()[0].children[1].children[1].innerText === "OK") {
            $('#multiValueGridFilter-G' + currentGridDisplayed).siblings()[0].children[1].children[1].click();
        }
    });
    $('.SwapGrid_Right').click(function () {
        if (currentGridDisplayed !== totalGridCount) {
            $('#GridSlidingDiv').animate({
                left: -((currentGridDisplayed + 1) * 580)
                //}, animateSpeed, function () {
                // Animation complete.
            });
            //CurrentGridStatus
            currentGridDisplayed++;
            var TileText = "Grid - " + (currentGridDisplayed + 1) + " Configuration";
            $('#CurrentGridStatus').text(TileText);
            setGridSlidingIconVisibility();
        }

        if ($('#multiValueGridFilter-G' + currentGridDisplayed).siblings()[0].children[1].children[1].innerText === "OK") {
            $('#multiValueGridFilter-G' + currentGridDisplayed).siblings()[0].children[1].children[1].click();
        }
        //$('.multiValueFilterAssocation').multipleSelect();  // For Multi DropDown Filter Association
    });

    setGridSlidingIconVisibility();


}

function populateColumnControls(loadState, gridID) {

    if (loadState == 'FirstLoad' || loadState == 'GridAdded') {
        eleGridPortfolio_DD = $('#GridPortfolio_DD' + gridID);
        eleGridMultiValueDataFilter_DD = $('#multiValueGridFilter-G' + gridID);
        //eleGridFilterAssociation_DD = $('#GridPortfolio_DD' + gridID);
        eleGridConnectionString_DD = $('#GridConnectionStringType_DD' + gridID);
        eleGridConnectionType_DD = $('#ConnectionType_DD_Grid' + gridID);
        bindPortfoliosDropdown(eleGridPortfolio[gridID], connectionStringValues);
        bindFilterDropdown(eleGridMultiValueDataFilter_DD, Filterslistids);

        if (gridID !== 0)
            $('#multiValueGridFilter-G' + gridID).multipleSelect();  // For Multi DropDown Filter Association

        bindConnectionStringsDropdown(eleGridConnectionString_DD, connectionStringValues);
        // bindDropdown(eleGridConnection[gridID], connectionStringValues);
        bindDropdown(eleGridPaging[gridID], gridPagingValues);
        //bindFilterDropdown(eleMultiValueGridFilter[gridID], Filterslistids);
        bindDropdown(eleGridConnectionType_DD, connectionTypeValues);
        // Disabling PivotExcelURL text area
        enableDisableElements(eleGridPivotExcelURL[gridID], false);

        for (var i = 0; i <= defaultColumnsDisplayed ; i++) {
            bindDropdown(eleGridFormat[gridID][i], gridColumnFormatValues);
            bindDropdown(eleGridColType[gridID][i], gridColTypes);
            bindDropdown(eleGridCondFormattingType[gridID][i], gridColumnConditionalFormatValues);
            enableDisableElements(eleGridPercNum[gridID][i], false);
            enableDisableElements(eleGridPercDen[gridID][i], false);
            enableDisableElements(eleGridDrillUrl[gridID][i], false);
            enableDisableElements(eleGridUrlMapping[gridID][i], false);
            enableDisableElements(eleGridCondFormattingMapping[gridID][i], false);
        }
    } else
        if (loadState == 'ColAdded') {
            bindDropdown(eleGridFormat[currentGridDisplayed][totalGridColumns[currentGridDisplayed]], gridColumnFormatValues);
            bindDropdown(eleGridColType[currentGridDisplayed][totalGridColumns[currentGridDisplayed]], gridColTypes);
            bindDropdown(eleGridCondFormattingType[currentGridDisplayed][totalGridColumns[currentGridDisplayed]], gridColumnConditionalFormatValues);
            enableDisableElements(eleGridPercNum[currentGridDisplayed][totalGridColumns[currentGridDisplayed]], false);
            enableDisableElements(eleGridPercDen[currentGridDisplayed][totalGridColumns[currentGridDisplayed]], false);
            enableDisableElements(eleGridDrillUrl[currentGridDisplayed][totalGridColumns[currentGridDisplayed]], false);
            enableDisableElements(eleGridUrlMapping[currentGridDisplayed][totalGridColumns[currentGridDisplayed]], false);
            enableDisableElements(eleGridCondFormattingMapping[currentGridDisplayed][totalGridColumns[currentGridDisplayed]], false);
        }
}

function gridCount_DD_Changed(objId) {
    var currentGridCount = totalGridCount;
    totalGridCount = parseInt(eleGridCount_DD.val()) - 1;
    var objId = $('#GridSlidingDiv');

    if (totalGridCount > currentGridCount) {

        for (var gid = currentGridCount + 1; gid <= totalGridCount; gid++) {
            addGridConfiguration(gid);
            totalGridColumns.push(defaultColumnsDisplayed);
            updateElementIDArray();
            setGridSlidingIconVisibility();

            populateColumnControls('GridAdded', gid);
        }
    }
    else if (totalGridCount < currentGridCount) {
        for (var gid = totalGridCount + 1; gid <= currentGridCount; gid++) {
            $('#DisplayGrid-G' + gid).remove();

            totalGridColumns.pop();
            updateElementIDArray();
            setGridSlidingIconVisibility();
            $('.SwapGrid_Left').click();
            setGridSlidingIconVisibility();
        }
    }
    $(objId).css('width', ((totalGridCount + 1) * 600));
    bindSwitchClick();
    bindElevatedPrivilegesClick();
    bindInsertSampleQueryClick();
}

function saveGridConfigurationData(curGrid) {
    if ($(".OverlayChkbx:checked").length > 0) {
        saveConfigurationData();
    } else {
        var filterslist = getSelectedFiltersIDS("Grid");
        var filterQueryReplace = [];
        var filtercount = 0;
        filterQueryReplace = getreplacequeryobject(filterslist);
        var isTileInSection = false;
        for (var sectionIndex = 0; sectionIndex < oSections.length; sectionIndex++) {
            if (oSections[sectionIndex].SectionHandle === reportingTemplateSectionID) {
                presentTileID = Number(oSections[sectionIndex].LastTileIndex) + 1;
                oSections[sectionIndex].LastTileIndex = presentTileID;
                isTileInSection = true;
                break;
            }
        }
        if (!isTileInSection) {
            if (presentTileID === null || typeof (presentTileID) === "undefined") {
                presentTileID = 0;
            } else {
                presentTileID = presentTileID + 1;
            }
        }
        var bNewTile;
        if ($("#Save_Btn").attr("targetId") !== "") {
            targetID = $("#Save_Btn").attr("targetId");
            bNewTile = false;
            $("#Delete_Btn").show();
            $("#TileDelete_Btn").show();
            isEditTile = true;
        } else {
            //var splitURL = window.location.pathname.split("/");
            //reportName = splitURL[splitURL.length - 1].split(".")[0];
            //var i;
            //siteName = '';
            //for (i = 2; i < (splitURL.length - 3) ; i++) {
            //    siteName += splitURL[i];
            //    siteName += '/'
            //}
            //siteName += splitURL[i];
            var numberOfTilesInSection = $("#" + reportingTemplateSectionID + " .tile").length + $("#" + reportingTemplateSectionID + " .GridContainer").length;
            // var presentTileID = numberOfTilesInSection++, tileObject = {};
            targetID = reportName + "_" + reportingTemplateSectionID + "_" + "tile" + presentTileID;
            bNewTile = true;
            $("#Delete_Btn").hide();
            $("#TileDelete_Btn").hide();
            isEditTile = false;
        }
        curGrid.WebPartId = targetID;
        //validateGridConfigForm();

        // Custom connection changes
        // Update bCustomConnectionValidation and set validation to no

        if (bCustomConnectionValidation && isFormValid) {
            var oRequest = new tilesPostRequest();
            oRequest.postRequest(sWebServicePath + 'GetDicMiscitems', loadConnectionString, '', '');
        }

        bCustomConnectionValidation = false;

        var iTotalCount = gridElementCustomConnectionCheck.length;
        if (iTotalCount) {
            for (var iCounter = 0; iCounter < iTotalCount; iCounter++) {
                var requestorID = gridElementCustomConnectionCheck[iCounter];

                var oRequestor = $('#' + requestorID);
                if (oRequestor.length) {
                    var updatedOnClickAttribute = oRequestor.attr("onclick").replace("Yes", "No");
                    oRequestor.attr("onclick", updatedOnClickAttribute);
                }
            }
        }
        gridCustomConnectionCount = 0;
        gridCustomConnectionSuccessCount = 0;
        gridElementCustomConnectionCheck.length = 0;
        // End of custom connection

        if (isFormValid) {
            gridConfigurationXML = '';
            // XML configuration structure of data grid
            var gridDataStructure = '<Grid>';
            gridDataStructure = gridDataStructure + '<Title>@Title</Title>';
            gridDataStructure = gridDataStructure + '<Paging>@Paging</Paging>';
            gridDataStructure = gridDataStructure + '<TilePosition>@TilePosition</TilePosition>';
            /* PC: Select Fields Visibility */
            gridDataStructure = gridDataStructure + '<SelectVisibility>@SelectVisibility</SelectVisibility>';
            gridDataStructure = gridDataStructure + '<SelectedLayout>@SelectedLayout</SelectedLayout>';
            gridDataStructure = gridDataStructure + '<RunWithElevateAccount>@RunWithElevateAccount</RunWithElevateAccount>';
            gridDataStructure = gridDataStructure + '<RunWithElevatedCheckboxStatus>@RunWithElevatedCheckboxStatus</RunWithElevatedCheckboxStatus>';

            gridDataStructure = gridDataStructure + '<ConnectionType>@ConnectionType</ConnectionType>';
            gridDataStructure = gridDataStructure + '<Portfolio>@Portfolio</Portfolio>';
            gridDataStructure = gridDataStructure + '<ConnectionString>@ConnectionString</ConnectionString>';
            gridDataStructure = gridDataStructure + '<AdvancedQuery>@AdvancedQuery</AdvancedQuery>';
            gridDataStructure = gridDataStructure + '<FilterAssociation>@FilterAssociation</FilterAssociation>';
            gridDataStructure = gridDataStructure + '<Query>@Query</Query>';
            gridDataStructure = gridDataStructure + '<IsFullReport>@IsFullReport</IsFullReport>';
            gridDataStructure = gridDataStructure + '<PivotExcelURL>@PivotExcelURL</PivotExcelURL>';
            gridDataStructure = gridDataStructure + '<Columns>@Columns</Columns>';
            gridDataStructure = gridDataStructure + '<DrillThroughColumns>@DrillThroughColumns</DrillThroughColumns>';
            gridDataStructure = gridDataStructure + '<ExpandColumn>@ExpandColumn</ExpandColumn>';
            // gridDataStructure = gridDataStructure + '<ToolTipColumns>@ToolTipColumns</ToolTipColumns>';

            gridDataStructure = gridDataStructure + '</Grid>';

            //PC: ToolTip Implementation
            var gridColumnStructure = '<Column ID="@ID"  Filter="@Filter" Visible="@Visible" HeaderAlignment="Left" Columnalign="left" Width="@Width" Type="@Type" MeasureCol="@MeasureCol" IsTotal="@IsTotal" Drillthrough="@Drillthrough" ColType="@ColType" Tooltip="@HeaderTooltip" @PercentageFields @CondFormatting>@HeaderTitle</Column>',
             percentageFields = 'Numerator="@PercNumerator" Denominator="@PercDenominator"',
             condFormatFields = 'ConditionalFormatter="@CondFormat" CondFromatingMappingID="@CondMappingId"',
             drillthroughColumnStructure = '<DrillColumn ID="@ID" URL="@URL">@Paramstring</DrillColumn>'
            gridExpandColumnStructure = 'NA',
            gridToolTipColumnStructire = 'NA';

            var gridDisplayStyle
                , gridTitle
                , gridPaging, gridAdvancedQuery = '', gridTilePosition = '', gridFilterAssociation = []

                /* PC: Select Fields Visibility */
                , gridSelectVisibility
                , gridSelectedLayout
                , gridConnectionString
                , gridPortfolio
                , gridConnectionType
                , gridQuery
                , gridIsFullReport
                , gridPivotExcelURL
                , drillthroughString = '';
            gridDisplayStyle = eleGridDisplayState.val();
            gridTilePosition = $("#gridTilePosition").val();
            gridAdvancedQuery = $("#AdvancedGridQuery-G0").val();
            var filterOptionsSelected = $("#multiValueGridFilter-G0 option:selected");
            if (filterOptionsSelected.length > 0) {
                var i = 0;
                filterOptionsSelected.each(function () {
                    gridFilterAssociation[i++] = $(this).val(); //this is one of the selected values
                });
            }
            gridFilterAssociation = gridFilterAssociation.join();
            for (var grid = 0; grid <= totalGridCount; grid++) {
                tempGridDataStructure = '';
                gridTitle = eleGridTitle[grid].val();
                gridPaging = eleGridPaging[grid].val();

                /* PC: Select Fields Visibility */
                gridSelectVisibility = eleGridSelectVisibility[grid][0].checked;
                gridPortfolio = eleGridPortfolio[grid].val();
                gridConnectionString = eleGridConnection[grid].val();

                // Logic to new custom data connection
                if ("NewConnectionRequest" === gridConnectionString) {
                    // Get the new connection string key name
                    var oCustomConnectionKey = "CustomConnectionConfig_Grid" + grid;
                    var sCustomConnectionKey = $('#' + oCustomConnectionKey).val();
                    gridConnectionString = sCustomConnectionKey;
                    // Adding new key in global array. This will prevent user from creating new connection with same key
                    if (-1 === $.inArray(sCustomConnectionKey, arrAllConnection)) {
                        arrAllConnection.push(sCustomConnectionKey);
                    }
                }
                // End of custom connection

                // user context drop down values
                if (eleGridRunWithElivatedDD[grid].val() !== null) {
                    RunWithElevateAccount = eleGridRunWithElivatedDD[grid].val(); // Function for validating the list form
                }
                RunWithElevatedCheckboxStatus = eleGridRunWithElivateCheckbox[grid].is(':checked');




                //Check for the type connection e.g. {Cube , Database} based on the connection string selected
                if (gridConnectionString.toLowerCase().indexOf("cube") >= 0) {
                    gridConnectionType = "Cube";
                }
                else {
                    gridConnectionType = "Database";
                }
                gridSelectedLayout = "8by2";
                gridQuery = eleGridQuery[grid].val();
                // Getting IsFullReport flag and PivotExcelURL from config popup
                gridIsFullReport = eleGridPivotExcelChk[grid].is(":checked");
                gridPivotExcelURL = eleGridPivotExcelURL[grid].val();

                //PC: ToolTip Implementation, Added columnHeaderTooltip
                var columnID
                    , columnFilter
                    , columnVisible
                    , columnWidth
                    , columnType
                    , columnMeasure
                    , columnIsTotal
                    , columnIsDrillthrough
                    , columnColType
                    , columnHeaderTitle
                    , columnsData = ''
                    , columnHeaderTooltip;

                for (var col = 0; col <= totalGridColumns[grid]; col++) {
                    columnID = "G" + (grid + 1) + "C" + (col + 1);
                    columnFilter = eleGridFilterChk[grid][col].is(':checked');
                    columnVisible = eleGridVisibleChk[grid][col].is(':checked');
                    columnWidth = eleGridWidth[grid][col].val() + "px";
                    columnType = eleGridColType[grid][col].val();
                    columnMeasure = eleGridMappingID[grid][col].val();
                    columnIsTotal = eleGridTotalChk[grid][col].is(':checked');
                    columnIsDrillthrough = eleGridHyperlinkChk[grid][col].is(':checked');
                    columnColType = eleGridFormat[grid][col].val();
                    columnHeaderTitle = eleGridHeaderTitle[grid][col].val();
                    //PC: ToolTip Implementation, Reading the Value
                    columnHeaderTooltip = eleGridHeaderTooltip[grid][col].val();

                    tempGridColumnStructure = gridColumnStructure;
                    tempGridColumnStructure = tempGridColumnStructure.replace("@ID", columnID);
                    tempGridColumnStructure = tempGridColumnStructure.replace("@Filter", columnFilter);
                    tempGridColumnStructure = tempGridColumnStructure.replace("@Visible", columnVisible);
                    tempGridColumnStructure = tempGridColumnStructure.replace("@Width", columnWidth);
                    tempGridColumnStructure = tempGridColumnStructure.replace("@Type", columnColType);
                    tempGridColumnStructure = tempGridColumnStructure.replace("@MeasureCol", columnMeasure);
                    tempGridColumnStructure = tempGridColumnStructure.replace("@IsTotal", columnIsTotal);
                    tempGridColumnStructure = tempGridColumnStructure.replace("@Drillthrough", columnIsDrillthrough);
                    tempGridColumnStructure = tempGridColumnStructure.replace("@ColType", columnType);
                    tempGridColumnStructure = tempGridColumnStructure.replace("@HeaderTitle", columnHeaderTitle);


                    //PC: ToolTip Implementation, Inserting the value in XML chunk
                    tempGridColumnStructure = tempGridColumnStructure.replace("@HeaderTooltip", columnHeaderTooltip);


                    if (columnIsTotal && columnColType === percentageString) {
                        var tempString = percentageFields;
                        tempString = tempString.replace("@PercNumerator", eleGridPercNum[grid][col].val().trim());
                        tempString = tempString.replace("@PercDenominator", eleGridPercDen[grid][col].val().trim());
                        tempGridColumnStructure = tempGridColumnStructure.replace("@PercentageFields", tempString);
                    }
                    else {
                        tempGridColumnStructure = tempGridColumnStructure.replace("@PercentageFields", "");
                    }
                    if (eleGridCondFormattingType[grid][col].val() != "none") {
                        var tempString = condFormatFields;
                        tempString = tempString.replace("@CondFormat", eleGridCondFormattingType[grid][col].val().trim());
                        tempString = tempString.replace("@CondMappingId", eleGridCondFormattingMapping[grid][col].val().trim());
                        tempGridColumnStructure = tempGridColumnStructure.replace("@CondFormatting", tempString);
                    }
                    else {
                        tempGridColumnStructure = tempGridColumnStructure.replace("@CondFormatting", "");
                    }
                    if (columnIsDrillthrough) {
                        drillthroughString += drillthroughColumnStructure.replace('@ID', columnID).replace('@URL', eleGridDrillUrl[grid][col].val().trim()).replace('@Paramstring', eleGridUrlMapping[grid][col].val().trim());
                    }
                    columnsData = columnsData + tempGridColumnStructure;
                }

                tempGridDataStructure = gridDataStructure;

                gridQuery = gridQuery.split('<').join('lt;');
                gridQuery = gridQuery.split('>').join('gt;');

                tempGridDataStructure = tempGridDataStructure.replace("@Title", gridTitle);
                tempGridDataStructure = tempGridDataStructure.replace("@Paging", gridPaging);

                var updatedquery = "", sAdvancedQuerySelection = $("#AdvancedGridQuery-G" + grid.toString()).val();
                /* Issue in RT
                if (gridQuery.indexOf("WHERE") !== -1 && sAdvancedQuerySelection === "OFF") {
                    gridQuery = gridQuery.slice(0, gridQuery.indexOf("WHERE")).trim();
                }
                */
                if (filterQueryReplace.length > 0) {
                    updatedquery = GetFilterAssociatedQuery(gridQuery, gridConnectionType, filterQueryReplace);
                }
                else {
                    updatedquery = gridQuery;
                }
                /* PC: Select Fields Visibility */
                tempGridDataStructure = tempGridDataStructure.replace("@SelectVisibility", gridSelectVisibility);
                tempGridDataStructure = tempGridDataStructure.replace("@SelectedLayout", gridSelectedLayout);
                tempGridDataStructure = tempGridDataStructure.replace("@TilePosition", gridTilePosition);
                tempGridDataStructure = tempGridDataStructure.replace("@RunWithElevateAccount", RunWithElevateAccount);
                tempGridDataStructure = tempGridDataStructure.replace("@RunWithElevatedCheckboxStatus", RunWithElevatedCheckboxStatus);
                tempGridDataStructure = tempGridDataStructure.replace("@ConnectionType", gridConnectionType);
                tempGridDataStructure = tempGridDataStructure.replace("@Portfolio", gridPortfolio);
                tempGridDataStructure = tempGridDataStructure.replace("@ConnectionString", gridConnectionString);
                tempGridDataStructure = tempGridDataStructure.replace("@Query", updatedquery);
                tempGridDataStructure = tempGridDataStructure.replace("@AdvancedQuery", gridAdvancedQuery);
                tempGridDataStructure = tempGridDataStructure.replace("@FilterAssociation", gridFilterAssociation);
                tempGridDataStructure = tempGridDataStructure.replace("@IsFullReport", gridIsFullReport);
                tempGridDataStructure = tempGridDataStructure.replace("@PivotExcelURL", gridPivotExcelURL);
                tempGridDataStructure = tempGridDataStructure.replace("@Columns", columnsData);
                tempGridDataStructure = tempGridDataStructure.replace("@DrillThroughColumns", (drillthroughString === '') ? 'NA' : drillthroughString);
                tempGridDataStructure = tempGridDataStructure.replace("@ExpandColumn", gridExpandColumnStructure);
                //  tempGridDataStructure = tempGridDataStructure.replace("@ToolTipColumns", gridToolTipColumnStructire);
                gridConfigurationXML = gridConfigurationXML + tempGridDataStructure;
            }

            // Grid Implementation
            var sTabName = $("#GridContainer_" + curGrid["WebPartId"] + " .grid_btn_hide input[id=Tab_Name]").val();
            var sTabId = $("#GridContainer_" + curGrid["WebPartId"] + " .grid_btn_hide input[id=Tab_Id]").val();
            var sTabGroupId = $("#GridContainer_" + curGrid["WebPartId"] + " .grid_btn_hide input[id=Group_Id]").val();
            gridConfigurationXML = '<Grids TabName="' + sTabName + '" TabId="' + sTabId + '" GroupId="' + sTabGroupId + '"><Tabs>@Tabs</Tabs>' + gridConfigurationXML + '</Grids>';

            gridConfigurationXML = gridConfigurationXML.replace("@Tabs", gridDisplayStyle);

            gridConfigurationXML = gridConfigurationXML.split('&').join('&amp;');


            var finalGridConfigurationXML = escape(gridConfigurationXML);
            targetID = curGrid.WebPartId;
            /* Create a tile object in the section */
            tileObject = {}, sectionObject = {};
            tileObject.LayoutSize = gridSelectedLayout;
            tileObject.SectionHandle = reportingTemplateSectionID;
            tileObject.TileFlowOrder = gridTilePosition;
            tileObject.fTileLiveStatus = true;
            tileObject.TileHandle = targetID;
            tileObject.TileType = "Grid";
            tileObject.AdvancedQuery = gridAdvancedQuery;
            tileObject.FilterAssociation = gridFilterAssociation.split(',');
            tileObject.RunWithElevateAccount = RunWithElevateAccount;
            tileObject.XMLConfiguration = finalGridConfigurationXML;
            if (!bNewTile) {
                for (var iCounter = 0; iCounter < oTiles.length; iCounter++) {
                    if (oTiles[iCounter].TileHandle === targetID) {
                        oTiles.splice(iCounter, 1);
                        break;
                    }
                }
            }
            oTiles.push(tileObject);
            var sectionObject = {};
            for (var sectionIndex = 0; sectionIndex < oSections.length; sectionIndex++) {
                if (oSections[sectionIndex].SectionHandle === tileObject.SectionHandle) {
                    sectionObject = oSections[sectionIndex];
                    break;
                }
            }
            sectionObject["addTilePosition"] = updateTileOrderForSection(sectionObject.SectionHandle, oTiles);
            tileObject.addTile = sectionObject["addTilePosition"];
            if (isEditTile) {

                for (var tileIndex = 0; tileIndex < oTiles.length; tileIndex++) {
                    if (oTiles[tileIndex].SectionHandle === tileObject.SectionHandle && oTiles[tileIndex].fTileLiveStatus === true) {
                        $("#dimensionDiv_" + oTiles[tileIndex].TileHandle).empty();
                        createTile(oTiles[tileIndex]);
                    }
                }
            }
            else {
                createTile(tileObject);
            }

        }
    }
}
function getGridConfigurationData(curGrid) {
    var finalGridConfigurationXML = '';
    var filterslist = getSelectedFiltersIDS("Grid");
    var filterQueryReplace = [];
    var filtercount = 0;
    filterQueryReplace = getreplacequeryobject(filterslist);
    var isTileInSection = false;
    for (var sectionIndex = 0; sectionIndex < oSections.length; sectionIndex++) {
        if (oSections[sectionIndex].SectionHandle === reportingTemplateSectionID) {
            presentTileID = Number(oSections[sectionIndex].LastTileIndex) + 1;
            oSections[sectionIndex].LastTileIndex = presentTileID;
            isTileInSection = true;
            break;
        }
    }
    if (!isTileInSection) {
        if (presentTileID === null || typeof (presentTileID) === "undefined") {
            presentTileID = 0;
        } else {
            presentTileID = presentTileID + 1;
        }
    }
    var bNewTile;
    if ($("#Save_Btn").attr("targetId") !== "") {
        targetID = $("#Save_Btn").attr("targetId");
        bNewTile = false;
        $("#Delete_Btn").show();
        $("#TileDelete_Btn").show();
        isEditTile = true;
    } else {
        //var splitURL = window.location.pathname.split("/");
        //reportName = splitURL[splitURL.length - 1].split(".")[0];
        //var i;
        //siteName = '';
        //for (i = 2; i < (splitURL.length - 3) ; i++) {
        //    siteName += splitURL[i];
        //    siteName += '/'
        //}
        //siteName += splitURL[i];
        var numberOfTilesInSection = $("#" + reportingTemplateSectionID + " .tile").length + $("#" + reportingTemplateSectionID + " .GridContainer").length;
        // var presentTileID = numberOfTilesInSection++, tileObject = {};
        targetID = reportName + "_" + reportingTemplateSectionID + "_" + "tile" + presentTileID;
        bNewTile = true;
        $("#Delete_Btn").hide();
        $("#TileDelete_Btn").hide();
        isEditTile = false;
    }
    validateGridConfigForm();
    if (isFormValid) {
        gridConfigurationXML = '';
        // XML configuration structure of data grid
        var gridDataStructure = '<Grid>';
        gridDataStructure = gridDataStructure + '<Title>@Title</Title>';
        gridDataStructure = gridDataStructure + '<Paging>@Paging</Paging>';
        gridDataStructure = gridDataStructure + '<TilePosition>@TilePosition</TilePosition>';
        /* PC: Select Fields Visibility */
        gridDataStructure = gridDataStructure + '<SelectVisibility>@SelectVisibility</SelectVisibility>';
        gridDataStructure = gridDataStructure + '<SelectedLayout>@SelectedLayout</SelectedLayout>';
        gridDataStructure = gridDataStructure + '<RunWithElevateAccount>@RunWithElevateAccount</RunWithElevateAccount>';
        gridDataStructure = gridDataStructure + '<RunWithElevatedCheckboxStatus>@RunWithElevatedCheckboxStatus</RunWithElevatedCheckboxStatus>';
        gridDataStructure = gridDataStructure + '<ConnectionType>@ConnectionType</ConnectionType>';
        gridDataStructure = gridDataStructure + '<Portfolio>@Portfolio</Portfolio>';
        gridDataStructure = gridDataStructure + '<ConnectionString>@ConnectionString</ConnectionString>';
        gridDataStructure = gridDataStructure + '<Query>@Query</Query>';
        gridDataStructure = gridDataStructure + '<IsFullReport>@IsFullReport</IsFullReport>';
        gridDataStructure = gridDataStructure + '<PivotExcelURL>@PivotExcelURL</PivotExcelURL>';
        gridDataStructure = gridDataStructure + '<Columns>@Columns</Columns>';
        gridDataStructure = gridDataStructure + '<DrillThroughColumns>@DrillThroughColumns</DrillThroughColumns>';
        gridDataStructure = gridDataStructure + '<ExpandColumn>@ExpandColumn</ExpandColumn>';
        // gridDataStructure = gridDataStructure + '<ToolTipColumns>@ToolTipColumns</ToolTipColumns>';
        gridDataStructure = gridDataStructure + '</Grid>';
        //PC: ToolTip Implementation
        var gridColumnStructure = '<Column ID="@ID"  Filter="@Filter" Visible="@Visible" HeaderAlignment="Left" Columnalign="left" Width="@Width" Type="@Type" MeasureCol="@MeasureCol" IsTotal="@IsTotal" Drillthrough="@Drillthrough" ColType="@ColType" Tooltip="@HeaderTooltip" @PercentageFields @CondFormatting>@HeaderTitle</Column>',
         percentageFields = 'Numerator="@PercNumerator" Denominator="@PercDenominator"',
         condFormatFields = 'ConditionalFormatter="@CondFormat" CondFromatingMappingID="@CondMappingId"',
         drillthroughColumnStructure = '<DrillColumn ID="@ID" URL="@URL">@Paramstring</DrillColumn>'
        gridExpandColumnStructure = 'NA',
        gridToolTipColumnStructire = 'NA';
        var gridDisplayStyle
            , gridTitle
            , gridPaging
            /* PC: Select Fields Visibility */
            , gridSelectVisibility
            , gridSelectedLayout
            , gridConnectionString
            , gridPortfolio
            , gridConnectionType
            , gridQuery
            , gridIsFullReport
            , gridPivotExcelURL
            , drillthroughString = '';
        gridDisplayStyle = eleGridDisplayState.val();
        for (var grid = 0; grid <= totalGridCount; grid++) {
            tempGridDataStructure = '';
            gridTitle = eleGridTitle[grid].val();
            gridPaging = eleGridPaging[grid].val();
            /* PC: Select Fields Visibility */
            gridSelectVisibility = eleGridSelectVisibility[grid][0].checked;
            gridPortfolio = eleGridPortfolio[grid].val();
            gridConnectionString = eleGridConnection[grid].val();
            // user context drop down values
            if (eleGridRunWithElivatedDD[grid].val() !== null) {
                RunWithElevateAccount = eleGridRunWithElivatedDD[grid].val(); // Function for validating the list form
            }
            RunWithElevatedCheckboxStatus = eleGridRunWithElivateCheckbox[grid].is(':checked');
            //Check for the type connection e.g. {Cube , Database} based on the connection string selected
            if (gridConnectionString.toLowerCase().indexOf("cube") >= 0) {
                gridConnectionType = "Cube";
            }
            else {
                gridConnectionType = "Database";
            }
            gridSelectedLayout = "8by2";
            gridQuery = eleGridQuery[grid].val();
            // Getting IsFullReport flag and PivotExcelURL from config popup
            gridIsFullReport = eleGridPivotExcelChk[grid].is(":checked");
            gridPivotExcelURL = eleGridPivotExcelURL[grid].val();
            //PC: ToolTip Implementation, Added columnHeaderTooltip
            var columnID
                , columnFilter
                , columnVisible
                , columnWidth
                , columnType
                , columnMeasure
                , columnIsTotal
                , columnIsDrillthrough
                , columnColType
                , columnHeaderTitle
                , columnsData = ''
                , columnHeaderTooltip;
            for (var col = 0; col <= totalGridColumns[grid]; col++) {
                columnID = "G" + (grid + 1) + "C" + (col + 1);
                columnFilter = eleGridFilterChk[grid][col].is(':checked');
                columnVisible = eleGridVisibleChk[grid][col].is(':checked');
                columnWidth = eleGridWidth[grid][col].val() + "px";
                columnType = eleGridColType[grid][col].val();
                columnMeasure = eleGridMappingID[grid][col].val();
                columnIsTotal = eleGridTotalChk[grid][col].is(':checked');
                columnIsDrillthrough = eleGridHyperlinkChk[grid][col].is(':checked');
                columnColType = eleGridFormat[grid][col].val();
                columnHeaderTitle = eleGridHeaderTitle[grid][col].val();
                //PC: ToolTip Implementation, Reading the Value
                columnHeaderTooltip = eleGridHeaderTooltip[grid][col].val();
                tempGridColumnStructure = gridColumnStructure;
                tempGridColumnStructure = tempGridColumnStructure.replace("@ID", columnID);
                tempGridColumnStructure = tempGridColumnStructure.replace("@Filter", columnFilter);
                tempGridColumnStructure = tempGridColumnStructure.replace("@Visible", columnVisible);
                tempGridColumnStructure = tempGridColumnStructure.replace("@Width", columnWidth);
                tempGridColumnStructure = tempGridColumnStructure.replace("@Type", columnColType);
                tempGridColumnStructure = tempGridColumnStructure.replace("@MeasureCol", columnMeasure);
                tempGridColumnStructure = tempGridColumnStructure.replace("@IsTotal", columnIsTotal);
                tempGridColumnStructure = tempGridColumnStructure.replace("@Drillthrough", columnIsDrillthrough);
                tempGridColumnStructure = tempGridColumnStructure.replace("@ColType", columnType);
                tempGridColumnStructure = tempGridColumnStructure.replace("@HeaderTitle", columnHeaderTitle);
                //PC: ToolTip Implementation, Inserting the value in XML chunk
                tempGridColumnStructure = tempGridColumnStructure.replace("@HeaderTooltip", columnHeaderTooltip);
                if (columnIsTotal && columnColType === percentageString) {
                    var tempString = percentageFields;
                    tempString = tempString.replace("@PercNumerator", eleGridPercNum[grid][col].val().trim());
                    tempString = tempString.replace("@PercDenominator", eleGridPercDen[grid][col].val().trim());
                    tempGridColumnStructure = tempGridColumnStructure.replace("@PercentageFields", tempString);
                }
                else {
                    tempGridColumnStructure = tempGridColumnStructure.replace("@PercentageFields", "");
                }
                if (eleGridCondFormattingType[grid][col].val() != "none") {
                    var tempString = condFormatFields;
                    tempString = tempString.replace("@CondFormat", eleGridCondFormattingType[grid][col].val().trim());
                    tempString = tempString.replace("@CondMappingId", eleGridCondFormattingMapping[grid][col].val().trim());
                    tempGridColumnStructure = tempGridColumnStructure.replace("@CondFormatting", tempString);
                }
                else {
                    tempGridColumnStructure = tempGridColumnStructure.replace("@CondFormatting", "");
                }
                if (columnIsDrillthrough) {
                    drillthroughString += drillthroughColumnStructure.replace('@ID', columnID).replace('@URL', eleGridDrillUrl[grid][col].val().trim()).replace('@Paramstring', eleGridUrlMapping[grid][col].val().trim());
                }
                columnsData = columnsData + tempGridColumnStructure;
            }
            tempGridDataStructure = gridDataStructure;
            gridQuery = gridQuery.split('<').join('lt;');
            gridQuery = gridQuery.split('>').join('gt;');
            tempGridDataStructure = tempGridDataStructure.replace("@Title", gridTitle);
            tempGridDataStructure = tempGridDataStructure.replace("@Paging", gridPaging);
            var updatedquery = "";
            if (filterQueryReplace.length > 0) {
                if (gridQuery.indexOf("WHERE") !== -1) {
                    gridQuery = gridQuery.slice(0, gridQuery.indexOf("WHERE")).trim();
                }
                updatedquery = GetFilterAssociatedQuery(gridQuery, gridConnectionType, filterQueryReplace);
            }
            else {
                updatedquery = gridQuery;
            }
            /* PC: Select Fields Visibility */
            tempGridDataStructure = tempGridDataStructure.replace("@SelectVisibility", gridSelectVisibility);
            tempGridDataStructure = tempGridDataStructure.replace("@SelectedLayout", gridSelectedLayout);
            tempGridDataStructure = tempGridDataStructure.replace("@RunWithElevateAccount", RunWithElevateAccount);
            tempGridDataStructure = tempGridDataStructure.replace("@RunWithElevatedCheckboxStatus", RunWithElevatedCheckboxStatus);
            tempGridDataStructure = tempGridDataStructure.replace("@ConnectionType", gridConnectionType);
            tempGridDataStructure = tempGridDataStructure.replace("@Portfolio", gridPortfolio);
            tempGridDataStructure = tempGridDataStructure.replace("@ConnectionString", gridConnectionString);
            tempGridDataStructure = tempGridDataStructure.replace("@Query", updatedquery);
            tempGridDataStructure = tempGridDataStructure.replace("@IsFullReport", gridIsFullReport);
            tempGridDataStructure = tempGridDataStructure.replace("@PivotExcelURL", gridPivotExcelURL);
            tempGridDataStructure = tempGridDataStructure.replace("@Columns", columnsData);
            tempGridDataStructure = tempGridDataStructure.replace("@DrillThroughColumns", (drillthroughString === '') ? 'NA' : drillthroughString);
            tempGridDataStructure = tempGridDataStructure.replace("@ExpandColumn", gridExpandColumnStructure);
            //  tempGridDataStructure = tempGridDataStructure.replace("@ToolTipColumns", gridToolTipColumnStructire);
            gridConfigurationXML = gridConfigurationXML + tempGridDataStructure;
        }
        // Grid Implementation
        var sTabName = $("#GridContainer_" + curGrid["WebPartId"] + " .grid_btn_hide input[id=Tab_Name]").val();
        var sTabId = $("#GridContainer_" + curGrid["WebPartId"] + " .grid_btn_hide input[id=Tab_Id]").val();
        var sTabGroupId = $("#GridContainer_" + curGrid["WebPartId"] + " .grid_btn_hide input[id=Group_Id]").val();
        gridConfigurationXML = '<Grids TabName="' + sTabName + '" TabId="' + sTabId + '" GroupId="' + sTabGroupId + '"><Tabs>@Tabs</Tabs>' + gridConfigurationXML + '</Grids>';
        gridConfigurationXML = gridConfigurationXML.replace("@Tabs", gridDisplayStyle);
        gridConfigurationXML = gridConfigurationXML.split('&').join('&amp;');
        finalGridConfigurationXML = gridConfigurationXML;//escape(gridConfigurationXML);
    }
    return finalGridConfigurationXML;
}
function loadChartFunnelElementIDArray(totalChartFunnelCount) {
    for (var grid = 0; grid <= totalChartFunnelCount; grid++) {// Iterate the grids from 0 to totalGridCount

        // Declare the column elements to a two dimensional arrays with corresponding Id's
        eleChartFunnelPortfolio[grid] = $('#ChartFunnelPortfolio-C' + grid)
        eleChartFunnelConnection[grid] = $('#ChartFunnelConnection-C' + grid)
        eleChartFunnelTitle[grid] = $('#ChartFunnelTitle-C' + grid);
        eleChartFunnelDDL[grid] = $('#ChartFunnelDDL-C' + grid);
        eleChartFunnelQuery[grid] = $('#ChartFunnelQuery-C' + grid);
        eleChartFunnelAdvancedQuery[grid] = $("#AdvancedFunnelChartQuery-C" + grid);
        eleChartFunnelColorPicker[grid] = $('#ChartFunnelColorPicker-C' + grid);
        eleChartFunnelLegends[grid] = $('#ChartFunnelLegends-C' + grid);
        eleChartFunnelLegendsVisibility[grid] = $('#ChartFunnelLegendsVisibility-C' + grid);
        eleChartFunnelSeriesColor[grid] = $('#ChartFunnelSeriesColor-C' + grid);
        eleChartFunnelSeriesPattern[grid] = $('#ChartFunnelSeriesPattern-C' + grid);
        eleChartFunnelRowLabels[grid] = $('#ChartFunnelRowLabels-C' + grid)
        eleChartFunnelDrillDownURL[grid] = $('#ChartFunnelDrillDownURL-C' + grid)
        eleChartFunnelStartingYPos[grid] = $('#ChartFunnelStartingYPos-C' + grid)
        eleChartFunnelDirection[grid] = $('#ChartFunnelDirection-C' + grid)
        eleChartFunnelConnector[grid] = $('#ChartFunnelConnector-C' + grid)
        eleChartFunnelDrillDownType[grid] = $('#ChartFunnelDrillDownType-C' + grid)
    }
}



function updateChartFunnelElementIDArray() {
    for (var grid = 0; grid <= totalChartFunnelCount; grid++) {// Iterate the grids from 0 to totalGridCount

        // Declare the column elements to a two dimensional arrays with corresponding Id's
        eleChartFunnelPortfolio[grid] = $('#ChartFunnelPortfolio-C' + grid)
        eleChartFunnelConnection[grid] = $('#ChartFunnelConnection-C' + grid)
        eleChartFunnelTitle[grid] = $('#ChartFunnelTitle-C' + grid);
        eleChartFunnelDDL[grid] = $('#ChartFunnelDDL-C' + grid);
        eleChartFunnelQuery[grid] = $('#ChartFunnelQuery-C' + grid);
        eleChartFunnelAdvancedQuery[grid] = $("#AdvancedFunnelChartQuery-C" + grid);
        eleChartFunnelColorPicker[grid] = $('#ChartFunnelColorPicker-C' + grid);
        eleChartFunnelLegends[grid] = $('#ChartFunnelLegends-C' + grid);
        eleChartFunnelLegendsVisibility[grid] = $('#ChartFunnelLegendsVisibility-C' + grid);
        eleChartFunnelSeriesColor[grid] = $('#ChartFunnelSeriesColor-C' + grid);
        eleChartFunnelSeriesPattern[grid] = $('#ChartFunnelSeriesPattern-C' + grid);
        eleChartFunnelRowLabels[grid] = $('#ChartFunnelRowLabels-C' + grid)
        eleChartFunnelDrillDownURL[grid] = $('#ChartFunnelDrillDownURL-C' + grid)
        eleChartFunnelStartingYPos[grid] = $('#ChartFunnelStartingYPos-C' + grid)
        eleChartFunnelDirection[grid] = $('#ChartFunnelDirection-C' + grid)
        eleChartFunnelConnector[grid] = $('#ChartFunnelConnector-C' + grid)
        eleChartFunnelDrillDownType[grid] = $('#ChartFunnelDrillDownType-C' + grid)
    }
}
function SetGridConfigElements(gridCommonConfig, gridColumnConfig, tabs, TilePosition, gridTitle) {
    var gridCommonLength = gridCommonConfig.length, gridColumnLength = gridColumnConfig.length;

    eleGridTilePosition.val(TilePosition);
    if ((gridCommonLength > 0 && gridColumnLength > 0) && (gridCommonLength == gridColumnLength)) {
        eleGridCount_DD.val(gridCommonLength);
        eleGridDisplayState.val(tabs.toString());

        if (gridCommonLength > 0) {
            gridCount_DD_Changed(eleGridCount_DD);
        }
        for (var gridCount = 0; gridCount < gridCommonLength; gridCount++) {
            totalGridColumns[gridCount] = defaultColumnsDisplayed;
            currentGridDisplayed = gridCount;
            var totCols = gridColumnConfig[gridCount].length - 1;
            var currentCols = totalGridColumns[gridCount];

            if (totCols > currentCols) {
                for (var col = currentCols + 1 ; col <= totCols ; col++) {
                    $('#AddGridColumn' + gridCount).click();
                }
            }
            else if (totCols < currentCols) {
                for (var col = currentCols - 1 ; col >= totCols ; col--) {
                    $('#RemoveGridColumn' + gridCount).click();
                }
            }

        }
        currentGridDisplayed = 0;

        for (var gridId = 0; gridId <= totalGridCount; gridId++) {

            eleGridTitle[gridId].val(gridTitle[gridId]);
            bindPortfoliosDropdown(eleGridPortfolio[gridId], connectionStringValues);
            eleGridPortfolio[gridId].val(gridCommonConfig[gridId].Portfolio);
            bindConnectionStringsDropdown(eleGridConnection[gridId], connectionStringValues, gridCommonConfig[gridId].Portfolio);
            eleGridConnection[gridId].val(gridCommonConfig[gridId].Connection);
            eleGridPaging[gridId].val((gridCommonConfig[gridId].Paging).toString());


            if (gridCommonConfig[gridId].RunWithElevatedCheckboxStatus == "true") {
                eleGridRunWithElivateCheckbox[gridId].prop("checked", true);
            }
            else {
                eleGridRunWithElivateCheckbox[gridId].prop("checked", false);
            }

            openRunWithElevatedPopup(eleGridRunWithElivateCheckbox[gridId], 4, 1)

            if (gridCommonConfig[gridId].RunWithElevateAccount !== null && gridCommonConfig[gridId].RunWithElevateAccount !== "") {
                eleGridRunWithElivatedDD[gridId].val(gridCommonConfig[gridId].RunWithElevateAccount.replace("\\\\", "\\"));

            } else {
                eleGridRunWithElivatedDD[gridId].val(0);
            }



            /* PC: Select Fields Visibility */
            eleGridSelectVisibility[gridId][0].checked = ((gridCommonConfig[gridId].SelectVisibility).toString().toLowerCase() === 'true') ? true : false;

            var TempQuery = gridCommonConfig[gridId].Query;
            TempQuery = TempQuery.split('lt;').join('<');
            TempQuery = TempQuery.split('gt;').join('>');
            eleGridQuery[gridId].val(TempQuery);
            // If IsFullReport flag is true, enable PivotExcelURL textbox and set its value
            eleGridPivotExcelChk[gridId].attr("checked", gridCommonConfig[gridId].IsFullReport);
            if (gridCommonConfig[gridId].IsFullReport) {
                enableDisableElements(eleGridPivotExcelURL[gridId], true);
                eleGridPivotExcelURL[gridId].val(gridCommonConfig[gridId].PivotExcelURL);
            }

            for (var colId = 0; colId < gridColumnConfig[gridId].length ; colId++) {
                eleGridHeaderTitle[gridId][colId].val(gridColumnConfig[gridId][colId].ColumnName);

                //PC: ToolTip Implementation, Populating the textbox with value from XML
                eleGridHeaderTooltip[gridId][colId].val(gridColumnConfig[gridId][colId].HeaderTooltip);

                var tempColType = gridColumnConfig[gridId][colId].ColType;
                if (tempColType.indexOf('chart') >= 0) {
                    eleGridMappingID[gridId][colId].val(gridColumnConfig[gridId][colId].KeyIndexRange);
                } else {
                    eleGridMappingID[gridId][colId].val(gridColumnConfig[gridId][colId].KeyIndex);
                }
                eleGridColType[gridId][colId].val(gridColumnConfig[gridId][colId].ColType);
                eleGridFormat[gridId][colId].val(gridColumnConfig[gridId][colId].Type);
                eleGridWidth[gridId][colId].val((gridColumnConfig[gridId][colId].MinWidth).replace('px', ''));
                eleGridTotalChk[gridId][colId].attr("checked", gridColumnConfig[gridId][colId].IsGrandTotalColumn);
                eleGridFilterChk[gridId][colId].attr("checked", gridColumnConfig[gridId][colId].IsFilterNeeded);
                //eleGridHyperlinkChk[gridId][colId].attr("checked", gridColumnConfig[gridId][colId].IsDrillDownThrough);
                eleGridVisibleChk[gridId][colId].attr("checked", !gridColumnConfig[gridId][colId].IsHideColumn);
                eleGridHyperlinkChk[gridId][colId].attr("checked", gridColumnConfig[gridId][colId].IsDrillDownThrough);
                if (gridColumnConfig[gridId][colId].IsDrillDownThrough) {
                    enableDisableElements(eleGridDrillUrl[gridId][colId], true);
                    enableDisableElements(eleGridUrlMapping[gridId][colId], true);
                    eleGridDrillUrl[gridId][colId].val(gridColumnConfig[gridId][colId].DrillUrl);
                    eleGridUrlMapping[gridId][colId].val(U.JoinKeyValuePairs(gridColumnConfig[gridId][colId].drillParams, '=', '&'));
                }
                if ((gridColumnConfig[gridId][colId]).hasOwnProperty("ConditionalFromatterType")) {
                    eleGridCondFormattingType[gridId][colId].val(gridColumnConfig[gridId][colId].ConditionalFromatterType);
                    eleGridCondFormattingMapping[gridId][colId].val(gridColumnConfig[gridId][colId].CondFromatingMappingID);
                    enableDisableElements(eleGridCondFormattingMapping[gridId][colId], true);
                }
                if (gridColumnConfig[gridId][colId].IsGrandTotalColumn && gridColumnConfig[gridId][colId].Type === percentageString) {
                    enableDisableElements(eleGridPercNum[gridId][colId], true);
                    enableDisableElements(eleGridPercDen[gridId][colId], true);
                    eleGridPercNum[gridId][colId].val(gridColumnConfig[gridId][colId].Numerator);
                    eleGridPercDen[gridId][colId].val(gridColumnConfig[gridId][colId].Denominator);
                }
            }

        }

        gridReportID = gridCommonConfig[0].ReportID;
        gridWebPartID = gridCommonConfig[0].WebPartID;
    }
}

function updateGridConfiguration(response) {

    $('#mask , .GridConfig-popup').fadeOut(300, function () {
        $('#mask').remove();
    });
}

function gridHyperlinkChk_clicked(objId) {
    var idName = objId.id;
    idName = idName.split("-");
    var idNumArray = idName[1].replace("G", '').split("C");
    var grid = parseInt(idNumArray[0]);
    var col = parseInt(idNumArray[1]);
    eleGridDrillUrl[grid][col]
    eleGridUrlMapping[grid][col].show();

    if ($(objId).is(':checked')) {
        enableDisableElements(eleGridDrillUrl[grid][col], true);
        enableDisableElements(eleGridUrlMapping[grid][col], true);
    }
    else {
        enableDisableElements(eleGridDrillUrl[grid][col], false);
        enableDisableElements(eleGridUrlMapping[grid][col], false);
    }
}

// If IsFullReport flag is true, enable PivotExcelURL textbox else disable
function gridPivotExcelChk_clicked(objId) {
    var idName = objId.id;
    idName = idName.split("-");
    var grid = idName[1].replace("G", '');
    eleGridPivotExcelURL[grid].show();

    if ($(objId).is(':checked')) {
        enableDisableElements(eleGridPivotExcelURL[grid], true);
    }
    else {
        enableDisableElements(eleGridPivotExcelURL[grid], false);
    }
}

function updateElementIDArray() {
    for (var grid = 0; grid <= totalGridCount; grid++) {// Iterate the grids from 0 to totalGridCount

        // Declare the column elements to a two dimensional arrays with corresponding Id's
        eleGridHeaderTitle[grid] = [];

        //PC: ToolTip Implementation
        eleGridHeaderTooltip[grid] = [];
        eleGridPivotExcelChk[grid] = [];
        eleGridPivotExcelURL[grid] = [];
        eleGridMappingID[grid] = [];
        eleGridFormat[grid] = [];
        eleGridWidth[grid] = [];
        eleGridTotalChk[grid] = [];
        eleGridFilterChk[grid] = [];
        eleGridVisibleChk[grid] = [];
        eleGridColType[grid] = [];
        eleGridPercNum[grid] = [];
        eleGridPercDen[grid] = [];
        eleGridHyperlinkChk[grid] = [];
        eleGridDrillUrl[grid] = [];
        eleGridUrlMapping[grid] = [];
        eleGridCondFormattingType[grid] = [];
        eleGridCondFormattingMapping[grid] = [];

        // Initialize the common grid elements of selected grid
        eleGridTitle[grid] = $('#GridTitle-G' + grid);
        eleGridPortfolio[grid] = $('#GridPortfolio_DD' + grid);
        eleGridConnection[grid] = $('#GridConnectionStringType_DD' + grid);
        eleGridQuery[grid] = $('#GridQuery-G' + grid);
        eleGridPaging[grid] = $('#GridPaging-G' + grid);
        eleMultiValueGridFilter[grid] = $('#multiValueGridFilter-G' + grid);

        // user context dropdown values 
        eleGridRunWithElivateCheckbox[grid] = $("#RunWithElevatedGridCheckbox-G" + grid);
        eleGridRunWithElivatedDD[grid] = $("#RunWithElevatedGrid-G" + grid);


        /* PC: Select Fields Visibility */
        eleGridSelectVisibility[grid] = $('#GridSelectVisibility-G' + grid);

        eleGridPivotExcelChk[grid] = $('#GridPivotExcelChk-G' + grid);
        eleGridPivotExcelURL[grid] = $('#GridPivotExcelURL-G' + grid);

        for (var col = 0; col <= totalGridColumns[grid]; col++) // Iterate the columns from 0 to totalGridColumns for every repective grid
        {
            //Initialize the common column values with corresponding element id's in a two dimensional array
            eleGridHeaderTitle[grid][col] = $('#GridHeaderTitle-G' + grid + 'C' + col);

            //PC: ToolTip Implementation
            eleGridHeaderTooltip[grid][col] = $('#GridHeaderTooltip-G' + grid + 'C' + col);
            eleGridMappingID[grid][col] = $('#GridMappingID-G' + grid + 'C' + col);
            eleGridFormat[grid][col] = $('#GridFormat-G' + grid + 'C' + col);
            eleGridWidth[grid][col] = $('#GridWidth-G' + grid + 'C' + col);
            eleGridTotalChk[grid][col] = $('#GridTotalChk-G' + grid + 'C' + col);
            eleGridFilterChk[grid][col] = $('#GridFilterChk-G' + grid + 'C' + col);
            eleGridVisibleChk[grid][col] = $('#GridVisibleChk-G' + grid + 'C' + col);
            eleGridPercNum[grid][col] = $('#GridPercNum-G' + grid + 'C' + col);
            eleGridPercDen[grid][col] = $('#GridPercDen-G' + grid + 'C' + col);
            eleGridColType[grid][col] = $('#GridColType-G' + grid + 'C' + col);
            eleGridHyperlinkChk[grid][col] = $('#GridHyperlinkChk-G' + grid + 'C' + col);
            eleGridDrillUrl[grid][col] = $('#GridDrillUrl-G' + grid + 'C' + col);
            eleGridUrlMapping[grid][col] = $('#GridUrlMapping-G' + grid + 'C' + col);
            eleGridCondFormattingType[grid][col] = $('#GridCondFormatType-G' + grid + 'C' + col);
            eleGridCondFormattingMapping[grid][col] = $('#GridCondMappingID-G' + grid + 'C' + col);
        }
    }
}

function enableDisablePercFormula(objId) {
    var idName = objId.id;
    idName = idName.split("-");
    var idNumArray = idName[1].replace("G", '').split("C");
    var grid = parseInt(idNumArray[0]);
    var col = parseInt(idNumArray[1]);
    if (eleGridFormat[grid][col].val() === percentageString && eleGridTotalChk[grid][col].is(':checked')) {
        enableDisableElements(eleGridPercDen[grid][col], true);
        enableDisableElements(eleGridPercNum[grid][col], true);
    } else {
        enableDisableElements(eleGridPercDen[grid][col], false);
        enableDisableElements(eleGridPercNum[grid][col], false);
    }
}
function enableDisablecondMapping(objId) {
    var idName = objId.id;
    idName = idName.split("-");
    var idNumArray = idName[1].replace("G", '').split("C");
    var grid = parseInt(idNumArray[0]);
    var col = parseInt(idNumArray[1]);
    if (eleGridCondFormattingType[grid][col].val() === "none") {
        enableDisableElements(eleGridCondFormattingMapping[grid][col], false);
    } else {
        enableDisableElements(eleGridCondFormattingMapping[grid][col], true);
    }
}

function LoadFilterMapper() {
    if (aParamsMap != undefined) {
        aParamsMapTemp = U.Clone(aParamsMap);
    }
    mappingRowCounter = 0;
    var MappingDivData = [
      '<div class="close"><img src="' + webAPIurl + '@LayoutPath/Images/Cancel_Black.png" class="btn_close" title="Close Window" alt="Close" /></div>',
      '<div id="MapperNameDiv">',
      '<div id="MapperName">Query Parameter Mapper</div>',
      '</div>',
      '<hr class="seperator"></hr>',

      '<div id="MappingRow" class="divMappingRow">',
      '<div class="MappingFirstAlign">Query variable</div>',
      '<div class="MappingCellText">Url parameter</div>',
      '<div class="MappingCellText">Default value</div>',
      '</div>',

     '<div id="MappingInputs"></div>',

     '<div id="ButtonsDiv">',
     '<div class="Headers_On" id="AddItem"  title="Add Item"><img src="' + webAPIurl + '@LayoutPath/Images/Add_Black.png"/></div>',
     '<div class="Headers_On" id="RemoveItem" title="Remove Item"><img src="' + webAPIurl + '@LayoutPath/Images/Minus_Black.png"/></div></div>',
     '<hr class="seperator"></hr>',
     '<div id="MapperFooterDiv">',
     '<div class="Headers_On" id="SaveMapping"  title="Save Mapping"><img src="' + webAPIurl + '@LayoutPath/Images/Save_Black.png"/></div>',
     '</div>'];
    $('body').append('<div class="qMapper-popup" id="qMapper"></div>');

    var MappingDiv = document.getElementById("qMapper");
    $('#qMapper').empty();
    $(MappingDivData.join('').split('@LayoutPath').join(LayoutPath)).appendTo(MappingDiv);

    //Fade in the Popup
    $(MappingDiv).fadeIn(300);

    //Set the center alignment padding + border see css style
    var popMargTop = ($(MappingDiv).height() + 24) / 2;
    var popMargLeft = ($(MappingDiv).width() + 24) / 2;
    $('.qMapper-popup').css({
        'margin-top': -popMargTop,
        'margin-left': -popMargLeft
    });

    // Add the mask to body
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
    $('#qMapper').show();


    //var request = '{"spListName":"' + reportGroupList + '","keyName":"ReportID","keyValue":"' + aWebParts[0].SectionID + '","layoutColumn":"QueryMappings","xmlToWrite":""}';
    //oRequest.postRequest(sWebServicePath+'GetLayout', setMappingData, request, '');


    $('.btn_close , #mask').click(function () {
        $('#mask , .qMapping-popup').fadeOut(300, function () {
            $('#mask').remove();
            $('#qMapper').hide();
        });
    });

    $('#AddItem').click(function () {
        mappingRowCounter++;
        var mappingVarConfig = ['<div id="MappingRow@mappingRowCounter" class="divRow">'
            , '<div class="MappingCellLeft">'
            , '<label id="FieldLabel@mappingRowCounter">@mappingRowCounter</label>&nbsp;'
            , '<input type="text" class="DivTextBoxMini" id="Queryfield@mappingRowCounter"/></div>'
            , '<div class="MappingCellLeft">'
            , '<input type="text" class="DivTextBoxMini" id="QueryStringfield@mappingRowCounter"/>'
            , '</div>'
            , '<div class="MappingCellLeft">'
            , '<input type="text" class="DivTextBoxMini" id="QueryDefault@mappingRowCounter"/>'
            , '</div>'
            , '</div>'
        ];

        var mappingsDiv = $('#MappingInputs');
        $(mappingVarConfig.join('').split('@mappingRowCounter').join(mappingRowCounter)).appendTo(mappingsDiv);

        $('#RemoveItem').show();
        if (mappingRowCounter > 4) {
            mappingsDiv.css('overflow-y', 'scroll');
        }
    });

    $('#RemoveItem').click(function () {
        $('#MappingRow' + mappingRowCounter).remove();
        if (mappingRowCounter > 0) {
            mappingRowCounter--;
        }
        if (mappingRowCounter == 0) {
            $('#RemoveItem').hide();
        }
        if (mappingRowCounter < 5) {
            $('#MappingInputs').css('overflow-y', 'hidden');
        }
    });

    $('#SaveMapping').click(function () {

        var InternalCounter = 0;
        aParamsMapTemp = [];

        for (i = 1; i <= mappingRowCounter; i++) {
            if ($('#Queryfield' + i).val().trim() == '' || $('#QueryStringfield' + i).val().trim() == '' || $('#QueryDefault' + i).val().trim() == '') {
                InternalCounter++;
            } else {
                var tempParamObj = U.Clone(paramObj);
                tempParamObj.QueryString = $('#QueryStringfield' + i).val().trim();
                tempParamObj.QueryVariable = $('#Queryfield' + i).val().trim();
                tempParamObj.DefaultValue = $('#QueryDefault' + i).val().trim();
                aParamsMapTemp.push(tempParamObj);

            }
        }
        if (mappingRowCounter == InternalCounter) {
            aParamsMapTemp = U.Clone(paramObj);
        }

        aParamsMap = U.Clone(aParamsMapTemp);

        $('#mask , .qMapping-popup').fadeOut(300, function () {
            $('#mask').remove();
            $('#qMapper').hide();
        });
    });

    for (i = 0; i < 5; i++) {
        $('#AddItem').click();
    }

    setMappingData();
}

function setMappingData() {
    if (aParamsMapTemp != undefined) {
        var totalMappings = aParamsMapTemp.length;
        if (totalMappings > mappingRowCounter) {
            for (var rCount = mappingRowCounter; rCount < totalMappings; rCount++) {
                $('#AddItem').click();
            }
        }

        for (var count = 1; count <= totalMappings; count++) {
            $('#Queryfield' + count).val(aParamsMapTemp[count - 1].QueryVariable);
            $('#QueryStringfield' + count).val(aParamsMapTemp[count - 1].QueryString);
            $('#QueryDefault' + count).val(aParamsMapTemp[count - 1].DefaultValue);
        }
    }
    paramObj = U.Clone(aParamsMapTemp[0]);
    paramObj.QueryVariable = '';
    paramObj.QueryString = '';
    paramObj.DefaultValue = '';
}

function afterSavingMappings() {

    var InternalCounter = 0;
    var MappingConfig = '{"ParamMapping":[@mappingElements]}';
    var finalMapping = '';
    if (aParamsMapTemp != undefined) {
        var totaMappings = aParamsMapTemp.length;
        if (totaMappings === 0 || totaMappings === undefined) {
            MappingConfig = "";
            MappingConfig = escape(MappingConfig);
        }
        else {
            for (var count = 1; count <= totaMappings; count++) {

                var mappingelement = '{ "QueryVariable": "@QueryVariable", "QueryString": "@QueryString" ,"DefaultValue": "@DefaultValue"}';
                mappingelement = mappingelement.replace("@QueryVariable", aParamsMapTemp[count - 1].QueryVariable);
                mappingelement = mappingelement.replace("@QueryString", aParamsMapTemp[count - 1].QueryString);
                mappingelement = mappingelement.replace("@DefaultValue", aParamsMapTemp[count - 1].DefaultValue);
                finalMapping = finalMapping + mappingelement + ',';
            }

            finalMapping = finalMapping.substr(0, finalMapping.lastIndexOf(','));
            MappingConfig = MappingConfig.replace("@mappingElements", finalMapping);
            MappingConfig = escape(MappingConfig);
        }

        var request = "{\"spListName\":\"" + sListReportConfigurations + "\",\"keyName\":\"ReportID\",\"keyValue\":\"" + reportID + "\",\"layoutColumn\":\"ReportMapping\",\"xmlToWrite\":\"" + MappingConfig + "\"}";
        oRequest.postRequest(sWebServicePath + 'GetLayout', mappingReturn, request, '');
    }
}

function mappingReturn(response) {

}

function validateDataConfigForm() {
    functionCallCounter = 0, validCaseCounter = 0; // Counters used to get the entire validation of the form

    var dataTileCount;  // Used to set the total tiles to be included into the configuration
    var dataTileType = $('#DataTypeDD>option:selected').text(); // Read the value selected in the datetype selected dropdown

    // Obtain the validator control for custom connection validation
    var oValidatorControl = $('#' + 'BtnValidateCustomConnection_' + selectedTileTypeValue);
    //Check for the datatype selected in dropdown
    if (dataTileType == staticTileValue) { // Logic for the static tile
        dataTileCount = 1;

    }
    else { // Logic for the Live tile
        //Check for selection of the last tile configuration enable status
        if ($('#TileConfigEnableChk').is(':checked')) {
            dataTileCount = 3; // All the three tiles configuration to be included
        }
        else {
            dataTileCount = 2; // only first two tiles configuration to be included as the corresponding checkbox is not checked
        }
        validateDropdown(eleDataIntervalDD); // validate 'DataInterval' dropdown
    }
    validateDropdown(eleDataConnection_DD); // validate 'DataConnection' dropdown
    validateDropdown(eleDataPortfolio_DD);
    if ($("#RunWithElevatedDataCheckbox").prop("checked")) {
        validateDropdown($("#RunWithElevatedData"));
    }

    // Iterate till the total number of tiles selected 
    for (var i = 1; i <= dataTileCount; i++) {
        validateText(eleDataDisplayTextArr[i - 1], "TitleText", true, "-1", "-1");
        validateText(eleDataDDLink[i - 1], "Url", false, "-1", "-1");
        validateQuery(eleDataQueryArr[i - 1], "DataConnectionStringType_DD");

        // validate the data color value
        if ($('input:radio[name=DataColorRbtn' + i + ']:checked').val() == dataColorDefaultValue) {
            validateText(eleDataColorPickerArr[i - 1], "TitleText", true, "-1", "-1");
        }
        else
            // Check for the checked state of the check box and validate the corresponding field
            if ($('input:radio[name=DataColorRbtn' + i + ']:checked').val() === TrendPattern) {
                validateText(eleDataColorPickerArr[i - 1], "TitleText", true, "-1", "-1");
                validateQuery(eleDataTrendQueryArr[i - 1], "DataConnectionStringType_DD");
            }
            else {
                CheckValidityOfStopRules(i);
            }

        // Check for the checked state of the check box and validate the corresponding field
        if (eleDataIconChkArr[i - 1].is(':checked')) {
            validateText(eleDataIconPickerArr[i - 1], "TitleText", true, "-1", "-1");
        }
        // validate the dropdowns 
        validateDropdown(eleTileDataFormat_DDArr[i - 1]);
        validateDropdown(eleDataConnection_DD);
        validateDropdown(eleDataPortfolio_DD);

        // check for live tile status and validate the Url
        validateText(eleDataDrilldownURL[i - 1], "Url", false, "-1", "-1");

        if (dataTileType == staticTileValue) {
            if ($("#DynamicSuffix1")[0].checked) {
                validateText($("#SuffixIndex1"), "OnlyNumbers", true, "-1", "-1");
                validateText($("#DataIndex1"), "OnlyNumbers", true, "-1", "-1");
            }

            if ($("#TwoTilesCheck")[0].checked) {
                if ($("#DynamicSuffix4")[0].checked) {
                    validateText($("#SuffixIndex4"), "OnlyNumbers", true, "-1", "-1");
                    validateText($("#DataIndex4"), "OnlyNumbers", true, "-1", "-1");
                }
                validateQuery($("#DataQuery4"), "DataConnectionStringType_DD");
                validateDropdown("#TileDataFormat_DD4");
            }
        }

        // Compare the total function called counter and total valid case counter
        if (functionCallCounter == validCaseCounter && $(".securityWarningMessage").length === 0) {
            // Mark configuration form validation to true
            isFormValid = true;
            // Flag 'bCustomConnectionValidation' implies if we should validate the custom connection or not
            if (bCustomConnectionValidation) {
                // Go for validation of custom connection
                if (oValidatorControl.length) {
                    var currentOnClickAttribute = oValidatorControl.attr('onclick');
                    var updatedOnClickAttribute = oValidatorControl.attr('onclick').replace("No", "Yes");
                    oValidatorControl.attr('onclick', updatedOnClickAttribute).click();

                    //Reset it back again
                    oValidatorControl.attr("onclick", currentOnClickAttribute);
                }

            }
            else {
                // User is using existing connection key. Request to save the configuration
                saveConfigurationData();
            }
        }
        else {
            isFormValid = false;
            if (bCustomConnectionValidation) {
                // Go for validation of custom connection
                if (oValidatorControl.length) {
                    oValidatorControl.click();
                }
            }
            // Animate the form to reach the particualar screen in which the validation is failing
            if (i == dataTileSliderStatus) {
            } else if (i > dataTileSliderStatus) {
                for (var count = 0; count <= (i - dataTileSliderStatus) ; count++) { // Slide the configuration data based on current tile status
                    $('.btn_Swap_Right').click(); // Call the click event to swap the tile to right

                }
            } else {
                for (var count = 0; count <= (dataTileSliderStatus - i) ; count++) { // Slide the configuration data based on current tile status
                    $('.btn_Swap_Left').click(); // Call the click event to swap the tile to left
                }
            }
            return false;
        }
    }
}

function chartResultOrderDDChanged(obj) {
    validateDropdown(obj);
    //var arrElements = ["divTopLabel", "divTopLabelIndex", "divTopLabelFormat", "divBottomLabels", "divBottomLabelIndex", "divBottomLabelFormat", "divTargetLabels", "divTargetLabelIndex", "divKeyMetricIndex", "divDividerIndex", "DivChartSliceColor", "divTargetLabelFormat"];
    var arrElements = [];
    showHideChartDivisions(arrElements, false);
    if ($("#TileChartType_DD").val() === ChartDictionary.ZingColumn) {
        var sResultOrder = obj.value.charAt(0).toLowerCase();
        if (sResultOrder === "c") {
            arrElements = ["divTopLabel", "divTargetLabelIndex", "divDividerIndex", "DivChartSliceColor"];
        }
        if (arrElements.length > 0) {
            showHideChartDivisions(arrElements, true);
            enableDisableElements(eleChartSliceColor, true);
        }
    }
}

function validateChartConfigForm() {
    functionCallCounter = 0, validCaseCounter = 0; // Counters used to get the entire validation of the form

    // Obtain the validator control for custom connection validation
    var oValidatorControl = $('#' + 'BtnValidateCustomConnection_' + selectedTileTypeValue);
    // Validate the basic required elements of the charts without any condition
    //validateDropdown(eleTileChartType_DD);
    // eleConnectionString_DD = $("#ChartConnectionStringType_DD");
    // validateDropdown(eleTileChartAspect_DD);
    if ("zinghfunnel" !== eleTileChartType_DD.val() && "MAQhFunnelChart" !== eleTileChartType_DD.val()) {
        //        validateDropdown(eleTileChartOrientation_DD);
        validateDropdown(eleChartConnectionString_DD);
        validateDropdown(eleChartPortfolio_DD);
        validateText(eleChartTitle, "TitleText", true, "-1", "-1");

        validateQuery(eleChartQuery, "ChartConnectionStringType_DD");
        var Query = eleChartValueQuery.val();

        if ((undefined !== Query) && (Query !== '') && (Query.toLowerCase() !== 'na')) {
            validateQuery(eleChartValueQuery, "ChartConnectionStringType_DD");
        }
        if ($("#RunWithElevatedChartCheckbox").prop("checked")) {
            validateDropdown($("#RunWithElevatedCharts"));
        }
        validateText(eleChartDrilldownURL, "Url", false, "-1", "-1");
        validateText(eleChartDDLink, "Url", false, "-1", "-1");
        validateText(eleChartDrilldownURL, "UrlCombo", false, "-1", "-1");
        // Check if element is disabled or not
        if (!(eleChartSubTitle).is(':disabled')) { // Validate the data entered or selected in the input element
            validateText(eleChartSubTitle, "TitleText", false, "-1", "-1");
        }
    }

    if ('zingpiewithmetric' === eleTileChartType_DD.val()) {
        enableDisableElements(eleChartColorPicker, false);
    }
    else if ('zinginnerring' === eleTileChartType_DD.val()) {
        enableDisableElements(eleChartColorQuery, false);
    }

    else if ('zingcolumn' === eleTileChartType_DD.val()) {
        validateDropdown(eleChartResultOrder_DD);
        if (eleChartResultOrder_DD.val() != "0") {
            validateText(eleDividerIndex, "NumbersandComma", false, "-1", "-1");
            validateText(eleChartSliceColor, "NumbersandComma", false, "-1", "-1");
            if (eleChartResultOrder_DD.val().charAt(0) === 'r') {
                validateText(eleColumnTitle, "CommaText", true, "-1", "-1");
                validateText(eleChartBottomLabels, "CommaText", true, "-1", "-1");
                validateText(eleBottomLabelIndex, "NumbersandComma", true, "-1", "-1");
                validateText(eleTopLabels, "CommaText", true, "-1", "-1");
                validateText(eleTopLabelIndex, "CommaText", true, "-1", "-1");
                validateText(eleChartTargetLabels, "TitleText", true, "-1", "-1");
                validateText(eleChartTargetLabelIndex, "OnlyNumbers", true, "-1", "-1");
                validateText(eleKeyMetricIndex, "OnlyNumbers", true, "-1");

            } else {
                validateText(eleColumnTitle, "TitleText", true, "-1", "-1");
            }
        }
    }
    else if ('maqcustomcolumn' === eleTileChartType_DD.val()) {
        validateText(eleKeyMetricIndex, "OnlyNumbers", true, "-1");
    }
    // Check if element is disabled or not
    if (!(eleChartColorPicker).is(':disabled')) {// Validate the data entered or selected in the input element

        if ($('input:radio[name=ChartColorRbtn]:checked').val() == dataColorDefaultValue) {
            //TODO(ESBI): check if we need this validation
            //validateText(eleChartColorPicker, "TitleText", true, "-1", "-1");
        }
        else {
            if (!eleChartColorQuery[0].disabled) {
                validateQuery(eleChartColorQuery, "DataConnectionStringType_DD");
            }
        }
    }
    /*
        if (!(eleChartValueFormat_DD).is(':disabled')) 
        {
            validateDropdown(eleChartValueFormat_DD);
        }
        if (!(eleChartTooltipFormat).is(':disabled')) 
        {
            validateDropdown(eleChartTooltipFormat);
        }
        if (!(eleChartLabelFormat).is(':disabled')) 
        {
            validateDropdown(eleChartLabelFormat);
        }
        */
    // Check if element is disabled or not
    var type = eleTileChartType_DD.val();
    if (type !== 'zingcolumn' && type !== 'maqdonut' && type !== 'MAQhFunnelChart' && type !== 'mediumdonut' && type !== 'zinghfunnel') {
        if (!(eleChartDataFormat_DD).is(':disabled')) { // Validate the data entered or selected in the input element
            validateDropdown(eleChartDataFormat_DD);
        }
    }
    // Check if element is disabled or not
    if ((eleChartLegend_DD).is(':visible')) { // Validate the data entered or selected in the input element
        validateDropdown(eleChartLegend_DD);
    }
    // Check if element is disabled or not
    //if (!(eleChartLegendPos_DD).is(':disabled')) { // Validate the data entered or selected in the input element
    //  //  validateDropdown(eleChartLegendPos_DD);
    //}
    // Check if element is disabled or not
    if ((eleChartResultOrder_DD).is(':visible')) { // Validate the data entered or selected in the input element
        validateDropdown(eleChartResultOrder_DD);
    }

    // Check if element is disabled or not

    if ((eleChartDataMapping).is(':visible')) { // Validate the data entered or selected in the input element
        validateText(eleChartDataMapping, "NumbersandComma", true, "-1", "-1");
    }


    // Check if element is disabled or not
    if (!(eleChartRemainingDataMapping).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartRemainingDataMapping, "OnlyNumbers", true, "-1", "-1");
    }
    // Check if element is disabled or not
    if (!(eleChartTargetDataMapping).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartTargetDataMapping, "OnlyNumbers", true, "-1", "-1");
    }
    // Check if element is disabled or not
    if (!(eleChartXLabelMapping).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartXLabelMapping, "OnlyNumbers", true, "-1", "-1");
    }
    // Check if element is disabled or not
    if ((eleChartSliceColor).is(':visible') && type !== "MAQhFunnelChart") { // Validate the data entered or selected in the input element
        validateText(eleChartSliceColor, "NumbersandComma", true, "-1", "-1");
    }
    // Check if element is disabled or not
    if (!(eleChartGrandTotalMapping).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartGrandTotalMapping, "NumbersandComma", false, "-1", "-1");
    }
    // Check if element is disabled or not
    if (!(eleChartScaleXLabel).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartScaleXLabel, "TitleText", false, "-1", "-1");
    }
    // Check if element is disabled or not
    if (!(eleChartScaleYLabel).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartScaleYLabel, "TitleText", false, "-1", "-1");
    }
    // Check if element is disabled or not
    if (!(eleChartScaleXLFont).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartScaleXLFont, "OnlyNumbers", false, "-1", "2");
    }
    // Check if element is disabled or not
    if (!(eleChartScaleXIFont).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartScaleXIFont, "OnlyNumbers", false, "-1", "2");
    }
    // Check if element is disabled or not
    if (!(eleChartScaleXIAngle).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartScaleXIAngle, "OnlyNumbers", false, "-1", "2");
    }
    // Check if element is disabled or not
    if (!(eleChartScaleYLFont).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartScaleYLFont, "OnlyNumbers", false, "-1", "2");
    }
    // Check if element is disabled or not
    if (!(eleChartScaleYIFont).is(':disabled')) { // Validate the data entered or selected in the input element
        validateText(eleChartScaleYIFont, "OnlyNumbers", false, "-1", "2");
    }

    /****************RT********/
    // Check if element is disabled or not
    // if (!(eleTitleLabelDataFormat).is(':disabled')) { // Validate the data entered or selected in the input element
    // validateDropdown(eleTitleLabelDataFormat);
    // }
    /****************RT********/

    if (functionCallCounter == validCaseCounter && $(".securityWarningMessage").length === 0) {  // Compare the total function called counter and total valid case counter
        // Mark configuration form validation to true
        isFormValid = true;
        // Flag 'bCustomConnectionValidation' implies if we should validate the custom connection or not
        if (bCustomConnectionValidation) {
            // Go for validation of custom connection
            if (oValidatorControl.length) {
                var currentOnClickAttribute = oValidatorControl.attr('onclick');
                var updatedOnClickAttribute = oValidatorControl.attr('onclick').replace("No", "Yes");
                oValidatorControl.attr('onclick', updatedOnClickAttribute).click();

                //Reset it back again
                oValidatorControl.attr("onclick", currentOnClickAttribute);
            }
        }
        else {
            // User is using existing connection key. Request to save the configuration
            saveConfigurationData();
        }
    }
    else {
        isFormValid = false;
        // Flag 'bCustomConnectionValidation' implies if we should validate the custom connection or not
        if (bCustomConnectionValidation) {
            // Go for validation of custom connection
            if (oValidatorControl.length) {
                oValidatorControl.click();
            }
        }
    }
}

function validateListConfigForm() {
    functionCallCounter = 0, validCaseCounter = 0; // Counters used to get the entire validation of the form
    eleConnectionString_DD = $("#ListConnectionStringType_DD");
    // Obtain the validator control for custom connection validation
    var oValidatorControl = $('#' + 'BtnValidateCustomConnection_' + selectedTileTypeValue);

    // Validate the basic required elements of the charts without any condition
    validateText(eleListTitle, "TitleText", true, "-1", "-1");
    validateText(eleListDDLink, "Url", false, "-1", "-1");

    if (!eleListTextColor.is(":disabled")) {
        validateText(eleListTextColor, "TitleText", true, "-1", "-1");
    }
    if (!eleListBgColor.is(":disabled")) {
        validateText(eleListBgColor, "TitleText", true, "-1", "-1");
    }
    validateQuery(eleListQuery, "ListConnectionStringType_DD");
    validateDropdown(eleListConnection_DD);
    validateDropdown(eleListPortfolio_DD);
    validateText(eleListDrillUrl, "Url", false, "-1", "-1");

    if ($("#RunWithElevatedListCheckbox").prop("checked")) {
        validateDropdown($("#RunWithElevatedList"));
    }

    for (var col = 0; col <= totalListColumns; col++) { // Iterate the loop till totalListColumns count
        // validateText(eleListHeaderTitle[col], "TitleText", false, "-1", "-1");
        validateText(eleListMappingId[col], "OnlyNumbers", true, "-1", "-1");
        validateDropdown(eleListFormat_DD[col]);
    }

    if (functionCallCounter == validCaseCounter && $(".securityWarningMessage").length === 0) {// Compare the total function called counter and total valid case counter
        isFormValid = true;
        // Added below check for custom validation
        if (bCustomConnectionValidation) {
            // Go for validation of custom connection
            if (oValidatorControl.length) {
                var currentOnClickAttribute = oValidatorControl.attr('onclick');
                var updatedOnClickAttribute = oValidatorControl.attr('onclick').replace("No", "Yes");
                oValidatorControl.attr('onclick', updatedOnClickAttribute).click();

                //Reset it back again
                oValidatorControl.attr("onclick", currentOnClickAttribute);
            }
        }
        else {
            // User is using existing connection key. Request to save the configuration
            saveConfigurationData();

        }
    }
    else {
        isFormValid = false;
        // Flag 'bCustomConnectionValidation' implies if we should validate the custom connection or not
        if (bCustomConnectionValidation) {
            // Go for validation of custom connection
            if (oValidatorControl.length) {
                oValidatorControl.click();
            }
        }
    }
}

function validateFreeTextConfigForm() {
    functionCallCounter = 0, validCaseCounter = 0; // Counters used to get the entire validation of the form

    // Validate the basic required elements of the charts without any condition
    validateText(eleFreeTextTitle, "TitleText", true, "-1", "-1");
    validateText(eleFreeTextDDLink, "Url", false, "-1", "-1");
    validateText(eleFreeTextColorPicker, "TitleText", true, "-1", "-1");

    if (functionCallCounter == validCaseCounter && $(".securityWarningMessage").length === 0) {// Compare the total function called counter and total valid case counter
        isFormValid = true; // validate the form if both values are same
    }
    else {
        isFormValid = false;
    }
}

function validateGridConfigForm() {
    functionCallCounter = 0, validCaseCounter = 0; // Counters used to get the entire validation of the form

    // Validate the basic required elements of the charts without any condition
    validateDropdown(eleGridDisplayState);

    // Iterate the loop for each and every grid till total number of grids
    for (var gridId = 0; gridId <= totalGridCount ; gridId++) {
        validateText(eleGridTitle[gridId], "TitleText", true, "-1", "-1");
        // If IsFullReport flag is true, check PivotExcel URL is valid or not
        if (eleGridPivotExcelChk[gridId].is(':checked')) {
            validateText(eleGridPivotExcelURL[gridId], "Url", true, "-1", "-1");
        }
        eleGridConnection[gridId] = $("#GridConnectionStringType_DD" + gridId);

        eleGridRunWithElivateCheckbox[gridId] = $("#RunWithElevatedGridCheckbox-G" + gridId);
        eleGridRunWithElivatedDD[gridId] = $("#RunWithElevatedGrid-G" + gridId);

        validateDropdown(eleGridConnection[gridId]);
        validateDropdown(eleGridPortfolio[gridId]);
        validateDropdown(eleGridPaging[gridId]);
        validateQuery(eleGridQuery[gridId], 'GridConnectionStringType_DD' + gridId);
        if ($($(eleGridRunWithElivateCheckbox[gridId])[0]).prop("checked")) {
            validateDropdown(eleGridRunWithElivatedDD[gridId]);
        }

        //Iterate the loop for each and every grid till total number of columns for specified grid
        for (var colId = 0; colId <= totalGridColumns[gridId]; colId++) {
            validateText(eleGridHeaderTitle[gridId][colId], "TitleText", true, "-1", "-1");
            validateText(eleGridMappingID[gridId][colId], "NumbersandComma", true, "-1", "-1");
            validateDropdown(eleGridFormat[gridId][colId]);
            validateText(eleGridWidth[gridId][colId], "OnlyNumbers", true, "-1", "-1");
            validateDropdown(eleGridColType[gridId][colId]);
            if (eleGridTotalChk[gridId][colId].is(':checked') && eleGridFormat[gridId][colId].val() === percentageString) {
                validateText(eleGridPercNum[gridId][colId], "OnlyNumbers", true, "-1", "-1");
                validateText(eleGridPercDen[gridId][colId], "OnlyNumbers", true, "-1", "-1");
            }
        }
    }

    if (functionCallCounter == validCaseCounter && $(".securityWarningMessage").length === 0) { // Compare the total function called counter and total valid case counter
        isFormValid = true;
        if (bCustomConnectionValidation) {
            // Go for validation of custom connection
            var iTotalCount = gridElementCustomConnectionCheck.length;
            for (var iCounter = 0; iCounter < iTotalCount; iCounter++) {
                var requestorID = gridElementCustomConnectionCheck[iCounter];
                var oRequestor = $('#' + requestorID);
                if (oRequestor.length) {
                    var currentOnClickAttribute = oRequestor.attr("onclick");
                    // This is just to know which grid has custom connection, accordingly passing the grid id
                    var iRequestorIDLength = requestorID.length;
                    var iStart = requestorID.lastIndexOf("_Grid") + 5;
                    var iController = requestorID.substring(iStart, iRequestorIDLength);
                    var updatedOnClickAttribute = oRequestor.attr("onclick").replace("No", "Yes" + "$|$" + iController);
                    oRequestor.attr("onclick", updatedOnClickAttribute).click();
                    //Reset it back again
                    oRequestor.attr("onclick", currentOnClickAttribute);
                }
            }
        }
    }
    else {
        isFormValid = false;
        if (bCustomConnectionValidation) {
            // Go for validation of custom connection            

            var iTotalCount = gridElementCustomConnectionCheck.length;
            for (var iCounter = 0; iCounter < iTotalCount; iCounter++) {
                var requestorID = gridElementCustomConnectionCheck[iCounter];
                var oRequestor = $('#' + requestorID);
                if (oRequestor.length) {
                    var currentOnClickAttribute = oRequestor.attr("onclick");
                    // This is just to know which grid has custom connection, accordingly passing the grid id
                    var iRequestorIDLength = requestorID.length;
                    var iStart = requestorID.lastIndexOf("_Grid") + 5;
                    var iController = requestorID.substring(iStart, iRequestorIDLength);
                    var updatedOnClickAttribute = oRequestor.attr("onclick").replace("No", "No" + "$|$" + iController);
                    oRequestor.attr("onclick", updatedOnClickAttribute).click();
                    //Reset it back again
                    oRequestor.attr("onclick", currentOnClickAttribute);
                }
            }
        }
    }
}

function validateText(objId, textType, isRequired, minLength, maxLength) {
    var inputText = $.trim($(objId).val().replace(/[\n\r\t]/g, " ")); // Retrieve and filter the data
    var textLength = inputText.length; // Initialize the length of the string
    var isValid = true; // Initialize the form state to valid

    // Check for required field
    if (isValid) {
        if (isRequired) { // Check for required field validator
            if (textLength == 0) { // Check fot the Length with 0
                $(objId).attr("Title", errorTextMessages[0]); // Append the error message to the input element
                isValid = false;
            }
        }
    }
    // Check for min length of string
    if (isValid) {
        if (textLength > 0 && minLength >= 0) {// Check for the textlength and minlength of the string

            if (textLength < minLength) {
                $(objId).attr("Title", errorTextMessages[2].replace('@minLength', minLength)); // Append the error message to the input element
                isValid = false;
            }
        }
    }
    // Check for max length of string
    if (isValid) {
        if (textLength > 0 && maxLength > 0) { // Check for the textlength and maxlength of the string
            if (textLength > maxLength) {
                $(objId).attr("Title", errorTextMessages[1].replace('@maxLength', maxLength)); // Append the error message to the input element
                isValid = false;
            }
        }
    }
    // Apply the regular expression based on the type of string
    if (isValid) {
        if (textLength > 0) {
            var validRegex;
            var errorMsg;
            //This functionality is excusively for Row wise and column wise results in Column chart
            if (textType.indexOf("Custom") === 0) {
                if (eleChartResultOrder_DD.val().charAt(0) === 'c') {
                    if (textType === "CustomText") {
                        textType = "TitleText";
                    }
                    //else if (textType === "CustomIndex") {

                    //}
                } else if (eleChartResultOrder_DD.val().charAt(0) === 'r') {
                    if (textType === "CustomText") {
                        textType = "CommaText";
                    }
                }

            }

            switch (textType) {
                case 'OnlyText': // Regex for validating plain text
                    validRegex = /^[A-Za-z]+$/i;
                    errorMsg = "Field can contain only characters";
                    break;
                case 'OnlyNumbers':// Regex for vaidating only numbers
                    validRegex = /^[0-9]+$/;
                    errorMsg = "Field can contain only digits";
                    break;
                case 'TitleText':// Regex for validating the values with text, numbers and special characters
                    validRegex = /^[a-zA-Z 0-9_$%()=&\/\-]+$/i;
                    errorMsg = "Field can contain only characters, digits and _,$,%,),(,&,/,-";
                    break;
                case 'CommaText':// Regex for validating the values with text, numbers and special characters
                    validRegex = /^[a-zA-Z , 0-9_$%()=&\/\-]+$/i;
                    errorMsg = "Field can contain only characters, digits and _,$,%,),(,&,/,-";
                    break;
                case 'NumbersandComma':// Regex for validating the numbers seperated by comma
                    validRegex = /^[0-9 ,]+$/;
                    errorMsg = "Field can contain only digits seperated by comma";
                    break;
                case 'MappingText':// Regex for validating the mapping text with @XXX
                    validRegex = /^[@][a-zA-Z]+$/i;
                    errorMsg = "Field should start with @ followed by characters";
                    break;
                case 'Url':// Regex for validating the Url
                    validRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;
                    errorMsg = "Invalid URL";
                    break;
                case 'Rule'://Regex for validating the stop light regular expression
                    validRegex = /^([0-9]+(\-[0-9]+)*,*)+$/;
                    errorMsg = "Enter correct rule (numbers separated by comma)";
                    break;
                case 'DataFormat'://Regex for validating #,% and $
                    validRegex = /^[%#\$]{1}(\,[\ ]?[%#\$]{1})*$/
                    errorMsg = "Enter correct data formats (%, #, $)";
                    break;
                case 'UrlCombo'://Regex for validating Urls separated with comma
                    validRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;
                    errorMsg = "Invalid URL";
                    AllUrls = inputText.toLowerCase().split(UrlSeparator);
                    for (Counter = 0; Counter < AllUrls.length; Counter++) {
                        if (!validRegex.test(AllUrls[Counter])) {
                            $(objId).attr("Title", errorMsg); // Append the error message to the input element
                            isValid = false;
                        }
                    }
                    break;
            }
            if (textType !== 'UrlCombo') {
                if (!validRegex.test(inputText)) {
                    $(objId).attr("Title", errorMsg); // Append the error message to the input element
                    isValid = false;
                }
            }
        }
    }
    changeElementColour(objId, isValid);  // Change the object colour with respect to the status
}

function validateQuery(objId, connectionId) {
    var txt = $.trim($(objId).val().replace(/[\n\r\t]/g, " ")); // Retrieve and filter the data
    var isValid = true;
    var openBraces = "";
    var closeBraces = "";
    var addText = "";
    var MDXvalidKeywords = ["SELECT", "FROM"]; // Used to compare the valid MDX keywords
    var SQLvalidKeywords = ["SELECT", "FROM"], SPValidKeywords = ["EXEC"]; // Used to compare the valid SQL keywords
    var SQLInvalidKeywords = ["DELETE", "CREATE", "ALTER", "DROP", "INSERT", "UPDATE", "GRANT", "REVOKE", "COMMIT", "ROLLBACK"]; // Used to compare the invalid keywords

    if (txt.length > 0) { // Check for at least a single word
        // Calculate the total number of closed and open braces
        openBraces = txt.split("(").length;
        closeBraces = txt.split(")").length;
        addText = "";
        // Check the equality in count of braces
        if (openBraces != closeBraces) {
            if (openBraces > closeBraces)
                addText = ")"; else addText = "(";
            $(objId).attr("Title", errorQueryMessages[3] + " '" + addText + "' Expected"); // Append the Error message to the tooltip of the object
            isValid = false; // Initialize the form to invalid
        }

        // Calculate the total number of closed and open braces
        openBraces = txt.split("{").length;
        closeBraces = txt.split("}").length;
        addText = "";
        // Check the equality in count of braces
        if (openBraces != closeBraces) {
            if (openBraces > closeBraces)
                addText = "}"; else addText = "{";
            $(objId).attr("Title", errorQueryMessages[3] + " '" + addText + "' Expected"); // Append the Error message to the tooltip of the object
            isValid = false; // Initialize the form to invalid
        }

        // Calculate the total number of closed and open braces
        openBraces = txt.split("[").length;
        closeBraces = txt.split("]").length;
        addText = "";
        // Check the equality in count of braces
        if (openBraces != closeBraces) {
            if (openBraces > closeBraces)
                addText = "]"; else addText = "[";
            $(objId).attr("Title", errorQueryMessages[3] + " '" + addText + "' Expected"); // Append the Error message to the tooltip of the object
            isValid = false; // Initialize the form to invalid
        }

        var statmentCount = 0;
        var QueryArray = txt.toUpperCase().split(" "); // Splitting the entire query into array

        var DataConnectionString = $('#' + connectionId).val(); // Initializing the data connection values
        if (DataConnectionString.toLowerCase().indexOf("cube") >= 0) { // validation for MDX query
            for (var i = 0; i < QueryArray.length; i++) {
                if (MDXvalidKeywords[0] == QueryArray[i]) // Compare and validate the query with the valid MDX keywords and increment the statement count ;
                    statmentCount++;
                if (MDXvalidKeywords[1] == QueryArray[i]) // Compare and validate the query with the valid MDX keywords and increment the statement count ;
                    statmentCount++;
            }
        }
        else { // validation for SQL query
            for (var i = 0; i < QueryArray.length; i++) {
                if (SQLvalidKeywords[0] == QueryArray[i]) // Compare and validate the query with the valid MDX keywords and increment the statement count ;
                { statmentCount++; }
                if (SQLvalidKeywords[1] == QueryArray[i]) {
                    statmentCount++
                }
                if (SPValidKeywords[0] === QueryArray[i]) /// Compare and validate the query with the valid MDX keywords and increment the statement count ;
                { statmentCount++; }
            }

            for (var i = 0; i < SQLInvalidKeywords.length; i++) { // Iterate the entire SQL statement words with all the valid keywords
                for (j = 0; j < QueryArray.length; j++) {
                    if (SQLInvalidKeywords[i] == QueryArray[j]) { // Compare the valid SQl strings with invalid keywords
                        $(objId).attr("Title", errorQueryMessages[4] + " '" + SQLInvalidKeywords[i] + "'");
                        isValid = false; // Initialize the form to invalid
                    }
                }
            }
        }

        if (statmentCount < 1) { // Check for the occurrence of at least 2 valid words
            $(objId).attr("Title", errorQueryMessages[5]); // Add error messages to the tooltip
            isValid = false;
        }
    }
    else {
        $(objId).attr("Title", errorQueryMessages[0]); // Add error messages to the tooltip
        isValid = false;
    }
    changeElementColour(objId, isValid); // Change the object colour with respect to the status
}
var oAccessObject = {};
function checkUserAccess(obj) {
    var securityGroup = $(obj).val();
    if (securityGroup !== "0") {
        var oReq = {
            group: securityGroup,
            requestId: Math.floor(Math.random() * 10000) + 1
        };
        oAccessObject[oReq.requestId] = obj;
        var oRequest = new RequestBuilder_filter();
        oRequest.postRequest(sWebServicePath + 'accessControl', checkAccessCallback, JSON.stringify(oReq), '');
    }
}

function checkAccessCallback(oData) {
    var result = oData.result.split("$|$"),
        groupName = null, reqObject;
    //if (result[0] !== "True") {
    groupName = JSON.parse(oData.query).group;
    reqObject = oAccessObject[result[1]]
    toggleSecurityWarning(groupName, reqObject, result[0] === "True");
    //}
}

function toggleSecurityWarning(groupName, requestObj, isPresent) {
    var securityRow = $(requestObj).parent().parent().parent();
    var htmlText = "<div class=\"divRow securityWarningMessage\">" +
                '<div class="divCellLeft"></div>' +
          '<div class="divCellRight" style="width:270px;color:#ff0000">' + "You need to be a part of " + groupName.split("\\")[1] + " in order to run the queries using this service account (visit http://idweb to get the access)</div>";
    "</div>";
    if (!isPresent) {
        if (securityRow.next().hasClass('securityWarningMessage')) {
            securityRow.next().html(htmlText).show();
        } else {
            securityRow.after(htmlText);
        }
    } else {
        securityRow.next('.securityWarningMessage').hide();
    }
}

// Added for custom connection

// Validates the connection type dropdown control
function validateConnectionTypeDropdown(objId) {
    var bIsValid = true; //Initialize isValid flag to true
    //Check for the selected state of the dropdown by its value
    var sSelectedType = $(objId).val();
    if (sSelectedType == "0" || sSelectedType == 0 || sSelectedType === null) {
        $(objId).attr("Title", errorCustomConnection[6]); //Update element title with the error message
        bIsValid = false; // Update isValid flag
    }
    changeElementColour(objId, bIsValid); // Update the element color and get the validity status
    return bIsValid;
}

// Validates the portfolio dropdown control
function validatePortfolioDropdown(objId) {
    var bIsValid = true; //Initialize isValid flag to true
    //Check for the selected state of the dropdown by its value
    var sSelectedValue = $(objId).val();
    if (sSelectedValue == "0" || sSelectedValue == 0 || null === sSelectedValue) {
        $(objId).attr("Title", errorCustomConnection[5]); //Update element title with the error message
        bIsValid = false; // Update isValid flag
    }
    changeElementColour(objId, bIsValid); // Update the element color and get the validity status
}

// Inserts the custom connection and global connection friendly name
function getConnectionFriendlyName() {
    // Get all the custom connection friendly name
    var oGlobalConnection = JSON.parse(dicMiscItems["PopupConnections"]);

    if (typeof oGlobalConnection === "object") {
        $.each(oGlobalConnection, function (outerKey, outerValue) {
            if (typeof outerValue === "object") {
                $.each(outerValue, function (innerKey, innerValue) {
                    if (typeof innerValue === "object") {
                        $.each(innerValue, function (innermostKey, innermostValue) {
                            if (innermostKey === "key") {
                                if (-1 === $.inArray(innermostValue, arrAllConnection)) {
                                    arrAllConnection.push(innermostValue);
                                }
                            }
                        });
                    }
                    else {
                        if (-1 != $.inArray(innerKey, arrAllConnection)) {
                            arrAllConnection.push(innerKey);
                        }
                    }

                });
            } else {
                if (-1 != $.inArray(outerKey, arrAllConnection)) {
                    arrAllConnection.push(outerKey);
                }
            }
        });
    }
}

// Check if the custom name entered by user is already in system. If yes, show error
function validateCustomConnectionFriendlyName(objId) {
    var bIsValid = true; //Initialize isValid flag to true
    var sConnectionParameter;
    var validConnectionNameRegex = /^[a-zA-Z 0-9_$%()=&\/\-]+$/;
    var oRequestor = $(objId);
    if (null !== oRequestor || "undefined" !== oRequestor) {
        sCustomConnectionFriendlyName = $.trim(oRequestor.val().replace(/[\n\r\t]/g, " "));
        // Validation for empty connection friendly name
        if (!sCustomConnectionFriendlyName || "" === sCustomConnectionFriendlyName) {
            oRequestor.attr("Title", errorCustomConnection[0]);
            bIsValid = false;
        }
        else {
            if (!validConnectionNameRegex.test(sCustomConnectionFriendlyName)) {
                oRequestor.attr("Title", errorCustomConnection[4])
                bIsValid = false;
            }
        }
        //Check if entered name exists in all connection array
        if (-1 != $.inArray(sCustomConnectionFriendlyName, arrAllConnection)) {
            oRequestor.attr("Title", errorCustomConnection[2]);
            bIsValid = false;
        }
        changeElementColour(objId, bIsValid); // Update the element color and get the validity status
    }
}

// Validate the connection string entered by user is valid string or not
function validateCustomConnectionParameter(objId, sConnectionType) {
    var bIsValid = true; //Initialize isValid flag to true
    var validConnectionNameRegex = /^[a-zA-Z 0-9_$%()=&\/\-+\\:#;.!@{}|"?<>-\[\]]+$/;
    var sConnectionParameter;
    var oRequestor = $(objId);
    if (null !== oRequestor || "undefined" !== oRequestor) {
        sConnectionParameter = $.trim(oRequestor.val().replace(/[\n\r\t]/g, " "));
        if (!sConnectionParameter || "" === sConnectionParameter) {
            oRequestor.attr("Title", errorCustomConnection[3]);
            bIsValid = false;
        }
        else {
            if (!validConnectionNameRegex.test(sConnectionParameter)) {
                oRequestor.attr("Title", errorCustomConnection[3]);
                bIsValid = false;
            }
        }
    }
    changeElementColour(objId, bIsValid);
}

// This function validates the custom connection details entered by user on configuration popup
function validateCustomConnection(objId, sConnectionType, sConnectionName, sConnectionString, sSave) {
    var oConnectionStatus, oConnectionStatusSection, sSaveConnectionString, sValidator, iController;

    if (-1 !== sSave.indexOf(seperator)) {
        var splittedSave = sSave.split(seperator);
        sSaveConnectionString = splittedSave[0];
        iController = splittedSave[1];

        if ("Grid" === selectedTileTypeValue) {
            oConnectionStatus = $('#CustomConnectionStatus' + '_' + selectedTileTypeValue + iController);
            oConnectionStatusSection = $('#CustomConnectionStatusSection' + '_' + selectedTileTypeValue + iController);
            oCustomConnectionKey = $('#CustomConnectionConfig' + '_' + selectedTileTypeValue + iController);
            sValidator = "BtnValidateCustomConnection_" + selectedTileTypeValue + iController;
            eleGridPortfolio_DD = $('#GridPortfolio_DD' + iController);
        }
        else {
            oConnectionStatus = $('#CustomConnectionStatus' + '_' + selectedTileTypeValue);
            oConnectionStatusSection = $('#CustomConnectionStatusSection' + '_' + selectedTileTypeValue);
            oCustomConnectionKey = $('#CustomConnectionConfig' + '_' + selectedTileTypeValue);
            sValidator = "BtnValidateCustomConnection_" + selectedTileTypeValue;
        }
    }
    else {
        sSaveConnectionString = sSave;
        if ("Grid" === selectedTileTypeValue) {
            oConnectionStatus = $('#CustomConnectionStatus' + '_' + selectedTileTypeValue + currentGridDisplayed);
            oConnectionStatusSection = $('#CustomConnectionStatusSection' + '_' + selectedTileTypeValue + currentGridDisplayed);
            oCustomConnectionKey = $('#CustomConnectionConfig' + '_' + selectedTileTypeValue + currentGridDisplayed);
            sValidator = "BtnValidateCustomConnection_" + selectedTileTypeValue + currentGridDisplayed;
            eleGridPortfolio_DD = $('#GridPortfolio_DD' + currentGridDisplayed);
        }
        else {
            oConnectionStatus = $('#CustomConnectionStatus' + '_' + selectedTileTypeValue);
            oConnectionStatusSection = $('#CustomConnectionStatusSection' + '_' + selectedTileTypeValue);
            oCustomConnectionKey = $('#CustomConnectionConfig' + '_' + selectedTileTypeValue);
            sValidator = "BtnValidateCustomConnection_" + selectedTileTypeValue;
        }

    }

    if (oConnectionStatusSection.length) {
        // Hide the message section
        if (!oConnectionStatusSection.hasClass("hide")) {
            oConnectionStatusSection.addClass("hide");
        }
    }

    if (oConnectionStatus.length) {
        oConnectionStatus.text("");
        // Hide the message section
        if (!oConnectionStatus.hasClass("hide")) {
            oConnectionStatus.addClass("hide");
        }
        if (oConnectionStatus.hasClass("failure")) {
            oConnectionStatus.removeClass("failure");
        }
        if (oConnectionStatus.hasClass("success")) {
            oConnectionStatus.removeClass("success")
        }
    }

    var oConnectionType = $('#' + sConnectionType);
    var oConnectionName = $('#' + sConnectionName);
    var oConnectionString = $('#' + sConnectionString);

    var sSelectedConnectionType = $.trim(oConnectionType.val());
    var sSelectedConnectionName = $.trim(oConnectionName.val());
    var sSelectedConnectionString = $.trim(oConnectionString.val());
    var sPortfolioName;

    //Validate connection type, friendly name, and connection string
    validateConnectionTypeDropdown(oConnectionType.get(0));
    validateCustomConnectionFriendlyName(oConnectionName.get(0));
    validateCustomConnectionParameter(oConnectionString.get(0));

    // Get the validation results
    var sConnectionTypeTitle = oConnectionType.attr("Title");
    var sConnectionNameTitle = oConnectionName.attr("Title");
    var sConnectionStringTitle = oConnectionString.attr("Title");
    var sPortfolioTitle;

    if ("Data" === selectedTileTypeValue) {

        sPortfolioTitle = eleDataPortfolio_DD.attr("Title");
        sPortfolioName = eleDataPortfolio_DD.val();
        validatePortfolioDropdown(eleDataPortfolio_DD);
    }
    if ("Chart" === selectedTileTypeValue) {

        sPortfolioTitle = eleChartPortfolio_DD.attr("Title");
        sPortfolioName = eleChartPortfolio_DD.val();
        validatePortfolioDropdown(eleChartPortfolio_DD);
    }
    if ("List" === selectedTileTypeValue) {
        sPortfolioTitle = eleListPortfolio_DD.attr("Title");
        sPortfolioName = eleListPortfolio_DD.val();
        validatePortfolioDropdown(eleListPortfolio_DD);
    }
    if ("Grid" === selectedTileTypeValue) {
        sPortfolioTitle = eleGridPortfolio_DD.attr("Title");
        sPortfolioName = eleGridPortfolio_DD.val();
        validatePortfolioDropdown(eleGridPortfolio_DD);
    }

    if ((sConnectionTypeTitle === "undefined" || sConnectionTypeTitle === "") && (sConnectionNameTitle === "undefined" || sConnectionNameTitle === "") && (sConnectionStringTitle === "undefined" || sConnectionStringTitle === "") && (sPortfolioTitle === "undefined" || sPortfolioTitle === "")) {
        // TODO: Place service request to check if logged-in user has permission to connect to required data source
        var oRequest = new RequestBuilder_filter();
        var request = '{"connectionType":"' + sSelectedConnectionType + '","connectionFriendlyName":"' + sSelectedConnectionName + '","connectionString":"' + sSelectedConnectionString + '","portfolioName":"' + sPortfolioName + '","saveConnection":"' + sSaveConnectionString + '"}';
        //var request = '{"connectionType":"' + sConnectionType + '","connectionFriendlyName":"' + sConnectionName + '","sConfigurationColumn":"EditedConfiguration","sCreatedByUserAlias":"' + sCreatedByUserAlias + '","sReportURL":"' + sSiteURL + '"}';
        oRequest.postRequest(sWebServicePath + 'ValidateOrSaveConnection', customConnectionResponse, request, '', iController);
    }
    else {
        // Added for custom connection. This will clear the flag which helps in identifying if user is trying to save the config or is just validating the custom connection
        bCustomConnectionValidation = false;

        if ($('#' + sValidator).length) {
            var updatedOnClickAttribute = $('#' + sValidator).attr('onclick').replace("Yes", "No");
            $('#' + sValidator).attr('onclick', updatedOnClickAttribute);
        }
        // End of custom connection
    }
}

//Custom connection response.
function customConnectionResponse(response, iController) {
    var oConnectionStatus;
    var oConnectionStatusSection;
    var oCustomConnectionKey;
    var sCustomConnectionKey;

    //var oRequestParameters = JSON.parse(response.query);
    //var sSave = oRequestParameters["saveConnection"];

    //if (-1 !== sSave.indexOf(seperator)) {
    //    var splittedSave = sSave.split(seperator);
    //    sSaveConnectionString = splittedSave[0];
    //    var iController = splittedSave[1];
    // Call from grid with ID of controller
    if (undefined !== iController) {
        if ("Grid" === selectedTileTypeValue) {
            oConnectionStatus = $('#CustomConnectionStatus' + '_' + selectedTileTypeValue + iController);
            oConnectionStatusSection = $('#CustomConnectionStatusSection' + '_' + selectedTileTypeValue + iController);
            oCustomConnectionKey = $('#CustomConnectionConfig' + '_' + selectedTileTypeValue + iController);
            gridCustomConnectionCallBackCount++;
        }
        else {
            oConnectionStatus = $('#CustomConnectionStatus' + '_' + selectedTileTypeValue);
            oConnectionStatusSection = $('#CustomConnectionStatusSection' + '_' + selectedTileTypeValue);
            oCustomConnectionKey = $('#CustomConnectionConfig' + '_' + selectedTileTypeValue);
        }
    }
    else {
        if ("Grid" === selectedTileTypeValue) {
            oConnectionStatus = $('#CustomConnectionStatus' + '_' + selectedTileTypeValue + currentGridDisplayed);
            oConnectionStatusSection = $('#CustomConnectionStatusSection' + '_' + selectedTileTypeValue + currentGridDisplayed);
            oCustomConnectionKey = $('#CustomConnectionConfig' + '_' + selectedTileTypeValue + currentGridDisplayed);
        }
        else {
            oConnectionStatus = $('#CustomConnectionStatus' + '_' + selectedTileTypeValue);
            oConnectionStatusSection = $('#CustomConnectionStatusSection' + '_' + selectedTileTypeValue);
            oCustomConnectionKey = $('#CustomConnectionConfig' + '_' + selectedTileTypeValue);
        }
    }

    if (response.result != "error" && response.result != "") {

        var sClassName;
        var sCustomConnectionData = response.result;
        var oCustomConnectionResponse = sCustomConnectionData.split("$|$");

        if (oCustomConnectionResponse.length) {
            sClassName = oCustomConnectionResponse[1];

            //Logic to set the global variable
            if ("success" === oCustomConnectionResponse[1]) {
                bCustomConnectionStatus = true;

                //Check if the requested call was from grid. If yes, increment success count
                if ("Grid" === selectedTileTypeValue) {
                    gridCustomConnectionSuccessCount++;
                }
            }
        }
        else {
            if (-1 !== sCustomConnectionData.indexOf("Success")) {
                sClassName = "success";
                bCustomConnectionStatus = true;

                //Check if the requested call was from grid. If yes, increment success count
                if ("Grid" === selectedTileTypeValue) {
                    gridCustomConnectionSuccessCount++;
                }
            }
            else {
                sClassName = "failure";
            }

        }
        // Check and call for validation
        if (bCustomConnectionValidation) {
            // Push element in array
            //if ("success" === oCustomConnectionResponse[1]) {
            //    sCustomConnectionKey = oCustomConnectionKey.val();
            //    if (-1 === $.inArray(sCustomConnectionKey, arrAllConnection)) {
            //        arrAllConnection.push(sCustomConnectionKey);
            //    }
            //}

            if (("Grid" !== selectedTileTypeValue) && bCustomConnectionStatus) {
                saveConfigurationData();
            }
            else {
                if ("Grid" !== selectedTileTypeValue) {
                    bCustomConnectionValidation = false;
                }
            }

            if (("Grid" === selectedTileTypeValue) && (gridCustomConnectionCount === gridCustomConnectionSuccessCount)) {
                var numberOfTilesInSection = $("#" + reportingTemplateSectionID + " .tile").length + $("#" + reportingTemplateSectionID + " .GridContainer").length;
                var presentTileId = ++numberOfTilesInSection;
                targetid = $("#gridSave_Btn").attr("targetid");
                if (targetid === "") {
                    targetid = reportName + "_" + reportingTemplateSectionID + "_" + "tile" + presentTileId;
                }
                var curGrid = { "WebPartId": targetID }
                saveGridConfigurationData(curGrid);
                //var editDiv = document.createElement("div");
                //editDiv.className = "bg_GridEdit";
                //editDiv.setAttribute("onclick", "editGrid($(this))");
                //$("#" + curGrid.WebPartId).prepend($(editDiv));
            }
        }

        if ((gridCustomConnectionCallBackCount === gridCustomConnectionCount) && ("Grid" === selectedTileTypeValue)) {
            // Resetting flags
            gridCustomConnectionCount = 0;
            gridCustomConnectionSuccessCount = 0;
            gridCustomConnectionCallBackCount = 0;
            gridElementCustomConnectionCheck.length = 0;
            bCustomConnectionValidation = false;
        }

        if (oConnectionStatus.length) {
            oConnectionStatus.text(oCustomConnectionResponse[0]);
            if (oConnectionStatus.hasClass("hide")) {
                oConnectionStatus.removeClass("hide");
                oConnectionStatus.addClass(sClassName);
            }
        }
        if (oConnectionStatusSection.length) {
            if (oConnectionStatusSection.hasClass("hide")) {
                oConnectionStatusSection.removeClass("hide");
            }
        }


    }
    else {
        // Resetting flags
        gridCustomConnectionCount = 0;
        gridCustomConnectionSuccessCount = 0;
        gridCustomConnectionCallBackCount = 0;
        gridElementCustomConnectionCheck.length = 0;
        bCustomConnectionValidation = false;

        // Showing custom error message
        if (oConnectionStatus.length) {
            oConnectionStatus.text("Something went wrong. Please try again!");
            if (oConnectionStatus.hasClass("hide")) {
                oConnectionStatus.removeClass("hide");
                oConnectionStatus.addClass("failure");
            }
        }
        if (oConnectionStatusSection.length) {
            if (oConnectionStatusSection.hasClass("hide")) {
                oConnectionStatusSection.removeClass("hide");
            }
        }
    }
}
// Sets the value in connection type dropdown
function setConnectionTypeValues() {
    data = JSON.parse(dicMiscItems["ConnectionType"]);
    connectionTypeValues = $.extend({}, connectionTypeValues, data);
}
// This function is added to be used on place of earlier saveconfigurationdata. 
// This internally calls saveconfigurationdata but based on the certain criteria.
// This is just to validate the custom connection (as it is a AJAX request), to avoid handling the logic of saveconfigurationdata method, we have gone by this route
function checkConnection() {
    // Save configuration
    if ("FreeText" === selectedTileTypeValue) {
        validateFreeTextConfigForm();
        saveConfigurationData();
    }
    // Request for validation of custom connection; save the connection and return the status
    var oDataConnection, sDataConnection, sSelectedDataConnection, sValidator;
    if ("Grid" === selectedTileTypeValue) {
        sDataConnection = selectedTileTypeValue + "ConnectionStringType_DD" + currentGridDisplayed;
        sValidator = "BtnValidateCustomConnection_" + selectedTileTypeValue + currentGridDisplayed;
    }
    else {
        sDataConnection = selectedTileTypeValue + "ConnectionStringType_DD";
        sValidator = "BtnValidateCustomConnection_" + selectedTileTypeValue;
    }
    oDataConnection = $('#' + sDataConnection);
    if (oDataConnection.length) {
        sSelectedDataConnection = oDataConnection.val();

        if ("NewConnectionRequest" === sSelectedDataConnection) {
            bCustomConnectionValidation = true;
            //var updatedOnClickAttribute = $('#' + sValidator).attr('onclick').replace("No", "Yes");
            //$('#' + sValidator).attr('onclick', updatedOnClickAttribute).click();
        }
        else {
            // call save configuration
            //saveConfigurationData();
            // User is using existing available connections
            bCustomConnectionValidation = false;
        }

        // Check the selected tile and call its corresponding validation function to validate the configuration popup/ form
        if (selectedTileTypeValue == dataTileValue) {
            validateDataConfigForm(); // Function for validating the data form
        } else if (selectedTileTypeValue == chartTileValue) {
            validateChartConfigForm(); // Function for validating the chart form
        } else if (selectedTileTypeValue == listTileValue) {
            validateListConfigForm(); // Function for validating the list form
        } else if (selectedTileTypeValue == freeTextTileValue) {
            validateFreeTextConfigForm(); // Function for validating the list form
        } else if (selectedTileTypeValue == gridTextTileValue) {
            validateGridConfigForm(); // Function for validating the list form
        }
    }
    focusOnDeselectedItem();
}

function loadConnectionString(response) {
    var oDicMisc = JSON.parse(response);

    var connections = JSON.parse(oDicMisc["PopupConnections"]);
    var allConnections = {
        "0": "------ Select ------"
    }
    allConnections = $.extend({}, allConnections, connections)
    connectionStringValues = allConnections;
    //getConnectionStringValues();

    bindDropdown(eleDataConnectionString_DD, connectionStringValues);
    bindDropdown(eleListConnectionString_DD, connectionStringValues);
    bindDropdown(eleChartConnection_DD, connectionStringValues);

    for (var iGrid = 0; iGrid <= totalGridCount; iGrid++) {
        bindDropdown($('#GridConnectionString_DD' + iGrid), connectionStringValues);
    }
}

// End of custom connection

function validateDropdown(objId) {
    var isValid = true; //Initialize isValid flag to true
    var oConnectionStatus, oCustomConnectionSection, allowedInitiator, oConnectionStatusSection, oCustomConnectionFName, oCustomConnectionString, oConnectionType;
    //Check for the selected state of the dropdown by its value
    var CurrentValue = $(objId).val();
    var oInitiatorID = $(objId)[0].id;


    if ("Grid" === selectedTileTypeValue) {
        var iRequestorIDLength = oInitiatorID.length;
        var iStart = oInitiatorID.lastIndexOf("_DD");
        var iController;
        if (-1 !== iStart) {
            iController = oInitiatorID.substring(iStart + 3, iRequestorIDLength);
        }
        else {
            iController = currentGridDisplayed;
        }

        oConnectionStatus = $('#CustomConnectionStatus' + '_' + selectedTileTypeValue + iController);
        oCustomConnectionSection = $('#CustomConnectionConfiguration' + '_' + selectedTileTypeValue + iController);
        allowedInitiator = selectedTileTypeValue + "ConnectionStringType_DD" + iController;
        oConnectionStatusSection = $('#CustomConnectionStatusSection' + '_' + selectedTileTypeValue + iController);
        oCustomConnectionFName = $('#CustomConnectionConfig' + '_' + selectedTileTypeValue + iController);
        oCustomConnectionString = $('#CustomConnectionNameConfig' + '_' + selectedTileTypeValue + iController);
        oConnectionType = $('#ConnectionType_DD' + '_' + selectedTileTypeValue + iController);
    }
    else {
        oConnectionStatus = $('#CustomConnectionStatus' + '_' + selectedTileTypeValue);
        oCustomConnectionSection = $('#CustomConnectionConfiguration' + '_' + selectedTileTypeValue);
        allowedInitiator = selectedTileTypeValue + "ConnectionStringType_DD";
        oConnectionStatusSection = $('#CustomConnectionStatusSection' + '_' + selectedTileTypeValue);
        oCustomConnectionFName = $('#CustomConnectionConfig' + '_' + selectedTileTypeValue);
        oCustomConnectionString = $('#CustomConnectionNameConfig' + '_' + selectedTileTypeValue);
        oConnectionType = $('#ConnectionType_DD' + '_' + selectedTileTypeValue);
    }
    if (CurrentValue == "0" || CurrentValue == 0 || (null === CurrentValue)) {
        $(objId).attr("Title", errorQueryMessages[0]); //Update element title with the error message
        isValid = false; // Update isValid flag
    }
    changeElementColour(objId, isValid); // Update the element color and get the validity status
    // Added for custom connection. Logic to enable/disable custom connection config section
    if (CurrentValue === "NewConnectionRequest") {
        // Clearing previous test connection status and hiding the control
        if (oConnectionStatus.length) {
            oConnectionStatus.text("");
            // Hide the message section
            if (!oConnectionStatus.hasClass("hide")) {
                oConnectionStatus.addClass("hide");
            }
            if (oConnectionStatus.hasClass("failure")) {
                oConnectionStatus.removeClass("failure");
            }
            if (oConnectionStatus.hasClass("success")) {
                oConnectionStatus.removeClass("success")
            }
        }
        // Enable the custom connection section
        if (oCustomConnectionSection.hasClass("hide")) {
            oCustomConnectionSection.removeClass("hide");
        }

        if (!oConnectionStatusSection.hasClass("hide")) {
            oConnectionStatusSection.addClass("hide")
        }
    }
    else {

        if (allowedInitiator === oInitiatorID) {
            if (!oCustomConnectionSection.hasClass("hide")) {
                oCustomConnectionSection.addClass("hide");
            }
            if (!oConnectionStatusSection.hasClass("hide")) {
                oConnectionStatusSection.addClass("hide")
            }

            if (oConnectionStatus.length) {
                oConnectionStatus.text("");
                // Hide the message section
                if (!oConnectionStatus.hasClass("hide")) {
                    oConnectionStatus.addClass("hide");
                }
                if (oConnectionStatus.hasClass("failure")) {
                    oConnectionStatus.removeClass("failure");
                }
                if (oConnectionStatus.hasClass("success")) {
                    oConnectionStatus.removeClass("success")
                }
            }

            if (oCustomConnectionFName) {
                oCustomConnectionFName.val("");
                changeElementColour(oCustomConnectionFName, true);
            }

            if (oCustomConnectionString) {
                oCustomConnectionString.val("");
                changeElementColour(oCustomConnectionString, true);
            }

            if (oConnectionType) {
                oConnectionType.val("0");
                changeElementColour(oConnectionType, true);
            }
        }
    }
    return isValid;
}


function bindDropdown(objId, dataValues) {
    objId.empty(); // Clear the existing data from the dropdown
    $.each(dataValues, function (key, value) {
        if (typeof value === "object" && Array.isArray(value)) {
            objId.append("<optgroup label='" + key.toString() + "'>")
            if (typeof value === "object") {
                $.each(value, function (innerKey, innerValue) {
                    var sKey, sValue;
                    $.each(innerValue, function (innerMostKey, innerMostValue) {
                        if (innerMostKey === "key") {
                            sKey = innerMostValue.trim();
                        }
                        if (innerMostKey === "value") {
                            sValue = innerMostValue.trim();
                        }
                    });
                    if ("NewConnectionRequest" !== sKey) {
                        objId.append($("<option></option>")
                            .attr("value", sKey)
                            .text(sValue));
                    }
                });
                /*objId.append($("<option></option>")
                            .attr("value", "NewConnectionRequest")
                            .text("Create a new data connection"));*/
                objId.append("</optgroup>");
            }
        } else {
            objId.append($("<option></option>")
            .attr("value", key.trim())
            .text(value.trim()));
        }
    });
}

function bindPortfoliosDropdown(objId, dataValues) {
    objId.empty(); // Clear the existing data from the dropdown
    $.each(dataValues, function (key, value) {
        if (typeof value === "object") {
            objId.append($("<option></option>")
            .attr("value", key.trim())
            .text(key.trim()));
        } else {
            objId.append($("<option></option>")
            .attr("value", key.trim())
            .text(value.trim()));
        }
    });
}


function bindConnectionStringsDropdown(objId, dataValues, selectedPortfolio) {
    objId.empty(); // Clear the existing data from the dropdown
    if (selectedPortfolio) {
        $.each(dataValues, function (key, value) {
            if (typeof value === "object" && Array.isArray(value) && key === selectedPortfolio) {
                if (typeof value === "object") {
                    $.each(value, function (innerKey, innerValue) {
                        var sKey, sValue;
                        $.each(innerValue, function (innerMostKey, innerMostValue) {
                            if (innerMostKey === "key") {
                                sKey = innerMostValue.trim();
                            }
                            if (innerMostKey === "value") {
                                sValue = innerMostValue.trim();
                            }
                        });
                        if ("NewConnectionRequest" !== sKey) {
                            objId.append($("<option></option>")
                            .attr("value", sKey)
                            .text(sValue));
                        }
                    });
                    /*objId.append($("<option></option>")
                            .attr("value", "NewConnectionRequest")
                            .text("Create a new data connection"));*/
                }
            } else if (key === "0") {
                objId.append($("<option></option>")
                .attr("value", key.trim())
                .text(value.trim()));
            }
        });
    } else {
        $.each(dataValues, function (key, value) {
            if (key === "0") {
                objId.append($("<option></option>")
                .attr("value", key.trim())
                .text(value.trim()));
                return false;
            }
        });
    }
}

function bindFilterDropdown(objId, dataValues) {
    objId.empty(); // Clear the existing data from the dropdown
    for (var i = 0 ; i < dataValues.length; i++) {
        // Appends the dropdown with the data from array 
        var filterId = Filterslistids[i].ID;
        var filterName = Filterslistids[i].filtername;
        var displayName;
        if (typeof (Filterslistids[i].DisplayName) !== "undefined") {
            displayName = Filterslistids[i].DisplayName;
        } else {
            displayName = filterName;
        }
        var publishingTag = Filterslistids[i].PublishTag;
        if (publishingTag !== "" && typeof publishingTag !== "undefined") {
            $("<option>", { value: filterId }).attr({ FilterName: filterName }).attr({ title: publishingTag.toUpperCase() }).text(displayName + " (" + publishingTag.toUpperCase() + ")").appendTo(objId);
        }
    }
}
function enableDisableElements(objId, status) {   // Check the object visibility status
    if (status) {
        // Remove disable property and update the css for the element
        objId.removeAttr("disabled").removeClass("DisableInputControls").addClass("EnableInputControls");
    } else {
        // Add disable property and update the css for the element
        objId.attr("disabled", "disabled").removeClass("EnableInputControls").addClass("DisableInputControls");
    }
}
$(document).keydown(function (objEvent) {
    if (objEvent.keyCode == 9) {  //tab pressed
        objEvent.preventDefault(); // stops its action
    }
})
function changeElementColour(objId, isValid) {
    functionCallCounter++;  // Increments when ever the fuction iscalled and is used while validating the form after clicking submit button

    // Checks the valid state of the input field
    if (isValid) { // Valid
        $(objId).removeClass('invalidElement').addClass('validElement'); // Apply valid css styles for the input element
        $(objId).attr("Title", ""); //Clear the valaue of Title attribute
        validCaseCounter++; // Increments for every valid case and counter will be used while validating the form after clicking submit button
        isCurrentFieldValid = true;
    }
    else { // Invalid
        $(objId).removeClass('validElement').addClass('invalidElement');  // Apply Invalid styles for the input element
        isCurrentFieldValid = false;
    }
}
function changeTooltipMode(Object) {
    var selectedDataFormat = eleChartDataFormat_DD.val();
    if (!selectedDataFormat) {
        selectedDataFormat = '';
    }

    //RT: Fix for undefined variable
    var selectedChart = eleTileChartType_DD.val() ? eleTileChartType_DD.val() : "";
    if (
        (selectedChart === 'ssbar') || (selectedChart === 'zingssbar') || (selectedChart === 'pie') || (selectedChart === 'zingpie') || (selectedChart === 'zinginnerring') || (selectedChart === 'zingpiewithmetric')
        || (
            (selectedDataFormat.toLowerCase() === 'percentage') && ((selectedChart === 'hbar') || (selectedChart === 'bar') || (selectedChart === 'zinghbar') || (selectedChart === 'zingbar')
            ))
        ) {
        enableDisableElements(eleChartValueFormat_DD, true);
        enableDisableElements(eleChartTooltipFormat, true);
        enableDisableElements(eleChartLabelFormat, true);
        $("#divChartTooltipFormat").show();
        $("#divChartLabelFormat").show();
        $("#divChartValueFormat_DD").show();

        if ((selectedChart !== 'ssbar')
            && (selectedChart !== 'zingssbar')
            && (selectedChart !== 'pie')
            && (selectedChart !== 'zingpie')
            && (selectedChart !== 'zinginnerring')
            && (selectedChart !== 'zingpiewithmetric')
            && (selectedChart !== 'zingdoughnut')) {
            enableDisableElements(eleChartValueQuery, true);
            $("#divChartValueQuery").show();
        }
    }
    else {
        enableDisableElements(eleChartValueQuery, false);
        enableDisableElements(eleChartValueFormat_DD, false);
        enableDisableElements(eleChartTooltipFormat, false);
        enableDisableElements(eleChartLabelFormat, false);
        $("#divChartTooltipFormat").hide();
        $("#divChartLabelFormat").hide();
        $("#divChartValueQuery").hide();
        $("#divChartValueFormat_DD").hide();

    }
}
/*This function is called to build all the stop light text boxes and drop down for pre saved configurations*/
function BuildStopLightTextBoxes(TileNumber, StopLightRules, StopLightColors, StopLightIcons) {
    var TotalRules = StopLightRules.length, CounterR = 0, DOM = $('#stopLightRuleBody' + TileNumber), Element, NewRowID, RuleMainBody, RuleHeader, RuleTextBox, ColorMainBody, ColorHeader, ColorTextBox, ColorPickerDiv;
    $('#stopLightRuleCounter' + TileNumber).val(TotalRules);
    for (CounterR = 1; CounterR < TotalRules; CounterR++) {
        NewRowID = TileNumber + '' + (CounterR + 1);
        NewRow = document.createElement('div');
        NewRow.id = 'divRow' + NewRowID;
        NewRow.innerHTML = createNewRule(NewRowID, StopLightRules[CounterR], StopLightColors[CounterR], StopLightIcons[CounterR], LayoutPath, (CounterR + 1));
        DOM.append(NewRow);
    }
    if (TotalRules === 1) {
        $('#RemoveStopLightRule' + TileNumber).hide();
    }
    else {
        $('#RemoveStopLightRule' + TileNumber).show();
    }
}
/*This function is used to create a new stop light rule*/
function createNewRule(NewRowID, Rule, Color, Icon, LayoutPath, RuleNo) {
    RuleMainBody = document.createElement('div');
    RuleMainBody.className = 'divRow';
    RuleHeader = document.createElement('div');
    RuleHeader.className = 'divCellLeft';
    RuleHeader.innerHTML = 'Rule ' + RuleNo;
    RuleTextBox = document.createElement('div');
    RuleTextBox.className = 'divCellRight';
    RuleTextBox.innerHTML = "<input class='DivTextBox' type='text' id='DataStopLightRule" + NewRowID + "' class='DataStopLightRule' value='" + Rule + "' onkeyup='validateText(this, \"Rule\", false, \"-1\", \"-1\");'/>";
    RuleMainBody.appendChild(RuleHeader);
    RuleMainBody.appendChild(RuleTextBox);
    ColorMainBody = document.createElement('div');
    ColorMainBody.className = 'divRow';
    ColorHeader = document.createElement('div');
    ColorHeader.className = 'divCellLeft';
    ColorHeader.innerHTML = '';
    ColorTextBox = document.createElement('div');
    ColorTextBox.className = 'divCellRight';
    ColorTextBox.innerHTML = "<input class='DivTextBoxSmall' type='text' id='DataStopLightColor" + NewRowID + "' class='DataStopLightColor' value='" + Color + "' readonly=true'/>";
    ColorPickerDiv = document.createElement('div');
    ColorPickerDiv.className = 'PickerIconsDiv';
    ColorPickerDiv.innerHTML = "<img src='" + webAPIurl + LayoutPath + "/Images/ColorPicker_Black.png' class='HelpIcons' title='Color Picker' alt='Color Picker' onclick='loadColorPicker(this,\"DataStopLightColor" + NewRowID + "\");'/>"

    ColorTextBox.appendChild(ColorPickerDiv);

    ColorMainBody.appendChild(ColorHeader);
    ColorMainBody.appendChild(ColorTextBox);




    IconMainBody = document.createElement('div');
    IconMainBody.className = 'divRow';
    IconHeader = document.createElement('div');
    IconHeader.className = 'divCellLeft';
    IconHeader.innerHTML = '';
    IconTextBox = document.createElement('div');
    IconTextBox.className = 'divCellRight';
    IconTextBox.innerHTML = "<input class='DivTextBoxSmall' type='text' id='DataStopLightIcon" + NewRowID + "' class='DataStopLightIcon' value='" + Icon + "' readonly=true'/>";
    IconPickerDiv = document.createElement('div');
    IconPickerDiv.className = 'PickerIconsDiv';
    IconPickerDiv.innerHTML = "<img src='" + webAPIurl + LayoutPath + "/Images/Grid_Black.png' class='HelpIcons' title='Icon Picker' alt='Icon Picker' onclick='loadIconPicker(this,\"DataStopLightIcon" + NewRowID + "\",\"true\");' /></div>";


    IconTextBox.appendChild(IconPickerDiv);

    IconMainBody.appendChild(IconHeader);
    IconMainBody.appendChild(IconTextBox);



    return RuleMainBody.outerHTML + ColorMainBody.outerHTML + IconMainBody.outerHTML;
}
/*This function is called when + button is clicked to add stop light rule*/
function AddStopLightRule(TileNumber) {
    var TotalCurrentRules = $('#stopLightRuleCounter' + TileNumber).val(), DOM = $('#stopLightRuleBody' + TileNumber);
    TotalCurrentRules++;
    var NewRowID = TileNumber + '' + TotalCurrentRules;
    var NewRow = document.createElement('Div');
    NewRow.id = 'divRow' + NewRowID;
    var nhtml = createNewRule(NewRowID, '', '', '', LayoutPath, TotalCurrentRules);
    NewRow.innerHTML = nhtml;
    DOM.append(NewRow);
    $('#RemoveStopLightRule' + TileNumber).show();
    $('#stopLightRuleCounter' + TileNumber).val(TotalCurrentRules);
}
/*This function is called when - button is clicked to remove stop light rule*/
function RemoveStopLightRule(TileNumber) {
    var TotalCurrentRules = $('#stopLightRuleCounter' + TileNumber).val();
    if (TotalCurrentRules > 1) {
        var NewRowID = TileNumber + '' + TotalCurrentRules;
        $('#divRow' + NewRowID).remove();
        TotalCurrentRules--;
        $('#stopLightRuleCounter' + TileNumber).val(TotalCurrentRules); //setting the counter value of rules to one less
    }
    if (TotalCurrentRules === 1) {
        $('#RemoveStopLightRule' + TileNumber).hide();  //hide - image as no more row can be removed
    }

}
/*This function is used to validate text in stop rule field*/
function CheckValidityOfStopRules(TileNumber) {
    var TotalRules = $('#stopLightRuleCounter' + TileNumber).val(), NewRowID, RuleTextBox, ColorTextBox;
    for (CounterR = 1; CounterR <= TotalRules; CounterR++) {
        NewRowID = TileNumber + '' + CounterR;
        RuleTextBox = $('#DataStopLightRule' + NewRowID);
        validateText(RuleTextBox, "Rule", true, "-1", "-1");
        ColorTextBox = $('#DataStopLightColor' + NewRowID);
        validateText(ColorTextBox, "TitleText", true, "-1", "-1");
    }
}

/*Functions are for hide and show the Save And Reset Image for Data, Chart, HTML, List, Grid,*/

function displayConfigPopup() {
    $("#Save_Btn, #Reset_Btn").show();
    $("#Save_Btn").attr("onclick", "checkConnection()");
    //$("#Save_Btn").attr("onclick", "saveConfigurationData()");
    $("#Reset_Btn").attr("onclick", "clearConfigurationData()");

    $("#gridSave_Btn, #gridReset_Btn").hide();
    $("#gridSave_Btn, #gridReset_Btn").removeAttr("onclick");
}

function displayGridConfigPopup() {
    $("#Save_Btn, #Reset_Btn").hide();
    $("#Save_Btn, #Reset_Btn").removeAttr("onclick");

    $("#gridSave_Btn, #gridReset_Btn").show();
    //$("#gridSave_Btn").attr("onclick","saveGridConfigurationPopupData()" );
    $("#gridReset_Btn").attr("onclick", "clearConfigurationData()");
}
function showGridOverlay() {
    if (!isReportInEditMode) {
        $('body').append('<div id="mask"></div>');
        $('#mask').fadeIn(300);
        bDisplayOverlay = true;
        var tileObject = {};
        tileObject.LayoutSize = "4by4";
        tileObject.TileFlowOrder = "1";
        tileObject.fTileLiveStatus = true;
        var targetID = "";
        if (event.target.nextSibling !== null && event.target.nextSibling.className === "tiletext") {
            targetID = $(event.target).parent()[0].id;
        } else {
            targetID = $(event.target).parent().parent()[0].id.replace("dimensionDiv_", "");
        }
        isEditTile = true;
        tileObject.addTile = {}
        tileObject.addTile.column = "3";
        tileObject.addTile.row = "3";
        tileObject.TileHandle = targetID;
        tileObject.SectionHandle = targetID.split("_")[1];
        tileObject.TileType = "Grid";
        tileObject.XMLConfiguration = "";
        for (var i = 0; i < oTiles.length; i++) {
            if (oTiles[i].TileHandle === targetID) {
                tileObject.XMLConfiguration = oTiles[i].XMLConfiguration;//.replace("Visible=\"false\"", "Visible=\"true\"");//FinalConfigXML;
                break;
            }
        }
        var oCurGrid = new Grid();
        oCurGrid.WebPartId = tileObject.TileHandle;
        oCurGrid.Init(tileObject, true, "EditedConfiguration"); bDisplayOverlay = false;
    }
}

function rPopupClosebutton() {
    $('.popupStyle').addClass('hide');
    $('#gridContent').empty();
}
function toggleOverlay(element) {
    isOverlayEnabled = (element.checked === undefined || element.checked === null ? element.is(":checked") : element.checked);
    if (!isOverlayEnabled) {
        $("#GridDiv *").each(function () {
            if ($(this).css('box-shadow').indexOf('#ff0000') !== -1) {
                $(this).css('border-color', '#BABABA').css('box-shadow', '0px 0px 3px #FFFFFF'); // Apply valid css styles for the input element
                $(this).attr("Title", ""); //Clear the valaue of Title attribute
            }
        });
        overlayParentTile = "";
    } else {
        overlayParentTile = $(".selectedPivotTab").text();
        tileTypeClicked('Grid'); displayGridConfigPopup();
    }
}

function focusOnDeselectedItem() {
    $(".invalidElement:first").focus();
}
(() => {
  var completedReportConfig = new PlugIn.Library(new Version("1.0"));

  completedReportConfig.tagsToExclude = () => {
    // Edit the below to configure the tags that should be ignored -
    // tasks that have these tags will be excluded from the report
    // THIS SHOULD BE AN ARRAY OF TAGS
    return [
      tagNamed("Activity Type").tagNamed("⏳ Waiting"),
      tagNamed("✓"),
      tagNamed("Repeating/Routine")
        .tagNamed("↻")
        .tagNamed("Repeating Project")
        .tagNamed("⥁"),
    ];
  };

  completedReportConfig.dayOneJournalName = () => {
    // Configure the name of the Day One Journal for the report
    // to be sent to below
    // THIS SHOULD BE A STRING
    return "Done Today";
  };

  completedReportConfig.showTopLevelOnly = () => {
    // If this option is set to true, the report will stop at the
    // top-level task that has been completed; e.g if a task or project
    // "Buy groceries" has subtasks "Buy potatoes" and "Buy milk", only
    // "Buy groceries" will be included in the final list.
    // If this is set to false, the report will include all completed tasks
    // that do not have children, or whose children are all hidden.
    // THIS SHOULD BE BOOLEAN (TRUE OR FALSE)
    return true;
  };

  completedReportConfig.includeFolderHeadings = () => {
    // If this option is set to true, the report will include folder headings
    // THIS SHOULD BE BOOLEAN (TRUE OR FALSE)
    return true;
  };

  completedReportConfig.includeProjectHeadings = () => {
    // If this option is set to true, the report will include project headings
    // THIS SHOULD BE BOOLEAN (TRUE OR FALSE)
    return false;
  };

  return completedReportConfig;
})();

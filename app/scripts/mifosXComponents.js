define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'clientStatus',
            'LoggedInUser',
            'roleMap',
            'Langs'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService',
            'NotificationResponseHeaderProvider'
        ],

        controllers: [
            'main/MainController',
            'main/LoginFormController',
            'main/TaskController',
            'main/SearchController',
            'main/NavigationController',
            'collection/ProductiveCollectionSheetController',
            'collection/CollectionSheetController',
            'collection/IndividualCollectionSheetController',
            'loanAccount/ViewLoanDetailsController',
            'loanAccount/AdjustRepaymentSchedule',
            'loanAccount/NewLoanAccAppController',
            'loanAccount/LoanAccountActionsController',
            'loanAccount/AddLoanChargeController',
            'loanAccount/AddLoanCollateralController',
            'loanAccount/AssignLoanOfficerController',
            'loanAccount/EditLoanAccAppController',
            'loanAccount/ViewLoanCollateralController',
            'loanAccount/ViewLoanCollateralDataController',
            'loanAccount/EditLoanCollateralController',
            'loanAccount/ViewLoanChargeController',
            'loanAccount/EditLoanChargeController',
            'loanAccount/NewJLGLoanAccAppController',
            'loanAccount/LoanDocumentController',
            'loanAccount/ViewLoanTransactionController',
            'loanAccount/LoanScreenReportController',
            'loanAccount/RescheduleLoansRequestController',
            'loanAccount/ViewRescheduleRequestController',
            'loanAccount/ApproveLoanRescheduleRequestController',
            'loanAccount/RejectLoanRescheduleRequestController',
            'loanAccount/PreviewLoanRepaymentScheduleController',
            'loanAccount/LoanForeclosureController',
            'loanAccount/CreditBureauSummaryController',
            'loanAccount/CreditReportFetchThitsaWorksController',
            'loanAccount/CreditReportUploadThitsaWorksController',
            'groups/AssignStaffController',
            'client/ClientController',
            'client/CreateClientCollateralController',
            'client/EditClientCollateralController',
            'client/ViewClientCollateralController',
            'client/ViewAllClientCollateralsController',
            'client/EditClientController',
            'client/ViewClientController',
            'client/CreateClientController',
            'client/TransactionClientController',
            'client/ClientActionsController',
            'client/ClientDocumentController',
            'client/ClientIdentifierController',
            'client/UploadClientIdentifierDocumentController',
            'client/ClientScreenReportController',
            'client/AddNewClientChargeController',
            'client/PayClientChargeController',
            'client/ViewClientChargeController',
            'client/ClientChargesOverviewController',
            'client/SurveyController',
            'client/ViewClientSurveyController',
            'product/LoanProductController',
            'product/CreateLoanProductController',
            'product/CreateSavingProductController',
            'product/EditSavingProductController',
            'product/EditLoanProductController',
            'product/ChargeController',
            'product/ViewChargeController',
            'product/floatingrates/FloatingRatesController',
            'product/floatingrates/CreateFloatingRateController',
            'product/floatingrates/ViewFloatingRateController',
            'product/floatingrates/EditFloatingRateController',
            'product/SavingProductController',
            'product/ViewSavingProductController',
            'product/ViewSavingsProductFloatingInterestRatesController',
            'product/SavingsProductFloatingInterestRateController',
            'product/ShareProductController',
            'product/ViewShareProductController',
            'product/CreateShareProductController',
            'product/EditShareProductController',
            'product/ShareProductDividendController',
            'product/ViewShareProductDividendController',
            'product/ShareProductActionsController',
            'product/ViewLoanProductController',
            'product/FixedDepositProductController',
            'product/ViewFixedDepositProductController',
            'product/CreateFixedDepositProductController',
            'product/EditFixedDepositProductController',
            'product/RecurringDepositProductController',
            'product/ViewRecurringDepositProductController',
            'product/CreateRecurringDepositProductController',
            'product/EditRecurringDepositProductController',
            'product/InterestRateChartController',
            'product/CreateInterestRateChartController',
            'product/EditInterestRateChartController',
            'product/CollateralController',
            'product/CreateCollateralController',
            'product/ViewCollateralController',
            'product/EditCollateralController',
            'user/UserController',
            'user/UserFormController',
            'user/UserSettingController',
            'user/UserListController',
            'user/ViewUserController',
            'organization/RoleController',
            'organization/ViewRoleController',
            'organization/CreateRoleController',
            'organization/MakerCheckerController',
            'organization/OfficesController',
            'organization/ViewOfficeController',
            'organization/CreateOfficeController',
            'organization/EditOfficeController',
            'organization/CurrencyConfigController',
            'organization/CreateUserController',
            'organization/EditUserController',
            'organization/ViewEmployeeController',
            'organization/EditEmployeeController',
            'organization/EmployeeController',
            'organization/CreateEmployeeController',
            'organization/ManageFundsController',
            'organization/ViewPaymentTypeController',
            'organization/CreatePaymentTypeController',
            'organization/EditPaymentTypeController',
            'accounting/provisioning/CreateProvisoningEntriesController',
            'accounting/provisioning/ViewProvisioningEntryController',
            'accounting/provisioning/ViewAllProvisoningEntriesController',
            'accounting/provisioning/ViewProvisioningJournalEntriesController',
            'accounting/AccFreqPostingController',
            'accounting/AccCoaController',
            'accounting/AccCreateGLAccountController',
            'accounting/AccViewGLAccountContoller',
            'accounting/AccEditGLAccountController',
            'accounting/ViewTransactionController',
            'accounting/JournalEntryController',
            'accounting/SearchTransactionController',
            'accounting/AccountingClosureController',
            'accounting/ViewAccountingClosureController',
            'accounting/AccountingRuleController',
            'accounting/AccCreateRuleController',
            'accounting/AccEditRuleController',
            'accounting/ViewAccRuleController',
            'accounting/FinancialActivityMappingsController',
            'accounting/AddFinancialMappingController',
            'accounting/ViewFinancialActivityController',
            'accounting/EditFinancialActivityMappingController',
            'accounting/PeriodicAccrualAccountingController',
            'system/CodeController',
            'system/EditCodeController',
            'system/ViewCodeController',
            'system/AddCodeController',
            'system/HookController',
            'system/ViewHookController',
            'system/CreateHookController',
            'system/EditHookController',
            'system/ViewDataTableController',
            'system/DataTableController',
            'system/ReportsController',
            'system/ViewReportController',
            'system/CreateReportController',
            'system/EditReportController',
            'system/CreateDataTableController',
            'system/EditDataTableController',
            'system/MakeDataTableEntryController',
            'system/DataTableEntryController',
            'system/SchedulerJobsController',
            'system/ViewSchedulerJobController',
            'system/EditSchedulerJobController',
            'system/EntityToEntityMappingController',
            'system/ViewSchedulerJobHistoryController',
            'system/AccountNumberPreferencesController',
            'system/ViewAccountNumberPreferencesController',
            'system/AddAccountNumberPreferencesController',
            'system/EditAccountNumberPreferencesController',
            'system/ManageSurveysController',
            'system/EditSurveyController',
            'system/ViewSurveyController',
            'organization/HolController',
            'organization/ViewHolController',
            'organization/EditHolidayController',
            'organization/AddHolController',
            'reports/ViewReportsController',
            'organization/EditHolidayController',
            'organization/EditWorkingDaysController',
            'organization/EditPasswordPreferencesController',
            'reports/RunReportsController',
            'reports/XBRLController',
            'reports/XBRLReportController',
            'savings/CreateSavingAccountController',
            'savings/ViewSavingDetailsController',
            'savings/ViewSavingDepositAccrualTransactionController',
            'savings/HoldSavingsAccountController',
            'savings/HoldSavingsTransactionController',
            'shares/CreateShareAccountController',
            'shares/ViewShareAccountController',
            'shares/EditShareAccountController',
            'shares/ShareAccountActionsController',
            'groups/GroupController',
            'groups/ViewGroupController',
            'groups/AttachMeetingController',
            'groups/EditMeetingController',
            'groups/EditMeetingBasedOnMeetingDatesController',
            'savings/EditSavingAccountController',
            'savings/SavingAccountActionsController',
            'savings/ListOnHoldTransactionController',
            'accounttransfers/ViewAccountTransferDetailsController',
            'accounttransfers/MakeAccountTransferController',
            'accounttransfers/CreateStandingInstructionController',
            'accounttransfers/ListStandingInstructionController',
            'accounttransfers/ListTransactionsController',
            'accounttransfers/EditStandingInstructionController',
            'accounttransfers/ViewStandingInstructionController',
            'accounttransfers/StandingInstructionsHistoryController',
            'savings/ViewSavingsTransactionController',
            'savings/AddNewSavingsChargeController',
            'savings/ViewSavingChargeController',
            'savings/AssignSavingsOfficerController',
            'savings/UnAssignSavingsOfficerController',
            'deposits/fixed/FixedDepositAccountActionsController',
            'deposits/fixed/ViewFixedDepositAccountDetailsController',
            'deposits/fixed/CreateFixedDepositAccountController',
            'deposits/fixed/EditDepositAccountController',
            'deposits/fixed/AddNewFixedDepositChargeController',
            'deposits/fixed/ViewFixedDepositTransactionController',
            'deposits/fixed/FixedDepositAccountTopUpController',
            'deposits/recurring/RecurringDepositAccountActionsController',
            'deposits/recurring/ViewRecurringDepositAccountDetailsController',
            'deposits/recurring/CreateRecurringDepositAccountController',
            'deposits/recurring/EditRecurringDepositAccountController',
            'deposits/recurring/AddNewRecurringDepositChargeController',
            'deposits/recurring/ViewRecurringDepositTransactionController',
            'groups/CreateGroupController',
            'groups/EditGroupController',
            'groups/GroupAttendanceController',
            'groups/CloseGroupController',
            'groups/AddRoleController',
            'groups/MemberManageController',
            'groups/TransferClientsController',
            'centers/CenterController',
            'centers/ViewCenterController',
            'centers/CreateCenterController',
            'centers/EditCenterController',
            'centers/CloseCenterController',
            'centers/CenterAttendanceController',
            'centers/ManageGroupMembersController',
            'product/CreateChargeController',
            'product/EditChargeController',
            'configurations/GlobalConfigurationController',
            'configurations/EditConfigurationController',
            'product/productmix/ProductMixController',
            'product/productmix/ViewProductMixController',
            'product/productmix/AddProductMixController',
            'organization/BulkLoanReassignmentController',
            'system/AuditController',
            'system/ViewAuditController',
            'template/TemplateController',
            'template/CreateTemplateController',
            'template/ViewTemplateController',
            'template/EditTemplateController',
            'loanAccount/GuarantorController',
            'loanAccount/EditGuarantorController',
            'loanAccount/ListGuarantorController',
            'main/ViewCheckerinboxController',
            'main/ExpertSearchController',
            'main/RichDashboard',
            'main/ProfileController',
            'main/ViewMakerCheckerTaskController',
            'main/AdHocQuerySearchController',
            'accounting/AccOGMController',
            'organization/cashmgmt/TellersController',
            'organization/cashmgmt/CreateTellerController',
            'organization/cashmgmt/ViewTellerController',
            'organization/cashmgmt/EditTellerController',
            'organization/cashmgmt/ViewCashiersForTellerController',
            'organization/cashmgmt/CreateCashierForTellerController',
            'organization/cashmgmt/ViewCashierController',
            'organization/cashmgmt/EditCashierController',
            'organization/cashmgmt/CashierTransactionsController',
            'organization/cashmgmt/CashierFundsAllocationSettlementController',
            'organization/provisioning/CreateProvisioningCriteriaController',
            'organization/provisioning/ViewAllProvisoningCriteriaController',
            'organization/provisioning/ViewProvisioningCriteriaController',
            'organization/provisioning/EditProvisioningCriteriaController',
            'accounting/DefineOpeningBalancesController',
            'configurations/ExternalServicesController',
            'configurations/EditExternalServicesConfigurationController',
            'configurations/ViewExternalServicesController',
            'configurations/ViewTwoFactorConfigController',
            'configurations/EditTwoFactorConfigController',
            'product/tax/CreateTaxComponentController',
            'product/tax/ViewTaxComponentController',
            'product/tax/EditTaxComponentController',
            'product/tax/TaxComponentController',
            'product/tax/CreateTaxGroupController',
            'product/tax/ViewTaxGroupController',
            'product/tax/EditTaxGroupController',
            'product/tax/TaxGroupController',
            'configurations/EditAddressController',
            'configurations/AddressFormController',
            'organization/smscampaigns/SmsCampaignsController',
            'organization/smscampaigns/CreateSmsCampaignController',
            'organization/smscampaigns/ViewSmsCampaignController',
            'organization/smscampaigns/EditSmsCampaignController',
            'organization/entitydatatablechecks/EntityDatatableChecksController',
            'configurations/AddressFormController',
            'configurations/ViewCreditBureauSummaryController',
            'configurations/AddNewCreditBureauController',
            'configurations/MapCreditBureauToLpController',
            'configurations/CreditBureauConfigurationController',
            'configurations/AddNewCreditBureauConfigurationController',
            'configurations/EditCreditBureauConfigurationController',
            'notification/NotificationsController',
            'selfservice/CreateSelfServiceUserController',
            'notification/NotificationsController',
            'configurations/AddressFormController',
            'client/EditFamilyMemberController',
            'client/AddFamilyMembersController',
            'organization/BulkImportOfficesController',
            'client/BulkImportClientsController',
			'centers/BulkImportCentersController',
			'organization/BulkImportEmployeeController',
			'loanAccount/BulkImportLoanAccountsController',
            'loanAccount/BulkImportLoanRepaymentController',
            'loanAccount/BulkImportGuarantorController',
			'savings/BulkImportSavingsAccountController',
			'savings/BulkImportSavingsAccountsTransactionsController',
			'groups/BulkImportGroupController',
			'deposits/recurring/BulkImportRecurringDepositController',
            'deposits/recurring/BulkImportRecurringDepositTransactionsController',
			'shares/BulkImportShareAccountController',
			'deposits/fixed/BulkImportFixedDepositAccountsController',
			'deposits/fixed/BulkImportFixedDepositTransactionsController',
			'accounting/BulkImportCOAController',
			'accounting/BulkImportJournalEntriesController',
			'user/BulkImportUsersController',
			'adhocquery/AdHocQueryListController',
            'adhocquery/CreateAdHocQueryController',
            'adhocquery/ViewAdHocQueryController',
            'adhocquery/EditAdHocQueryController',
            'product/RateController',
            'product/CreateRateController',
            'product/ViewRateController',
            'product/EditRateController',
            'loanAccount/NewGLIMAccountController',
            'loanAccount/ViewGLIMAccountController',
            'loanAccount/GlimLoanAccountActionsController',
            'savings/CreateGSIMAccountController',
            'savings/ViewGSIMaccountController',
            'savings/GSIMAccountActionsController',
            'savings/EditGSIMAccountController',
            'savings/AddNewMemberToGSIMController',
            'savings/AddMemberToGSimAccountController',
            'client/AddBusinessOwnersController',
            'client/EditBusinessOwnersController',
            'client/AddEmploymentInfoController',
            'client/EditEmploymentInfoController',
            'client/BusinessOwnerDocumentController',
            'product/ValidationLimitController',
            'product/CreateValidationLimitController',
            'product/EditValidationLimitController',
            'product/ViewValidationLimitController',
            'deposits/fixed/FixedDepositAccountPartialLiquidationController'
        ],
        filters: [
            'StatusLookup',
            'DateFormat',
            'DayMonthFormat',
            'YesOrNo',
            'UrlToString',
            'sort',
            'DotRemove',
            'FormatNumber',
            'TranslateDataTableColumn',
            'SearchFilter',
            'AddUpTotalFor'
        ],
        directives: [
            'DialogDirective',
            'PanelDirective',
            'BigPanelDirective',
            'OnBlurDirective',
            'LateValidateDirective',
            'TreeviewDirective',
            'CkEditorDirective',
            'AutofocusDirective',
            'SummaryDirective',
            'FormValidateDirective',
            'FormSubmitValidateDirective',
            'ApiValidationDirective',
            'HasPermissionDirective',
            'ActivitiesDisplayPanelDirective',
            'ScrollbarTopDirective',
            'ChosenComboboxDirective',
            'NumberFormatDirective',
            'SuccessfulResponsesDirective',
            'TabsPersistenceDirective',
            'ScrollableDirective',
            'DecimalDirective'
        ]
    };

    return function() {
      console.log();
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes',
            'initialTasks',
            'webstorage-configuration'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});

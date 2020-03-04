export const surveys = {
    content: [

        {
            name: "A",

            body: [
                {
                    component: "text",
                    page: 1
                },
                {
                    component: "text",
                    page: 1
                },
                {
                    component: "text",
                    page: 1
                },
                {
                    component: "household",
                    page: 1
                },

                {
                    component: "multiple-choice-other",
                    options: [
                        "Friend or neighbor (word of mouth)",
                        "Flyer or Publication",
                        "Social worker",
                        "Internet search",
                    ],
                    page: 2
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Less than one year",
                        "1 to 3 years",
                        "3 to 5 years",
                        "5 to 10 years",
                        "More than 10 years"
                    ],
                    page: 2
                },
                {
                    component: "multi-select",
                    options: [
                        "Employed",
                        "Unemployed",
                        "Retired",
                        "Student",
                        "Disabled"
                    ],
                    page: 2
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No"
                    ],
                    page: 2
                },
                {
                    component: "text",
                    page: 2
                },
                {
                    component: "multiple-choice-other",
                    options: [
                        "English",
                        "Russian",
                        "Spanish",
                    ],
                    page: 2
                },
                {
                    component: "multi-select-other",
                    options: [
                        "Low salt",
                        "Low cholesterol",
                        "Low fat",
                        "Low sugar (diabetic)",
                        "Gluten-free",
                        "Nut-free",
                        "I have no special dietary needs"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Very satisfied",
                        "Satisfied",
                        "Neutral",
                        "Somewhat dissatisfied",
                        "Dissatisfied"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "1-2 meals",
                        "3-4 meals",
                        "5-6 meals",
                        "7 or more meals"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "100%",
                        "75%",
                        "50%",
                        "25%"
                    ],
                    page: 3
                },
                {
                    component: "multi-text",
                    page: 3
                },
                {
                    component: "multi-select",
                    options: [
                        "I have enough food to eat each month",
                        "I am able to pay my other bills (medical, rent, utilities, etc.)",
                        "I feel more food secure",
                        "I have access to more nutritious food",
                        "I am unable to get to the grocery store due to an illness or disability and JRA brings me food that I am unable to get on my own",
                        "I am unable to get to the grocery store due to lack of transportation and JRA brings me food that I am unable to get on my own"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice-if-yes-multi",
                    options: [
                        "Yes",
                        "No"
                    ],
                    extraOptions: [
                        "Almond Milk",
                        "Coconut Milk",
                        "Rice Milk",
                        "Soy Milk"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes, my food needs are being met",
                        "No, my food needs are not being met"
                    ],
                    page: 3
                },
                {
                    component: "multi-select-other",
                    options: [
                        "The quantity of food I receive is not sufficient",
                        "I have dietary restrictions (diabetes, low salt diet, etc.)",
                        "I do not like the food choices available",
                        "I am not able to prepare the food myself",
                    ],
                    page: 4
                },
                {
                    component: "multi-select",
                    options: [
                        "Food stamps (SNAP)",
                        "Social Security",
                        "Mitzvah Food Program (food package)",
                        "JEVS",
                        "Hot meals at KleinLife or Federation Housing",
                        "Golden Slipper",
                        "Jewish Family and Children’s Services (JFCS)",
                        "PCA Services",
                        "Cook for a Friend Meal Delivery",
                        "Kosher or other Meals on Wheels",
                        "Free or reduced price lunch",
                        "Disability (SSD)",
                        "Cash Assistance (Welfare)",
                        "Energy Assistance (LIHEAP)",
                        "Supplemental Security Income (SSI)",
                        "Unemployment",
                        "WIC",
                        "Earned Income Tax Credit",
                        "I do not receive benefits from other agencies or individuals"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Often true",
                        "Sometimes true",
                        "Never true",
                        "Don't know"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Often true",
                        "Sometimes true",
                        "Never true",
                        "Don't know"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice-if-yes",
                    options: [
                        "Yes",
                        "No",
                        "Don't know"
                    ],
                    extraOptions: [
                        "Almost every month",
                        "Some months but not every month",
                        "Only 1 or 2 months",
                        "Don't know"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "Don't know"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "Don't know"
                    ],
                    page: 5
                },
                //////////////SECTION 4
                {
                    component: "multiple-choice-if-yes-multi",
                    options: [
                        "Yes",
                        "No",
                    ],
                    extraOptions: [
                        "Reform",
                        "Conservative",
                        "Orthodox",
                        "Reconstructionist",
                        "Secular",
                        "Jewish and another religion",
                        "Non-practicing",
                        "Cultural",
                        "Sephardic",
                        "Mizrahi",
                        "Buhari",
                        "Ashkenazi",
                        "Other",
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "I do not identify as Jewish"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "I do not identify as Jewish"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                    ],
                    page: 6
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                    ],
                    page: 6
                },
                {
                    component: "additional-comments",
                    page: 6
                }
            ]

        },
        {
            name: "B",

            body: [
                {
                    component: "text",
                    page: 1
                },
                {
                    component: "text",
                    page: 1
                },
                {
                    component: "text",
                    page: 1
                },
                {
                    component: "household",
                    page: 1
                },
                {
                    component: "multiple-choice-other",
                    options: [
                        "Friend or neighbor (word of mouth)",
                        "Flyer or Publication",
                        "Social worker",
                        "Internet search",
                    ],
                    page: 2
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Less than one year",
                        "1 to 3 years",
                        "3 to 5 years",
                        "5 to 10 years",
                        "More than 10 years"
                    ],
                    page: 2
                },
                {
                    component: "multi-select",
                    options: [
                        "Employed",
                        "Unemployed",
                        "Retired",
                        "Student",
                        "Disabled"
                    ],
                    page: 2
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No"
                    ],
                    page: 2
                },
                {
                    component: "text",
                    page: 2
                },
                {
                    component: "multiple-choice-other",
                    options: [
                        "English",
                        "Russian",
                        "Spanish",
                    ],
                    page: 2
                },
                {
                    component: "multi-select-other",
                    options: [
                        "Low salt",
                        "Low cholesterol",
                        "Low fat",
                        "Low sugar (diabetic)",
                        "Gluten-free",
                        "Nut-free",
                        "I have no special dietary needs"
                    ],
                    page: 2
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Very satisfied",
                        "Satisfied",
                        "Neutral",
                        "Somewhat dissatisfied",
                        "Dissatisfied"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "1-2 meals",
                        "3-4 meals",
                        "5-6 meals",
                        "7 or more meals"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "100%",
                        "75%",
                        "50%",
                        "25%"
                    ],
                    page: 3
                },
                {
                    component: "multi-text",
                    page: 3
                },
                {
                    component: "multi-select",
                    options: [
                        "I have enough food to eat each month",
                        "I am able to pay my other bills (medical, rent, utilities, etc.)",
                        "I feel more food secure",
                        "I have access to more nutritious food",
                        "I am unable to get to the grocery store due to an illness or disability and JRA brings me food that I am unable to get on my own",
                        "I am unable to get to the grocery store due to lack of transportation and JRA brings me food that I am unable to get on my own"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice-if-yes-multi",
                    options: [
                        "Yes",
                        "No"
                    ],
                    extraOptions: [
                        "Almond Milk",
                        "Coconut Milk",
                        "Rice Milk",
                        "Soy Milk"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes, my food needs are being met",
                        "No, my food needs are not being met"
                    ],
                    page: 3
                },
                {
                    component: "multi-select-other",
                    options: [
                        "The quantity of food I receive is not sufficient",
                        "I have dietary restrictions (diabetes, low salt diet, etc.)",
                        "I do not like the food choices available",
                        "I am not able to prepare the food myself",
                    ],
                    page: 3
                },
                {
                    component: "multi-select",
                    options: [
                        "Food stamps (SNAP)",
                        "Social Security",
                        "Mitzvah Food Program (food package)",
                        "JEVS",
                        "Hot meals at KleinLife or Federation Housing",
                        "Golden Slipper",
                        "Jewish Family and Children’s Services (JFCS)",
                        "PCA Services",
                        "Cook for a Friend Meal Delivery",
                        "Kosher or other Meals on Wheels",
                        "Free or reduced price lunch",
                        "Disability (SSD)",
                        "Cash Assistance (Welfare)",
                        "Energy Assistance (LIHEAP)",
                        "Supplemental Security Income (SSI)",
                        "Unemployment",
                        "WIC",
                        "Earned Income Tax Credit",
                        "I do not receive benefits from other agencies or individuals"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Often true",
                        "Sometimes true",
                        "Never true",
                        "Don't know"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Often true",
                        "Sometimes true",
                        "Never true",
                        "Don't know"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice-if-yes",
                    options: [
                        "Yes",
                        "No",
                        "Don't know"
                    ],
                    extraOptions: [
                        "Almost every month",
                        "Some months but not every month",
                        "Only 1 or 2 months",
                        "Don't know"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "Don't know"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "Don't know"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice-if-yes-multi",
                    options: [
                        "Yes",
                        "No",
                    ],
                    extraOptions: [
                        "Reform",
                        "Conservative",
                        "Orthodox",
                        "Reconstructionist",
                        "Secular",
                        "Jewish and another religion",
                        "Non-practicing",
                        "Cultural",
                        "Sephardic",
                        "Mizrahi",
                        "Buhari",
                        "Ashkenazi",
                        "Other",
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "I do not identify as Jewish"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "I do not identify as Jewish"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                    ],
                    page: 5
                },
                //DIFFERENT FROM SURVEY A
                {
                    component: "multiple-choice",
                    options: [
                        "Very satisfied",
                        "Satisfied",
                        "Neutral",
                        "Somewhat dissatisfied",
                        "Dissatisfied"
                    ],
                    question: "37",
                    page: 6
                },
                {
                    component: "multi-select",
                    options: [
                        "I am able to pay other bills and/or purchase food",
                        "I am able to provide for the health needs of myself and/or my family",
                        "Because I am unable to get to the store due to an illness or disability JRA brings me supplies that I am unable to get on my own",
                        "Because I am unable to get to the store due to lack of transportation JRA brings me supplies that I am unable to get on my own"
                    ],
                    question: "38",
                    page: 6
                },
                {
                    component: "multiple-choice",
                    options: [
                        "100%",
                        "75%",
                        "50%",
                        "25%"
                    ],
                    question: "39",
                    page: 6
                },
                {
                    component: "multiple-choice",
                    options: [
                        "I run out of Everyday Essentials items at the end of each month",
                        "The Everyday Essentials items last a whole month and I do not run out",
                        "The Everyday Essentials items last longer than a month",
                        "I receive items that I do not use"
                    ],
                    question: "40",
                    page: 6
                },
                {
                    component: "multiple-choice-if-yes",
                    options: [
                        "Yes",
                        "No"
                    ],
                    extraOptions: [
                        "text-input"
                    ],
                    question: "41",
                    page: 6
                },
                {
                    component: "additional-comments",
                    question: "42",
                    page: 6
                }
            ]   
        },
        {
            name: "C",
            body: [
                {
                    component: "text",
                    page: 1
                },
                {
                    component: "text",
                    page: 1
                },
                {
                    component: "text",
                    page: 1
                },
                {
                    component: "household",
                    page: 1
                },
                {
                    component: "multiple-choice-other",
                    options: [
                        "Friend or neighbor (word of mouth)",
                        "Flyer or Publication",
                        "Social worker",
                        "Internet search",
                    ],
                    page: 2
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Less than one year",
                        "1 to 3 years",
                        "3 to 5 years",
                        "5 to 10 years",
                        "More than 10 years"
                    ],
                    page: 2
                },
                {
                    component: "multi-select",
                    options: [
                        "Employed",
                        "Unemployed",
                        "Retired",
                        "Student",
                        "Disabled"
                    ],
                    page: 2
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No"
                    ],
                    page: 2
                },
                {
                    component: "text",
                    page: 2
                },
                {
                    component: "multiple-choice-other",
                    options: [
                        "English",
                        "Russian",
                        "Spanish",
                    ],
                    page: 2
                },
                {
                    component: "multi-select-other",
                    options: [
                        "Low salt",
                        "Low cholesterol",
                        "Low fat",
                        "Low sugar (diabetic)",
                        "Gluten-free",
                        "Nut-free",
                        "I have no special dietary needs"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Very satisfied",
                        "Satisfied",
                        "Neutral",
                        "Somewhat dissatisfied",
                        "Dissatisfied"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "1-2 meals",
                        "3-4 meals",
                        "5-6 meals",
                        "7 or more meals"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "100%",
                        "75%",
                        "50%",
                        "25%"
                    ],
                    page: 3
                },
                {
                    component: "multi-text",
                    page: 3
                },
                {
                    component: "multi-select",
                    options: [
                        "I have enough food to eat each month",
                        "I am able to pay my other bills (medical, rent, utilities, etc.)",
                        "I feel more food secure",
                        "I have access to more nutritious food",
                        "I am unable to get to the grocery store due to an illness or disability and JRA brings me food that I am unable to get on my own",
                        "I am unable to get to the grocery store due to lack of transportation and JRA brings me food that I am unable to get on my own"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice-if-yes-multi",
                    options: [
                        "Yes",
                        "No"
                    ],
                    extraOptions: [
                        "Almond Milk",
                        "Coconut Milk",
                        "Rice Milk",
                        "Soy Milk"
                    ],
                    page: 3
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes, my food needs are being met",
                        "No, my food needs are not being met"
                    ],
                    page: 4
                },
                {
                    component: "multi-select-other",
                    options: [
                        "The quantity of food I receive is not sufficient",
                        "I have dietary restrictions (diabetes, low salt diet, etc.)",
                        "I do not like the food choices available",
                        "I am not able to prepare the food myself",
                    ],
                    page: 4
                },
                {
                    component: "multi-select",
                    options: [
                        "Food stamps (SNAP)",
                        "Social Security",
                        "Mitzvah Food Program (food package)",
                        "JEVS",
                        "Hot meals at KleinLife or Federation Housing",
                        "Golden Slipper",
                        "Jewish Family and Children’s Services (JFCS)",
                        "PCA Services",
                        "Cook for a Friend Meal Delivery",
                        "Kosher or other Meals on Wheels",
                        "Free or reduced price lunch",
                        "Disability (SSD)",
                        "Cash Assistance (Welfare)",
                        "Energy Assistance (LIHEAP)",
                        "Supplemental Security Income (SSI)",
                        "Unemployment",
                        "WIC",
                        "Earned Income Tax Credit",
                        "I do not receive benefits from other agencies or individuals"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Often true",
                        "Sometimes true",
                        "Never true",
                        "Don't know"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Often true",
                        "Sometimes true",
                        "Never true",
                        "Don't know"
                    ],
                    page: 4
                },
                {
                    component: "multiple-choice-if-yes",
                    options: [
                        "Yes",
                        "No",
                        "Don't know"
                    ],
                    extraOptions: [
                        "Almost every month",
                        "Some months but not every month",
                        "only 1 or 2 months",
                        "Don't know"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "Don't know"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "Don't know"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice-if-yes-multi",
                    options: [
                        "Yes",
                        "No",
                    ],
                    extraOptions: [
                        "Reform",
                        "Conservative",
                        "Orthodox",
                        "Reconstructionist",
                        "Secular",
                        "Jewish and another religion",
                        "Non-practicing",
                        "Cultural",
                        "Sephardic",
                        "Mizrahi",
                        "Buhari",
                        "Ashkenazi",
                        "Other",
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "I do not identify as Jewish"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                        "I do not identify as Jewish"
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                    ],
                    page: 5
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                    ],
                    page: 6
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                    ],
                    page: 6
                },
                //DIFFERENT FROM SURVEY A and B
                {
                    component: "multiple-choice",
                    options: [
                        "Very satisfied",
                        "Satisfied",
                        "Neutral",
                        "Somewhat dissatisfied",
                        "Dissatisfied"
                    ],
                    page: 6
                },
                {
                    component: "multiple-choice",
                    options: [
                        "100%",
                        "75%",
                        "50%",
                        "25%"
                    ],
                    page: 6
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Snacks for School",
                        "As a supllemental meal",
                        "In place of a meal"
                    ],
                    page: 6
                },
                {
                    component: "rank-choice",
                    options: [
                        "Granola bars",
                        "Fruit cups",
                        "Peanut butter",
                        "Fresh fruit/vegetables"
                    ],
                    page: 6
                },
                {
                    component: "multiple-choice",
                    options: [
                        "Yes",
                        "No",
                    ],
                    page: 6
                },
                {
                    component: "additional-comments",
                    page: 6
                }
            ]
        },
    ]
}
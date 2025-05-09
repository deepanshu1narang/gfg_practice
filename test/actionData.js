const actionData = [
    {
        "level": 0,
        "children": [
            {
                "action": [
                    {
                        "Role": {
                            "attributeId": "c8db178884d1458aa1b9913528d6fcca",
                            "dataType": "NVARCHAR",
                            "field": "AF_ROLE",
                            "isValueHelp": true,
                            "label": "Role",
                            "type": "single",
                            "value": "Supplier Chain Manager",
                            "valueData": "Supplier Chain Manager"
                        }
                    },
                    {
                        "Employee": {
                            "attributeId": "983ae4376e3f49108c761e14fbcf53a4",
                            "dataType": "NVARCHAR",
                            "field": "AF_EMPLOYEE",
                            "isValueHelp": true,
                            "label": "Employee",
                            "type": "single",
                            "value": "INC01402",
                            "valueData": "Srikari Bodugam"
                        }
                    }
                ],
                "conditions": {
                    "Document Value": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    },
                    "Plant": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    },
                    "Purchase Group": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    },
                    "Process": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    },
                    "Document Type": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    }
                }
            },
            {
                "action": [
                    {
                        "Role": {
                            "attributeId": "c8db178884d1458aa1b9913528d6fcca",
                            "dataType": "NVARCHAR",
                            "field": "AF_ROLE",
                            "isValueHelp": true,
                            "label": "Role",
                            "type": "single",
                            "value": "AED EMC Chairman",
                            "valueData": "AED EMC Chairman"
                        }
                    },
                    {
                        "Employee": {
                            "attributeId": "983ae4376e3f49108c761e14fbcf53a4",
                            "dataType": "NVARCHAR",
                            "field": "AF_EMPLOYEE",
                            "isValueHelp": true,
                            "Label": "Employee",
                            "type": "single",
                            "value": "INC01011",
                            "valueData": "Shruti Bodhe"
                        }
                    }
                ],
                "conditions": {
                    "Document Value": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    },
                    "Plant": {
                        "field": "Low Voltage Factory",
                        "selectedOperator": "NOTCONTAINS",
                        "selectedOperand": "And",
                        "attributeId": "4687cc5f630247aeb61a2906c9383ea6",
                        "conditionType": "single",
                        "dataType": "NVARCHAR",
                        "name": "AF_PLANT"
                    },
                    "Purchase Group": {
                        "field": "Switching Componant",
                        "selectedOperator": "ISNOTEQUAL",
                        "selectedOperand": "And",
                        "attributeId": "d7052fb0ffa640a29ed4d24083433215",
                        "conditionType": "single",
                        "dataType": "NVARCHAR",
                        "name": "AF_PURCHASE_GROUP"
                    },
                    "Process": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    },
                    "Document Type": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    }
                }
            }
        ]
    },
    {
        "level": 1,
        "children": [
            {
                "action": [
                    {
                        "Role": {
                            "attributeId": "c8db178884d1458aa1b9913528d6fcca",
                            "dataType": "NVARCHAR",
                            "field": "AF_ROLE",
                            "isValueHelp": true,
                            "label": "Role",
                            "type": "single",
                            "value": "Financial Controller Manager",
                            "valueData": "Financial Controller Manager"
                        }
                    },
                    {
                        "Employee": {
                            "attributeId": "983ae4376e3f49108c761e14fbcf53a4",
                            "dataType": "NVARCHAR",
                            "field": "AF_EMPLOYEE",
                            "isValueHelp": true,
                            "label": "Employee",
                            "type": "single",
                            "value": "INC01000",
                            "valueData": "Pramod Kumar"
                        }
                    }
                ],
                "conditions": {
                    "Document Value": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    },
                    "Plant": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    },
                    "Purchase Group": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    },
                    "Process": {
                        "field": "Purchase Order Process",
                        "selectedOperator": "NOTSTARTSWITH",
                        "selectedOperand": "And",
                        "attributeId": "5e8da0cb0552462eaaf91d690af2c616",
                        "conditionType": "single",
                        "dataType": "NVARCHAR",
                        "name": "AF_PROCESS"
                    },
                    "Document Type": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    }
                }
            },
            {
                "action": [
                    {
                        "Role": {
                            "attributeId": "c8db178884d1458aa1b9913528d6fcca",
                            "dataType": "NVARCHAR",
                            "field": "AF_ROLE",
                            "isValueHelp": true,
                            "label": "Role",
                            "type": "single",
                            "value": "Operational Manager",
                            "valueData": "Operational Manager"
                        }
                    },
                    {
                        "Employee": {
                            "attributeId": "983ae4376e3f49108c761e14fbcf53a4",
                            "dataType": "NVARCHAR",
                            "field": "AF_EMPLOYEE",
                            "isValueHelp": true,
                            "label": "Employee",
                            "type": "single",
                            "value": "INC01680",
                            "valueData": "Kavyashree Kumar"
                        }
                    }
                ],
                "conditions": {
                    "Document Value": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    },
                    "Plant": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    },
                    "Purchase Group": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    },
                    "Process": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    },
                    "Document Type": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    }
                }
            }
        ]
    },
    {
        "level": 2,
        "children": [
            {
                "action": [
                    {
                        "Role": {
                            "attributeId": "c8db178884d1458aa1b9913528d6fcca",
                            "dataType": "NVARCHAR",
                            "field": "AF_ROLE",
                            "isValueHelp": true,
                            "label": "Role",
                            "type": "single",
                            "value": "Business Unit Manager",
                            "valueData": "Business Unit Manager"
                        }
                    },
                    {
                        "Employee": {
                            "attributeId": "983ae4376e3f49108c761e14fbcf53a4",
                            "dataType": "NVARCHAR",
                            "field": "AF_EMPLOYEE",
                            "isValueHelp": true,
                            "label": "Employee",
                            "type": "single",
                            "value": "INC01699",
                            "valueData": "Krishna Dev K"
                        }
                    }
                ],
                "conditions": {
                    "Document Value": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    },
                    "Plant": {
                        "field": "Low Voltage Factory",
                        "selectedOperator": "NOTSTARTSWITH",
                        "selectedOperand": "And",
                        "attributeId": "4687cc5f630247aeb61a2906c9383ea6",
                        "conditionType": "single",
                        "dataType": "NVARCHAR",
                        "name": "AF_PLANT"
                    },
                    "Purchase Group": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    },
                    "Process": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    },
                    "Document Type": {
                        "field": "Return Purchase Order",
                        "selectedOperator": "ISEQUAL",
                        "selectedOperand": "And",
                        "attributeId": "2ffdf9248dd846ccbc5f5b2d10842780",
                        "conditionType": "single",
                        "dataType": "NVARCHAR",
                        "name": "AF_DOCUMENT_TYPE"
                    }
                }
            },
            {
                "action": [
                    {
                        "Role": {
                            "attributeId": "c8db178884d1458aa1b9913528d6fcca",
                            "dataType": "NVARCHAR",
                            "field": "AF_ROLE",
                            "isValueHelp": true,
                            "label": "Role",
                            "type": "single",
                            "value": "Technical Manager",
                            "valueData": "Technical Manager"
                        }
                    },
                    {
                        "Employee": {
                            "attributeId": "983ae4376e3f49108c761e14fbcf53a4",
                            "dataType": "NVARCHAR",
                            "field": "AF_EMPLOYEE",
                            "isValueHelp": true,
                            "label": "Employee",
                            "type": "single",
                            "value": "INC01404",
                            "valueData": "Indu Madhuri Varanasi"
                        }
                    }
                ],
                "conditions": {
                    "Document Value": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And"
                    },
                    "Plant": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    },
                    "Purchase Group": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    },
                    "Process": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    },
                    "Document Type": {
                        "field": "",
                        "selectedOperator": "",
                        "selectedOperand": "And",
                        "attributeId": "",
                        "conditionType": "",
                        "dataType": "",
                        "name": ""
                    }
                }
            }
        ]
    }
]
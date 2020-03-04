import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextInput } from '../../shared/form-components/TextInput';
import { SelectInput } from '../../shared/form-components/SelectInput';
import { MultipleChoice } from '../../shared/form-components/MultipleChoice'
import { MultipleChoiceIfYes } from '../../shared/form-components/MultipleChoiceIfYes'
import { Household } from '../../shared/form-components/Household'
import { RankChoice } from '../../shared/form-components/RankChoice'
import { surveys } from '../../data/presets'
import Divider from '@material-ui/core/Divider';
import { MultiSelect } from '../../shared/form-components/MultiSelect'
import { MultiSelectOther } from '../../shared/form-components/MultiSelectOther'
import { MultipleChoiceOther } from '../../shared/form-components/MultipleChoiceOther'
import { MultipleChoiceIfYesMulti } from '../../shared/form-components/MultipleChoiceIfYesMulti'


export function getBlockComponent(block, indexOfComponent, formPage, classes, dataForm, handleChange, checkboxOtherChangeCallback, reset, handleExtraOption, familyArray, handleFamilyChange, handleRankChoice, handleArrayChange) {
    const { question, component, options, extra, extraOptions, page } = block;
    const genderOptions = ["Man", "Woman", "Trans man", "Trans woman", "Nonbinary", "Gender Queer or Questioning", "Prefer not to answer"]
    let label = "Q" + (question ? question : indexOfComponent + 1);
    let indexPlusOne = (indexOfComponent + 1)
    let extraQuestion = (indexOfComponent + "A")

    switch (component) {
        case 'select':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <SelectInput
                        className={classes.inputs}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        handleChange={(e) => handleChange(e, indexOfComponent)}
                        options={options}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )
        case 'text':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <TextInput
                        notAnsweredOption
                        checkChange={(e, index) => checkboxOtherChangeCallback(e, index, indexOfComponent)}
                        className={classes.inputs}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        handleChange={(e) => handleChange(e, indexOfComponent)}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )
        case 'multi-text':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <TextInput
                        notAnsweredOption
                        className={classes.multiText}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        handleChange={(e) => handleChange(e, indexOfComponent)}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )
        case 'multiple-choice':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <MultipleChoice
                        reset={reset}
                        extra={extra}
                        extraOptions={extraOptions}
                        className={classes.inputs}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        handleChange={(e) => handleChange(e, indexOfComponent)}
                        options={options}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )

        case 'multiple-choice-other':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <MultipleChoiceOther
                        handleExtraOption={(e) => handleExtraOption(e, indexOfComponent)}
                        className={classes.inputs}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        extraOptions={extraOptions}
                        handleChange={(e) => handleChange(e, indexOfComponent)}
                        options={options}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )
        case 'multiple-choice-if-yes':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <MultipleChoiceIfYes
                        handleExtraOption={(e) => handleExtraOption(e, indexOfComponent)}
                        className={classes.inputs}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        extraOptions={extraOptions}
                        handleChange={(e) => handleChange(e, indexOfComponent)}
                        options={options}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )
        case 'household':
            return (
                <>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>

                    <Household
                        people={familyArray}
                        className={classes.inputs}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        handleChange={(e, index, indexOfComp) => handleFamilyChange(e, index, indexOfComp, indexOfComponent)}
                        options={genderOptions}
                    />

                    <Divider variant="middle" className={classes.dividerColor} />
                </>
            )

        case 'additional-comments':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <TextInput
                        description={true}
                        notAnsweredOption
                        className={classes.description}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        handleChange={(e) => handleChange(e, indexOfComponent)}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )

        case 'rank-choice':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <RankChoice
                        className={classes.inputs}
                        options={options}
                        values={dataForm[indexOfComponent + 1]}
                        handleChange={(e, index2) => handleRankChoice(e, index2, indexOfComponent)}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )

        case 'multi-select':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <MultiSelect
                        handleArrayChange={(array) => handleArrayChange(array, indexOfComponent)}
                        className={classes.inputs}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        handleChange={(e, textValue) => checkboxOtherChangeCallback(e, indexOfComponent, textValue)}
                        options={options}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )

        case 'multi-select-other':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <MultiSelectOther
                        handleArrayChange={(array) => handleArrayChange(array, indexOfComponent)}
                        className={classes.inputs}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        handleChange={(e, textValue) => checkboxOtherChangeCallback(e, indexOfComponent, textValue)}
                        options={options}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )

        case 'multiple-choice-if-yes-multi':
            return (
                <div>
                    <Divider variant="middle" className={classes.dividerColor} />
                    <h3>{label}</h3>
                    <MultipleChoiceIfYesMulti
                        handleExtraOption={(e, textValue) => checkboxOtherChangeCallback(e, indexOfComponent, textValue)}
                        className={classes.inputs}
                        label={label}
                        value={dataForm[indexOfComponent + 1]}
                        handleChange={(e) => handleChange(e, indexOfComponent)}
                        extraOptions={extraOptions}
                        options={options}
                    />
                    <Divider variant="middle" className={classes.dividerColor} />
                </div>
            )

        default:
            return <div className="no_block_type" />
        //}
    }
}
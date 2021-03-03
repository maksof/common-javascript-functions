
### This repository contains the common javascript functions mostly used in all the project.

# maksof-common
## Table of Contents
- [Install](#install)
- [data-extractor](#data-extractor)
- [date-formatter](#date-formatter)
- [field-validator](#field-validator)
- [numerical-calculator](#numerical-calculator)

## Install
**npm i maksof-common**
## Usage
````
In order to use function you have to create a variable and require module to it and  call these function by this reference variable
Some function samples from following classes are as follow
like this,
````
**const common = requires('maksof-common');**
**common.requiredFuncton();**

# data-extractor

- [delFromArray](#del-from-array)
- [delMultipleIndexFromArray](#del-multiple-index-from-array)
- [mergeArray](#merge-array)
- [differenceArray](#difference-array)
- [maxValueFromArray](#max-value-from-array)
- [minValueFromArray](#min-value-from-array)
- [symetricDifferenc](#symetric-differenc)
- [intersection](#intersection)
- [arrayshuffle](#array-shuffle)
- [delKeyFromObj](#del-key-from-obj)
- [findKeyInObject](#find-key-in-object)
- [staticfindPropFromObj](#static-find-prop-from-obj)
- [sortNumAsc](#sort-num-asc)
- [sortNumDes](#sort-num-des)
- [sortData](#sort-data)
- [sortDataRev](#sort-data-rev)
- [getCertificateKey](#get-certificate-key)
- [ sendResponseBack](#send-response-back)
- [generateBluffId](#generate-bluff-Id)
- [generatekey](#generate-key)
- [generateUniqueProfileKey](#generate-unique-profilekey)
- [sendEmail](#send-email)

## get-certificate-key
```javascript
const common = requires('maksof-common');
common.getCertificateKey()
```
## send-response-back
```javascript
const common = requires('maksof-common');
common.sendResponseBack(res, status, message, data)
```
## generate-bluff-Id
```javascript
const common = requires('maksof-common');
 common.generateBluffId()
```
## generate-key
```javascript
 generatekey()
```
## generate-unique-profilekey
```javascript
generateUniqueProfileKey()
```
## send-email
```javascript
sendEmail(email, subject, message, response, action , tokenId)

```
## del-from-array
```javascript
const common = requires('maksof-common');
common.delFromArray(array, index);

common.delFromArray([1,2,3,4,5],4);
output->[1,2,3,4]
```
## del-multiple-index-from-array
```javascript
 const common = requires('maksof-common');
 common.delMultipleIndexFromArray(array , indexes);
 
 common.delMultipleIndexFromArray([1,2,3,4,5] , [2,3]);
 output->[1,2,5]
```
## merge-array
```javascript
mergeArray(array1, array2);
mergeArray([1,2,3],[4,5,6]);
output->[1,2,3,4,5,6]
```
## difference-array
```javascript
differnceArray(array1, array2);
differnceArray([1,2,3,4],[3,5,6])
output->[1,2,3]
```
## max-value-from-array
```javascript
const common = requires('maksof-common');
common.maxValueFromArray(array);

common.maxValueFromArray([4,5,1,3]);
output->5
```
## min-value-from-array
```javascript
minValueFromArray(array);
minValueFromArray([4,5,1,3]);
output->1
```
## array-shuffle
```javascript
const common = requires('maksof-common');
common.arrayShuffle(array);

common.arrayShuffle([1,2,3,0,10]);
output->[1, 3, 10, 2, 0]
```
## del-key-from-obj
```javascript
delKeyFromObj(obj, key);
delKeyFromObj({name : "sunny", id : 2}, "name");
output-> {id: 2}
```
## find-key-in-object
```javascript
findKeyInObject(obj, key);
findKeyInObject({name : "sarwar", id : 2}, "name")
output-> true
```
## static-find-prop-from-obj
```javascript
staticfindPropFromObj(obj, key);
staticfindPropFromObj({name : "sarwar", id : 2}, "name");
output-> ["sarwar"]
```
## sort-num-asc
```javascript
sortNumAsc(array);
sortNumAsc([2,10,54,100,1]);
output->[1, 2, 10, 54, 100]
```
## sort-num-des
```javascript
sortNumDes(array);
sortNumDes([2,10,54,100,1]);
output->[100,54,10,2,1]
```
## sort-data
```javascript
sortData(data)
sortData(["Apple","Azggas","Zasdas","Ccca"]);
output-> ["Apple", "Azggas", "Ccca", "Zasdas"]
```
## sort-data-rev
```javascript
sortDataRev(data)
sortDataRev(["Apple","Azggas","Zasdas","Ccca"]);
output-> ["Ccca", "Zasdas", "Azggas", "Apple"]
```
## symetric-differenc
```javascript
symetricDifference(array1, array2);
symetricDifference([1,3,5,7,9],[2,6,5]);
output-> [1, 3, 7, 9, 2, 6]
```
## intersection
```javascript
intersection(array1, array2);
intersection([1,3,5,7,9],[2,6,5]);
output-> [5]
```
# date-formatter
```javascript
const common = requires('maksof-common');
commom.dateStatement (dateString);
```

-[dayShortDateMonthYear (dateString)](#dayShortDDMMYYYY)
```javascript
dayShortDateMonthYear("Monday, 22 February 2021")
```
- [dayLongDateMonthYear (dateString)](#dayLongDDMMYYYY)
```javascript
dayLongDateMonthYear ("Monday, 22 February 2021")
```
- [dayShortDateMonthYear_HH_MM_24 (dateString)](#dayShortDDMMYYYY_HH_MM_24)
```javascript
 dayShortDateMonthYear_HH_MM_24 ("Monday, 22 February 2021 12:10 PM")
```
- [dayLongDateMonthYear_HH_MM_24 (dateString)](#dayLongDDMMYYYY_HH_MM_24)
- [dayShorDateMonthYear_HH_MM_12 (dateString)](#dayShortDDMMYYYY_HH_MM_12)
- [dayLongDateMonthYear_HH_MM_12 (dateString)](#dayLongDDMMYYYY_HH_MM_12)
- [yearMonthShortDate (dateString)](#yearMonthShortDate)
- [dateMonthShortYear (dateString)](#dateMonthShortYear)
- [monthShortDateYear (dateString)](#monthShortDateYear)
- [dateMonthYear (dateString)](#dateMonthYear)
- [monthDateYear (dateString)](#monthDateYear)
- [yearMonthDate (dateString)](#yearMonthDate)
- [monthLongDateYear (dateString)](#monthLongDateYear)
- [yearMonthLongDate (dateString)](#yearMonthLongDate)
- [dateMonthLongYear (dateString)](#dateMonthLongYear)
- [mDYear (dateString)](#mDYear)
- [yearMD (dateString)](#yearMD)
- [dMYear (dateString)](#dMYear)
- [yearMDate (dateString)](#yearMDate)
- [mDateYear (dateString)](#mDateYear)
- [DateMYear (dateString)](#DateMYear)
- [monthDateYear_noSep (dateString)](#monthDateYear_noSep)
- [dateMonthYear_noSep (dateString)](#dateMonthYear_noSep)
- [yearMonthDate_noSep (dateString)](#yearMonthDate_noSep)
- [timeSince (dateString)](#timeSince)
- [yearMonthDate_s (dateString)](#yearMonthDate_s)
- [dateMonthYear_s (dateString)](#dayShortDDMMYYYY)
- [monthDateYear_s (dateString)](#monthDateYear_s)
- [yearMonthShortDate_s (dateString)](#yearMonthShortDate_s)
- [dateMonthShortYear_s (dateString)](#dateMonthShortYear_s)
- [monthShortDateYear_s (dateString)](#monthShortDateYear_s)
- [yearMonthLongtDate_s (dateString)](#yearMonthLongtDate_s)
- [dateMonthLongYear_s (dateString)](#dateMonthLongYear_s)
- [monthLongDateYear_s (dateString)](#monthLongDateYear_s)
- [yearMonthDate_d (dateString)](#yearMonthDate_d)
- [dateMonthYear_d (dateString)](#dateMonthYear_d)
- [monthDateYear_d (dateString)](#monthDateYear_d)
- [yearMonthShortDate_d (dateString)](#yearMonthShortDate_d)
- [dateMonthShortYear_d (dateString)](#dateMonthShortYear_d)
- [monthShortDateYear_d (dateString)](#monthShortDateYear_d)
- [yearMonthLongtDate_d (dateString)](#yearMonthLongtDate_d)
- [dateMonthLongYear_d (dateString)](#dateMonthLongYear_d)
- [monthLongDateYear_d](#monthLongDateYear_d)
- [dateOfMonthShortYear (dateString)](#dateOfMonthShortYear)
- [theDateOfMontShorthYear (dateString)](#theDateOfMontShorthYear)
- [dateMontShortYear_noSeprate (dateString)](#dateMontShortYear_noSeprate)
- [dateMontShortYearShort (dateString)](#dateMontShortYearShort)
- [yearShortMonthShortDate (dateString)](#yearShortMonthShortDate)
- [MonthShortDateYearShort (dateString)](#MonthShortDateYearShort)
- [dateMontShortYearShort_noSep (dateString)](#dateMontShortYearShort_noSep)
- [yearShortMonthShortDate_noSep (dateString)](#yearShortMonthShortDate_noSep)
- [MonthShortDateYearShort_noSep (dateString)](#MonthShortDateYearShort_noSep)
- [dateMontShortYearShort_s (dateString)](#dateMontShortYearShort_s)
- [yearShortMonthShortDate_s (dateString)](#yearShortMonthShortDate_s)
- [MonthShortDateYearShort_s (dateString)](#MonthShortDateYearShort_s)
- [dateMontShortYearShort_d (dateString)](#dateMontShortYearShort_d)
- [yearShortMonthShortDate_d (dateString)](#yearShortMonthShortDate_d)
- [MonthShortDateYearShort_d (dateString)](#MonthShortDateYearShort_d)
- [dayMonthYear_HH_MM_24 (dateString)](#dayMonthYear_HH_MM_24)
- [dayMonthYear_HH_MM_12 (dateString)](#dayMonthYear_HH_MM_12)
- [getIstTime(offset)](#getIstTime)
- [setExpireTime(minute)](#setExpireTime)
- [getNextDate(day)](#getNextDate)
- [setExpireTime(minute)](#setExpireTime)

# field-validator
- [isEmpty](#is-empty)
- [isPhoneNumber](#is-phone-number)
- [isEmail](#is-email)
- [passwordPattrenCheck](#password-pattren-check)
- [isPasswordConfirmed](#is-password-confirmed)
- [isValidCreditCard](#is-valid-creditCard)
- [isValidZipcode](#is-valid-zipcode)
- [isDate](#is-date)
- [isValidDob](#is-valid-dob)
- [isArrayEmpty](#is-array-empty)
- [isObjEmpty](#is-obj-empty)
- [isBoolean](#is-boolean)
- [isNull](#is-null)
- [isNaN](#is-nan)
- [isNumber](#is-number)
- [isJSON](#is-JSON)
- [isSameType](#is-same-type)
- [checkValidUsername(username)](#check-valid-username)

## is-empty
```javascript
const common = requires('maksof-common');
commom.isEmpty(str);
common.isEmpty(" ");
output-> true
```
## is-phone-number
```javascript
const common = requires('maksof-common');
commom.isPhoneNumber(str);
common.isPhoneNumber("+92302411562");
output-> truie
```
## is-email
```javascript
isEmail(str);
isEmail(no@gmail.com);
output-> true
```
## password-pattren-check
```javascript
// capital letter madatory
//special charcher or number mandatory
passwordPattrenCheck(password);
passwordPattrenCheck("Karachi@12");
output-> true
```
## is-password-confirmed
```javascript
isPasswordConfirmed(password, confirm);
isPasswordConfirmed("Karachi@12", "Karachi@12");
output-> true
```
## is-valid-creditCard
```javascript
isValidCreditCard(creditCard);
```
## is-valid-zipcode
```javascript
isValidZipcode(zipcode);
```
## is-date
```
isDate(date);
```
## is-valid-dob
```javascript
isValidDob(dob);
```
## is-array-empty
```javascript
isArrayEmpty(array);
```
## is-obj-empty
```javascript
isObjEmpty(obj);
```
## is-boolean
```javascript
isBoolean(value);
```
## is-null
```javascript
isNull(value);
```
## is-nan
```javascript
isNaN(value);
```
## is-number
```javascript
isNumber(value);
```
## is-JSON
```javascript
isJSON(value);
```
## is-same-type
```javascript
isSameType(val1, val2);
```
## check-valid-username
```javascript
checkValidUsername(username)
```
# numerical-calculator
-[percentage (output,input)](#percentage)
```javascript
const common=requires('maksof-common');
common.percentage(output,input);

common.percentage(80,90);
output -> 88.88%

```
- [ageCalculator (dob)](#ageCalculator)
```javascript
const common=requires('maksof-common');
common.ageCalculator(dob);.

common.ageCalculator("22 February 2011");
output -> 10
```
- [gcdCalculate  (num1,num2)](#gcdCalculate)
- [dateDiff (date1,date2)](#dateDiff)
- [monthDiff (input1, input2)](#monthDiff)
- [yearDiff (input1, input2)](#yearDiff)
- [mean (array , n)](#mean)
- [factorial (number)](#factoria)
- [permutation (number , r)](#permutation)
- [combination (number , r)](#combination)
- [probablity (event, sampleSpace)](#probablity)
- [variance (array , n)](#variance)
- [standardDeviation (array, n)](#standardDeviation)
- [convertDecimalToBinary (value)](#convertDecimalToBinary)
- [convertBinryToDecimal (value)](#convertBinryToDecimal)
- [convertHexToDecimal (value)](#convertHexToDecimal)
- [convertDecimalToHex (value)](#convertDecimalToHex)

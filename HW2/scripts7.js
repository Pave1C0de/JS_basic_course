/*
7.
Сравнить null и 0 и своими словами объяснить результат.
*/

/*
1. null > 0; // false
2. null < 0; // false
3. null == 0; // false
4. null >= 0; // true
5. null <= 0; // true

Это следует из спецификации языка JavaScript - ECMA. В данной спецификации описан абстрактный алгоритм сравнения для отношений,
который используется для сравнения значений в JS.
Для выражений 1-2 данный алгоритм приводит значение null к +0. После чего значение будут сравниваться.
В примере №3 используется абстрактный алгоритм для равенств, по которому данное сравнение не подпадает ни под один пункт, а по умолчанию возвращается false.
В последних двух примерах рассуждение ведется от противного примеров 1-2.
*/

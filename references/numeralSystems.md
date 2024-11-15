# Numeral Systems

* You can use underscores in all of these for readability.

## Decimal - Base 10

* Each place is worth a power of 10
* 0 - 9
*  12   - 1 times 10 plus 2 times 1
* 404   - 4 times 100 plus 0 times 10 plus 4 times 1


## Binary - Base 2

* When we add a leading 0b, we're telling Java our number is base-2 or binary
* Only two symbols, 0 and 1, so each place is worth a power of 2
* 11001   - (1 * 16) + (1 * 8) + (0 * 4) + (0 * 2) + (1 * 1) [25]
* any leading zeros don't change the overall value
* there is an Integer class with the method toBinaryString(int n)
* To get the binary representation of a negative number, follow these steps:
    * Take the binary positive number.
    * Invert the bits
    * Add 1.
    * For example, the number -1:
        * 00000001
        * 11111110
        * 11111111 = -1
    * For the number -15:
        * 00001111
        * 11110000
        * 11110001 = -15


## Octal - Base 8

* A simple leading 0 tells Java our number is base-8 or octal.
* 0 - 7
* The value of any 8-bit byte can be represented with three octal digits


## Hexadecimal - Base 16

* When we add a leading 0x, we're telling Java our number is base-16 or hexadecimal
* 0 - 9  and  a - f
* The value of any 8-bit byte can be represented with two hexadecimal digits
* The value of any two-byte (16-bit) short or char can be represented with four hexadecimal digits
* Java char values (other than ASCII characters) are given in hexadecimal
    * The Unicode code charts list character values in hex
    * Java unicode escapes also use hexadecimal
* A 32-bit int can be represented with eight hexadecimal digits
* Hexadecimal is used for network MAC addresses.
* IP addresses and their netmasks are often represented in hexadecimal.
* IPv6 addresses are always given in hex.
* Hexadecimal color values are common in HTML and CSS.
* printf() takes a format string and a variable list of arguments (an example of a varargs method.)
    * The format string contains literal text, as well as format specifiers that start with %.
    * Each parameter after the format string is substituted into the corresponding format specifier for output.
    * The letter in the format specifier tells printf() how to convert the value for printing:
        * d - as a decimal integer
        * o - as an octal integer
        * x - as a hexadecimal integer
        * f - as a floating-point number
        * a - as a floating-point number in hexadecimal
        * s - as a string
    * Other special format specifiers include:
        * %n - a newline: unlike println(), printf() doesn't output a newline unless you tell it to.
        * %% - a literal %.
    * - in the specifier means left-justify and pad with spaces out to the column width.
    * 0 in the specifier means pad with leading zeros out to the column width.
    * + in the specifier means indicate the number's sign with + or -.
    * (in the specifier means put negative numbers in parentheses.

const phoneNumbers = [
  '+39 05 148 4266',
  '+39 83 551 7454',
  '+39 52 243 1583',
  '+39 14 808 2276',
  '+39 32 069 5257',
  '+39 61 967 1692',
  '+39 11 239 0622',
  '+39 90 165 6265',
  '+39 33 934 0661',
  '+39 95 801 2242',
  '+39 97 045 3896',
  '+39 08 698 6577',
  '+39 80 923 4522',
  '+39 19 513 3613',
  '+39 06 738 7209',
  '+39 55 804 5241',
  '+39 47 669 8395',
  '+39 14 117 7965',
  '+39 24 647 3044',
  '+39 37 987 6227',
  '+39 16 161 9962',
  '+39 08 430 7106',
  '+39 72 008 6593',
  '+39 79 865 8458',
  '+39 66 777 8592',
  '+39 00 205 3742',
  '+39 71 700 0367',
  '+39 41 215 5267',
  '+39 22 468 0307',
  '+39 63 437 8008',
  '+39 42 392 6391',
  '+39 94 712 5869',
  '+39 47 489 6421',
  '+39 24 509 4214',
  '+39 19 672 7064',
  '+39 20 739 3649',
  '+39 49 701 4433',
  '+39 01 719 2305',
  '+39 82 753 2557',
  '+39 45 996 3064',
  '+39 36 503 0423',
  '+39 08 240 9923',
  '+39 52 464 8081',
  '+39 77 826 1360',
  '+39 84 072 1884',
  '+39 78 598 6760',
  '+39 86 627 1112',
  '+39 49 436 3441',
  '+39 14 686 4931',
  '+39 47 065 1604',
  '+39 40 990 4795',
  '+39 74 721 1278',
  '+39 48 240 9699',
  '+39 49 823 5600',
  '+39 12 180 7580',
  '+39 90 871 2100',
  '+39 33 595 8570',
  '+39 13 233 3334',
  '+39 15 264 2987',
  '+39 13 878 1993',
  '+39 62 953 2696',
  '+39 01 595 0237',
  '+39 92 259 8228',
  '+39 72 410 4715',
  '+39 94 862 8047',
  '+39 09 517 7459',
  '+39 19 919 2141',
  '+39 13 177 4383',
  '+39 75 651 4816',
  '+39 95 809 2122',
  '+39 97 711 5680',
  '+39 95 523 7723',
  '+39 35 487 7875',
  '+39 57 042 1017',
  '+39 29 971 3346',
  '+39 17 954 4792',
  '+39 06 275 9289',
  '+39 87 108 8980',
  '+39 69 300 0621',
  '+39 02 302 5999',
  '+39 79 607 2903',
  '+39 14 154 1843',
  '+39 44 332 4404',
  '+39 28 428 5600',
  '+39 10 927 9612',
  '+39 75 400 6390',
  '+39 92 020 4414',
  '+39 32 801 0886',
  '+39 36 037 5704',
  '+39 27 579 9693',
  '+39 16 643 7331',
  '+39 92 165 8315',
  '+39 60 799 0637',
  '+39 12 349 2608',
  '+39 67 736 8728',
  '+39 68 447 5487',
  '+39 01 289 1069',
  '+39 42 104 1510',
  '+39 57 491 7628',
  '+39 57 722 6949',
  '+39 50 152 9930',
  '+39 30 012 4413',
  '+39 81 968 4695',
  '+39 14 556 3973',
  '+39 26 688 8797',
  '+39 26 401 0621',
  '+39 60 054 6000',
  '+39 66 831 9810',
  '+39 23 713 7186',
  '+39 66 555 1134',
  '+39 45 658 1728',
  '+39 12 581 5580',
  '+39 61 551 5061',
  '+39 05 344 7563',
  '+39 44 121 0671',
  '+39 73 274 2258',
  '+39 66 204 7557',
  '+39 78 456 2805',
  '+39 83 655 9127',
  '+39 21 179 5470',
  '+39 62 671 8801',
  '+39 06 822 5532',
  '+39 60 865 8436',
  '+39 63 900 9923',
  '+39 84 009 7783',
  '+39 97 594 1245',
  '+39 45 384 5686',
  '+39 55 298 7175',
  '+39 45 790 1354',
  '+39 38 072 7383',
  '+39 12 431 5449',
  '+39 69 836 2490',
  '+39 08 811 1723',
  '+39 27 718 7184',
  '+39 92 557 5685',
  '+39 13 643 5858',
  '+39 57 836 7960',
  '+39 16 126 0523',
  '+39 88 141 2295',
  '+39 30 234 9410',
  '+39 75 989 5687',
  '+39 84 506 4377',
  '+39 26 370 6456',
  '+39 36 956 2847',
  '+39 71 085 8074',
  '+39 02 772 3160',
  '+39 57 815 8439',
  '+39 87 247 5592',
  '+39 46 808 7155',
  '+39 42 449 2211',
  '+39 96 284 5303',
  '+39 19 755 9974',
  '+39 24 658 1443',
  '+39 89 620 6525',
  '+39 08 903 4881',
  '+39 48 487 6246',
  '+39 08 389 1796',
  '+39 44 573 4229',
  '+39 57 713 2762',
  '+39 55 361 4329',
  '+39 45 987 8935',
  '+39 07 027 4130',
  '+39 53 088 0646',
  '+39 41 787 8993',
  '+39 40 582 5123',
  '+39 40 068 4001',
  '+39 99 892 5476',
  '+39 64 114 5050',
  '+39 69 797 8878',
  '+39 60 209 0431',
  '+39 20 101 3719',
  '+39 74 426 1391',
  '+39 82 142 2052',
  '+39 83 204 1649',
  '+39 33 945 8676',
  '+39 38 363 1350',
  '+39 73 383 3165',
  '+39 11 887 7260',
  '+39 74 000 7824',
  '+39 99 016 3784',
  '+39 49 575 9769',
  '+39 37 076 4855',
  '+39 39 767 9067',
  '+39 32 484 9210',
  '+39 74 398 5124',
  '+39 90 815 5698',
  '+39 16 186 1878',
  '+39 51 464 6165',
  '+39 54 100 0821',
  '+39 72 342 1357',
  '+39 11 278 3548',
  '+39 06 621 0055',
  '+39 82 435 5238',
  '+39 65 434 8976',
  '+39 66 229 0734',
  '+39 02 812 8579',
  '+39 89 390 6931',
  '+39 28 617 4694',
  '+39 66 847 8874',
  '+39 34 256 4540',
  '+39 47 534 7000',
  '+39 27 226 0220',
  '+39 51 572 6502',
  '+39 57 765 6534',
  '+39 88 960 1171',
  '+39 36 551 2180',
  '+39 64 994 5023',
  '+39 10 522 4761',
  '+39 63 725 4319',
  '+39 08 466 0480',
  '+39 26 972 1366',
  '+39 92 235 2436',
  '+39 23 721 6448',
  '+39 57 892 4633',
  '+39 96 247 8681',
  '+39 20 563 7016',
  '+39 47 171 4863',
  '+39 46 932 3099',
  '+39 63 713 4310',
  '+39 69 156 9939',
  '+39 15 904 7500',
  '+39 92 030 6226',
  '+39 96 628 2742',
  '+39 56 715 8084',
  '+39 58 742 7199',
  '+39 82 422 3089',
  '+39 33 183 3317',
  '+39 50 698 3708',
  '+39 40 483 2346',
  '+39 67 498 0995',
  '+39 86 564 6140',
  '+39 33 874 4328',
  '+39 72 282 5001',
  '+39 81 262 5964',
  '+39 81 799 5728',
  '+39 09 008 7990',
  '+39 53 357 2264',
  '+39 93 115 2244',
  '+39 20 403 8364',
  '+39 66 069 5626',
  '+39 20 649 2707',
  '+39 07 718 1842',
  '+39 01 461 5835',
  '+39 52 507 6141',
  '+39 59 042 3548',
  '+39 77 232 3851',
  '+39 06 329 2536',
  '+39 35 151 8841',
  '+39 89 032 8482',
  '+39 41 845 9272',
  '+39 33 218 4264',
  '+39 78 069 8939',
  '+39 33 654 3976',
  '+39 57 129 9095',
  '+39 12 378 3045',
  '+39 86 756 0682',
  '+39 87 161 3953',
  '+39 37 784 7014',
  '+39 67 967 1548',
  '+39 10 013 7815',
  '+39 33 892 0690',
  '+39 67 625 8359',
  '+39 32 485 7891',
  '+39 81 181 8386',
  '+39 58 217 1100',
  '+39 47 574 7936',
  '+39 99 986 5796',
  '+39 68 894 6584',
  '+39 16 399 1080',
  '+39 95 471 3291',
  '+39 64 560 1232',
  '+39 42 510 5753',
  '+39 66 585 4519',
  '+39 15 384 6070',
  '+39 96 922 5551',
  '+39 06 516 7068',
  '+39 82 484 0969',
  '+39 98 439 5502',
  '+39 63 249 2074',
  '+39 28 250 8706',
  '+39 49 051 3186',
  '+39 11 411 8521',
  '+39 39 474 8887',
  '+39 20 249 8002',
  '+39 37 721 8259',
  '+39 87 867 9703',
  '+39 79 110 4978',
  '+39 87 462 3592',
  '+39 69 494 0967',
  '+39 29 020 9218',
  '+39 67 278 3484',
  '+39 88 976 6766',
  '+39 02 883 1917',
  '+39 53 422 8193',
  '+39 14 249 2781',
  '+39 20 012 6751',
  '+39 73 599 7912',
  '+39 25 404 1945',
  '+39 64 380 2606',
  '+39 79 860 5102',
  '+39 47 043 3977',
  '+39 62 095 4427',
  '+39 99 976 4245',
  '+39 88 852 5298',
  '+39 27 610 4513',
  '+39 63 284 7376',
  '+39 48 004 8276',
  '+39 38 833 2805',
  '+39 33 173 7951',
  '+39 11 861 3627',
  '+39 87 883 8273',
  '+39 60 412 4301',
  '+39 40 249 8366',
  '+39 50 782 0390',
  '+39 22 061 7032',
  '+39 57 440 8917',
  '+39 97 280 0107',
  '+39 85 843 4172',
  '+39 15 089 7126',
  '+39 14 499 8277',
  '+39 88 475 0733',
  '+39 14 973 4579',
  '+39 46 617 2166',
  '+39 51 885 3837',
  '+39 83 793 6393',
  '+39 20 773 9145',
  '+39 40 578 4068',
  '+39 20 025 5429',
  '+39 39 458 6465',
  '+39 99 568 4718',
  '+39 34 656 8004',
  '+39 35 572 5689',
  '+39 74 822 5562',
  '+39 68 694 5958',
  '+39 24 208 3011',
  '+39 06 629 8367',
  '+39 26 853 7162',
  '+39 21 227 7373',
  '+39 36 501 9346',
  '+39 25 322 6348',
  '+39 70 643 8075',
  '+39 78 951 4774',
  '+39 68 212 9784',
  '+39 19 784 4736',
  '+39 51 252 1204',
  '+39 66 348 5616',
  '+39 34 487 4335',
  '+39 66 608 3727',
  '+39 02 184 1285',
  '+39 03 460 8224',
  '+39 61 946 6286',
  '+39 42 965 7192',
  '+39 38 861 0655',
  '+39 18 839 6716',
  '+39 21 113 9763',
  '+39 22 289 8116',
  '+39 99 673 2254',
  '+39 95 734 2864',
  '+39 79 500 1301',
  '+39 69 814 4530',
  '+39 37 631 2381',
  '+39 24 547 0168',
  '+39 25 366 0946',
  '+39 41 559 8943',
  '+39 58 274 2118',
  '+39 72 904 3109',
  '+39 97 649 6454',
  '+39 14 221 4032',
  '+39 37 352 2798',
  '+39 75 325 4298',
  '+39 02 226 9416',
  '+39 61 503 2354',
  '+39 78 208 2215',
  '+39 74 815 2524',
  '+39 44 896 7036',
  '+39 66 899 4379',
  '+39 78 036 0703',
  '+39 00 440 1179',
  '+39 95 163 2511',
  '+39 82 268 0632',
  '+39 42 239 3800',
  '+39 39 517 8091',
  '+39 01 234 7760',
  '+39 05 053 5820',
  '+39 47 572 6427',
  '+39 60 147 4974',
  '+39 00 131 2793',
  '+39 69 198 6700',
  '+39 56 036 1370',
  '+39 34 976 3683',
  '+39 07 066 2173',
  '+39 71 518 7054',
  '+39 15 353 6933',
  '+39 67 813 7391',
  '+39 94 342 5651',
  '+39 72 026 8059',
  '+39 58 897 3914',
  '+39 78 666 8792',
  '+39 82 948 5073',
  '+39 12 374 0719',
  '+39 08 550 9468',
  '+39 28 418 4834',
  '+39 97 388 0875',
  '+39 53 223 7555',
  '+39 97 256 9956',
  '+39 41 632 7981',
  '+39 67 923 2967',
  '+39 65 374 7911',
  '+39 48 721 2480',
  '+39 83 408 6735',
  '+39 19 019 8585',
  '+39 86 030 7636',
  '+39 04 782 8926',
  '+39 35 893 7208',
  '+39 31 298 0137',
  '+39 70 236 9952',
  '+39 31 004 1243',
  '+39 54 262 2746',
  '+39 56 790 2323',
  '+39 38 638 7832',
  '+39 78 058 6391',
  '+39 69 723 0663',
  '+39 19 877 2080',
  '+39 14 770 9778',
  '+39 41 148 8208',
  '+39 82 534 8489',
  '+39 91 301 1126',
  '+39 41 221 8144',
  '+39 78 626 5266',
  '+39 75 807 1692',
  '+39 84 725 0987',
  '+39 91 058 3073',
  '+39 49 497 1719',
  '+39 40 278 7708',
  '+39 65 698 9374',
  '+39 12 434 6659',
  '+39 70 864 3907',
  '+39 27 132 5956',
  '+39 82 100 1974',
  '+39 03 524 5426',
  '+39 82 640 6289',
  '+39 52 924 3191',
  '+39 77 240 7056',
  '+39 89 301 9301',
  '+39 55 465 9236',
  '+39 80 611 2231',
  '+39 42 556 6611',
  '+39 73 561 5521',
  '+39 33 647 0996',
  '+39 52 140 9083',
  '+39 80 759 6629',
  '+39 53 565 2605',
  '+39 52 466 3647',
  '+39 33 627 4819',
  '+39 45 763 5831',
  '+39 57 044 6680',
  '+39 32 938 6844',
  '+39 74 050 4185',
  '+39 20 898 3415',
  '+39 39 976 4661',
  '+39 52 677 5387',
  '+39 66 397 5408',
  '+39 82 285 4816',
  '+39 74 270 0176',
  '+39 51 025 4447',
  '+39 75 839 8872',
  '+39 01 186 5927',
  '+39 20 277 4859',
  '+39 66 182 3833',
  '+39 05 238 5313',
  '+39 97 743 1107',
  '+39 57 585 0112',
  '+39 99 282 0568',
  '+39 89 962 3708',
  '+39 73 571 1604',
  '+39 69 333 2728',
  '+39 75 464 1901',
  '+39 13 322 0424',
  '+39 07 085 0400',
  '+39 07 446 5883',
  '+39 73 462 6024',
  '+39 19 569 1443',
  '+39 86 278 0136',
  '+39 52 573 6255',
  '+39 26 610 5182',
  '+39 99 127 5801',
  '+39 74 399 7523',
  '+39 14 667 2673',
  '+39 13 815 9899',
  '+39 31 904 7518',
  '+39 07 635 5746',
  '+39 18 480 2908',
  '+39 55 766 3427',
  '+39 27 281 4009',
  '+39 28 197 6449',
  '+39 13 305 2234',
  '+39 26 376 3666',
  '+39 87 439 0311',
  '+39 57 376 1298',
  '+39 56 227 9025',
];

module.exports = phoneNumbers;

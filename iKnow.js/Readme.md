*** JAVASCRIPT IDOL SERVER INDEXING CLIENT ***

This Javascript page is intended to be a client for the
KMS System:
- (Autonomy, HPE, Microfocus) IDOL Server v 11.+

This client is able to create a IDX document to be indexed 
to a listening IDOL Server.

You can specify:
- IDOL Host IP
- IDOL index port
- IDOL query port (qport) in order to get the list of existing 
  KBs (databases)

and all the usual/common IDOL IDX standard fields.
Moreover, You can add as many #DREFIELDS as You need,
by using the "show/hide custom #DREFIELDs" panel

NOTICE that all custom #DREFIELDS names are prefixed
with "EXS2_" in order to be easily added to:
- ProntFields
- IndexFields
- SourceFields
- ParametricFields
- and so on...
in the IDOL Server config-file, fields' properties section

Example: */EXS2_*

A "meh, indicizza!" successful click would return the standard
IDOL INDEXID; an (connection or data-format) error would alert You

for problems, pls write to ciroppina gmail.com

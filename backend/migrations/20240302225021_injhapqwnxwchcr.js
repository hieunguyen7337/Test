'use strict';

/**
 * Migration: 20240302225021_injhapqwnxwchcr
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('svzgwmscvn', function(table) {
    table.integer('docugsgrhc');
    table.bigInteger('qguwhtkcer');
    table.json('pvsxzeppao');
    table.json('sukytwihja');
    table.json('vtbsjwtmai');
    table.integer('kkbgocrszz');
    table.integer('qmwsiuerak');
    table.string('zkztunvnfs');
    table.boolean('ufxqxrznkm');
    table.json('ltsnrgmdru');
  });
  await knex.schema.alterTable('gmwuxcxmtu', function(table) {
    table.timestamp('arcdpybxvy');
    table.boolean('ouvgmatodr');
    table.json('abpaqmcses');
    table.float('xclblbpcox');
    table.boolean('ftmbfmyoig');
    table.text('mmdgrilsji');
    table.integer('tolpxectrk');
  });
  await knex.schema.alterTable('bkqirvtbsh', function(table) {
    table.bigInteger('mttdmqleuw');
    table.integer('hepnicmtzv');
    table.json('nbeqsfwonn');
    table.bigInteger('nrmoamojwc');
    table.string('yqbrsaoijx');
    table.boolean('osbscvzpun');
    table.string('hphsdjfzys');
    table.text('xecyekmygt');
    table.text('lxhezzerxn');
  });
  await knex.schema.alterTable('wtjdnhxrlr', function(table) {
    table.float('fclqoybgqg');
    table.timestamp('pndygzsubo');
    table.json('iutgkmnnuj');
    table.timestamp('ydbctjmekx');
    table.string('angihwbxji');
    table.json('poxdiylcge');
  });
  await knex.schema.alterTable('jhprvgtiyp', function(table) {
    table.float('puacpvvqwp');
    table.timestamp('ijxwmqijhh');
    table.text('ekqvlsdpxe');
    table.float('vlmiffdiam');
    table.boolean('unpjrgtnrm');
    table.json('dewohtwzkp');
    table.float('eaozhsuqsq');
    table.text('btgxxmavzj');
  });
  await knex.schema.alterTable('kpoupaztlj', function(table) {
    table.integer('hgxklblhso');
    table.integer('tfqdxjxnrs');
    table.timestamp('beurxbczyo');
    table.boolean('hmgovaegtk');
    table.text('mmiwwczpie');
    table.json('xjfrzollmf');
    table.integer('wnivxdymba');
    table.bigInteger('nbgjjjzdgm');
    table.json('rzbbdusija');
    table.string('nctftywzmq');
  });
  await knex.schema.alterTable('uwkuvclnme', function(table) {
    table.integer('hcqngmzozd');
    table.integer('ueguktiqvb');
    table.string('vasoeijiwm');
    table.json('jdwpcaagot');
    table.boolean('vdtwrefgrj');
    table.timestamp('ltuyytbvmx');
  });
  await knex.schema.alterTable('szaenzdhsz', function(table) {
    table.boolean('hitsvlfkqj');
    table.integer('ixujqxozgf');
    table.integer('optzlrczlj');
    table.float('occsjsyjhc');
    table.integer('mtygmredzu');
    table.timestamp('oiywtlolgm');
  });
  await knex.schema.alterTable('fzpjshvzbf', function(table) {
    table.bigInteger('ecsnowsgtq');
    table.timestamp('rxxbxzcxcy');
    table.integer('jmazorflna');
  });
  await knex.schema.alterTable('hnhylbfuyh', function(table) {
    table.string('kxqkzoiyge');
    table.text('pznedphesr');
    table.json('nipjzjrrcv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};
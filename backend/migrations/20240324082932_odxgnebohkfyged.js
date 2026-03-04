'use strict';

/**
 * Migration: 20240324082932_odxgnebohkfyged
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('aebdymefml', function(table) {
    table.string('ujhabvhnnv');
    table.float('jyicirvytq');
    table.text('kzbsoyrmwi');
    table.float('obgmteztnm');
  });
  await knex.schema.alterTable('apdlzhobfu', function(table) {
    table.integer('hxdgazpctz');
    table.timestamp('xejcoudcek');
    table.string('mxtrhumbzo');
    table.json('acuphjuzxn');
    table.integer('alqpipedko');
    table.boolean('einefabzhl');
    table.boolean('zzhabggxyu');
    table.integer('zeizpxydzv');
    table.float('znjhpphdzf');
  });
  await knex.schema.alterTable('roovlkopbs', function(table) {
    table.json('kqskfmxkzw');
    table.boolean('hrdvuvdazq');
    table.boolean('mudibiqurn');
    table.text('dxidzwehvo');
    table.text('cjbpafchcv');
  });
  await knex.schema.alterTable('zcpfdjozrm', function(table) {
    table.json('vnzuytwadi');
    table.text('eaycrxwvdm');
    table.string('kqbsavovxg');
    table.float('mumiftncgy');
    table.timestamp('xtjkarxnzx');
  });
  await knex.schema.alterTable('jedvgafoxa', function(table) {
    table.bigInteger('keifvjgbwy');
    table.string('qejryngtbh');
    table.boolean('agrnjwkhij');
    table.timestamp('awgnxkdbth');
    table.text('rmewwgutna');
  });
  await knex.schema.alterTable('uosnymbbst', function(table) {
    table.string('xrwcnbdndr');
    table.integer('bgnqxaznhy');
    table.float('bdpwjmuaaq');
  });
  await knex.schema.alterTable('ikylyqavaf', function(table) {
    table.float('kzaqrobepm');
    table.text('mpmrtohnjf');
    table.text('saokbubfeu');
    table.integer('dmrvexdbmu');
    table.integer('ektsuscvrp');
    table.integer('hspdiqelpo');
    table.integer('tnrnxsyytj');
  });
  await knex.schema.alterTable('qkoiuvfmqf', function(table) {
    table.float('jyhvkxmdvh');
    table.float('hgngonjvjm');
    table.text('cknnsrnvnk');
    table.integer('sttgkdxckr');
    table.bigInteger('bcglyboqiq');
    table.integer('aofphnhaja');
    table.bigInteger('kqngmwdenv');
    table.string('fcllwtvqoo');
  });
  await knex.schema.alterTable('ezevavhfbx', function(table) {
    table.timestamp('wmhcxjprnk');
    table.text('rmhggjcjte');
    table.text('ohdnepvpsa');
    table.boolean('rcfmxqrdlm');
    table.bigInteger('hdonvcvpdl');
    table.json('nrounoaknu');
  });
  await knex.schema.alterTable('pizamqmpjc', function(table) {
    table.boolean('leigenazty');
    table.integer('nbzrfsnalc');
    table.integer('swvgofbjks');
    table.json('lxnmusbwwh');
    table.integer('ceqrjotwiu');
    table.timestamp('bthyfkjemr');
    table.bigInteger('uuocgmxdiy');
    table.timestamp('yhkzszrlwk');
  });
  await knex.schema.alterTable('chfknytuys', function(table) {
    table.float('vvvhpworhm');
    table.timestamp('oiydftbfnt');
    table.string('cyqmrfvkju');
    table.integer('yettrnxdab');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};
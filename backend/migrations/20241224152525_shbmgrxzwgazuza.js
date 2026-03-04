'use strict';

/**
 * Migration: 20241224152525_shbmgrxzwgazuza
 * Description: Undo previous migration
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nyftsmdifi', function(table) {
    table.json('yzqzcqybhx');
    table.text('ifojkhiqus');
    table.boolean('tkmucccfni');
    table.json('gcwmueujcb');
    table.timestamp('fwjtvrlikd');
    table.bigInteger('srkmzqbnhq');
  });
  await knex.schema.alterTable('fjuzgfzlqt', function(table) {
    table.string('wwalpkiawx');
    table.boolean('mcsbrshyvj');
    table.string('pyugfkkcgd');
    table.timestamp('ckfeywtudo');
    table.float('skwiekwpav');
    table.string('ifymvqaubc');
    table.boolean('ekvjvqmglt');
  });
  await knex.schema.alterTable('rtrchuldkt', function(table) {
    table.float('gwupeoykwy');
    table.string('iedmjjsdck');
    table.bigInteger('bpsygxbpgv');
    table.text('ikgnyisxwj');
    table.timestamp('jcidakctyw');
    table.bigInteger('vnkbvffuns');
    table.json('giqmyrrltz');
  });
  await knex.schema.alterTable('elyzptaslg', function(table) {
    table.float('clcdhvdwdu');
    table.boolean('zlawrhejhq');
    table.integer('obrwjnyxcu');
    table.float('rswppcuyxs');
    table.bigInteger('rsecrpjkvh');
    table.boolean('oumbfcvrzj');
  });
  await knex.schema.alterTable('whjujjpikg', function(table) {
    table.float('teskckdwaw');
    table.float('lhmhiolbkh');
    table.json('zwiotcypog');
    table.integer('xuuzzmogpk');
    table.text('rkrwwewceh');
    table.float('jmdbsjlfxz');
  });
  await knex.schema.alterTable('hizpjltyys', function(table) {
    table.boolean('gogfvhrcwi');
    table.integer('bsjpqambqi');
    table.text('dpgzrgabwy');
    table.timestamp('qafkdgpnar');
    table.json('cujbknqunk');
    table.string('wclxidwktl');
    table.boolean('eanhzllkpp');
    table.boolean('wovuujoeeg');
  });
  await knex.schema.alterTable('hzavvrcapl', function(table) {
    table.integer('iunfrrbacl');
    table.float('uwmdaezhhg');
    table.bigInteger('tdqbgpxzja');
    table.boolean('zbrgpzwzzg');
    table.bigInteger('fsrswnjkbk');
    table.bigInteger('nbxurmzeri');
    table.float('qhfettqnhy');
    table.text('itpdulfgsn');
  });
  await knex.schema.alterTable('svvfaflloj', function(table) {
    table.json('bhceusnmre');
    table.float('fnhbhowlnx');
    table.json('ikehtzekms');
    table.text('iwgozqisze');
    table.float('pvnmtbqsnp');
  });
  await knex.schema.alterTable('ilsdrkjxjg', function(table) {
    table.bigInteger('cezknfbqej');
    table.text('vffjiucwfh');
    table.boolean('bhwyvimhhw');
    table.string('msmwwmoxzf');
  });
  await knex.schema.alterTable('ojghfnerbo', function(table) {
    table.float('bfsxgooahp');
    table.timestamp('mylgfiqoqv');
    table.json('tcecklatwa');
    table.timestamp('bispgpialk');
    table.timestamp('todqcffbwt');
    table.float('surrqrduem');
    table.boolean('udavprlhmi');
  });
  await knex.schema.alterTable('vbnooacqdl', function(table) {
    table.timestamp('wgmoithaau');
    table.bigInteger('lqnohqveig');
    table.text('elcjxptdff');
    table.float('hwrofclbpt');
    table.integer('rhdyzhafif');
    table.string('xwlmrnzotw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};
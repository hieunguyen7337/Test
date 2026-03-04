'use strict';

/**
 * Migration: 20240523125317_hjdkxkmwxvfffmm
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xhaywagwlb', function(table) {
    table.string('jihqitwiif');
    table.integer('ezcwllario');
    table.bigInteger('usxoeuhdli');
  });
  await knex.schema.alterTable('kilpiiwggv', function(table) {
    table.text('jpbqwasrkw');
    table.integer('ziuumbgjev');
    table.json('feetahmjmc');
    table.float('zzxsmjgsuv');
    table.json('yhdmvyfwhd');
  });
  await knex.schema.alterTable('xspoqbybvz', function(table) {
    table.text('gnpoojmicx');
    table.text('antxaqefck');
    table.text('ndttbymykt');
    table.bigInteger('oahoyzfnsb');
    table.text('zwncokmkot');
  });
  await knex.schema.alterTable('qjisxzourm', function(table) {
    table.timestamp('agnzbpltxb');
    table.float('bzxvgrsmaz');
    table.string('pfvypdxgic');
    table.text('lzksiohgxg');
  });
  await knex.schema.alterTable('qepoxugtgl', function(table) {
    table.boolean('wrsiakfzlf');
    table.timestamp('ualzrsfrgg');
    table.string('dmotzqjerc');
    table.integer('gpcrqpmlhu');
  });
  await knex.schema.alterTable('nycykzvwxz', function(table) {
    table.json('awwpewmiiv');
    table.boolean('mzgnwypeja');
    table.bigInteger('czdiokaxmt');
    table.string('iqskuyoara');
    table.float('gadqoufgds');
    table.timestamp('zpnnmaqjdx');
    table.string('rybqsczztk');
  });
  await knex.schema.alterTable('qfmznkyrqf', function(table) {
    table.timestamp('wvurgkesyq');
    table.float('mknekfvveb');
    table.json('wnhwsvbtpx');
    table.integer('pvkxmddyvi');
  });
  await knex.schema.alterTable('jvyoltzdbm', function(table) {
    table.timestamp('fbtvxsmedg');
    table.timestamp('tfvokiccrl');
    table.string('cuogyohwhh');
    table.bigInteger('jqmopaljmi');
  });
  await knex.schema.alterTable('iehdxmqacq', function(table) {
    table.float('eucmgtlckp');
    table.string('kqdgvowswg');
    table.bigInteger('javmpvxrlw');
    table.string('swkfsfieee');
  });
  await knex.schema.alterTable('wozsyzvkaw', function(table) {
    table.integer('phlxojbzdh');
    table.bigInteger('icgkicvovi');
    table.bigInteger('sjeoaptgiw');
  });
  await knex.schema.alterTable('cclhzbdbzj', function(table) {
    table.string('eiduqraqiz');
    table.integer('gtheqgfken');
    table.timestamp('jvnhablxgm');
    table.boolean('snyufilekz');
    table.integer('vyzutbunbo');
    table.boolean('btfudqjlkx');
    table.float('hodfhnbcqu');
    table.integer('rjpzzvkudw');
    table.boolean('ssrafhdfvr');
  });
  await knex.schema.alterTable('kespepmzxo', function(table) {
    table.integer('hvxilgjrlr');
    table.timestamp('bfanowmasl');
    table.float('swpeskrseo');
    table.float('lfajkgxqow');
  });
  await knex.schema.alterTable('kgbhpvbuuo', function(table) {
    table.text('jzvwgcznzh');
    table.string('pxgcfdmueo');
    table.string('tjgeqphoox');
    table.bigInteger('rfcggmcmqv');
    table.timestamp('hqdjbgpwdz');
    table.float('sjuzdrwrxq');
  });
  await knex.schema.alterTable('utbpbydhlp', function(table) {
    table.bigInteger('sabacyfjna');
    table.float('sqwvatlkrc');
    table.bigInteger('jkrmitketr');
    table.boolean('retaefxlnb');
  });
  await knex.schema.alterTable('isdovvdczc', function(table) {
    table.json('ntsqkoiqae');
    table.json('efazrzgzro');
    table.timestamp('ayjxobymwj');
    table.string('hjwevrltmd');
    table.string('wjrdnfmgom');
    table.bigInteger('wxeuqkkihu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};
'use strict';

/**
 * Migration: 20241215222819_lrgiodppbewycya
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('houmlpplym', function(table) {
    table.boolean('jdyasnjomf');
    table.integer('ratibojgwz');
    table.bigInteger('lxduhabwsa');
    table.string('zlswqipmiz');
    table.boolean('hsodfltbvp');
  });
  await knex.schema.alterTable('vevgoqoept', function(table) {
    table.bigInteger('tlnxxsownu');
    table.timestamp('watqonspnh');
    table.string('brrmyrbefe');
    table.bigInteger('yoirwbkiha');
    table.bigInteger('quekscvcai');
  });
  await knex.schema.alterTable('vghzrtyrtr', function(table) {
    table.bigInteger('iobuxdrqpx');
    table.float('pciurbjryp');
    table.string('znawghumuu');
    table.float('lklymeznqk');
    table.bigInteger('aediugaqda');
    table.float('adwcbffmrv');
    table.integer('pthfpbyctx');
    table.bigInteger('nhldwrttvk');
    table.bigInteger('uftiqdcaul');
    table.float('askeunjiwa');
  });
  await knex.schema.alterTable('ktzguktbai', function(table) {
    table.string('ufgcckvqvl');
    table.float('iqbwhjclmd');
    table.integer('prdzzjcdnc');
    table.timestamp('ilmuhfembj');
    table.text('fowbomhbxp');
    table.json('cvgjvtemna');
    table.float('lizgseqfos');
    table.json('tdyukzxlgj');
    table.string('rbgcyqidiv');
    table.timestamp('vvdgzyetes');
  });
  await knex.schema.alterTable('uuzufwggfj', function(table) {
    table.text('zdzhucceiv');
    table.text('elwiiuyyeo');
    table.float('fybahwhxip');
    table.json('iakcvduqeq');
  });
  await knex.schema.alterTable('nqqxthfbfv', function(table) {
    table.integer('lxkzgjidlq');
    table.timestamp('tmztjvnfop');
    table.string('dkwrshooip');
  });
  await knex.schema.alterTable('eubamamokp', function(table) {
    table.json('zhhxoqxttn');
    table.boolean('rsbwjvbdlf');
    table.boolean('qolxojqaks');
    table.boolean('yeunzoviba');
    table.string('ycpvuhduif');
    table.timestamp('ilmrtseqck');
  });
  await knex.schema.alterTable('snaloolxbl', function(table) {
    table.text('ikylhrsxkc');
    table.float('zcjxghbrmk');
    table.string('dbhvzsmpnw');
    table.integer('efqaockimh');
    table.boolean('lsrvndvqil');
  });
  await knex.schema.alterTable('nyvlsiioat', function(table) {
    table.integer('gwetyfafrq');
    table.bigInteger('gkrlalsvax');
    table.text('emlkdzzrkl');
    table.string('pqzdezuhhf');
    table.bigInteger('zaztykoqgb');
    table.boolean('cwtywsjtul');
    table.boolean('remegwrafe');
    table.timestamp('giovkyztgv');
  });
  await knex.schema.alterTable('tmcibqfrvl', function(table) {
    table.json('nvdaoythdt');
    table.boolean('wjeonclxmq');
    table.float('dstjszekqh');
    table.json('bqkcrsbmth');
    table.bigInteger('umiltlgipp');
  });
  await knex.schema.alterTable('mwrlhahqzz', function(table) {
    table.integer('zijucymbkg');
    table.float('xtcyvpydtb');
    table.boolean('ogblghrtuq');
    table.string('cryyvdzhop');
    table.bigInteger('meqwjmwkmq');
    table.string('iixbyezdsm');
  });
  await knex.schema.alterTable('swmorsdbym', function(table) {
    table.integer('slsdrutxsl');
    table.integer('tofgxbcafm');
    table.bigInteger('liiwnawywe');
    table.string('bxjiimgtcb');
  });
  await knex.schema.alterTable('phxdmqvtfp', function(table) {
    table.json('gdjupyukjj');
    table.float('ksklzumfsg');
    table.json('pznmzpwrhy');
    table.boolean('xgebgiqxlh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};